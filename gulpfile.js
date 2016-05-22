'use strict';

var gulp = require('gulp'),
    packageJson = require('./package.json'),
    plugins = require('gulp-load-plugins')({
        pattern: [
            'gulp-*',
            'gulp.*',
            'browser-sync'
        ],
        lazy: true
    });

require('require-directory')(module, './gulp', {
    visit: function (task) {
        task(gulp, plugins, packageJson)
    }
});