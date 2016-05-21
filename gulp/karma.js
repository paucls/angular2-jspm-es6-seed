'use strict';

module.exports = (gulp, $) => {

    gulp.task(karma);

    function karma(done) {
        let Server = require('karma').Server;
        let watch = $.util.env.watch || $.util.env.w;

        let Growl = require('node-notifier/notifiers/growl');

        new Server({
            configFile: `${__dirname}/../karma.conf.js`,
            singleRun: !watch
        }, function () {
            done();
        }).on('run_complete', function (browsers, results) {
            if (results.failed === 0) {
                new Growl().notify({
                    title: 'Success',
                    message: 'Relax, all unit tests are passing'
                });
            } else {
                new Growl().notify({
                    title: 'Fail',
                    message: 'You have ' + results.failed + ' failed test(s)'
                });

                done();
            }
        }).start();
    }
};