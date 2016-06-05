/**
 * # Make CSS
 *
 *     foo.css ━┓
 *     bar.css ━┫
 *              ┗━ postcss
 *                 ┗━ import
 *                    ┗━ apply
 *                       ┗━ url
 *                          ┗━ cssnext
 *                             ┗━ cssnano ━┓
 *                                         ┣━ foo.css
 *                                         ┣━ foo.css.map
 *                                         ┣━ bar.css
 *                                         ┗━ bar.css.map
 */

import { read, write } from 'spiff';
import path from 'path';

import postcss from 'postcss';
import postcssApply from 'postcss-apply';
import postcssImport from 'postcss-import';
import postcssNano from 'cssnano';
import postcssNext from 'postcss-cssnext';
import postcssUrl from 'postcss-url';

export default async function css(options = {}) {
	const maps = options.m || options.maps;
	const bundler = postcss([
		postcssImport({
			path: 'src',
		}),
		postcssApply(),
		postcssUrl(),
		postcssNext({
			warnForDuplicates: false,
			browsers: [
				'last 2 versions',
				'ie >= 9',
			],
		}),
		postcssNano({
			autoprefixer: false,
		}),
	]);

	async function transpile(fileObj) {
		const results = await bundler.process(fileObj.contents, {
			from: path.join('src', fileObj.relative),
			to: path.join('dist', fileObj.relative),
			map: maps,
		});

		fileObj.contents = results.css;

		return fileObj;
	}

	return read('src/asset*/css/*.css')
		.map(transpile)
		.map(write('dist', {
			sourcemap: maps,
		}));
}
