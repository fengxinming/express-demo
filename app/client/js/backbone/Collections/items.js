'use strict';
var Backbone = require('backbone');

var Item = require('../models/item');

var Items = Backbone.Collection.extend({

	models: Item,

	subtotal : function() {
		
		var total = 0;

		this.each(function( model ){
			total += model.total();
		});

		return total.toFixed(2);
	}
});

module.exports = Items;