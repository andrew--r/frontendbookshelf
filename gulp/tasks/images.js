import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import jimp from 'jimp';
import through from 'through2';
import PATHS from '../paths';
import jimpImageToBuffer from '../helpers/jimp/image-to-buffer';

gulp.task('images', ['images:site', 'images:books-covers']);

gulp.task('images:site', () => {
	return gulp
		.src(`${PATHS.source.images.site}/**/*`)
		.pipe(imagemin())
		.pipe(gulp.dest(PATHS.build.images));
});

gulp.task('images:books-covers', () => {
	return gulp
		.src(`${PATHS.source.images.booksCovers}/**/*`)
		.pipe(through.obj(function (file, encoding, done) {
			const processedFile = file.clone();

			jimp.read(file.contents)
				.then((image) => image.resize(300, jimp.AUTO))
				.then(jimpImageToBuffer)
				.then((imageBuffer) => {
					processedFile.contents = imageBuffer;
					this.push(processedFile);
				})
				.then(done)
				.catch(done);
		}))
		.pipe(imagemin())
		.pipe(gulp.dest(PATHS.build.images));
});
