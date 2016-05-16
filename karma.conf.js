'use strict';

module.exports = function (config) {
    config.set({

        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js'
        ],

        jspm: {
            config: "config.js",
            loadFiles: [
                'app/**/*.spec.ts'
            ],
            serveFiles: [
                'app/**/*.ts'
            ],
            paths: {
                'jspm_packages/': '/base/jspm_packages/',
                "github:*": "/base/jspm_packages/github/*",
                "npm:*": "/base/jspm_packages/npm/*",
                'app/*': '/base/app/*'
            }
        },

        autoWatch: true,

        frameworks: ['jasmine', 'jspm'],

        browsers: ['PhantomJS'],

        reporters: ['progress'],

        phantomjsLauncher: {
            exitOnResourceError: true
        },

        logLevel: config.LOG_DEBUG
    });
};