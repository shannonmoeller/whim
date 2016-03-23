/**
 * # `my-blog` Element
 *
 *     <my-blog>
 *     </my-blog>
 */

import { registerElement } from '../../scripts/util/dom';

/**
 * @class MyBlogElement
 * @extends HTMLElement
 */
export default registerElement('my-blog', HTMLElement, {
	/**
	 * @method createdCallback
	 * @callback
	 */
	createdCallback() {
		console.log('created', this);
	},

	/**
	 * @method attachedCallback
	 * @callback
	 */
	attachedCallback() {
		console.log('attached', this);
	},

	/**
	 * @method detachedCallback
	 * @callback
	 */
	detachedCallback() {
		console.log('detached', this);
	},

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
});
