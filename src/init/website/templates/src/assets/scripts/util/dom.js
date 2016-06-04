/**
 * # DOM Utilities
 */

import formSerialize from 'form-serialize';
import morphdom from 'morphdom';

const SELECTOR_FORM_FIELD = 'input, keygen, select, textarea';

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
	const elements = element.querySelectorAll(SELECTOR_FORM_FIELD);

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
 * @param {HTMLElement} element
 * @param {String|HTMLElement|DocumentFragment} contents
 * @param {Object} options
 * @return {HTMLElement}
 */
export function setInnerHTML(element, contents, options = {}) {
	const fragment = document.createElement('div');

	if (!contents || typeof contents === 'string') {
		fragment.innerHTML = contents;
	}
	else {
		fragment.appendChild(contents);
	}

	return morphdom(element, fragment, {
		...options,
		childrenOnly: true
	});
}
