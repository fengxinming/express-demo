'use strict';

exports.home = function(req, res, next) {
	res.render('responsive/index', { title: 'Express' });
};