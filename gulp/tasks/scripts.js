import gulp from 'gulp';
import gutil from 'gulp-util';
import webpackStream from 'webpack-stream';
import uglify from 'gulp-uglify';
import { PATHS } from '../config';
import { getPluginOptions } from '../helpers';


const isProduction = process.env.NODE_ENV === 'production';

gulp.task('scripts', () => {
	return gulp
		.src(`${PATHS.source.scripts}/index.js`)
		.pipe(webpackStream(getPluginOptions('webpackStream')))
		.pipe(isProduction ? uglify(getPluginOptions('uglify')) : gutil.noop())
		.pipe(gulp.dest(PATHS.build.scripts));
});
