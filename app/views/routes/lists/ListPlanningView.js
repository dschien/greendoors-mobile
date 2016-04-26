/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        HouseListView = require('app/views/routes/lists/HouseList'),
        models = require('app/models/house'),

        templates = require('js/templates/templates');


    return Backbone.View.extend({

        initialize: function (selectionList) {
            this.selectionList = selectionList;

            this.listView = new HouseListView({collection: window.greendoors.houses, selectionList: this.selectionList});
        },

        render: function () {

            this.$el.append(this.listView.render().$el);

            return this;
        }


    });

});