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
    gulp.src([serverCfg.STATIC_DIR + '/html', './index.html'], {
            read: false
        })
        .pipe(clean());
    done();
});

gulp.task('jade2html', function(done) {
    setTimeout(function() {
        gulp.src([
                serverCfg.VIEWS_DIR + '/pages/**/*.jade'
            ])
            .pipe(gulpJade({
                jade: jade,
                pretty: false,
                locals: Object.assign({}, locals, {
                    STATIC_PATH: '/express-demo/public',
                    CONTEXT_PATH: '/express-demo'
                })
            }))
            .on('error', function(err) {
                console.log('不好啦，jade编译出错！', err);
            })
            .pipe(gulp.dest(serverCfg.STATIC_DIR + '/html'));
        done();
    }, 100);
});

gulp.task('html:index', function(done) {
    setTimeout(function() {
        gulp.src([serverCfg.STATIC_DIR + '/html/responsive/index.html'])
            .pipe(gulp.dest('./'));
        done();
    }, 1000);
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
            '$STATIC_PATH': '/express-demo/public'
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

gulp.task('clean:css', function(done) {
    gulp.src(['public/css/*'], {
            read: false
        })
        .pipe(clean());
    done();
});

gulp.task('stylus', ['clean:css'], function(done) {
    setTimeout(function() {
        stylusFn();
        done();
    }, 50);
});

gulp.task('stylus:watch', function() {
    stylusFn();
});

gulp.task('html', gulpSequence('clean:html', 'jade2html', 'html:index'));

gulp.task('static', gulpSequence('html', 'stylus'));