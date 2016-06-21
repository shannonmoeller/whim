/**
 * # `my-foo` Element
 *
 *     <my-foo>
 *     </my-foo>
 */

import { MyElement } from '../my-element/element';

/**
 * @class MyFooElement
 * @extends HTMLElement
 */
export class MyFooElement extends MyElement {
	/**
	 * @method createdCallback
	 * @callback
	 */
	createdCallback() {
		console.log('created', this);

		super.createdCallback();
	}

	/**
	 * @method attachedCallback
	 * @callback
	 */
	attachedCallback() {
		console.log('attached', this);
	}

	/**
	 * @method detachedCallback
	 * @callback
	 */
	detachedCallback() {
		console.log('detached', this);
	}

	/**
	 * @method attributeChangedCallback
	 * @param {String} name
	 * @param {String} newValue
	 * @param {String} oldValue
	 * @callback
	 */
	attributeChangedCallback(name, newValue, oldValue) {
		console.log('attribute changed', this, name, newValue, oldValue);
	}
}
