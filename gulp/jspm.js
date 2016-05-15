'use strict';

module.exports = function (gulp, $) {

    gulp.task(jspm);

    function jspm() {
        return gulp.src('app/main.ts')
            .pipe($.jspm({selfExecutingBundle: true, minify: true}))
            .pipe($.rename('main.min.js'))
            .pipe(gulp.dest('dist/'));
    }
};