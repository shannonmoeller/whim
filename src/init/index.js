/**
 * # Init
 */

import ygor from 'ygor';
import { lazyLoad } from '../util';

export default function init() {
	return ygor()
		.task('common', lazyLoad('./common'))
		.task('module', lazyLoad('./module'))
		.task('website', lazyLoad('./website'));
}
