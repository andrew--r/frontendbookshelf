import runSequence from 'run-sequence';
import gulp        from 'gulp';
import gutil       from 'gulp-util';

gulp.task('stylesDependences', () => (
  runSequence(
    'sprites',
    'icons',
    'styles'
  )
));

gulp.task('default', () => (
  runSequence([
      'stylesDependences',
      'templates',
      'scripts:bundle'
    ],
    'server',
    'watch'
  )
));