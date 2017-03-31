/*
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cssMin = require('gulp-cssmin'),
  sourcemaps = require('gulp-sourcemaps');
*/
var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')();


// our CSS Task
gulp.task('css', function () {
  /*gulp.src(['./src/sass/main.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cssMin())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
    */
  return gulp.src(['./src/sass/main.scss'])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.cssmin())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
});

// our JavaScript Task
gulp.task('js', function () {
  return gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './src/js/magic.js',
    './src/js/admin.js'
  ])
    .pipe(plugins.babel({
      presets: ['es2015']
    }))
    .pipe(plugins.concat('all.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function () {
  gulp.watch(['./src/sass/*.scss'], ['css']);
  gulp.watch(['./src/js/*.js'],['js'])
});

gulp.task('default', function () {
  console.log(`Look at my first gulp task!`);
});