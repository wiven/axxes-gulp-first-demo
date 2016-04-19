var gulp = require('gulp');

gulp.task('build-img', function () {
    console.log('IMG');
    return gulp.src('./src/img/logo.png')
        .pipe(gulp.dest('./dist'));
});