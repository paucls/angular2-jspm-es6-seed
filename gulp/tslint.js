'use strict';

module.exports = (gulp, $, packageJson, ciEnv) => {

    gulp.task(tslint);

    function tslint() {
        return gulp.src('app/**/*.ts')
            .pipe($.tslint())
            .pipe($.if(!ciEnv, $.tslint.report($.tslintStylish, {
                emitError: false,
                sort: true,
                bell: true,
                fullPath: true
            })))
            .pipe($.if(ciEnv, $.tslint.report($.tslintStylish, {
                emitError: true,
                sort: true,
                bell: true,
                fullPath: true
            })));
    }
};