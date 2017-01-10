import gulp from 'gulp';
import postcss from 'gulp-postcss';
import easyImport from 'postcss-easy-import';
import cssnext from 'postcss-cssnext';
import csso from 'gulp-csso';

const postcssProcessors = [
	easyImport({
		glob: true,
	}),
	cssnext(),
];

gulp.task('styles', () => {
	return gulp
		.src('./source/styles/main.css')
		.pipe(postcss(postcssProcessors))
		.pipe(csso())
		.pipe(gulp.dest('./build'));
});
