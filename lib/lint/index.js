import { read } from 'spiff';
import { normalizeGlobs } from '../util';

import cssLint from 'stylelint';
import cssFormatter from 'stylelint/dist/formatters/stringFormatter';
import cssConfig from '../../config/stylelint';

import { CLIEngine } from 'eslint';
import jsConfig from '../../config/eslint';
import jsLegacyConfig from '../../config/eslint-legacy';

const jsLint = new CLIEngine({ baseConfig: jsConfig });
const jsLegacyLint = new CLIEngine({ baseConfig: jsLegacyConfig });
const jsLegacyRx = /^\s*(['"]use strict['"]|#!)/m;
const jsFormatter = CLIEngine.getFormatter('stylish');

const cssGlobs = [
	'**/*.css',
	'!**/coverage/**',
	'!**/dist/**',
	'!**/fixture{s,}/**',
	'!**/vendor/**',
];

const jsGlobs = [
	'**/*.js',
	'!**/coverage/**',
	'!**/dist/**',
	'!**/fixture{s,}/**',
	'!**/vendor/**',
];

const exclusionGlobs = [
	'!**/*.min.{css,js}',
	'!**/bower_components/**',
	'!**/jspm_packages/**',
	'!**/node_modules/**',
];

export async function css(options = {}) {
	const globs = normalizeGlobs(options.css, cssGlobs, exclusionGlobs);

	return read(globs)
		.map(file => cssLint.lint({
			config: cssConfig,
			code: file.contents,
			codeFilename: file.path,
		}))
		.reduce((x, { results }) => x.concat(results), [])
		.then(x => console.log(cssFormatter(x)));
}

export async function js(options = {}) {
	const globs = normalizeGlobs(options.js, jsGlobs, exclusionGlobs);

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

export default async function lint(options = {}) {
	return Promise.all([
		css(options),
		js(options),
	]);
}
