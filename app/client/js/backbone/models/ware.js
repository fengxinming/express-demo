'use strict';

var backbone = require('backbone');

var commodity = backbone.Model.extend({

	defaults : {
		name: '',
		description : '',
		imgUrl: '',
		link: '',
		price: 0,
		quantity: 0,
		subtotal: 0
	},
	
	initialize: function() {
		this.on('change:quantity', this.subtotal);
		this.on('change:price', this.subtotal);
	},

	//小计
	subtotal : function() {
		var subtotal = this.get('price') * this.get('quantity');
		this.set('subtotal', subtotal);
		return subtotal;
	},

	//商品数量的增减
	quantity : function( num ) {
		var qty = this.get('quantity');
		qty += num;
		if(!qty) {
			this.trigger('validate', '商品数量不能小于1');
			return;
		}
		this.set('quantity', qty);
	}

});

module.exports = commodity;