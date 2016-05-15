'use strict';

const ctrl = require('../controllers/index');

module.exports = function(router) {

  //首页
  router.get('/', ctrl.home);

  //backbone demo
  router.get('/backbone', ctrl.backbone);

};
