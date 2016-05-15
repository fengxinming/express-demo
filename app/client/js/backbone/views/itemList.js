'use strict';

var Backbone = require('backbone');

var Item = require('./item');

var ItemList = Backbone.View.extend({

	el: '#default-item-list',

	initialize: function(options) {
		this.cart = options.cart;
		
		this.render();
	},

	render: function() {

		this.collection.each(function( item ){
			
			var itemView = new Item({ model: item, cart: this.cart });

			this.$el.append( itemView.render().el );

		},this);

	}

});

module.exports = ItemList;