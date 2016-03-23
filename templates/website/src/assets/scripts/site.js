/**
 * # Site-Wide Scripts
 */

/**
 * ## Polyfills
 */

import 'babel-polyfill';
import 'document-register-element';
import 'dom-shims';
import 'whatwg-fetch';
import keyboardeventKey from 'keyboardevent-key-polyfill';
import svg4everybody from 'svg4everybody';

keyboardeventKey.polyfill();
svg4everybody();

/**
 * ## Feature Detection
 */

document.documentElement.classList.remove('no-js');
