module.exports = {
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'module',
	},
	plugins: ['eslint-plugin-html'],
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	rules: {
		// Enable customized.
		'arrow-spacing': ['error', { after: true, before: true }],
		'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
		'comma-dangle': ['error', 'always-multiline'],
		'dot-location': ['error', 'property'],
		'func-names': ['error', 'as-needed'],
		'func-style': ['error', 'declaration'],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'one-var': ['error', 'never'],
		'quote-props': ['error', 'consistent-as-needed'],
		quotes: ['error', 'single'],
		'space-before-function-paren': ['error', { named: 'never' }],

		// Enable defaults.
		'accessor-pairs': 'error',
		'array-bracket-spacing': 'error',
		'array-callback-return': 'error',
		'arrow-body-style': 'error',
		'arrow-parens': ['error', 'always'],
		'block-scoped-var': 'error',
		'block-spacing': 'error',
		'callback-return': 'error',
		'class-methods-use-this': 'error',
		'comma-spacing': 'error',
		'comma-style': 'error',
		complexity: 'error',
		'computed-property-spacing': 'error',
		curly: 'error',
		'default-case': 'error',
		'dot-notation': 'error',
		'eol-last': 'error',
		'func-call-spacing': 'error',
		'func-name-matching': 'error',
		'generator-star-spacing': 'error',
		'guard-for-in': 'error',
		'id-blacklist': 'error',
		'id-match': 'error',
		'jsx-quotes': 'error',
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'linebreak-style': 'error',
		'lines-around-directive': 'error',
		'max-depth': 'error',
		'max-nested-callbacks': 'error',
		'multiline-ternary': 'error',
		'new-parens': 'error',
		'newline-before-return': 'error',
		'no-alert': 'error',
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-catch-shadow': 'error',
		'no-confusing-arrow': 'error',
		'no-div-regex': 'error',
		'no-duplicate-imports': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'error',
		'no-eval': 'error',
		'no-extra-label': 'error',
		'no-floating-decimal': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-invalid-this': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-mixed-operators': 'error',
		'no-mixed-requires': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': 'error',
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-require': 'error',
		'no-new-wrappers': 'error',
		'no-octal-escape': 'error',
		'no-path-concat': 'error',
		'no-process-exit': 'error',
		'no-proto': 'error',
		'no-restricted-globals': 'error',
		'no-restricted-imports': 'error',
		'no-restricted-modules': 'error',
		'no-restricted-properties': 'error',
		'no-restricted-syntax': 'error',
		'no-return-assign': 'error',
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow-restricted-names': 'error',
		'no-spaced-func': 'error',
		'no-template-curly-in-string': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unused-expressions': 'error',
		'no-use-before-define': 'error',
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-warning-comments': 'warn',
		'no-whitespace-before-property': 'error',
		'no-with': 'error',
		'object-property-newline': 'error',
		'object-shorthand': 'error',
		'operator-assignment': 'error',
		'operator-linebreak': 'error',
		'prefer-const': 'error',
		'prefer-numeric-literals': 'error',
		radix: 'error',
		'rest-spread-spacing': 'error',
		semi: 'error',
		'semi-spacing': 'error',
		'space-before-blocks': 'error',
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': 'error',
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'unicode-bom': 'error',
		'wrap-iife': 'error',
		'yield-star-spacing': 'error',
		yoda: 'error',

		// Disable recommended.
		'no-console': 'off',
	},
};
