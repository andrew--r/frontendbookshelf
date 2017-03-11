import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import PATHS from '../paths';

gulp.task('images', ['images:site', 'images:books-covers']);

gulp.task('images:site', () => {
	return gulp
		.src(`${PATHS.source.images.site}/**/*`)
		.pipe(imagemin())
		.pipe(gulp.dest(PATHS.build.images));
});

gulp.task('images:books-covers', () => {
	return gulp
		.src(`${PATHS.source.images.booksCovers}/**/*`)
		.pipe(imagemin())
		.pipe(gulp.dest(PATHS.build.images));
});
