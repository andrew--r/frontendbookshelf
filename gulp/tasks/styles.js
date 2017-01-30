import gulp from 'gulp';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import postcss from 'gulp-postcss';
import easyImport from 'postcss-easy-import';
import cssnext from 'postcss-cssnext';
import reporter from 'postcss-reporter';
import csso from 'gulp-csso';
import { PATHS } from '../config';
import { getPluginOptions } from '../helpers';

gulp.task('styles', ['format:styles'], () => {
	return gulp
		.src(`${PATHS.source.styles.common}/index.css`)
		.pipe(plumber(getPluginOptions('plumber')))
		.pipe(postcss([
			easyImport(getPluginOptions('postcssEasyImport')),
			cssnext(),
			reporter({ clearAllMessages: true }),
		]))
		.pipe(csso())
		.pipe(rename('main.css'))
		.pipe(gulp.dest(PATHS.build.styles));
});
