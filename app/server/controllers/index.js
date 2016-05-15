'use strict';

exports.home = function(req, res, next) {
	res.render('responsive/index');
};

exports.backbone = function(req, res, next) {
	res.render('backbone/index');
};