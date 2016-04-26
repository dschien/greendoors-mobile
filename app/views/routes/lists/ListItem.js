/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        templates = require('js/templates/templates'),

        HouseActionsView = require('app/views/routes/lists/ListItemHouseActions'),

        houseTemplate = templates['house-list-item-view'];


    return Backbone.View.extend({

        className: 'house-list-item',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(houseTemplate(this.model.toJSON()));
            $('.house-actions', this.$el).append(new HouseActionsView({model: this.model}).$el);
            return this;
        }

    });

});