'use strict';

var $ = require('jquery');
var model = require('./models/home')();
require('jquery-lazyload');

var $menu = $('.header span.menu').on('click', model.toggleMenu);

$(window).on('scroll', model.onScroll);

$('#toTop').on('click', model.istop);

var hideMenu = function() {
	model._hideMenu($menu);
};

model.on('showMenu', function() {
	$(document).one('click', hideMenu);
});

model.on('hideMenu', function() {
	$(document).off('click', hideMenu);
});

$("img.lazy").lazyload();