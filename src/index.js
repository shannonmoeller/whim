/**
 * # Whim
 */

import ygor from 'ygor';
import { lazyLoad, showUsage, showVersion } from './util';

const usage = `
  whim [options]

  Options

    -h, --help      Display this help.
    -v, --version   Display version number.

  ────────────

  whim <task> [subtask] [options]

  Tasks

    init            Code generator.
    lint            Code linter.
    make            Code builder.
    test            Code tester.

  Options

    -h, --help      Display task help.
    -v, --verbose   Display runtime info.
`;

export default function whim(options = {}) {
	showUsage(options, usage);
	showVersion(options);

	return ygor()
		.task('init', lazyLoad('./init'))
		.task('lint', lazyLoad('./lint'))
		.task('make', lazyLoad('./make'))
		.task('test', lazyLoad('./test'));
}
