import cli from './util/cli';
import env from './util/env';
import fs from './util/fs';
import plug from './util/plug';
import gulp from 'gulp';

let isWatching = false,
	paths = {
		src: [
			env.getSrcPath('**/*.html'),
			'!**/assets/**'
		],
		data: [
			'./tasks/data/**/*.js',
			'./tasks/util/{cli,env,pkg}.js'
		],
		helpers: env.getNpmPath('handlebars-layouts/index.js'),
		partials: './src/assets/partials/**/*.hbs',
		dest: env.getDestPath()
	};

gulp.task('markup:build', function () {
	if (!isWatching && cli.watch) {
		isWatching = true;

		gulp.watch(paths.src, ['markup:build']);
		gulp.watch(paths.data, ['markup:build']);
		gulp.watch(paths.helpers, ['markup:build']);
		gulp.watch(paths.partials, ['markup:build']);
	}

	return fs
		.src(paths.src)
		.pipe(plug.frontMatter({
			property: 'meta'
		}))
		.pipe(plug.hb({
			bustCache: cli.watch,
			debug: cli.debug,
			data: paths.data,
			helpers: paths.helpers,
			partials: paths.partials
		}))
		.pipe(plug.prettify({
			/* eslint-disable camelcase */
			extra_liners: [],
			indent_inner_html: false,
			indent_char: '\t',
			indent_size: 1,
			max_preserve_newlines: 1,
			preserve_newlines: true,
			wrap_line_length: 999999
			/* eslint-enable camelcase */
		}))
		.pipe(fs.dest(paths.dest));
});
