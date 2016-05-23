'use strict';

module.exports = (gulp, $) => {

    gulp.task(server);

    function server() {
        $.browserSync({
            server: {
                baseDir: './',
                index: 'index.html'
                //middleware: [require('connect-history-api-fallback')]
            },
            files: [
                'app/**/*.css',
                'app/**/*.ts',
                'app/**/*.html',
                'index.html'
            ]
        });
    }
};