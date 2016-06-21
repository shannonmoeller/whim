/**
 * # `my-element` Element
 *
 *     <my-element>
 *     </my-element>
 */

// This makes ES2015 class syntax work with HTMLElement in IE.
function _HTMLElement() {}
_HTMLElement.prototype = HTMLElement.prototype;

/**
 * @class MyElement
 * @extends HTMLElement
 */
export class MyElement extends _HTMLElement {
    /**
     * ## Lifecycle
     */

    /**
     * @method createdCallback
     * @callback
     */
    createdCallback() {
        this.render();
    }

    /**
     * ## Accessors
     */

    /**
     * @property {Store} store
     */
    get store() {
        let element = this;

        while (element) {
            const { _store } = element;

            if (_store) {
                return _store;
            }

            element = element.parentElement;
        }

        return undefined;
    }
    set store(store) {
        this._store = store;

        return this;
    }

    /**
     * ## Methods
     */

    /**
     * @method render
     * @chainable
     */
    render() {
        // overridable stub

        return this;
    }

    /**
     * ## Event Handlers
     */
}
