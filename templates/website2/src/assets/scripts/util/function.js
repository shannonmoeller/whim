export function debounce(fn, delay = 400) {
	return function debounced() {
		if (debounced.timeout) {
			clearTimeout(debounced.timeout);
		}

		debounced.timeout = setTimeout(fn, delay);
	};
}
