'use strict';

module.exports = (gulp) => {

    gulp.task(watch);

    gulp.task('dist', gulp.series('clean', gulp.parallel('index', 'templates', 'sass', 'jspm')));

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

        gulp.watch([
                'app/**/*.scss'
            ], gulp.series('sass')
        );
    }

};