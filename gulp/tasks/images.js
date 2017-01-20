import gulp from 'gulp';
import imagemin from 'gulp-imagemin';


gulp.task('images', () => {
	return gulp
		.src('./source/images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./build/images'));
});
