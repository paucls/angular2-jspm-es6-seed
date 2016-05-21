/**
 * This code is copyright (c) 2016 thor
 */
'use strict';

module.exports = (gulp) => {

    gulp.task('dist', gulp.parallel('index', 'templates', 'jspm'));

};