'use strict';

let jspm = require('jspm');

module.exports = (gulp, $) => {

    gulp.task(jspm);

    function jspm() {
        return gulp.src('app/main.ts')
            .pipe($.jspm({selfExecutingBundle: true, minify: true, depCache: true}))
            .pipe($.rename('main.min.js'))
            .pipe(gulp.dest('dist/'));
    }
};