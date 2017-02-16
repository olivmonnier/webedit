const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const connect = require('gulp-connect');
const runSequence = require('run-sequence');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('babelify', () => {
  return browserify('src/js/main.js')
    .transform(babelify, {presets: ['es2015']})
    .bundle()
    .pipe(source('webedit.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('uglify', () => {
  return gulp.src('dist/webedit.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('seq:js', () => {
  runSequence('babelify', 'uglify')
});

gulp.task('sass', () => {
  return gulp.src('src/sass/webedit.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('uglifycss', () => {
  return gulp.src('dist/webedit.css')
    .pipe(uglifycss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('seq:css', () => {
  runSequence('sass', 'uglifycss')
});

gulp.task('server', () => {
  connect.server({
    port: 3000
  });
});

gulp.task('build', () => {
  runSequence(['seq:css', 'seq:js']);
});

gulp.task('dev', ['build', 'server'], () => {
  gulp.watch('src/sass/**/*.scss', ['seq:css']);
  gulp.watch('src/js/**/*.js', ['seq:js']);
});
