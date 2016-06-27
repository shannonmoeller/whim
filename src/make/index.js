/**
 * # Make
 */

import ygor from 'ygor';
import { chdirRoot, lazyLoad, showUsage } from '../util';

const usage = `
  whim make [subtask] [options]

  Subtasks

    all (default)
    clean
    copy
    css
    html
    js
    server
    svg

  Options

    -h, --help       Display this help.
    -v, --verbose    Display runtime info.
`;

export default function make(options = {}) {
	showUsage(options, usage);
	chdirRoot();

	return ygor()
		.task('default', lazyLoad('./all'))
		.task('all', lazyLoad('./all'))
		.task('clean', lazyLoad('./clean'))
		.task('copy', lazyLoad('./copy'))
		.task('css', lazyLoad('./css'))
		.task('html', lazyLoad('./html'))
		.task('js', lazyLoad('./js'))
		.task('server', lazyLoad('./server'))
		.task('svg', lazyLoad('./svg'));
}
