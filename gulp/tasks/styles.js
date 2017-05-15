import gulp from 'gulp';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import postcss from 'gulp-postcss';
import easyImport from 'postcss-easy-import';
import cssnext from 'postcss-cssnext';
import reporter from 'postcss-reporter';
import flexbugsFixes from 'postcss-flexbugs-fixes';
import csso from 'postcss-csso';
import PATHS from '../paths';
import getPluginOptions from '../plugins-options';

gulp.task('styles', () => {
	return gulp
		.src(`${PATHS.source.styles.common}/index.css`)
		.pipe(plumber(getPluginOptions('plumber')))
		.pipe(postcss([
			easyImport(getPluginOptions('postcssEasyImport')),
			cssnext(),
			csso(),
			flexbugsFixes(),
			reporter({ clearAllMessages: true }),
		]))
		.pipe(rename('main.css'))
		.pipe(gulp.dest(PATHS.build.styles));
});
