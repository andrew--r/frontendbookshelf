import gulp    from 'gulp';
import changed from 'gulp-changed';
import paths   from '../paths';

gulp.task('copy:resources', () => (
  gulp.src('./app/resources/**/*')
    .pipe(changed(paths.images))
    .pipe(gulp.dest(paths.images))
));

gulp.task('copy:fonts', () => (
  gulp.src('./app/fonts/**/*')
    .pipe(changed(paths.fonts))
    .pipe(gulp.dest(paths.fonts))
));

gulp.task('copy:scripts', () => (
  gulp.src('./app/scripts/vendor/*')
    .pipe(changed(paths.scripts + '/vendor'))
    .pipe(gulp.dest(paths.scripts + '/vendor'))
));