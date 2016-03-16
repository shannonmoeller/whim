/**
 * # `my-blog` Element
 *
 *     <my-blog>
 *     </my-blog>
 */

import {register} from '../../scripts/util/dom';

/**
 * @class MyBlogElement
 */
export default register('my-blog', HTMLElement, {
	/**
	 * @method createdCallback
	 * @callback
	 */
	createdCallback() {
		console.log('my-blog', this);
	}
});
