/**
 * # Make All
 */

import clean from './clean';
import html from './html';
import css from './css';
import js from './js';
import svg from './svg';
import statics from './statics';

export default async function all(options) {
	await clean(options);

	await Promise.all([
		html(options),
		css(options),
		js(options),
		svg(options),
		statics(options),
	]);
}
