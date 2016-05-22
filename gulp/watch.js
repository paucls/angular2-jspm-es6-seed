'use strict';

module.exports = (gulp) => {

    gulp.task(watch);

    gulp.task('dist', gulp.parallel('index', 'templates', 'jspm'));

    gulp.task('default', gulp.series('dist', gulp.parallel('watch', 'server')));

    function watch() {
        gulp.watch([
                '!app/**/*.spec.ts',
                'app/**/*.ts'
            ], gulp.series('jspm')
        );

        gulp.watch([
                'index.html'
            ], gulp.series('index')
        );

        gulp.watch([
                'app/**/*.html'
            ], gulp.series('templates')
        );
    }

};