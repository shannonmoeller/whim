/**
 * # Test
 */

import ygor from 'ygor';
import { chdirRoot, lazyLoad, showUsage } from '../util';

const usage = `
  whim test [subtask] [options]

  Subtasks

    all (default)
    browser
    node
    report

  Options

    -h, --help       Display this help.
    -v, --verbose    Display runtime info.
`;

export default function test(options = {}) {
	showUsage(options, usage);
	chdirRoot();

	return ygor()
		.task('default', lazyLoad('./all'))
		.task('all', lazyLoad('./all'))
		.task('browser', lazyLoad('./browser'))
		.task('node', lazyLoad('./node'))
		.task('report', lazyLoad('./report'));
}
