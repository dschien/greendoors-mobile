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
            _.bindAll(this, 'render');
            this.model = options.model;
            this.mapModel = new MapModel();
            this.leg = options.leg;

            $(this.el).attr('id', 'map-canvas');

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
            this.markers = [];


        },

        mapResize: function () {
            var mapcanvas = $('#map-canvas');
            mapcanvas.css('height', $(window).height() - 2 * mapcanvas.css('top').replace(/[^-\d\.]/g, ''));
            google.maps.event.trigger(this.map, 'resize');
        },

        render: function (input) {
            this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            var searchBox = new google.maps.places.SearchBox(
                /** @type {HTMLInputElement} */(input));

            var self = this;

            // [START region_getplaces]
            // Listen for the event fired when the user selects an item from the
            // pick list. Retrieve the matching places for that item.
            google.maps.event.addListener(searchBox, 'places_changed', function () {
                var places = searchBox.getPlaces();

                for (var i = 0, marker; marker = self.markers[i]; i++) {
                    marker.setMap(null);
                }


                var contentString = '<button id="markerpoint-selection-button" class="topcoat-button" onclick="window.location.hash=\'#routes\'">Select</button>';
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                // For each place, get the icon, place name, and location.
                self.markers = [];
                var bounds = new google.maps.LatLngBounds();
                for (var i = 0, place; place = places[i]; i++) {
                    var image = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };

                    // Create a marker for each place.
                    var marker = new google.maps.Marker({
                        map: self.map,
                        icon: image,
                        title: place.name,
                        position: place.geometry.location
                    });

                    google.maps.event.addListener(marker, 'click', function (evt) {
                        self.lat = evt.latLng.lat();
                        self.lng = evt.latLng.lng();
                        infowindow.open(self.map, marker);
                    });

                    self.markers.push(marker);

                    bounds.extend(place.geometry.location);
                }

                self.map.fitBounds(bounds);
            });
            // [END region_getplaces]

            // Bias the SearchBox results towards places that are within the bounds of the
            // current map's viewport.


            google.maps.event.addListener(this.map, 'bounds_changed', function () {
                var bounds = self.map.getBounds();
                searchBox.setBounds(bounds);
            });

            google.maps.event.trigger(this.map, 'resize');

            return this;
        },
        selectPoint: function () {
            window.greendoors.routingModel.set(this.leg, {latitude: this.lat, longitude: this.lng});
        }

    });

    return Map;
})
;