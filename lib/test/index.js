/**
 * # Test
 */

import ygor from 'ygor';
import { chdirRoot, lazyLoad } from '../util';

chdirRoot();

export default ygor()
	.task('default', lazyLoad('./all'))
	.task('browser', lazyLoad('./browser'))
	.task('node', lazyLoad('./node'))
	.task('report', lazyLoad('./report'));
