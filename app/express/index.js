'use strict';

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const logFactory = require('./../server/commons/factories/logFactory');
const configuration = require('./../server/commons/factories/configuration');
const serverCfg = configuration.get('server');
const localsCfg = configuration.get('locals');
const NODE_ENV = serverCfg.NODE_ENV;

const app = express();

// 模板引擎
app.set('views', serverCfg.VIEWS_DIR);
app.set('view engine', 'jade');

app.use(favicon(path.join(serverCfg.STATIC_DIR, 'favicon.ico')));

// 请求日志
app.use(logFactory.connectLogger('http'));

// req.body 被解析成json数据
app.use(bodyParser.json());

// 解析提交参数，最大支持1000个参数
app.use(bodyParser.urlencoded({ extended: false }));

// 解析cookies数据到req.cookies里面
app.use(cookieParser());

// 开发环境直接读取stylus
if(NODE_ENV === 'development') {
  const stylus = require('stylus');
  const nib = require('nib');
  app.use(stylus.middleware({
    src: serverCfg.CLIENT_DIR,
    dest: serverCfg.STATIC_DIR,
    compile: function(str, path) {
      return stylus(str)
        .set('filename', path)
        .define('url', stylus.url({
          paths: [ serverCfg.STATIC_DIR ]
        }))
        .define('$CONTEXT_PATH', localsCfg.CONTEXT_PATH)
        .use(nib());
    }
  }));

  //livereload
  if (!serverCfg.livereload.disabled) {
    const livereload = require('./livereload');
    const options = Object.assign({}, serverCfg.livereload);
    delete options.disabled;
    app.use(livereload(options));
  }
}

//静态文件目录
app.use(express.static(serverCfg.STATIC_DIR));

//添加路由
const routes = require('./routes');
app.use('/', routes);
Object.assign(app.locals, localsCfg);

// 404异常捕捉
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// 500异常捕捉
if (NODE_ENV === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}else{
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}

module.exports = app;
