'use strict';

module.exports = livereload;

function livereload(opts) {
	opts = opts || {};
	var port = opts.port || 35729;

	return function livereload(req, res, next) {
		const contentType = res.get('Content-Type');

		if (contentType && contentType.indexOf('text/html') < 0) return;

		if (opts.excludes) {
			var path = this.path;
			if (opts.excludes.some(function (exlude) {
					return path.substr(0, exlude.length) === exlude;
				})) return;
		}

		var src = opts.src || '//' + (req.hostname || 'localhost') + ':' + port + "/livereload.js?snipver=1";
		var snippet = '<script src="' + src + '"></script>';

		res.locals.LRScript = snippet;

		next();
	};
}
