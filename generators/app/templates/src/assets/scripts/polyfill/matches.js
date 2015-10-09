/**
 * # Matches Polyfill
 *
 * Normalizes the method name for the matches method. Safe to do as only the
 * name is different. Functionality is consistent.
 */

var proto = HTMLElement.prototype;

if (!proto.matches) {
	proto.matches = proto.matchesSelector
		|| proto.webkitMatchesSelector
		|| proto.mozMatchesSelector
		|| proto.msMatchesSelector
		|| proto.oMatchesSelector;
}
