/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Favourite = require('app/models/favourite'),
        templates = require('js/templates/templates'),
        actionsTemplate = templates['routes-list-house-actions-list-item'];


    return Backbone.View.extend({

        initialize: function () {
            _.bindAll(this, "render", 'centerMap', 'toggleWaypoint');
            this.listenTo(this.model, 'change:selected', this.render);

            this.render();
        },
        events: {
            "click a.showon-map": 'centerMap',
            "click a.toggle-waypoint": 'toggleWaypoint'
        },
        render: function () {
            var data = this.model.toJSON();

            // is waypoint?
            if (this.model.get('selected')) {
                data.waypoint = true;
            }

            this.$el.html(actionsTemplate(data));
            return this;
        },
        centerMap: function () {
            window.greendoors.mapModel.set({'longCenter': this.model.get('longitude'), 'latCenter': this.model.get('latitude'), 'id': this.model.get('id')});
            return false;
        },
        toggleWaypoint: function () {
            // check if this exists
            this.model.set('selected', !this.model.get('selected'));
//            window.greendoors.routingModel.toggle(this.model.get('id'));
            return false;
        }
    });
});