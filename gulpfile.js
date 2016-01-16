'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var KarmaServer = require('karma').Server;
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var mold = require('mold-source-map');
var console = require('console');

var inDevelop = true;

gulp.task('jshint', function jshint() {
    return gulp.src('src/main/front-end/scripts/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

gulp.task('test', function test(done) {

    var server = new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
    }, done);

    server.start();
});

gulp.task('copy', function copy() {
    return gulp.src([
        'src/main/front-end/*',
        '!src/main/front-end/*.html'
    ], {
        dot: true
    }).pipe(gulp.dest('src/main/resources/static'))
        .pipe($.size({ title: 'copy' }));
});

gulp.task('browserify', function browserifyMe(done) {

    return browserify('./src/main/front-end/scripts/main.js', { debug: true })
        .bundle()
        .on('error', function(err) {
            console.log(err.message);
            if (inDevelop) {
                done();
            } else {
                this.emit('end');
            }
        })
        .pipe(mold.transformSourcesRelativeTo('./'))
        .pipe(source('scripts/bundle.js'))
        .pipe(gulp.dest('.tmp'))
        .pipe(reload({ stream: true }))
        .pipe($.size({ title: 'browserify' }));
});

gulp.task('styles', function styles() {

    return gulp.src('src/main/front-end/styles/*.css')
        .pipe($.changed('.tmp/styles', { extension: '.css' }))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.if('*.css', $.csso()))
        .pipe(gulp.dest('src/main/resources/static/styles'))
        .pipe($.size({ title: 'styles' }));
});

gulp.task('html', function html() {

    return gulp.src('src/main/front-end/**/*.html')
        .pipe($.useref({ searchPath: '{.tmp,src/main/front-end}' }))
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.html', $.htmlmin()))
        .pipe(gulp.dest('src/main/resources/static'))
        .pipe($.size({ title: 'html' }));
});

gulp.task('clean', del.bind(null, ['.tmp', 'src/main/resources/static/*'], { dot: true }));

gulp.task('serve', ['browserify', 'styles'], function serve() {

    browserSync({
        notify: false,
        logPrefix: '[BROWSER-SYNC]',
        server: ['.tmp', 'src/main/front-end'],
        open: false
    });

    gulp.watch(['src/main/front-end/**/*.html'], reload);
    gulp.watch(['src/main/front-end/styles/**/*.css'], ['styles', reload]);
    gulp.watch(['src/main/front-end/scripts/**/*.js'], ['jshint', 'browserify', reload]);
});

gulp.task('serve:dist', ['default'], function serveDist() {
    browserSync({
        notify: false,
        logPrefix: '[BROWSER-SYNC]',
        server: 'src/main/resources/static',
        open: false
    });
});

gulp.task('default', ['clean'], function defaultTask(done) {
    inDevelop = false;
    runSequence(
        ['browserify', 'styles'],
        ['jshint', 'html', 'copy', 'test'],
        done);
});
