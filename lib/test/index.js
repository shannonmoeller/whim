import { find } from 'spiff';
import { spawnSync } from 'child_process';
import { normalizeGlobs } from '../util';

const coverallsBin = require.resolve('.bin/coveralls');
const nycBin = require.resolve('.bin/nyc');
const tapDiffBin = require.resolve('.bin/tap-diff');
const whimBin = require.resolve('../cli');

const inclusionGlobs = [
	'test{s,}{/**/*,}.js',
	'!**/fixture{s,}/**',
	'!**/helper{s,}/**',
];

const exclusionGlobs = [
	'!**/*.min.js',
	'!**/bower_components/**',
	'!**/jspm_packages/**',
	'!**/node_modules/**',
];

export default function test(options = {}) {
	// nyc -r html whim test-node [args]
	const nyc = spawnSync(nycBin, ['-r', 'html', whimBin, 'test-node', ...options._], {
		stdio: [0, null, 2],
	});

	// | tap-diff
	spawnSync(tapDiffBin, [], {
		stdio: [null, 1, 2],
		input: nyc.stdout,
	});

	// && nyc report -t text
	spawnSync(nycBin, ['report', '-r', 'text'], {
		stdio: [null, 1, 2],
	});
}

export function node(options) {
	const globs = normalizeGlobs(options._, inclusionGlobs, exclusionGlobs);

	return find(globs)
		.map(file => require(file.path));
}

export function browser(options) {
	console.log('hi from browser', options);
}

export function report(options = {}) {
	// nyc -r text-lcov [args]
	const coveralls = spawnSync(nycBin, ['-r', 'text-lcov', ...options._], {
		stdio: [0, null, 2],
	});

	// | coveralls
	spawnSync(coverallsBin, [], {
		stdio: [null, 1, 2],
		input: coveralls.stdout,
	});
}
