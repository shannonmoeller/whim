/**
 * # DOM Utilities
 */

import morphdom from 'morphdom';

export function getTarget(element, event, selector) {
    var target = event.target.closest(selector);

    if (target && element.contains(target)) {
        return target;
    }
}

export function innerHTML(fromElement, toElement, options = {}) {
	options.childrenOnly = true;

	if (typeof toElement === 'string') {
		const fragment = document.createElement('div');

		fragment.innerHTML = toElement;

		toElement = fragment;
	}

	return morphdom(fromElement, toElement, options);
}

export function register(tagName, parent, child) {
	return document.registerElement(tagName, {
		prototype: Object.assign(
			Object.create(parent.prototype),
			child
		)
	});
}
