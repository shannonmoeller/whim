import 'document-register-element';

export function register(tagName, parent, child) {
	return document.registerElement(tagName, {
		prototype: Object.assign(Object.create(parent.prototype), child)
	});
}
