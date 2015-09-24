import gulp         from 'gulp';
import uglify       from 'gulp-uglify';
import sourcemaps    from 'gulp-sourcemaps';
import source       from 'vinyl-source-stream';
import buffer       from 'vinyl-buffer';
import browserify   from 'browserify';
import watchify     from 'watchify';
import babel        from 'babelify';
import errorHandler from '../utils/errorHandler';
import paths        from '../paths';

let compile = function(watch) {
  var bundler = watchify(browserify('./app/scripts/main.js', { debug: true }).transform(babel));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(paths.bundledScripts));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

let watch = function() {
  return compile(true);
};

gulp.task('scripts:bundle', () => {
  return compile();
});

gulp.task('scripts:watch', () => {
  return watch();
});