'use strict';

module.exports = {
	parser: 'babel-eslint',

	env: {
		browser: true,
		node: true,
	},

	globals: {
		Promise: true,
	},

	rules: {
		/**
		 * Possible Errors
		 */

		'comma-dangle': [1, 'always-multiline'],
		'no-cond-assign': 1,
		'no-console': 0,
		'no-constant-condition': 1,
		'no-control-regex': 1,
		'no-debugger': 1,
		'no-dupe-args': 1,
		'no-dupe-keys': 1,
		'no-duplicate-case': 1,
		'no-empty': 1,
		'no-empty-character-class': 1,
		'no-ex-assign': 1,
		'no-extra-boolean-cast': 1,
		'no-extra-parens': [1, 'all', { nestedBinaryExpressions: false }],
		'no-extra-semi': 1,
		'no-func-assign': 1,
		'no-inner-declarations': 1,
		'no-invalid-regexp': 1,
		'no-irregular-whitespace': 1,
		'no-negated-in-lhs': 1,
		'no-obj-calls': 1,
		'no-regex-spaces': 1,
		'no-sparse-arrays': 1,
		'no-unexpected-multiline': 1,
		'no-unreachable': 1,
		'use-isnan': 1,
		'valid-jsdoc': 0,
		'valid-typeof': 1,

		/**
		 * Best Practices
		 */

		'accessor-pairs': 1,
		'array-callback-return': 1,
		'block-scoped-var': 1,
		'complexity': [1, 16],
		'consistent-return': 1,
		'curly': 1,
		'default-case': 1,
		'dot-location': [1, 'property'],
		'dot-notation': [1, { allowKeywords: true }],
		'eqeqeq': [1, 'allow-null'],
		'guard-for-in': 1,
		'no-alert': 1,
		'no-caller': 1,
		'no-case-declarations': 1,
		'no-div-regex': 1,
		'no-else-return': 1,
		'no-empty-function': 1,
		'no-empty-pattern': 1,
		'no-eq-null': 0,
		'no-eval': 1,
		'no-extend-native': 1,
		'no-extra-bind': 1,
		'no-extra-label': 1,
		'no-fallthrough': 1,
		'no-floating-decimal': 1,
		'no-implicit-coercion': 1,
		'no-implicit-globals': 1,
		'no-implied-eval': 1,
		'no-invalid-this': 1,
		'no-iterator': 1,
		'no-labels': 1,
		'no-lone-blocks': 1,
		'no-loop-func': 1,
		'no-magic-numbers': 0,
		'no-multi-spaces': 1,
		'no-multi-str': 1,
		'no-native-reassign': 1,
		'no-new': 1,
		'no-new-func': 1,
		'no-new-wrappers': 1,
		'no-octal': 1,
		'no-octal-escape': 1,
		'no-param-reassign': 1,
		'no-proto': 1,
		'no-redeclare': 1,
		'no-return-assign': [1, 'always'],
		'no-script-url': 1,
		'no-self-assign': 1,
		'no-self-compare': 1,
		'no-sequences': 1,
		'no-throw-literal': 1,
		'no-unmodified-loop-condition': 1,
		'no-unused-expressions': 1,
		'no-unused-labels': 1,
		'no-useless-call': 1,
		'no-useless-concat': 1,
		'no-useless-escape': 1,
		'no-void': 1,
		'no-warning-comments': 1,
		'no-with': 1,
		'radix': 1,
		'vars-on-top': 1,
		'wrap-iife': [1, 'inside'],
		'yoda': 1,

		/**
		 * Strict
		 */

		'strict': 0,

		/**
		 * Variables
		 */

		'init-declarations': 0,
		'no-catch-shadow': 1,
		'no-delete-var': 1,
		'no-label-var': 1,
		'no-restricted-globals': [1, 'event'],
		'no-shadow': 1,
		'no-shadow-restricted-names': 1,
		'no-undef': 1,
		'no-undef-init': 1,
		'no-undefined': 0,
		'no-unused-vars': 1,
		'no-use-before-define': 1,

		/**
		 * CommonJS
		 */

		'callback-return': 0,
		'global-require': 0,
		'handle-callback-err': 1,
		'no-mixed-requires': [1, { grouping: true, allowCall: true }],
		'no-new-require': 1,
		'no-path-concat': 1,
		'no-process-env': 1,
		'no-process-exit': 1,
		'no-restricted-modules': 0,
		'no-sync': 0,

		/**
		 * Stylistic Issues
		 */

		'array-bracket-spacing': [1, 'never'],
		'block-spacing': 1,
		'brace-style': [1, 'stroustrup'],
		'camelcase': [1, { properties: 'always' }],
		'comma-spacing': [1, { before: false, after: true }],
		'comma-style': [1, 'last'],
		'computed-property-spacing': [1, 'never'],
		'consistent-this': 1,
		'eol-last': 1,
		'func-names': 0,
		'func-style': 0,
		'id-blacklist': 1,
		'id-length': 0,
		'id-match': 1,
		'indent': [1, 'tab', { SwitchCase: 1 }],
		'jsx-quotes': 0,
		'key-spacing': [1, { beforeColon: false, afterColon: true }],
		'keyword-spacing': 1,
		'linebreak-style': [1, 'unix'],
		'lines-around-comment': [1, {
			beforeBlockComment: true,
			allowBlockStart: true,
			allowObjectStart: true,
			allowArrayStart: true,
		}],
		'max-depth': 1,
		'max-len': [1, 120],
		'max-nested-callbacks': [1, 4],
		'max-params': 1,
		'max-statements': 1,
		'max-statements-per-line': 1,
		'new-cap': 0,
		'new-parens': 1,
		'newline-after-var': 1,
		'newline-before-return': 1,
		'newline-per-chained-call': 1,
		'no-array-constructor': 1,
		'no-bitwise': 1,
		'no-continue': 1,
		'no-inline-comments': 1,
		'no-lonely-if': 1,
		'no-mixed-spaces-and-tabs': 1,
		'no-multiple-empty-lines': [1, { max: 1 }],
		'no-negated-condition': 1,
		'no-nested-ternary': 1,
		'no-new-object': 1,
		'no-plusplus': 1,
		'no-restricted-syntax': [2, 'WithStatement'],
		'no-spaced-func': 1,
		'no-ternary': 0,
		'no-trailing-spaces': 1,
		'no-underscore-dangle': 1,
		'no-unneeded-ternary': 1,
		'no-whitespace-before-property': 1,
		'object-curly-spacing': [1, 'always'],
		'one-var': [1, 'never'],
		'one-var-declaration-per-line': 1,
		'operator-assignment': [1, 'always'],
		'operator-linebreak': [1, 'before'],
		'padded-blocks': [1, 'never'],
		'quote-props': [1, 'consistent-as-needed'],
		'quotes': [1, 'single', { allowTemplateLiterals: true }],
		'require-jsdoc': 0,
		'semi': [1, 'always'],
		'semi-spacing': [1, { before: false, after: true }],
		'sort-imports': 0,
		'sort-vars': 1,
		'space-before-blocks': [1, 'always'],
		'space-before-function-paren': [1, { anonymous: 'always', named: 'never' }],
		'space-in-parens': [1, 'never'],
		'space-infix-ops': 1,
		'space-unary-ops': 1,
		'spaced-comment': [1, 'always', { markers: ['!'] }],
		'wrap-regex': 1,

		/**
		 * ES6
		 */

		'arrow-body-style': 0,
		'arrow-parens': 0,
		'arrow-spacing': 0,
		'constructor-super': 0,
		'generator-star-spacing': 0,
		'no-class-assign': 0,
		'no-confusing-arrow': 0,
		'no-const-assign': 0,
		'no-dupe-class-members': 0,
		'no-duplicate-imports': 0,
		'no-new-symbol': 0,
		'no-restricted-imports': 0,
		'no-this-before-super': 0,
		'no-useless-constructor': 0,
		'no-var': 0,
		'object-shorthand': 0,
		'prefer-arrow-callback': 0,
		'prefer-const': 0,
		'prefer-reflect': 0,
		'prefer-rest-params': 0,
		'prefer-spread': 0,
		'prefer-template': 0,
		'require-yield': 0,
		'template-curly-spacing': 0,
		'yield-star-spacing': 0,
	},
};