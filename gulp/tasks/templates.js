import fs from 'fs';
import glob from 'glob';
import path from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import getData from 'gulp-data';
import pug from 'gulp-pug';
import rename from 'gulp-rename';
import { PATHS } from '../config';
import { getPluginOptions } from '../helpers';


const parseDataFile = (path) => JSON.parse(fs.readFileSync(path));
const mergeObjects = (target, source) => ({ ...target, ...source });

gulp.task('templates', () => {
	return gulp
		.src(`${PATHS.source.templates.pages}/**/*.pug`)
		.pipe(plumber(getPluginOptions('plumber')))
		.pipe(getData(() => glob
			.sync(`${PATHS.source.data}/**/*.json`)
			.map(parseDataFile)
			.reduce(mergeObjects, {})
		))
		.pipe(pug(getPluginOptions('pug')))
		.pipe(rename((path) => {
			if (path.basename !== 'index') {
				path.dirname = path.basename;
				path.basename = 'index';
			}

			return path;
		}))
		.pipe(gulp.dest(PATHS.build.templates));
});
