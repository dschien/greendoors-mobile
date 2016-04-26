/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        LocationMapView = require('app/views/routes/legs/LocationMapView'),
        templates = require('js/templates/templates');

    return Backbone.View.extend({

        initialize: function (options) {
            this.templateName = options.templateName;
            this.data = options.model ? options.model.toJSON() : {};
            this.leg = options.leg;
            this.render();
        },

        render: function () {
            this.$el.html(templates[this.templateName](this.data));
            if (window.greendoors.routingModel.has(this.leg)) {
                this.mapView = new LocationMapView({model: window.greendoors.routingModel, leg: this.leg});
                $('#locationMap', this.$el).append(this.mapView.$el);
                setTimeout(this.mapView.render);
            }
            return this;
        }
    });

});