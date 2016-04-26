/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        templates = require('js/templates/templates'),
        settings = require('app/models/settings'),
        HouseActionsView = require('app/views/list/ListItemHouseActions'),

        houseTemplate = templates['house-list-item-view'];


    return Backbone.View.extend({

        className: 'house-list-item',

        initialize: function () {
            _.bindAll(this, 'render', 'refreshFav', 'navigate', 'refreshHouse'); // every function that uses 'this' as the current object should be in here
            this.render();
            this.listenTo(window.greendoors.favourites, 'add remove sync', this.refreshFav);
            this.listenTo(this.model, 'sync change', this.refreshHouse);
        },
        events: {"click": 'navigate'},
        refreshFav: function (model, collection, options) {
            if (this.model.get('id') === model.get('id')) {
                this.render();
            }
        },
        refreshHouse: function (model, collection, options) {
            if (this.model.get('id') === model.get('id')) {
                this.render();
            }
        },
        navigate: function () {
            settings.set('selectedHouse', this.model.get('id'));
            Backbone.history.navigate("houses/" + this.model.get('id'), true);
        },
        delegateEventsToChildren: function () {
            this.houseActionsView.delegateEvents();
        },
        render: function () {
            var data = this.model.toJSON();
            data.baseUrl = require.toUrl('');
            this.$el.html(houseTemplate(data));
            if (this.model.get('selected')) {
                this.$el.addClass('selected')
            } else {
                this.$el.removeClass('selected')
            }
            this.houseActionsView = new HouseActionsView({model: this.model});
            $('.house-actions', this.$el).append(this.houseActionsView.$el);
            return this;
        },
        close: function () {
            this.remove();
            this.unbind();
            this.houseActionsView.close();
        }

    });

});