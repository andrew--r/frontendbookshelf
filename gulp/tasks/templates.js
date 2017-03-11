import fs from 'fs';
import glob from 'glob';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import getData from 'gulp-data';
import pug from 'gulp-pug';
import rename from 'gulp-rename';

import { books, tags } from 'frontendbookshelf-data';

import PATHS from '../paths';
import { getPluginOptions } from '../helpers';

const parseDataFile = (filePath) => JSON.parse(fs.readFileSync(filePath));
const mergeObjects = (target, source) => ({ ...target, ...source });

gulp.task('templates', () => {
	return gulp
		.src(`${PATHS.source.templates.pages}/**/*.pug`)
		.pipe(plumber(getPluginOptions('plumber')))
		.pipe(getData(() => glob
			.sync(`${PATHS.source.data}/**/*.json`)
			.map(parseDataFile)
			.concat({ books, tags })
			.reduce(mergeObjects, {})))
		.pipe(pug(getPluginOptions('pug')))
		.pipe(rename((path) => {
			if (path.basename !== 'index') {
				path.dirname = path.basename; // eslint-disable-line no-param-reassign
				path.basename = 'index'; // eslint-disable-line no-param-reassign
			}
		}))
		.pipe(gulp.dest(PATHS.build.templates));
});
