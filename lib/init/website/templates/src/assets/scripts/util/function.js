/**
 * # Function Utilities
 */

/**
 * @method debounce
 * @param {Function} fn
 * @param {Number=} delay
 * @return {Function}
 */
export function debounce(fn, delay = 400) {
	return function debounced() {
		if (debounced.timeout) {
			clearTimeout(debounced.timeout);
		}

		debounced.timeout = setTimeout(fn, delay);
	};
}

/**
 * @method timer
 * @param {String} name
 * @return {Function}
 */
export function timer(name) {
	console.log(name + '...');
	console.time(name);

	return () => console.timeEnd(name);
}
