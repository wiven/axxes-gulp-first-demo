var gulp = require('gulp');

gulp.task('build-html', function () {
    console.log('HTML');
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});