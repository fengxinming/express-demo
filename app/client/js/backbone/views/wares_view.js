'use strict';

var $ = require('jquery');

var _ = require('underscore');

var backbone = require('backbone');

var Item = backbone.View.extend({

    el: '#wares-list',

    template: _.template($('#wares-tpl').html(), {
        variable: 'wares'
    }),

    events: {
        'click a.btn-append': 'addToCart'
    },

    initialize: function(options) {
        this.render();
    },

    render: function() {
        this.$el.html(this.template(this.collection.toJSON()));
        return this;
    },

    addToCart: function(evt) {
        var index = +evt.currentTarget.getAttribute('data-index');
        this.trigger('addToCart', this.collection.at(index));
    }

});

module.exports = Item;