/**
 * # Make Statics
 *
 *     foo.woff ━┓
 *     bar.png  ━┫
 *               ┗━ ━┓
 *                   ┣━ foo.woff
 *                   ┗━ bar.png
 */

import { read, write } from 'spiff';

export default async function statics() {
	return read('src/{.*,*.txt,assets/media/**/*.*}')
		.map(write('dist'));
}
