import gulp from 'gulp';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import sorting from 'postcss-sorting';
import PATHS from '../paths';
import { getPluginOptions } from '../helpers';

const stylesPaths = [
	PATHS.source.styles.common,
	PATHS.source.styles.blocks,
].map((pathString) => `${pathString}/**/*.css`);

gulp.task('format:styles', () => {
	return gulp
		.src(stylesPaths)
		.pipe(plumber(getPluginOptions('plumber')))
		.pipe(postcss([
			sorting(getPluginOptions('postcssSorting')),
		]))
		.pipe(gulp.dest(PATHS.source.base));
});
