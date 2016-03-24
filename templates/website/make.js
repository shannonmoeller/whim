import {
	copy,
	createWriteStream,
	ensureFile,
	outputFile,
	readFile,
	remove
} from 'fs-promise';

import browserSync from 'browser-sync';
import chalk from 'chalk';
import globby from 'globby';
import path from 'path';
import ygor from 'ygor';

import handlebars from 'handlebars';
import handlebarsLayouts from 'handlebars-layouts';
import handlebarsWax from 'handlebars-wax';
import frontMatter from 'front-matter';

import postcss from 'postcss';
import postcssApply from 'postcss-apply';
import postcssImport from 'postcss-import';
import postcssNano from 'cssnano';
import postcssNext from 'postcss-cssnext';
import postcssUrl from 'postcss-cssnext';

import browserify from 'browserify-incremental';
import babelify from 'babelify';
import errorify from 'errorify';
import exorcist from 'exorcist';<% if (splitBundles) { %>
import factorBundle from 'factor-bundle';<% } %>

import Svgo from 'svgo';
import svgstore from 'svgstore';

import { debounce, timer } from './src/assets/scripts/util/function';
import { find } from './src/assets/scripts/util/fs';

/**
 * # Clean
 *
 * Deletes existing files so we don't have old stuff hanging around.
 */
async function clean() {
	await remove('dist');
}

/**
 * # Markup
 *
 *     foo.html ━┓
 *     bar.html ━┫
 *               ┗━ front-matter
 *                  ┗━ handlebars-wax ━┓
 *                                     ┣━ foo.html
 *                                     ┗━ bar.html
 */
async function markup() {
	const { srcFiles, destFiles } = await find('src/**/*.html');
	const wax = handlebarsWax(handlebars.create(), { bustCache: true })
		.helpers(handlebarsLayouts)
		.partials('src/assets/partials/**/*.hbs');

	await Promise.all(
		srcFiles.map(async (src, i) => {
			const dest = destFiles[i];
			const content = frontMatter(await readFile(src, 'utf8'));
			const markup = wax.compile(content.body)(content.attributes);

			return outputFile(dest, markup);
		})
	);
}

/**
 * # Styles
 *
 *     foo.css ━┓
 *     bar.css ━┫
 *              ┗━ postcss
 *                 ┗━ import
 *                    ┗━ url
 *                       ┗━ apply
 *                          ┗━ cssnext
 *                             ┗━ cssnano ━┓
 *                                         ┣━ foo.css
 *                                         ┣━ foo.css.map
 *                                         ┣━ bar.css
 *                                         ┗━ bar.css.map
 */
async function styles() {
	const { srcFiles, destFiles } = await find('src/assets/styles/*.css');
	const pipeline = postcss([
		postcssImport(),
		postcssApply(),
		postcssUrl(),
		postcssNext({ warnForDuplicates: false }),
		postcssNano({ autoprefixer: false })
	]);

	await Promise.all(
		srcFiles.map(async (src, i) => {
			const dest = destFiles[i];
			const content = await readFile(src, 'utf8');

			return pipeline
				.process(content, {
					from: src,
					to: dest,
					map: { inline: false }
				})
				.then(result => Promise.all([
					outputFile(dest, result.css),
					outputFile(dest + '.map', result.map)
				]));
		})
	);
}

