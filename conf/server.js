'use strict';
var path = require('path');

module.exports = {
  //公用全局属性
  public: {
    //环境标识
    NODE_ENV: process.env.NODE_ENV || 'development',

    //端口
    PORT: 8000,

    //工程名称
    APP_NAME: 'demo',

    //session 密钥配置
    SESSION_SECRET: '*.ziztour',

    //开发模板路径
    CLIENT_DIR: path.join(__dirname, '../app/client'),

    //配置路径
    CONF_DIR: path.join(__dirname, '../conf'),

    //网页模板路径
    VIEWS_DIR: path.join(__dirname, '../app/client/views'),

    //日志文件
    LOGS_DIR: path.join(__dirname, '../logs'),

    //静态文件目录
    STATIC_DIR: path.join(__dirname, '../public'),

    //livereload
    livereload: {
      //true 将禁用livereload功能
      disabled: false,

      //livereload端口
      PORT: 35729
    },

    //session配置
    session: {
      prefix: 'demo:sess:',
      key: 'demo.sid'
    },

    //后台http请求配置
    req: {
      //默认走nginx，需要解压缩
      gzip: true
    },

    //路由配置
    router: {
      EXCLUDE_MODULE: []
    }
  },
  //仅开发使用
  development: {
    req: {
      api: 'http://192.168.1.240/api'  //后台API接口地址
    },
    redis: {
      host: '192.168.1.13',
      port: 6379
    }
  },
  //仅测试环境设置
  qa: {
    req: {
      api: 'http://web4.ziztour.com/api'  //后台API接口地址
    },
    redis: {
      host: 'web9.ziztour.com',
      port: 6379
    }
  },
  //仅产品环境使用
  production: {
    req: {
      api: 'http://web6.ziztour.com/api'  //P端后台API接口地址
    },
    redis: {
      host: 'web7.ziztour.com',
      port: 6379
    }
  }
};