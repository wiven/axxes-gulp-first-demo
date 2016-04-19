var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('build-js', function () {
    console.log('JS');
    return gulp.src('./src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist'));
});