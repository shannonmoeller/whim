/**
 * # `my-home` Element
 *
 *     <my-home>
 *     </my-home>
 */

import { register } from '../../scripts/util/dom';

/**
 * @class MyHomeElement
 */
export default register('my-home', HTMLElement, {
	/**
	 * @method createdCallback
	 * @callback
	 */
	createdCallback() {
		console.log('my-home', this);
	}
});
