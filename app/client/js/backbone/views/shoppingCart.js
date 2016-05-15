'use strict';

var $ = require('jquery');

var Backbone = require('backbone');

var CartView = require('./cartView');

var ShoppingCart = Backbone.View.extend({

	el: '#shopping-list',

	total : $('#total'),
	basketTotal : $('#basket'),

	initialize : function(){

		this.defaultMessage();

		this.collection.on('add remove change:quantity', function( item ){

			this.updateTotal();

			if( this.collection.length === 0 ) {
				this.defaultMessage();
			}

		}, this);

	},

	defaultMessage : function() {

		this.$el.addClass('empty').html('<tr><td colspan="4">Cart is empty</td></tr>');

	},

	add : function( item ) {

		this.$el.removeClass('empty');

		item.quanity('increase');

		this.collection.add( item );

		this.render();

	},

	updateTotal : function() {

		var basketTotal = 0;

		this.collection.each(function( item ){
			basketTotal += item.get('quantity');
		});

		this.basketTotal.html( basketTotal );
		this.total.html( this.collection.subtotal() );

	},

	render : function(){

		this.$el.html('');
    
    var collection = this.collection;

		collection.each(function( item ){

			var newItem = new CartView({ model : item, collection: collection });
			this.$el.append( newItem.render().el );

		}, this);

	}

});

module.exports = ShoppingCart;