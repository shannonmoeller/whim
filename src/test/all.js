/**
 * # Test All
 */

import { spawnSync } from 'child_process';

export default async function all(options) {
	const nycBin = require.resolve('.bin/nyc');
	const tapDiffBin = require.resolve('.bin/tap-diff');
	const whimBin = require.resolve('../../bin/whim');

	// nyc -r html whim test node [args]
	const nyc = spawnSync(nycBin, ['-r', 'html', whimBin, 'test', 'node', ...options._], {
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
