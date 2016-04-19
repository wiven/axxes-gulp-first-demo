require('./gulp/html.tasks');
require('./gulp/img.tasks');
require('./gulp/javascript.tasks');
require('./gulp/sass.tasks');

var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('build', ['clear'], function (done) {
    console.log('Done!');
    runSequence('build-html', 'build-sass', 'build-img', 'build-js', done);
});

gulp.task('clear', function () {
    console.log('Clearing');
    return del('./dist');
});