'use strict';
var backbone = require('backbone');

var ware = require('../models/ware');

var wares = backbone.Collection.extend({

	model: ware,

	hodgepodge: function (cb) {

		var obj = { total: 0, piece: this.length, html: '' };

		this.each(function (model) {
			obj.total += model.subtotal();
			var param = model.toJSON();
			param.cid = model.cid;
			obj.html += cb(param);
		});
		
		obj.total = obj.total.toFixed(2);
		return obj;
	}
});

module.exports = wares;