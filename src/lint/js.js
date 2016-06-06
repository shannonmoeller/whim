/**
 * # Lint JS
 */

import { read } from 'spiff';
import { normalizeGlobs } from '../util';
import { exclusionGlobs } from '../../config/whim';

import { CLIEngine } from 'eslint';
import jsConfig from '../../config/eslint';
import jsLegacyConfig from '../../config/eslint-legacy';

const jsGlobs = [
	'**/*.js',
	'!**/coverage/**',
	'!**/dist/**',
	'!**/fixture{s,}/**',
	'!**/vendor/**',
];

export default function js(options) {
	const jsLint = new CLIEngine({ baseConfig: jsConfig });
	const jsLegacyLint = new CLIEngine({ baseConfig: jsLegacyConfig });
	const jsLegacyRx = /^\s*(['"]use strict['"]|#!)/m;
	const jsFormatter = CLIEngine.getFormatter('stylish');

	const globs = normalizeGlobs(options._, jsGlobs, exclusionGlobs);

	return read(globs)
		.map(file => {
			// delete this when node 4 is eol
			const linter = jsLegacyRx.test(file.contents)
				? jsLegacyLint
				: jsLint;

			return linter.executeOnText(
				file.contents,
				file.path
			);
		})
		.reduce((x, { results }) => x.concat(results), [])
		.then(x => console.log(jsFormatter(x)));
}
