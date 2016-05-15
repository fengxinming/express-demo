'use strict';

var Backbone = require('backbone');

var Item = Backbone.Model.extend({

	defaults : {
		'price' : 0.99,
		'quantity': 0,
		'total': 0
	},

	total : function() {

		var total = this.get('price') * this.get('quantity');
		this.set('total', total);
		return total;

	},

	quanity : function( type ) {

		var qty = this.get('quantity');
		this.set('quantity', (type === 'increase' ? ++qty : --qty) );

	}

});

module.exports = Item;