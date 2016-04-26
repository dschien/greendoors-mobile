/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Favourite = require('app/models/favourite'),
        user = require('app/models/user'),
        settings = require('app/models/settings'),
        templates = require('js/templates/templates'),
        actionsTemplate = templates['house-actions-list-item'];


    return Backbone.View.extend({

        initialize: function () {
            _.bindAll(this, "render", 'centerMap', 'toggleFavourite', 'routeThere', 'refresh');
            this.listenTo(window.greendoors.favourites, 'add remove', this.refresh);
            this.listenTo(user, 'change:authenticated', this.render);
            this.listenTo(settings, 'change:offline', this.render);
            this.render();
        },
        events: {
            "click button:enabled.showon-map": 'centerMap',
            "click button:enabled.toggle-favourite": 'toggleFavourite',
            "click button:disabled.toggle-favourite": 'showLoginNote',
            "click button:enabled.route-there": 'routeThere'

        },
        refresh: function (model, collection, options) {
            if (this.model.get('id') === model.get('house')) {
                this.render();
            }
        },
        render: function () {
            var data = this.model.toJSON();
            data.offline = settings.get('offline');
            // show save favourite button?
            data.guestMode = !user.get('authenticated');

            // is fav?
            if (window.greendoors.favourites.isFavourite(this.model.get('id'))) {
                data.fav = true;
            }

            this.$el.html(actionsTemplate(data));
            return this;
        },
        centerMap: function (event) {
            event.preventDefault();
            event.stopPropagation();
            window.greendoors.mapModel.set({'longCenter': this.model.get('longitude'), 'latCenter': this.model.get('latitude'), 'id': this.model.get('id')});
            Backbone.history.navigate('main/map' + this.model.get('id'), true);


        },

        toggleFavourite: function (event) {
            event.preventDefault();
            event.stopPropagation();
            // check if this exists
            window.greendoors.favourites.toggle(this.model.get('id'));

        },
        routeThere: function (event) {
            event.preventDefault();
            event.stopPropagation();
            Backbone.history.navigate('directionFromLocation/' + this.model.get('id'), {replace:true, trigger:true});

        },
        close: function () {
            this.remove();
            this.unbind();
        }
    });
});