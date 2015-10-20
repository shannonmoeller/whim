import cli from './util/cli';
import env from './util/env';
import plug from './util/plug';
import del from 'del';
import ftp from 'vinyl-ftp';
import gulp from 'gulp';

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

gulp.task('dest:deploy', function () {
	let remote = ftp.create(env.FTP);

	return gulp
		.src(paths.deploy, { base: paths.dest })
		.pipe(remote.newer(env.FTP.dir))
		.pipe(remote.dest(env.FTP.dir));
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
