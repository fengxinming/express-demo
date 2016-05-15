'use strict';

var $ = require('jquery');

var _ = require('underscore');

var Backbone = require('backbone');

var CartView = Backbone.View.extend({

	tagName: 'tr',
	template : _.template( $('#tmp-shoppingCartItem').html() ),

	events : {
		'click .name' : 'remove',
		'click .quantity' : 'manageQuantity'
	},

	initialize : function() {
		
		this.render();

		this.model.on('change', function(){
			this.render();
		}, this);

	},

	render : function() {

		this.$el.html(  this.template( this.model.toJSON() ));
		return this;

	},

	manageQuantity : function( event ) {

		var type = $(event.target).data('type');
		
		if( this.model.get('quantity') === 1 && type === 'decrease' ) {
		
			this.remove();
		
		} else {

			this.model.quanity(type);
		}
	},

	remove : function(){

		this.$el.fadeOut(500, function(){

			$(this).remove();

		});
		
		this.collection.remove( this.model );
	}

});

module.exports = CartView;