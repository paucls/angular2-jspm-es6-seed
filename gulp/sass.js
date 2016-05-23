'use strict';

module.exports = (gulp, $) => {

    gulp.task(sass);

    function sass() {
        return gulp.src('./app/**/*.scss')
            .pipe($.sass())
            .pipe($.autoprefixer({
                browsers: ['last 2 versions', '> 5%'],
                cascade: false
            }))
            .pipe(gulp.dest('./app'));
    }
};