'use strict';

exports.home = function(req, res, next) {
    res.render('pages/responsive/index');
};

exports.backbone = function(req, res, next) {
    res.render('pages/backbone/index');
};