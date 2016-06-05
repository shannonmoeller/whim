/**
 * # Make HTML
 *
 *     foo.html ━┓
 *     bar.html ━┫
 *               ┗━ front-matter
 *                  ┗━ handlebars-wax ━┓
 *                                     ┣━ foo.html
 *                                     ┗━ bar.html
 */

import { read, write } from 'spiff';

import handlebars from 'handlebars';
import handlebarsLayouts from 'handlebars-layouts';
import handlebarsWax from 'handlebars-wax';
import frontMatter from 'front-matter';

export default async function html() {
	const hb = handlebars.create();
	const waxOptions = {
		bustCache: true,
	};

	const wax = handlebarsWax(hb, waxOptions)
		.helpers(handlebarsLayouts)
		.partials('src/assets/partials/**/*.hbs')
		.partials('src/assets/style*/**/*.hbs')
		.partials('src/assets/script*/**/*.hbs')
		.data('src/assets/data/**/*.js{,on}')
		.data('package.json');

	function transpile(fileObj) {
		const content = frontMatter(fileObj.contents);
		const template = wax.compile(content.body);

		fileObj.contents = template(content.attributes);

		return fileObj;
	}

	return read(['src/**/*.html', '!**/assets/**'])
		.map(transpile)
		.map(write('dist'));
}
