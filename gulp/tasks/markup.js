import glob from 'glob';
import path from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import getData from 'gulp-data';
import pug from 'gulp-pug';
import rename from 'gulp-rename';

import * as Config from '../config';

import {
	relativePathToAbsolute,
} from '../helpers';

const { assign } = Object;

gulp.task('markup', () => {
	return gulp
		.src('./source/pages/*')
		.pipe(plumber(Config.PLUMBER_OPTIONS))
		.pipe(getData(() => glob
			.sync('./source/data/**/*.json')
			.map((filePath) => require(relativePathToAbsolute(filePath)))
			.reduce((acc, item) => assign({}, acc, item), {})
		))
		.pipe(pug())
		.pipe(rename((path) => {
			path.dirname += path.basename;
			path.basename = 'index';
			return path;
		}))
		.pipe(gulp.dest(`./build`))
});
