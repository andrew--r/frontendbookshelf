import gulp         from 'gulp';
import plumber      from 'gulp-plumber';
import spritesmith  from 'gulp.spritesmith';
import imagemin     from 'gulp-imagemin';
import errorHandler from '../utils/errorHandler';
import paths        from '../paths';

gulp.task('sprites', () => {
  let spriteData = gulp.src('app/sprites/**/*.png', {read: false})
    .pipe(plumber({errorHandler: errorHandler}))
    .pipe(spritesmith({
      imgName: 'sprites.png',
      cssName: 'sprites.styl',
      imgPath: '../images/sprites.png',
      cssFormat: 'stylus',
      algorithm: 'binary-tree',
      padding: 8,
      engine: 'pngsmith',
      cssVarMap: function (sprite) {
        sprite.name = 'sprite-' + sprite.name;
      },
      imgOpts: {
        format: 'png'
      }
    }));

  spriteData.img
    .pipe(imagemin({optimizationLevel: 3}))
    .pipe(gulp.dest(paths.images));

  return spriteData.css.pipe(gulp.dest(paths.appStylesHelpers));
});
