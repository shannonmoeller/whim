/**
 * # Test Report
 */

import { spawnSync } from 'child_process';

export default async function report(options) {
	const coverallsBin = require.resolve('.bin/coveralls');
	const nycBin = require.resolve('.bin/nyc');

	// nyc -r text-lcov [args]
	const coveralls = spawnSync(nycBin, ['report', '-r', 'text-lcov', ...options._], {
		stdio: [0, null, 2],
	});

	// | coveralls
	spawnSync(coverallsBin, [], {
		stdio: [null, 1, 2],
		input: coveralls.stdout,
	});
}
