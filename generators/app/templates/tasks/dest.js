import cli from './util/cli';
import env from './util/env';
import plug from './util/plug';
import gulp from 'gulp';
import del from 'del';

let isServing = false,
	isWatching = false,
	paths = {
		dest: env.getDestPath(),
		deploy: env.getDestPath('**/{*,.*}'),
		watch: env.getDestPath('**')
	};

gulp.task('dest:clean', function () {
	del.sync(paths.dest);
});

gulp.task('dest:serve', function () {
	if (!isServing) {
		isServing = true;

		plug.connect
			.server({
				livereload: cli.watch,
				port: cli.port,
				root: paths.dest
			});
	}

	if (!isWatching && cli.watch) {
		isWatching = true;

		plug
			.watch(paths.watch)
			.pipe(plug.connect.reload());
	}
});
