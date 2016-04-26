/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        MapPointMapView = require('app/views/routes/legs/MapPointMapView'),
        templates = require('js/templates/templates'),
        MapModel = require('app/models/map'),
        template = templates['routes_point_selection'];


    return Backbone.View.extend({

        initialize: function (options) {
            this.templateName = options.templateName;
            this.data = options.model ? options.model.toJSON() : {};
            this.leg = options.leg;
            this.mapView = new MapPointMapView({model: window.greendoors.routingModel, leg: this.leg});
        },

        render: function () {
            this.$el.html(template());
            $('#routes-pointselection', this.$el).prepend(this.mapView.$el);

            return this;
        }

    });

});