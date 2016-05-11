'use strict';

const gulp = require('gulp');

//服务启动 修改代码自动重启
require('./task/gulp/develop');

//livereload
const livereload = require('./task/gulp/livereload');

//监听gulpfile的改变
const os = require('os');
const spawn = require('child_process').spawn;
gulp.task('auto-reload', function() {
	var proc;
	function restart() {
		if (proc) {proc.kill();}
		if (os.platform() === 'win32') {
			proc = spawn('cmd', ['/s', '/c', 'gulp'], {stdio: 'inherit'});
		} else {
			proc = spawn('gulp', [], {stdio: 'inherit'});
		}
	}
	gulp.watch(['./gulpfile.js', './task/gulp/*.js'], restart);
//	restart();
});

gulp.task('watch', function() {
	livereload.watch();
});

gulp.task('default', ['server:start', 'server:restart', 'auto-reload', 'watch']);