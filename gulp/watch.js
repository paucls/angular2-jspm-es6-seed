'use strict';

module.exports = (gulp) => {

    gulp.task(watch);

    gulp.task('dist', gulp.series('clean', gulp.parallel('index', 'templates', 'sass', 'jspm')));

    gulp.task('default', gulp.series('sass', gulp.parallel('watch', 'server')));

    function watch() {
        gulp.watch([
                'app/**/*.scss'
            ], gulp.series('sass')
        );
    }

};