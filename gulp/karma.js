'use strict';

module.exports = function (gulp, $, config) {

    gulp.task(karma);

    function karma(done) {
        var Server = require('karma').Server;
        var watch = $.util.env.watch || $.util.env.w;

        var Growl = require('node-notifier/notifiers/growl');

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