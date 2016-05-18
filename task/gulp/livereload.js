'use strict';

//livereload

const gulp = require('gulp');
const livereload = require('gulp-refresh');

const cfgUtil = require('../../app/server/commons/factories/configuration');
const serverCfg = cfgUtil.get('server');

gulp.task('livereload-jade', function() {
    gulp.src('./app/client/views/**/*.jade')
        .pipe(livereload());
});

gulp.task('livereload-stylue', function() {
    gulp.src('./app/client/css/**/*.styl')
        .pipe(livereload());
});

gulp.task('livereload-js', function() {
    gulp.src('./public/js/**/app.js')
        .pipe(livereload());
});

gulp.task('livereload', function() {
    if (!serverCfg.livereload.disabled) {
        livereload.listen({
            port: serverCfg.livereload.PORT
        });
        gulp.watch('./app/client/views/**/*.jade', ['livereload-jade']);
        gulp.watch('./app/client/css/**/*.styl', ['livereload-stylue']);
        gulp.watch('./public/js/**/*.js', ['livereload-js']);
    }
});