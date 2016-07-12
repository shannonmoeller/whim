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

import md from 'markdown-it';
import classy from 'markdown-it-classy';
import high from 'highlight.js';
import table from 'toc';

function markdown({ fn, hash }) {
	const options = {
		html: true,
		xhtmlOut: true,
		highlight: code => high
			.highlightAuto(code)
			.value,

		...hash,
	};

	return md(options)
		.use(classy)
		.render(fn(this));
}

function toc({ fn, hash }) {
	return table.process(fn(this), hash);
}

export default async function html() {
	const hb = handlebars.create();
	const waxOptions = {
		bustCache: true,
	};

	const wax = handlebarsWax(hb, waxOptions)
		.helpers(handlebarsLayouts)
		.helpers({ markdown, toc })
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
