import gulp from 'gulp';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import easyImport from 'postcss-easy-import';
import cssnext from 'postcss-cssnext';
import csso from 'gulp-csso';

import * as Config from '../config';

const postcssProcessors = [
	easyImport({
		glob: true,
	}),
	cssnext(),
];

gulp.task('styles', () => {
	return gulp
		.src('./source/styles/main.css')
		.pipe(plumber(Config.PLUMBER_OPTIONS))
		.pipe(postcss(postcssProcessors))
		.pipe(csso())
		.pipe(gulp.dest('./build'));
});
