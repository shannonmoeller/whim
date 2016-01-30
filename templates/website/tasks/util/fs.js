import cli from './cli';
import env from './env';
import gulp from 'gulp';
import plug from './plug';
import through from 'through2';
import duplex from 'duplexer';

const base = env.DIR_SRC;

function errorHandler(err) {
	console.log(err);
	this.emit('end');
}

let fs = {
	src(files) {
		var src = gulp.src(files, { base });

		if (cli.watch) {
			src = src.pipe(plug.plumber({ errorHandler }));
		}

		if (cli.maps) {
			src = src.pipe(plug.sourcemaps.init());
		}

		return src;
	},

	dest(dir) {
		var src = through.obj(),
			dest = src;

		if (cli.maps) {
			dest = dest.pipe(plug.sourcemaps.write());
		}

		return duplex(src, dest.pipe(gulp.dest(dir)));
	}
};

export default fs;
