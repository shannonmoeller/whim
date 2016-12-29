'use strict';

module.exports = {
	processors: [
		'stylelint-processor-html',
	],

	rules: {
		/**
		 * Color
		 */

		// 'color-hex-case': 'lower',
		// 'color-hex-length': 'long',
		'color-named': 'never',
		'color-no-hex': true,
		// 'color-no-invalid-hex': true,

		/**
		 * Font family
		 */

		'font-family-name-quotes': 'always-where-recommended',

		/**
		 * Font weight
		 */

		'font-weight-notation': 'numeric',

		/**
		 * Function
		 */

		// 'function-blacklist': [],
		'function-calc-no-unspaced-operator': true,
		'function-comma-newline-after': 'always-multi-line',
		'function-comma-newline-before': 'never-multi-line',
		'function-comma-space-after': 'always-single-line',
		'function-comma-space-before': 'never',
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-max-empty-lines': 0,
		'function-name-case': 'lower',
		'function-parentheses-newline-inside': 'always-multi-line',
		'function-parentheses-space-inside': 'never-single-line',
		// 'function-url-data-uris': null,
		'function-url-quotes': 'always',
		// 'function-whitelist': [],
		'function-whitespace-after': 'always',

		/**
		 * Number
		 */

		'length-zero-no-unit': true,
		'number-leading-zero': 'always',
		'number-max-precision': 4,
		'number-no-trailing-zeros': true,

		/**
		 * String
		 */

		'string-no-newline': true,
		'string-quotes': 'single',

		/**
		 * Time
		 */

		'time-no-imperceptible': true,

		// Unit
		// 'unit-blacklist': [],
		'unit-case': 'lower',
		'unit-no-unknown': true,
		// 'unit-whitelist': [],

		// Value
		'value-no-vendor-prefix': true,

		// Value list
		'value-keyword-case': 'lower',
		'value-list-comma-newline-after': 'always-multi-line',
		'value-list-comma-newline-before': 'never-multi-line',
		'value-list-comma-space-after': 'always-single-line',
		'value-list-comma-space-before': 'never',

		// Custom property
		// 'custom-property-no-outside-root': null,
		'custom-property-pattern': /[a-z]([a-z0-9_-]*[a-z0-9])?/,

		// Shorthand property

		// disabled because it throws
		// 'shorthand-property-no-redundant-values': true,

		// Property
		// 'property-blacklist': [],
		'property-case': 'lower',
		'property-no-vendor-prefix': true,
		// 'property-unit-blacklist': [],
		// 'property-unit-whitelist': [],
		// 'property-value-blacklist': [],
		// 'property-value-whitelist': [],
		// 'property-whitelist': [],

		// Declaration
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-colon-newline-after': 'always-multi-line',
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'declaration-no-important': true,

		// Declaration block
		'declaration-block-no-duplicate-properties': [true, { ignore: ['consecutive-duplicates'] }],
		'declaration-block-no-ignored-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		// 'declaration-block-properties-order': [],
		'declaration-block-semicolon-newline-after': 'always',
		'declaration-block-semicolon-newline-before': 'never-multi-line',
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-semicolon-space-before': 'never',
		// 'declaration-block-single-line-max-declarations': null,
		'declaration-block-trailing-semicolon': 'always',

		// Block
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-newline-before': 'always',
		// 'block-closing-brace-space-after': null,
		// 'block-closing-brace-space-before': null,
		'block-no-empty': true,
		'block-no-single-line': true,
		'block-opening-brace-newline-after': 'always',
		// 'block-opening-brace-newline-before': null,
		// 'block-opening-brace-space-after': null,
		'block-opening-brace-space-before': 'always',

		// Selector

		// disabled because it throws
		// 'selector-attribute-brackets-space-inside': null,

		// 'selector-class-pattern': null,
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		// 'selector-id-pattern': null,
		'selector-max-specificity': '0,2,2',
		// 'selector-no-attribute': null,
		// 'selector-no-combinator': null,
		'selector-no-id': true,
		// 'selector-no-type': null,
		// 'selector-no-universal': null,
		// 'selector-no-vendor-prefix': null,
		'selector-pseudo-class-case': 'lower',

		// disabled because it throws
		// 'selector-pseudo-class-parentheses-space-inside': null,

		'selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': 'double',
		'selector-root-no-composition': true,
		'selector-type-case': 'lower',

		// Selector list
		'selector-list-comma-newline-after': 'always',
		// 'selector-list-comma-newline-before': null,
		// 'selector-list-comma-space-after': null,
		'selector-list-comma-space-before': 'never',

		// Root rule
		'root-no-standard-properties': true,

		// Rule
		'rule-nested-empty-line-before': 'never',
		'rule-non-nested-empty-line-before': 'always',

		// Media feature
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		// 'media-feature-name-no-vendor-prefix': null,
		'media-feature-no-missing-punctuation': true,
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',

		// Custom media
		'custom-media-pattern': /[a-z]([a-z0-9_-]*[a-z0-9])?/,

		// Media query
		'media-feature-parentheses-space-inside': 'never',

		// Media query list
		'media-query-list-comma-newline-after': 'always',
		// 'media-query-list-comma-newline-before': null,
		// 'media-query-list-comma-space-after': null,
		'media-query-list-comma-space-before': 'never',

		// At rule
		'at-rule-empty-line-before': ['always', {
			except: ['blockless-group', 'first-nested'],
		}],
		'at-rule-name-case': 'lower',
		// 'at-rule-no-vendor-prefix': null,
		'at-rule-semicolon-newline-after': 'always',

		// Comment
		'comment-empty-line-before': ['always', {
			except: ['first-nested'],
			ignore: ['between-comments', 'stylelint-commands'],
		}],
		'comment-whitespace-inside': 'always',

		// disabled because it throws
		// 'comment-word-blacklist': [],

		// General / Sheet
		'indentation': 'tab',
		'max-empty-lines': 1,
		'max-line-length': 120,
		'max-nesting-depth': 2,
		'no-browser-hacks': true,
		'no-descending-specificity': true,
		'no-duplicate-selectors': true,
		'no-eol-whitespace': true,
		// 'no-indistinguishable-colors': null,
		'no-invalid-double-slash-comments': true,
		'no-missing-end-of-source-newline': true,
		// 'no-unknown-animations': null,
		// 'no-unsupported-browser-features': null,
		'stylelint-disable-reason': 'always-before',
	},
};
