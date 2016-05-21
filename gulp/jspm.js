'use strict';

module.exports = (gulp, $) => {

    gulp.task(jspm);

    function jspm() {
        return gulp.src('app/main.ts')
            .pipe($.jspm({selfExecutingBundle: true, minify: false}))
            .pipe($.rename('main.min.js'))
            .pipe(gulp.dest('dist/'));
    }
};