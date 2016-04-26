/**
 * Created by schien on 10/11/2013.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        MapModel = require('app/models/map'),
        Richmarker = require('richmarker');

    var Map = Backbone.View.extend({
        className: 'mapcanvas',

        events: {
            "click #markerpoint-selection-button": 'selectPoint'
        },

        initialize: function (options) {
            _.bindAll(this, 'render', 'placeMarker', 'selectPoint');
            this.model = options.model;
            this.mapModel = new MapModel();
            this.leg = options.leg;
            $(this.el).attr('id', 'pointmap');

            var mapOptions = {
                center: new google.maps.LatLng(this.mapModel.get('latCenter'), this.mapModel.get('longCenter')),
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

            var self = this;

            var contentString = '<button id="markerpoint-selection-button" class="topcoat-button" onclick="window.location.hash=\'#routes\'">Select</button>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });


            google.maps.event.addListener(this.map, 'click', function (event) {
                var marker = self.placeMarker(event.latLng);
                infowindow.open(self.map, marker);
            });

        },

        mapResize: function () {
            var mapcanvas = $('#pointmap');
            mapcanvas.css('height', $(window).height() - 2 * mapcanvas.css('top').replace(/[^-\d\.]/g, ''));
            google.maps.event.trigger(this.map, 'resize');
        },

        render: function () {
            google.maps.event.trigger(this.map, 'resize');

            return this;
        },
        selectPoint: function () {
            var location = this.marker.getPosition();
            window.greendoors.routingModel.set(this.leg, {latitude: location.lat(), longitude: location.lng()});
        },

        placeMarker: function (location) {


            if (this.marker) {
                this.marker.setPosition(location);
            } else {

                var contentString = '<i class="fa fa-circle fa-2x"></i>';

                this.marker = new Richmarker({
                    position: location,
                    map: this.map,
                    draggable: false,
                    flat: true,
                    content: contentString
                });
            }
            return this.marker; // for chainable calls, like .render().el
        }
    });

    return Map;
})
;