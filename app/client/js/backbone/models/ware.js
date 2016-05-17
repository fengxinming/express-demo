'use strict';

var backbone = require('backbone');

var commodity = backbone.Model.extend({

	defaults : {
		name: '',
		description : '',
		imgUrl: '',
		link: '',
		price: 1,
		quantity: 0,
		subtotal: 0
	},

	//小计
	subtotal : function() {
		var subtotal = this.get('price') * this.get('quantity');
		this.set('subtotal', subtotal);
		return subtotal;
	},

	//商品数量的增减
	quanity : function( num ) {
		var qty = this.get('quantity');
		this.set('quantity', qty + num);
	}

});

module.exports = commodity;