import gulp from 'gulp';
import gutil from 'gulp-util';
import ftp from 'vinyl-ftp';
import ftpConfig from '../../ftp-config.json';
import PATHS from '../paths';

gulp.task('deploy', () => {
	const ftpConnection = ftp.create({
		host: ftpConfig.host,
		user: ftpConfig.user,
		password: ftpConfig.password,
		log: gutil.log,
	});

	return gulp
		.src(`${PATHS.build.base}/**/*`)
		.pipe(ftpConnection.newerOrDifferentSize(ftpConfig.destination))
		.pipe(ftpConnection.dest(ftpConfig.destination));
});
