import cli from './util/cli';
import env from './util/env';
import fs from './util/fs';
import plug from './util/plug';
import cssBrowserReporter from 'postcss-browser-reporter';
import cssImport from 'postcss-import';
import cssMixins from 'postcss-mixins';
import cssNano from 'cssnano';
import cssNested from 'postcss-nested';
import cssNext from 'postcss-cssnext';
import cssReporter from 'postcss-reporter';
import cssUrl from 'postcss-url';
import gulp from 'gulp';

let isWatching = false,
	paths = {
		src: env.getSrcPath('assets/styles/*.css'),
		all: env.getSrcPath('assets/{elements,styles}/**'),
		dest: env.getDestPath()
	};

gulp.task('styles:build', function () {
	if (!isWatching && cli.watch) {
		isWatching = true;

		gulp.watch(paths.all, ['styles:build']);
	}

	return fs
		.src(paths.src)
		.pipe(plug.postcss([
			cssImport(),
			cssUrl(),
			cssNext(),
			cssMixins(),
			cssNested(),
			cssNano(),
			cssReporter(),
			cssBrowserReporter()
		]))
		.pipe(fs.dest(paths.dest));
});
