/**
 * # Init
 */

import ygor from 'ygor';
import { lazyLoad, showUsage } from '../util';

const usage = `
  whim init <subtask> [options]

  Subtasks

    module
    website

  Options

    -h, --help       Display this help.
    -v, --verbose    Display runtime info.
`;

export default function init(options = {}) {
	showUsage(options, usage);

	return ygor()
		.task('common', lazyLoad('./common'))
		.task('module', lazyLoad('./module'))
		.task('website', lazyLoad('./website'));
}
