'use strict';

module.exports = (gulp) => {

    gulp.task(templates);

    function templates() {
        return gulp.src('app/**/*.html')
            .pipe(gulp.dest('dist/app'));
    }
};