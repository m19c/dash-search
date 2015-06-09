'use strict';

var gulp   = require('gulp'),
    eslint = require('gulp-eslint');

gulp.task('lint', function () {
  return gulp.src(['lib/**/*.js', 'gulpfile.js'])
    .pipe(eslint({
      configFile: '.eslintrc'
    }))
    .pipe(eslint.format())
  ;
});