/**
 * # `base-element` Element
 *
 * The base element which all other custom elements extend. Enables the use of
 * class syntax when creating and extending elements as HTMLElement cannot be
 * directly subclassed in IE. Should not be used in markup.
 */

const ELEMENT_TAGNAME = 'base-element';

/**
 * @class BaseElement
 * @extends HTMLElement
 */
var BaseElementPrototype = Object.create(HTMLElement.prototype);

export default document.registerElement(ELEMENT_TAGNAME, {
	prototype: BaseElementPrototype
});
