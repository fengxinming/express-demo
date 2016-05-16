'use strict';

var $ = require('jquery');
var riotjs = require('riotjs');
var $toTop = $('#toTop');

require('jquery-lazyload');

function Model() {
    if (!(this instanceof Model)) {
        return new Model();
    }

    var me = riotjs.observable(this);

    //高度大于100，出现置顶按钮
    me.onScroll = function() {
        if ($(this).scrollTop() > 100) {
            $toTop.fadeIn();
        } else {
            $toTop.fadeOut();
        }
    };

    //置顶
    me.istop = function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    };

    //移动设备打开时，收缩菜单
    me.toggleMenu = function(e) {
        e.preventDefault();
        e.stopPropagation();
        var $this = $(this);
        if ($this.hasClass('popup')) {
            me._hideMenu($this);
        } else {
            me._showMenu($this);
        }
    };

    me._showMenu = function($obj) {
        $obj.addClass('popup');
        $obj.parent().next().stop(true, true).slideDown(300);
        me.trigger('showMenu');
    };

    me._hideMenu = function($obj) {
        $obj.removeClass('popup');
        $obj.parent().next().stop(true, true).slideUp(300);
        me.trigger('hideMenu');
    };
}

var model = Model();

model.on('showMenu', function() {
    $(document).one('click', hideMenu);
});

model.on('hideMenu', function() {
    $(document).off('click', hideMenu);
});

var $menu = $('.header span.menu').on('click', model.toggleMenu);

$(window).on('scroll', model.onScroll);

$toTop.on('click', model.istop);

var hideMenu = function() {
    model._hideMenu($menu);
};

$("img.lazy").lazyload();