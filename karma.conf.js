'use strict';
module.exports = function karmaConfig(config) {
    config.set({

        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            './src/main/front-end/scripts/**/*.js'
        ],
        exclude: [
            './src/main/front-end/scripts/main.js'
        ],
        preprocessors: {},
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS', 'Chrome'],
        singleRun: false
    });
};
