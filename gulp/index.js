'use strict';

module.exports = (gulp, $) => {

    gulp.task(index);

    function index() {
        return gulp.src('index.html')
            .pipe($.htmlReplace({js: 'main.min.js'}))
            .pipe(gulp.dest('dist/'));
    }
};