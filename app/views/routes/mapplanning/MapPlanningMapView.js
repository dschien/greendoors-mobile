/**
 * Created by schien on 10/11/2013.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        MapHouse = require('app/views/routes/mapplanning/MapPlanningHouseView'),
        MapModel = require('app/models/map');

    var Map = Backbone.View.extend({
        className: 'mapcanvas',

        initialize: function () {
            _.bindAll(this, 'render', 'addMarker', 'centerMap', 'coordinateChange');

            this.model = new MapModel();

            $(this.el).attr('id', 'planningmap');
            var mapOptions = {
                center: new google.maps.LatLng(this.model.get('latCenter'), this.model.get('longCenter')),
                zoom: 15,
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

            this.model.bind('change', this.coordinateChange);

            this.model.bind('change:latCenter', this.centerMap);
            this.model.bind('change:longCenter', this.centerMap);

            this.listenTo(this.collection, "add", this.addHouse, this);
            this.listenTo(this.collection, "remove", this.removeHouse, this);

            var self = this;
            this.collection.each(function (it) {
                self.addHouse(it);
            });


        },

        addHouse: function (house, collection, options) {
            this.addMarker(house);
        },

        removeHouse: function (house, collection, options) {
            this.markers[house].remove();
            delete this.markers[house];
        },
        markers: {},
        removeMarkers: function () {
            var len = this.markers.length;
            while (len--) {
                var marker = this.markers.splice(len, 1);
                marker.remove();
                marker = null;
            }
        },

        render: function () {
            google.maps.event.trigger(this.map, 'resize');
            return this;
        },

        mapResize: function () {
            var mapcanvas = $('#planningmap');
            mapcanvas.css('height', $(window).height() - 2 * mapcanvas.css('top').replace(/[^-\d\.]/g, ''));
            google.maps.event.trigger(this.map, 'resize');
        },

        addMarker: function (house) {
            var mapHouse = new MapHouse({model: house, map: this.map});
            mapHouse.render();
            this.markers[house] = mapHouse;
        },

        centerMap: function () {
            var lat = this.model.get('latCenter');
            var lng = this.model.get('longCenter');
            this.map.setZoom(15);
            var center = new google.maps.LatLng(lat, lng);
//                this.map.setCenter(center);
            this.map.panTo(center);
        },

        route: function () {

            if (_.has(this.model, 'directionsRenderer')) {
                directionsRenderer = this.model.get('directionsRenderer')
                directionsRenderer.setMap(null);
                directionsRenderer.setPanel = null;
                directionsRenderer = null;
            }

            var rendererOptions = {
                draggable: true
            };

            var directionsRenderer;
            var directionsService = new google.maps.DirectionsService(rendererOptions);

            var startLoc = window.greendoors.routingModel.get('start');
            var endLoc = window.greendoors.routingModel.get('end');

            var start = new google.maps.LatLng(startLoc.latitude, startLoc.longitude);
            var end = new google.maps.LatLng(endLoc.latitude, endLoc.longitude);

            var waypts = [];

            this.collection.each(function (it) {
                if (it.get('selected')) {
                    waypts.push({
                        location: new google.maps.LatLng(it.get('latitude'), it.get('longitude')),
                        stopover: true
                    });
                }
            })


            directionsRenderer = new google.maps.DirectionsRenderer();

            directionsRenderer.setMap(this.map);
            // set default mode
            if (!window.greendoors.routingModel.has('mode')) {
                window.greendoors.routingModel.set('mode', 'BICYCLING');
            }

            var request = {
                origin: start,
                destination: end,
                waypoints: waypts,
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode[window.greendoors.routingModel.get('mode')]
            };
            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsRenderer.setDirections(response);
                }
            });
            this.model.set('directionsRenderer', directionsRenderer);

        },
        coordinateChange: function () {

            if (_.contains(_.keys(this.model.changedAttributes()), 'latStart')) {
                $("#start").html(this.model.get('id'));
            }

            else if (_.contains(_.keys(this.model.changedAttributes()), 'latEnd')) {
                $("#end").html(this.model.get('id'));
            }
        }

    });

    return Map;
})
;