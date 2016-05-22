'use strict';

module.exports = (gulp, $) => {

    gulp.task(clean);

    function clean(cb) {
        return $.del(['./dist'], cb);
    }
};