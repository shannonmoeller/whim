module.exports = {
	extends: 'stylelint-config-standard',
	processors: ['stylelint-processor-html'],
	rules: {
		'at-rule-no-vendor-prefix': true,
		'color-named': 'never',
		'color-no-hex': true,
		'font-family-name-quotes': 'always-unless-keyword',
		'font-weight-notation': 'numeric',
		'function-url-quotes': 'always',
		indentation: 'tab',
		'max-line-length': 120,
		'media-feature-name-no-vendor-prefix': true,
		'no-descending-specificity': true,
		'no-duplicate-selectors': true,
		'property-no-vendor-prefix': true,
		'selector-attribute-quotes': 'always',
		'selector-max-id': 0,
		'selector-no-vendor-prefix': true,
		'selector-type-no-unknown': null,
		'string-quotes': 'single',
		'value-no-vendor-prefix': true,
	},
};
