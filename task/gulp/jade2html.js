'use strict';

const gulp = require('gulp');
const jade = require('jade');
const gulpJade = require('gulp-jade');
const gulpSequence = require('gulp-sequence');
const cfgUtil = require('../../app/server/commons/factories/configuration');
const serverCfg = cfgUtil.get('server');
const locals = cfgUtil.get('locals');
const clean = require('gulp-clean');

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
            locals: locals
        }))
        .pipe(gulp.dest(serverCfg.STATIC_DIR + '/html'));
    done();
});

gulp.task('index', function(done) {
    gulp.src([serverCfg.STATIC_DIR + '/html/responsive/index.html'])
        .pipe(gulp.dest(serverCfg.STATIC_DIR));
    done();
});

gulp.task('html', gulpSequence('clean:html', 'jade2html'));