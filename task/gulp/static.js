'use strict';

const gulp = require('gulp');
const jade = require('jade');
const gulpJade = require('gulp-jade');
const gulpSequence = require('gulp-sequence');
const cfgUtil = require('../../app/server/commons/factories/configuration');
const serverCfg = cfgUtil.get('server');
const locals = cfgUtil.get('locals');
const clean = require('gulp-clean');
const stylus = require('gulp-stylus');

gulp.task('clean:html', function(done) {
    gulp.src([serverCfg.STATIC_DIR + '/html', serverCfg.STATIC_DIR + '/index.html'], {
            read: false
        })
        .pipe(clean());
    done();
});

gulp.task('jade2html', function(done) {
    gulp.src([
            serverCfg.VIEWS_DIR + '/pages/**/*.jade'
        ])
        .pipe(gulpJade({
            jade: jade,
            pretty: false,
            locals: Object.assign({}, locals, {
                CONTEXT_PATH: '/public'
            })
        }))
        .on('error', function(err) {
            console.log('不好啦，jade编译出错！', err);
        })
        .pipe(gulp.dest(serverCfg.STATIC_DIR + '/html'));
    done();
});

gulp.task('html:index', function(done) {
    gulp.src([serverCfg.STATIC_DIR + '/html/responsive/index.html'])
        .pipe(gulp.dest('./'));
    done();
});

const nib = require('nib');
const stylusFn = function() {
    return gulp.src([
        './app/client/css/*.styl'
    ]).pipe(stylus({
        compress: true,
        use: [
            nib()
        ],
        globals: {
            '$CONTEXT_PATH': '/public'
        },
        functions: {
            url: stylus.stylus.url({
                paths: [serverCfg.STATIC_DIR]
            })
        }
    })).on('error', function(err) {
        console.log('不好啦，stylus预编译出错！', err);
    }).pipe(gulp.dest('./public/css'));
};

gulp.task('clean:css', function() {
    return gulp.src(['public/css/*'], {
            read: false
        })
        .pipe(clean());
});

gulp.task('stylus', ['clean:css'], function(done) {
    stylusFn().on('end', done);
});

gulp.task('stylus:watch', function() {
    stylusFn();
});

gulp.task('html', gulpSequence('clean:html', 'jade2html'));

gulp.task('static', gulpSequence('html', 'stylus'));