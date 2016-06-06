/**
 * # Whim
 */

import ygor from 'ygor';
import { lazyLoad } from './util';

export default function whim() {
	return ygor()
		.task('init', lazyLoad('./init'))
		.task('lint', lazyLoad('./lint'))
		.task('make', lazyLoad('./make'))
		.task('test', lazyLoad('./test'));
}
