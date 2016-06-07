/**
 * # Make SVG
 *
 *     foo.svg ━┓
 *     bar.svg ━┫
 *              ┗━ svgo
 *                 ┗━ svgstore ━┓
 *                              ┗━ sprites.svg
 */

import { file, read, write } from 'spiff';

import Svgo from 'svgo';
import svgstore from 'svgstore';

export default async function svg() {
	const optimizer = new Svgo();

	async function concatSprites(store, fileObj) {
		const svgObj = await new Promise(cb =>
			optimizer.optimize(fileObj.contents, cb)
		);

		return store
			.add(fileObj.stem, svgObj.data);
	}

	function createSpriteSheet(store) {
		return file({
			path: 'assets/svg/sprites.svg',
			contents: store.toString(),
		});
	}

	return read('src/asset*/svg/**/*.svg')
		.reduce(concatSprites, svgstore())
		.then(createSpriteSheet)
		.then(write('dist'));
}
