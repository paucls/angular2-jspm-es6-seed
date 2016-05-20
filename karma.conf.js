'use strict';

module.exports = function (config) {
    config.set({

        files: [
            'node_modules/phantomjs-polyfill/bind-polyfill.js',
            'node_modules/es6-shim/es6-shim.js',
            'jspm_packages/system-polyfills.js',
            'jspm_packages/npm/reflect-metadata@0.1.3/Reflect.js'
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