/**
 * # Lint CSS
 */

import { read } from 'spiff';
import { normalizeGlobs } from '../util';
import { exclusionGlobs } from '../../config/whim';

import cssLint from 'stylelint';
import cssFormatter from 'stylelint/dist/formatters/stringFormatter';
import cssConfig from '../../config/stylelint';

const cssGlobs = [
	'**/*.css',
	'!**/coverage/**',
	'!**/dist/**',
	'!**/fixture{s,}/**',
	'!**/vendor/**',
];

export default function css(options = {}) {
	const globs = normalizeGlobs(options._, cssGlobs, exclusionGlobs);

	return read(globs)
		.map(file => cssLint.lint({
			config: cssConfig,
			code: file.contents,
			codeFilename: file.path,
		}))
		.reduce((x, { results }) => x.concat(results), [])
		.then(x => console.log(cssFormatter(x)));
}
