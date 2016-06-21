/**
 * # Site Scripts
 */

import 'babel-polyfill';
import 'document-register-element';
import 'dom4';
import 'whatwg-fetch';
import keyboardeventKey from 'keyboardevent-key-polyfill';
import svg4everybody from 'svg4everybody';

import { MyFooElement } from  '../elements/my-foo/element';

/**
 * ## Feature Detection
 */

const docEl = document.documentElement;

docEl.classList.remove('no-js');
docEl.classList.add('js');

/**
 * ## Polyfills
 */

keyboardeventKey.polyfill();
svg4everybody();

/**
 * ## Elements
 */

document.registerElement('my-foo', MyFooElement);
