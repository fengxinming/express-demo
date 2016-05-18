'use strict';

const ctrl = require('../controllers/index');

module.exports = function(router) {

    //首页
    router.get('/', ctrl.home);
    router.get('/index.html', ctrl.home);

    //backbone demo
    router.get('/html/backbone/index.html', ctrl.backbone);

};