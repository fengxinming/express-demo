'use strict';

const gulp = require('gulp');
const livereload = require('gulp-livereload');

const cfgUtil = require('../../app/server/commons/factories/configuration');
const serverCfg = cfgUtil.get('server');

gulp.task('livereload-jade', function() {
	gulp.src('./client/views/**/*.jade')
		.pipe(livereload());
});

gulp.task('livereload-stylue', function() {
	gulp.src('./client/css/**/*.styl')
		.pipe(livereload());
});

module.exports = {
	watch: function() {
		if(!serverCfg.livereload.disabled) {
			livereload.listen({
				port: serverCfg.livereload.PORT
			});
			gulp.watch('./client/views/**/*.jade', ['livereload-jade']);
			gulp.watch('./client/css/**/*.styl', ['livereload-stylue']);
		}
	}
};