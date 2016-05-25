'use strict';

module.exports = (gulp, $) => {

    gulp.task(sass);
    gulp.task(sassDist);

    function sass() {
        return gulp.src('./app/**/*.scss')
            .pipe($.sass())
            .pipe($.autoprefixer({
                browsers: ['last 2 versions', '> 5%'],
                cascade: false
            }))
            .pipe(gulp.dest('./app'));
    }

    function sassDist() {
        return gulp.src('./app/**/*.scss')
            .pipe($.sass())
            .pipe($.autoprefixer({
                browsers: ['last 2 versions', '> 5%'],
                cascade: false
            }))
            .pipe(gulp.dest('./dist/app'));
    }
};