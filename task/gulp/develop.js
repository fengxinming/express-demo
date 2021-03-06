'use strict';

//服务启动 修改代码自动重启

const gulp = require('gulp');
const server = require('gulp-develop-server');

const cfgUtil = require('../../app/server/commons/factories/configuration');
const serverCfg = cfgUtil.get('server');

// 运行 server
gulp.task('server:start', function() {
    server.listen({
        path: './app.js',
        env: {
            PORT: serverCfg.PORT,
            NODE_ENV: 'development',
            DEBUG: serverCfg.APP_NAME
        }
    });
});

// 监听文件的改变 重启服务
gulp.task('server:restart', function() {
    gulp.watch(['./app.js', './app/conf/**/*.js', './app/express/**/*.js', './app/server/**/*.js'], server.restart);
});