/**
 * # Make All
 */

import clean from './clean';
import copy from './copy';
import css from './css';
import html from './html';
import js from './js';
import svg from './svg';

export default async function all(options) {
	await clean(options);

	await Promise.all([
		copy(options),
		css(options),
		html(options),
		js(options),
		svg(options),
	]);
}
