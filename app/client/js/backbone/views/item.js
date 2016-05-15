'use strict';

var $ = require('jquery');

var _ = require('underscore');

var Backbone = require('backbone');

var Item = Backbone.View.extend({

	tagName: 'li',

	template : _.template( $('#tmp-shoppingListItem').html() ),

	events: {
		'click' : 'addToCart'
	},

	initialize: function(options) {
		this.cart = options.cart;
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	addToCart: function() {
		this.cart.add( this.model );
	}

});

module.exports = Item;