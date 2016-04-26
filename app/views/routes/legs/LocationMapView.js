/**
 * Created by schien on 10/11/2013.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Richmarker = require('richmarker');

    var Map = Backbone.View.extend({
        className: 'mapcanvas-small',

        initialize: function (options) {
            _.bindAll(this, 'render');
            this.model = options.model;
            this.leg = options.leg;

            var mapOptions = {
                center: new google.maps.LatLng(this.model.get(this.leg).latitude, this.model.get(this.leg).longitude),
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL
                },
                mapTypeControl: false,
                panControl: false,
                scaleControl: false,
                streetViewControl: false,
                overviewMapControl: false
            };

            this.map = new google.maps.Map(this.el, mapOptions);
            this.addMarker();
        },

        render: function () {

            google.maps.event.trigger(this.map, 'resize');

            var lat = this.model.get(this.leg).latitude;
            var lng = this.model.get(this.leg).longitude;
            this.map.setZoom(15);
            var center = new google.maps.LatLng(lat, lng);
            this.map.setCenter(center);
//            this.map.panTo(center);

            return this;
        },

        addMarker: function () {
            this.latlng = new google.maps.LatLng(this.model.get(this.leg).latitude, this.model.get(this.leg).longitude);

            var contentString = '<i class="fa fa-circle fa-2x"></i>';

            this.location_marker = new Richmarker({
                position: this.latlng,
                map: this.map,
                draggable: false,
                flat: true,
                content: contentString
            });

            return this; // for chainable calls, like .render().el
        }
    });

    return Map;
})
;