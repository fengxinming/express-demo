'use strict';

var $ = require('jquery');

var _ = require('underscore');

var backbone = require('backbone');

var Item = backbone.View.extend({

    el: '#total-wrapper',

    initialize: function(options) {
        this.render();
        _.bindAll(this, 'update');
    },
    
    update: function(obj) {
      if(typeof obj.piece !== 'undefined' && obj.piece !== null) {
        this._updateSum(obj.piece);
      }
      if(typeof obj.total !== 'undefined' && obj.total !== null) {
        this._updateTotal(obj.total);
      }
      return this;
    },

    _updateSum: function(num) {
        this.$el.find('em.num').text(num);
        return this;
    },

    _updateTotal: function(total) {
        this.$el.find('em.total').text(total);
        return this;
    }

});

module.exports = Item;