'use strict';
require('../responsive/app');
var Item = require('./models/item');
var Items = require('./collections/items');
var ShoppingCart = require('./views/shoppingCart');
var ItemList = require('./views/itemList');
	
var defaultItems = [
	{ title: 'Bacon', price: 2.99 },
	{ title: 'Cabbage' },
	{ title: 'Spinnach', price: 1.40 },
	{ title: 'Salt', price: 0.88 },
	{ title: 'Bread' },
	{ title: 'Butter', price : 1.99 }
];

var items = new Items();
var cartItems = new Items();

cartItems.on('add', function( item ){
	item.set('quantity',1);
});

defaultItems.forEach(function( item ) {
  items.add( new Item(item) );
});

var cart = new ShoppingCart({ collection: cartItems });

new ItemList({ collection: items, cart: cart });