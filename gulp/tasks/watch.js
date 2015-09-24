import gulp        from 'gulp';
import runSequence from 'run-sequence';
import { reload }  from 'browser-sync';

gulp.task('watch', () => {
  global.watch = true;

  gulp.watch('app/sprites/**/*.png', ['sprites']);

  gulp.watch('app/{styles,blocks}/**/*.styl', ['styles', () => reload('assets/styles/app.min.css')]);

  gulp.watch('app/{pages,blocks}/**/*.jade', () => runSequence('templates', reload));

  gulp.watch('app/resources/**/*', ['copy:resources', reload]);
  gulp.watch('app/fonts/**/*', ['copy:fonts', reload]);
  gulp.watch('app/scripts/**/*.js', ['scripts:bundle', reload]);

  gulp.watch('app/icons/**/*.svg', ['icons', reload]);
});
