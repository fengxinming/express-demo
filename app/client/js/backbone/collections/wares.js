'use strict';
var backbone = require('backbone');

var commodity = require('../models/ware');

var commodities = backbone.Collection.extend({

	model: commodity,

	total : function() {
		
		var total = 0;

		this.each(function( model ){
			total += model.subtotal();
		});

		return total.toFixed(2);
	}
});

module.exports = commodities;