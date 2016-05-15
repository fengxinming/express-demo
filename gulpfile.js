'use strict';

const gulp = require('gulp');

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

//服务启动 修改代码自动重启
require('./task/gulp/develop');

//webpack打包
require('./task/gulp/webpack');

//livereload
require('./task/gulp/livereload');

gulp.task('default', ['webpack:watch', 'server:start', 'server:restart', 'auto-reload', 'livereload']);