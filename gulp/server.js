'use strict';

module.exports = (gulp, $) => {

    gulp.task(server);

    function server() {
        $.browserSync({
            server: {
                baseDir: 'dist',
                index: 'index.html',
                open: 'www.google.com'
                //middleware: [require('connect-history-api-fallback')]
            },
            files: [
                'dist/**/*.css',
                'dist/**/*.js',
                'dist/**/*.html'
            ]
        });
    }
};