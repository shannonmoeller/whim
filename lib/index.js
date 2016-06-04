/**
 * # Lib
 */

import ygor from 'ygor';
import { lazyLoad } from './util';

export default ygor()
	.task('init', lazyLoad('./init'))
	.task('lint', lazyLoad('./lint'))
	.task('make', lazyLoad('./make'))
	.task('serve', lazyLoad('./serve'))
	.task('test', lazyLoad('./test'));
