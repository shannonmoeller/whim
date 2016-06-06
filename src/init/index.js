/**
 * # Init
 */

import ygor from 'ygor';
import { lazyLoad } from '../util';

export default ygor()
	.task('common', lazyLoad('./common'))
	.task('module', lazyLoad('./module'))
	.task('website', lazyLoad('./website'));
