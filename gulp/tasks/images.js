import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import { PATHS } from '../config';


gulp.task('images', () => {
	return gulp
		.src(`${PATHS.source.images}/**/*`)
		.pipe(imagemin())
		.pipe(gulp.dest(PATHS.build.images));
});
