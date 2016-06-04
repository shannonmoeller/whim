/**
 * # Lint
 */

import ygor from 'ygor';
import { lazyLoad } from '../util';

export default ygor()
	.task('default', lazyLoad('./all'))
	.task('css', lazyLoad('./css'))
	.task('js', lazyLoad('./js'));
