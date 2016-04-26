/**
 * Created by schien on 19/11/13.
 *
 * Show the view waiting for current location.
 * Then go to whatever page was chose before.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        GeoLocationService = require('js/services/GeolocationService'),
        templates = require('js/templates/templates'),
        template = templates['wait'];


    return Backbone.View.extend({

        initialize: function (options) {
            _.bindAll(this, 'positionCallback', 'errorCallback');
            this.nextRoute = options.nextRoute;
            this.leg = options.leg;
            // start querying straight away
            GeoLocationService.queryCurrentLocation(this.errorCallback, this.positionCallback);
        },
        positionCallback: function (lat, long) {
            // save and move back to main menu
            window.greendoors.routingModel.set(this.leg, {latitude: lat, longitude: long});
            Backbone.history.navigate(this.nextRoute, {trigger:true, replace:true});
            this.close();
            window.greendoors.routingModel.set('isPollingLocation', false);
        },
        errorCallback: function (error) {
            $('#errorMsg', this.$el).append("something went wrong");
        },

        render: function () {
            var data = {header: 'Waiting for Position', message: 'Will update when position found.'}
            this.$el.html(template(data));
            var self = this;
            setTimeout(function(){self.close();}, 3000);
            return this;
        },
        close: function () {
            this.remove();
            this.unbind();

        }

    });

});