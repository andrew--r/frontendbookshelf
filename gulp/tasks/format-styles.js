import gulp from 'gulp';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import sorting from 'postcss-sorting';
import PATHS from '../paths';
import getPluginOptions from '../plugins-options';

gulp.task('format:styles', () => {
	return gulp
		.src(`${PATHS.source.styles.allStylesGlob}/**/*.css`)
		.pipe(plumber(getPluginOptions('plumber')))
		.pipe(postcss([
			sorting(getPluginOptions('postcssSorting')),
		]))
		.pipe(gulp.dest(PATHS.source.base));
});