<% if (splitBundles) { %>/**
 * # Scripts
 *
 *     foo.js ━┓
 *     bar.js ━┫
 *             ┗━ browserify-incremental
 *                ┗━ babelify
 *                   ┗━ factor-bundle
 *                      ┗━ exorcist ━┓
 *                                   ┣━ common.js
 *                                   ┣━ common.js.map
 *                                   ┣━ foo.js
 *                                   ┣━ foo.js.map
 *                                   ┣━ bar.js
 *                                   ┗━ bar.js.map
 */
async function scripts() {
	const { srcFiles, destFiles } = await find('src/assets/scripts/*.js');
	const cacheFile = '.cache/browserify.json';
	const destCommon = 'dist/assets/scripts/common.js';
	const destRoot = path.relative('dist/assets/scripts', '.');

	await ensureFile(cacheFile);

	await Promise.all(destFiles.map(dest => ensureFile(dest)));

	await new Promise((resolve, reject) => {
		browserify({ cacheFile, debug: true })
			.add(srcFiles)
			.plugin(errorify)
			.plugin(factorBundle, { outputs: destFiles })
			.transform(babelify, { presets: ['es2015', 'stage-2'] })
			.bundle()
			.pipe(createWriteStream(destCommon))
			.on('finish', resolve)
			.on('error', reject);
	});

	await Promise.all(
		destFiles.concat(destCommon).map(async dest => {
			await new Promise((resolve, reject) => {
				createReadStream(dest)
					.pipe(exorcist(dest + '.map', null, destRoot))
					.pipe(concat(function (result) {
						outputFile(dest, result).then(resolve, reject);
					}));
			});
		})
	);
}<% } else { %>/**
 * # Scripts
 *
 *     foo.js ━┓
 *             ┗━ browserify-incremental
 *                ┗━ babelify
 *                   ┗━ exorcist ━┓
 *                                ┣━ foo.js
 *                                ┗━ foo.js.map
 */
async function scripts() {
	const { srcFiles, destFiles } = await find('src/assets/scripts/*.js');
	const cacheFile = '.cache/browserify.json';
	const destRoot = path.relative('dist/assets/scripts', '.');

	await ensureFile(cacheFile);

	await Promise.all(
		srcFiles.map(async (src, i) => {
			const dest = destFiles[i];

			await ensureFile(dest);

			return new Promise((resolve, reject) => {
				browserify({ cacheFile, debug: true })
					.add(src)
					.plugin(errorify)
					.transform(babelify, { presets: ['es2015', 'stage-2'] })
					.bundle()
					.pipe(exorcist(dest + '.map', null, destRoot))
					.pipe(createWriteStream(dest))
					.on('finish', resolve)
					.on('error', reject);
			});
		})
	);
}<% } %>

/**
 * # Graphics
 *
 *     foo.svg ━┓
 *     bar.svg ━┫
 *              ┗━ svgo
 *                 ┗━ svgstore ━┓
 *                              ┗━ sprites.svg
 */
async function graphics() {
	const srcFiles = await globby('src/assets/images/*.svg');
	const destFile = 'dist/assets/images/sprites.svg';
	const sprites = svgstore();
	const svgo = new Svgo();

	await Promise.all(
		srcFiles.map(async src => {
			const id = path.parse(src).name;
			const content = await readFile(src, 'utf8');
			const svg = await new Promise(cb => svgo.optimize(content, cb));

			return sprites.add(id, svg.data);
		})
	);

	await outputFile(destFile, sprites);
}

/**
 * # Statics
 *
 *     foo.woff ━┓
 *     bar.png  ━┫
 *               ┗━ copy ━┓
 *                        ┣━ foo.woff
 *                        ┗━ bar.png
 */
async function statics() {
	const { srcFiles, destFiles } = await find([
		'src/assets/fonts/**/*.*',
		'src/assets/images/**/*.!(svg)'
	]);

	await Promise.all(
		srcFiles.map((src, i) => copy(src, destFiles[i]))
	);
}

/**
 * # Build
 *
 * Rebuilds everything from scratch.
 */
async function build() {
	const clock = timer(chalk.green(`build`));

	await clean();

	await Promise.all([
		markup(),
		styles(),
		scripts(),
		graphics(),
		statics()
	]);

	clock();
}

/**
 * # Development Server
 *
 * Serves files, watches for changes, rebuilds, and reloads.
 */
async function dev() {
	const browser = browserSync.create();

	const initOptions = {
		server: ['dist', 'coverage'],
		open: false
	};

	const watchOptions = {
		ignored: /[\/\\]\./,
		ignoreInitial: true
	};

	async function run(fn) {
		const clock = timer(chalk.green(`${fn.name}`));

		await fn()
			.then(clock)
			.then(browser.reload)
			.catch(ygor.error);
	}

	async function watch(pattern, fn) {
		browser.watch(
			pattern,
			watchOptions,
			debounce(() => run(fn))
		);
	}

	async function init() {
		await build();

		watch('src/**/*.{hbs,html}', markup);
		watch('src/**/*.css', styles);
		watch('src/**/*.js', scripts);
	}

	browser.init(initOptions, init);
}

ygor
	.task('clean', clean)
	.task('markup', markup)
	.task('styles', styles)
	.task('scripts', scripts)
	.task('graphics', graphics)
	.task('statics', statics)
	.task('default', build)
	.task('dev', dev);
