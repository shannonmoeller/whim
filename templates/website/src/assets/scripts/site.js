/**
 * # Site-Wide Scripts
 */

/**
 * ## Polyfills
 */

import 'dom-shims';
import 'document-register-element';
import svg4everybody from 'svg4everybody';

svg4everybody();

/**
 * ## Feature Detection
 */

document.documentElement.classList.remove('no-js');
