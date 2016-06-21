/**
 * # Make Server
 *
 *     dist/ ━┓
 *            ┗━ browser-sync ━┓
 *                             ┗━ browser
 */

import browserSync from 'browser-sync';
import { debounce, normalizeGlobs } from '../util';

const serverGlobs = [
	'dist',
];

export default async function server(options, ygor) {
	const globs = normalizeGlobs(options._, serverGlobs);
	const browser = browserSync.create();
	const reload = debounce(browser.reload);
	const watchOptions = {
		ignored: /[\\\/]\./,
		ignoreInitial: true,
	};

	function run(task) {
		return ygor
			.run(task)
			.then(reload);
	}

	function watch(pattern, task) {
		browser.watch(
			pattern,
			watchOptions,
			debounce(() => run(task))
		);
	}

	browser.init({
		ui: false,
		open: false,
		notify: false,
		server: globs,
		...options,
	});

	watch(`src/**/*.{hbs,html}`, 'html');
	watch(`src/**/*.css`, 'css');
	watch(`src/**/*.js`, 'js');

	await run('default');
}
