/**
 * # DOM Utilities
 */

import formSerialize from 'form-serialize';
import morphdom from 'morphdom';

/**
 * Determines an event target based on a CSS selector.
 *
 * @method getTarget
 * @param {HTMLElement} element
 * @param {Event} event
 * @param {String} selector
 * @return {HTMLElement|null}
 */
export function getTarget(element, event, selector) {
	var target = event.target.closest(selector);

	if (target && element.contains(target)) {
		return target;
	}

	return null;
}

/**
 * @method getValues
 * @param {HTMLElement} element
 * @return {Object}
 */
export function getValues(element) {
	const elements = element.querySelectorAll('input, keygen, select, textarea');

	return formSerialize({ elements }, {
		disabled: true,
		hash: true
	});
}

/**
 * Convenience wrapper for registering a new DOM element.
 *
 * @method registerElement
 * @param {String} tagName
 * @param {HTMLElement} parent
 * @param {Object} child
 * @return {HTMLElement}
 */
export function registerElement(tagName, parent, child) {
	return document.registerElement(tagName, {
		prototype: Object.assign(
			Object.create(parent.prototype),
			child
		)
	});
}

/**
 * Set the innerHTML of an element with live DOM patching.
 *
 * @method setInnerHTML
 * @param {HTMLElement} fromElement
 * @param {HTMLElement|String} toElement
 * @param {Object} options
 * @return {HTMLElement}
 */
export function setInnerHTML(fromElement, toElement, options = {}) {
	options.childrenOnly = true;

	if (typeof toElement === 'string') {
		const fragment = document.createElement('div');

		fragment.innerHTML = toElement;

		toElement = fragment;
	}

	return morphdom(fromElement, toElement, options);
}
