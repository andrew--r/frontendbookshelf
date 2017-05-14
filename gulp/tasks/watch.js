import gulp from 'gulp';
import browserSync from 'browser-sync';
import PATHS from '../paths';
import getPluginOptions from '../plugins-options';

const server = browserSync.create();
const { reload } = server;

gulp.task('watch', ['build'], () => {
	server.init(getPluginOptions('browserSync'));

	gulp.watch([
		`${PATHS.source.data}/**/*.json`,
		`${PATHS.source.templates.blocks}/**/*.pug`,
		`${PATHS.source.templates.layouts}/**/*.pug`,
		`${PATHS.source.templates.pages}/**/*.pug`,
	], ['templates', reload]);

	gulp.watch([
		`${PATHS.source.styles.common}/**/*.css`,
		`${PATHS.source.styles.blocks}/**/*.css`,
	], ['styles', reload]);

	gulp.watch(`${PATHS.source.scripts}/**/*.js`, ['scripts', reload]);

	gulp.watch(`${PATHS.source.images}/**/*`, ['images', reload]);
});
