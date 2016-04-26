/**
 * Created by schien on 19/11/13.
 *
 * Show the waiting for current location view, then show the map view with route calculation.
 *
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        GeoLocationService = require('js/services/GeolocationService'),
        templates = require('js/templates/templates'),
        template = templates['routes_mapplanning_position'];


    return Backbone.View.extend({

        initialize: function (options) {
            _.bindAll(this, 'positionCallback', 'errorCallback');
            this.nextView = options.nextView;
            // start querying straight away
            GeoLocationService.queryCurrentLocation(this.errorCallback, this.positionCallback);
            this.leg = options.leg;
        },

        positionCallback: function (lat, long) {
            // save and move back to main menu
            window.greendoors.routingModel.set(this.leg, {latitude: lat, longitude: long});
            Backbone.history.navigate(this.nextView, true);
        },
        errorCallback: function (error) {
            $('#errorMsg', this.$el).append("something went wrong");
        },

        render: function () {
            this.$el.html(template());
            return this;
        }

    });

});