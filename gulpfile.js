var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var concatCSS = require('gulp-concat-css');
var csso = require('gulp-csso');
var gm = require('gulp-gm');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");
var pump = require('pump');

gulp.task('css', function(cb) {
  pump([
      gulp.src('src/css/*.css'),
      concatCSS('bundle.min.css'),
      csso(),
      gulp.dest('dist/css')
    ],
    cb
  );
});

gulp.task('js', function(cb) {
  pump([
      gulp.src('src/js/*.js'),
      // concatenate js files
      concat('app.min.js'),
      uglify(),
      gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('img', function() {
  gulp.src('src/img/*.{jpg, png}')
    .pipe(imageResize({
      width: 540,
      // height: 680,
      // format: 'jpeg',
      crop: false,
      quality: 1,
      upscale: true
    }))
    .pipe(rename(function(path) {
      path.basename += '-l'
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.css', ['css']);
  gulp.watch('src/**/*.js', ['js']);
});

gulp.task('default', ['css', 'js', 'watch']);









/////////////////////////////////
