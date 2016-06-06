/**
 * # Make
 */

import ygor from 'ygor';
import { chdirRoot, lazyLoad } from '../util';

export default function make() {
	chdirRoot();

	return ygor()
		.task('default', lazyLoad('./all'))
		.task('clean', lazyLoad('./clean'))
		.task('css', lazyLoad('./css'))
		.task('html', lazyLoad('./html'))
		.task('js', lazyLoad('./js'))
		.task('server', lazyLoad('./server'))
		.task('statics', lazyLoad('./statics'))
		.task('svg', lazyLoad('./svg'));
}
