'use strict';

module.exports = function (gulp, $) {

    gulp.task(index);

    function index() {
        return gulp.src('index.html')
            .pipe($.htmlReplace({js: 'main.min.js'}))
            .pipe(gulp.dest('dist/'));
    }
};