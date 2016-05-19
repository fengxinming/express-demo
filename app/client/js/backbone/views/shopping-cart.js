'use strict';

var $ = require('jquery');

var _ = require('underscore');

var backbone = require('backbone');

var ware = require('../models/ware');

var ShoppingCart = backbone.View.extend({

    el: '#shopping-cart-wrapper',

    template: _.template($('#goods-tpl').html(), { 
        variable: 'good'
    }),

    events: {
        'click input.del': 'onDel',
        'click a.minus': 'onMinus',
        'click a.plus': 'onPlus'
    },

    initialize: function () {
        this.listenTo(this.collection, 'add', this.onAddItem);
        this.listenTo(this.collection, 'change:subtotal', this.render);
        this.listenTo(this.collection, 'remove', this.render);
        this.listenTo(this.collection, 'validate', this.onValidate);
        _.bindAll(this, 'addItem');
    },

    render: function () {
        var $wrapper = this.$('#shopping-cart-wrapper').html('<div class="loading"></div>');
        var template = this.template;
        var obj = this.collection.hodgepodge(function(param) {
            return template(param);
        });
        this.$el.html(obj.html);
        this.trigger('render', obj);

        return this.el;
    },

    onDel: function (evt) {
        var cid = $(evt.currentTarget).closest('li')[0].className.slice(3);
        this.collection.remove(this.collection.get(cid));
    },
    
    onMinus: function (evt) {
        var cid = $(evt.currentTarget).closest('li')[0].className.slice(3);
        this.collection.get(cid).quantity(-1);
    },
    
    onPlus: function (evt) {
        var cid = $(evt.currentTarget).closest('li')[0].className.slice(3);
        this.collection.get(cid).quantity(1);
    },
    
    addItem: function(model) {
        if(model === this.collection.get(model.cid)) {
            model.quantity(1);
        }else{
            this.collection.add(model);
        }
    },
    
    onAddItem: function(model) {
        model.subtotal();
        this.render();
    },
    
    onValidate: function(msg) {
        alert(msg);
    }
});

module.exports = ShoppingCart;
