import cli from './util/cli';
import env from './util/env';
import fs from './util/fs';
import plug from './util/plug';
import gulp from 'gulp';
import jspm from 'jspm';

let isWatching = false,
	paths = {
		src: env.getSrcPath('assets/{elements,scripts}/**'),
		lint: [
			'gulpfile.babel.js',
			'tasks/**/*.js',
			env.getSrcPath('assets/{elements,scripts}/**/*.js'),
			'!' + env.getSrcPath('assets/scripts/config.js')
		],
		main: 'scripts/main',
		dest: env.getDestPath('assets/scripts/main.js')
	};

gulp.task('scripts:build', function () {
	if (!isWatching && cli.watch) {
		isWatching = true;

		gulp.watch(paths.src, ['scripts:build']);
	}

	return jspm.bundleSFX(paths.main, paths.dest, {
		minify: cli.env === 'prod',
		sourceMaps: cli.maps && 'inline'
	});
});

gulp.task('scripts:lint', function () {
	if (!isWatching && cli.watch) {
		isWatching = true;

		gulp.watch(paths.lint, ['scripts:lint']);
	}

	return fs
		.src(paths.lint)
		.pipe(plug.eslint())
		.pipe(plug.eslint.format());
});
