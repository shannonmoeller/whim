/**
 * # Utilities
 */

import lookUp from 'look-up';
import parentModule from 'parent-module';
import compileTemplate from 'lodash.template';
import path from 'path';

export function chdirRoot() {
	const root = lookUp('package.json', {
		cwd: process.cwd(),
	});

	if (!root) {
		console.error('Could not find `package.json`.');
		process.exit(1);
	}

	process.chdir(path.dirname(root));
}

export function debounce(fn, delay = 400) {
	return function debounced() {
		if (debounced.timeout) {
			clearTimeout(debounced.timeout);
		}

		debounced.timeout = setTimeout(fn, delay);
	};
}

export function lazyLoad(mod) {
	const parent = parentModule();

	return function load(...args) {
		const dirname = path.dirname(parent);
		const filepath = path.resolve(dirname, mod);
		const modpath = require.resolve(filepath);
		const val = require(modpath);

		if (val && !val.then && typeof val === 'function') {
			return val(...args);
		}

		return val;
	};
}

export function normalizeGlobs(globs, inclusionGlobs, exclusionGlobs) {
	const localGlobs = [].concat(globs || []);

	if (!localGlobs.length) {
		localGlobs.push(...inclusionGlobs);
	}

	localGlobs.push(...exclusionGlobs);

	return localGlobs;
}

export function render(str, obj) {
	return compileTemplate(str)(obj);
}
