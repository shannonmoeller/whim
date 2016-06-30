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

import Remarkable from 'Remarkable';
import highlight from 'highlight.js';
import toc from 'toc';

function markdown(options) {
	const { fn, hash } = options;
	const md = new Remarkable({
		html: true,

		highlight(code) {
			return highlight.highlightAuto(code).value;
		},

		...hash,
	});

	return toc.process(md.render(fn(this)), hash);
}

export default async function html() {
	const hb = handlebars.create();
	const waxOptions = {
		bustCache: true,
	};

	const wax = handlebarsWax(hb, waxOptions)
		.helpers(handlebarsLayouts)
		.helpers({ markdown })
		.partials('src/assets/partials/**/*.hbs')
		.partials('src/assets/{css,js}/**/*.hbs')
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
