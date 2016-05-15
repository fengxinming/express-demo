'use strict';
const request = require('supertest');

const cfgUtil = require('../app/server/commons/factories/configuration');
const serverCfg = cfgUtil.get('server');

//服务没有启动时，用这个；如果启动了就用下面那行
const app = require('../app/express');
let agent = request(app);
//let agent = request('http://127.0.0.1:' + serverCfg.PORT);

const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, 'routers');
(fs.readdirSync(DIR) || []).forEach(function (file) {
  if(~file.indexOf('.js')) {
    var mod = file.slice(0, -3);
    require(path.join(DIR, file))(agent);
  }
});