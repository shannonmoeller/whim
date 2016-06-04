/**
 * # Lint All
 */

import css from './css';
import js from './js';

export default function all(options = {}) {
	return Promise.all([
		css({
			...options,
			_: options.css || []
		}),
		js({
			...options,
			_: options.js || []
		}),
	]);
}
