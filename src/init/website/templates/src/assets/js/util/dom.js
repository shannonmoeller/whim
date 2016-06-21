/**
 * # DOM Utilities
 */

import formSerialize from 'form-serialize';
import morphdom from 'morphdom';

const SELECTOR_FORM_FIELDS = 'input, keygen, select, textarea';

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
	const elements = element.querySelectorAll(SELECTOR_FORM_FIELDS);

	return formSerialize({ elements }, {
		disabled: true,
		hash: true
	});
}

/**
 * Set the innerHTML of an element with live DOM patching.
 *
 * @method setInnerHTML
 * @param {HTMLElement} element
 * @param {String} contents
 * @param {Object} options
 * @return {HTMLElement}
 */
export function setInnerHTML(element, contents, options = {}) {
    const fragment = document.createElement('div');

    // share store, if any
    fragment._store = element.store;

    fragment.innerHTML = contents;

    element = morphdom(element, fragment, {
        ...options,

        childrenOnly: true,
        getNodeKey(el) {
            if (!el.getAttribute) {
                return el.id;
            }

            return el.id
                || el.getAttribute('key')
                || el.getAttribute('src');
        }
    });

    fragment.innerHTML = '';

    element.dispatchEvent(new CustomEvent('innerhtml', {
        bubbles: true
    }));

    return element;
}
