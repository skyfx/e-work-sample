'use strict';
module.exports = function karmaConfig(config) {
    config.set({

        basePath: '',
        frameworks: ['jasmine', 'browserify'],
        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            './src/main/front-end/scripts/**/*.js'
        ],
        exclude: [
            './src/main/front-end/scripts/main.js'
        ],
        preprocessors: {
            './src/main/front-end/scripts/**/*.js': ['browserify']
        },
        browserify: {
            debug: true
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    });
};
