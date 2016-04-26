/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        MapPlanningView = require('app/views/routes/mapplanning/MapPlanningMapView'),
        MapView = require('app/views/map/MapView'),
        models = require('app/models/house'),
        templates = require('js/templates/templates'),
        MapModel = require('app/models/map'),
        template = templates['routes_mapplanning'];


    return Backbone.View.extend({

        events: {
            "click #route-calculation": "calculate"
        },

        initialize: function () {
            this.mapView = new MapPlanningView({collection: window.greendoors.houses});
        },

        render: function () {
            this.$el.html(template());
            $('#routemap', this.$el).append(this.mapView.$el);

            return this;
        },

        calculate: function () {
            this.mapView.route();
        }

    });

});