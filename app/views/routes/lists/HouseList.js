/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        globals = require('globals'),
        HouseItemView = require('app/views/routes/lists/ListItem'),
        templates = require('js/templates/templates'),
        template = templates['list-main-view'];

    return Backbone.View.extend({

        className: globals.viewConfig.mainViewListDefaultClass,

        initialize: function (options) {
            _.bindAll(this, 'render');

            this.selectionList = options.selectionList;
            this.collection = options.collection;
            this.listenTo(this.collection, "reset add remove", this.render, this);
        },

        render: function () {
            this.$el.html(template());
            // append subviews
            var self = this;

            this.collection.each(function (it) {
                if (self.selectionList.hasHouse(it.get('id'))) {
                    $('.house-list', self.$el).append(new HouseItemView({model: it}).$el);
                }
            });

            return this;
        }
    });

});