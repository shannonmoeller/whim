/**
 * # Init
 */

import ygor from 'ygor';
import { lazyLoad } from '../util';

export default ygor()
	.task('module', lazyLoad('./module'))
	.task('website', lazyLoad('./website'));
