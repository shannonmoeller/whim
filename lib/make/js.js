/**
 * # Make JS
 *
 *     foo.js ━┓
 *     bar.js ━┫
 *             ┗━ browserify-incremental
 *                ┗━ babelify
 *                   ┗━ errorify ━┓
 *                                ┣━ foo.js
 *                                ┣━ foo.js.map
 *                                ┣━ bar.js
 *                                ┗━ bar.js.map
 */

import { read, write } from 'spiff';

import browserify from 'browserify-incremental';

export default async function scripts(options = {}) {
	const maps = options.m || options.maps;

	async function transpile(fileObj) {
		const results = [];
		const bundler = browserify(fileObj.path, {
			plugin: ['errorify'],
			transform: ['babelify'],
			debug: maps,
		});

		await new Promise((resolve, reject) => {
			bundler
				.bundle()
				.on('data', chunk => results.push(chunk))
				.on('finish', resolve)
				.on('error', reject);
		});

		fileObj.contents = Buffer.concat(results);

		return fileObj;
	}

	return read('src/asset*/scripts/*.js')
		.map(transpile)
		.map(write('dist', {
			sourcemap: maps,
		}));
}
