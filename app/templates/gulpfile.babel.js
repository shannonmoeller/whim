import gulp from 'gulp';
import requireGlob from 'require-glob';
import runSequence from 'run-sequence';

gulp.task('default', function (done) {
	runSequence('clean', 'lint', 'build', done);
});

gulp.task('deploy', function (done) {
	runSequence('default', 'dest:deploy', done);
});

gulp.task('serve', function (done) {
	runSequence('default', 'dest:serve', done);
});

gulp.task('clean', ['dest:clean']);

gulp.task('build', ['static:build', 'markup:build', 'styles:build', 'scripts:build']);

gulp.task('lint', ['scripts:lint']);

requireGlob.sync('./tasks/*.js');
