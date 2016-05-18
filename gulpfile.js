'use strict';

const gulp = require('gulp');

//监听gulpfile的改变
const os = require('os');
const spawn = require('child_process').spawn;
gulp.task('auto-reload', function() {
    var proc;

    function restart() {
        if (proc) {
            proc.kill();
        }
        if (os.platform() === 'win32') {
            proc = spawn('cmd', ['/s', '/c', 'gulp'], {
                stdio: 'inherit'
            });
        } else {
            proc = spawn('gulp', [], {
                stdio: 'inherit'
            });
        }
    }
    gulp.watch(['./gulpfile.js', './task/gulp/*.js'], restart);
    //	restart();
});

const path = require('path');
const fs = require('fs');
const TASK_DIR = path.join(__dirname, 'task/gulp');
(fs.readdirSync(TASK_DIR) || [TASK_DIR]).forEach(function(file) {
    let fileNameParser = path.parse(file);
    if (fileNameParser.ext === '.js') {
        require(path.join(TASK_DIR, file));
    }
});

gulp.task('default', ['clean:html', 'webpack:watch', 'server:start', 'server:restart', 'auto-reload', 'livereload']);