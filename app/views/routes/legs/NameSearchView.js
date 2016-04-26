/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        MapPointMapView = require('app/views/routes/legs/NameSearchMapView'),
        templates = require('js/templates/templates'),
        MapModel = require('app/models/map'),
        template = templates['routes_name_search'];


    return Backbone.View.extend({

        initialize: function (options) {
            this.templateName = options.templateName;
            this.data = options.model ? options.model.toJSON() : {};
            this.leg = options.leg;
            this.mapView = new MapPointMapView({model: window.greendoors.routingModel, leg: this.leg});
        },

        render: function () {
            this.$el.html(template());
            var searchbox = $('#pac-input', this.$el);
            this.mapView.render(searchbox[0]);
            $('#routemap', this.$el).append(this.mapView.$el);

            return this;
        }

    });

});