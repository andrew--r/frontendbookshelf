import gulp from 'gulp';
import webpackStream from 'webpack-stream';
import uglify from 'gulp-uglify';
import gulpif from 'gulp-if';
import { PATHS } from '../config';
import { getPluginOptions } from '../helpers';


gulp.task('scripts', () => {
	return gulp
		.src(`${PATHS.source.scripts}/index.js`)
		.pipe(webpackStream(getPluginOptions('webpackStream')))
		.pipe(gulpif(
			process.env.NODE_ENV === 'production',
			uglify(getPluginOptions('uglify'))
		))
		.pipe(gulp.dest(PATHS.build.scripts));
});
