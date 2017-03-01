const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const connect = require('gulp-connect');
const concat = require('gulp-concat');
const runSequence = require('run-sequence');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('vendor:js', () => {
  return gulp.src([
    './node_modules/basicmodal/dist/basicModal.min.js',
    './node_modules/codemirror/lib/codemirror.js',
    './node_modules/codemirror/mode/xml/xml.js',
    './node_modules/codemirror/mode/htmlmixed/htmlmixed.js',
    './node_modules/dragula/dist/dragula.js',
    './node_modules/medium-editor/dist/js/medium-editor.js'
  ])
  .pipe(concat('webedit.vendors.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('babelify', () => {
  return browserify('src/js/main.js')
    .transform(babelify, {presets: ['es2015']})
    .bundle()
    .pipe(source('webedit.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('uglify:js', () => {
  return gulp.src(['dist/webedit.vendors.js', 'dist/webedit.js'])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('seq:js', () => {
  runSequence('babelify', 'uglify:js')
});

gulp.task('sass', () => {
  return gulp.src('src/sass/webedit.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('uglify:css', () => {
  return gulp.src('dist/webedit.css')
    .pipe(uglifycss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('seq:css', () => {
  runSequence('sass', 'uglify:css')
});

gulp.task('server', () => {
  connect.server({
    port: 3000
  });
});

gulp.task('build', () => {
  runSequence(['vendor:js','seq:css', 'seq:js']);
});

gulp.task('dev', ['build', 'server'], () => {
  gulp.watch('src/sass/**/*.scss', ['seq:css']);
  gulp.watch('src/js/**/*.js', ['seq:js']);
});
