'use strict';

const ctrl = require('../controllers/index');

module.exports = function(router) {

  router.get('/', ctrl.home);

};
