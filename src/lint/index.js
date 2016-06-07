/**
 * # Lint
 */

import ygor from 'ygor';
import { lazyLoad, showUsage } from '../util';

const usage = `
  whim lint [subtask] [options]

  Subtasks

    all (default)
    css
    js

  Options

    -h, --help       Display this help.
    -v, --verbose    Display runtime info.
`;

export default function lint(options = {}) {
	showUsage(options, usage);

	return ygor()
		.task('default', lazyLoad('./all'))
		.task('all', lazyLoad('./all'))
		.task('css', lazyLoad('./css'))
		.task('js', lazyLoad('./js'));
}
