var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('build-sass', function () {
    console.log('SASS');
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist'));
});