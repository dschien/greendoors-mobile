/**
 * Created by schien on 10/11/2013.
 */
define(['backbone'
    , 'app/views/map/MapHouseView',
    'app/views/map/ClearRouteMapControl',
    'app/views/filter/DaysFilter',

    'globals'
], function (Backbone, MapHouse, ClearRouteMapControl, DaysFilter, globals) {
    "use strict";
    var device = require('app/models/device');

    var Map = Backbone.View.extend({

            className: globals.viewConfig.mapViewListDefaultClass,

            initialize: function (options) {
                _.bindAll(this, 'render', 'addMarker', 'centerMap', 'coordinateChange', 'applyFilter');

                $(this.el).attr('id', 'mainmap');
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

                google.maps.visualRefresh = true;


                this.map = new google.maps.Map(this.el, mapOptions);

                this.model.bind('change', this.coordinateChange);

                this.model.bind('change:latCenter', this.centerMap);
                this.model.bind('change:longCenter', this.centerMap);

                this.filter = options.filter;
                this.listenTo(this.filter, "change", this.applyFilter, this);

                this.listenTo(this.collection, "add", this.addHouse, this);
                this.listenTo(this.collection, "remove", this.removeHouse, this);

                this.daysFilter = options.daysFilter;
                this.listenTo(this.daysFilter, "change", this.applyFilter, this);
                this.addDayFilterControl();
                this.applyFilter();
                this.removeRouteOverlayControl = null;
                $(window).bind("orientationchange.app", _.bind(this.render, this));
                $(window).bind("resize.app", _.bind(this.render, this));

//                window.addEventListener('orientationchange', this.render);
            },

            addHouse: function (house, collection, options) {
                this.addMarker(house);
            },

            removeHouse: function (house, collection, options) {
                this.markers[house.id].remove();
                delete this.markers[house.id];
            },
            markers: {},
            removeMarkers: function () {
                _.each(this.markers, function(marker){
                    console.log('removing house ' + marker.model.id)
                    marker.remove();
                    marker = null;
                })

                this.markers = {};
            },

            render: function () {
                var $mapcanvas = $('#mainmap');
                var topMargin = 0;
                if (typeof device != 'undefined') {
                    topMargin = device.get('topMargin');
                }
                $mapcanvas.css('height', window.innerHeight - 2 * 48 - topMargin);
                $mapcanvas.css('position', 'absolute');
                google.maps.event.trigger(this.map, 'resize');
                return this;
            },


            addMarker: function (house) {
                console.log('adding house ' + house.id)
                if (this.markers.hasOwnProperty(house.id) && this.markers[house.id] != null) {
                    return;
                }
                var mapHouse = new MapHouse({model: house, map: this.map});
                mapHouse.render();
                this.markers[house.id] = mapHouse;
            },

            centerMap: function () {
                var lat = this.model.get('latCenter');
                var lng = this.model.get('longCenter');
                this.map.setZoom(15);
                var center = new google.maps.LatLng(lat, lng);
//                this.map.setCenter(center);
                this.map.panTo(center);
            },

            fitBoundingBox: function () {

                var houses = []
                var self = this;
                _.each(_.keys(this.markers), function (key) {
                    houses.push(self.markers[key].model.toJSON())
                })

                var longitudes = _.pluck(houses, 'longitude');
                var latitudes = _.pluck(houses, 'latitude');

                var lat_n = _.max(latitudes);
                var long_w = _.min(longitudes);
                var lat_s = _.min(latitudes);
                var long_e = _.max(longitudes);

                var ne = new google.maps.LatLng(lat_n, long_e);
                var sw = new google.maps.LatLng(lat_s, long_w);

                this.map.fitBounds(new google.maps.LatLngBounds(sw, ne));
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
//            directionsRenderer.setPanel(document.getElementById('directionsPanel'));

//            @TODO specify mode
//            var selectedMode = document.getElementById("mode").value;
                var request = {
                    origin: start,
                    destination: end,
                    waypoints: waypts,
                    optimizeWaypoints: true,
                    travelMode: google.maps.TravelMode.DRIVING
                };
                directionsService.route(request, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsRenderer.setDirections(response);
                    }
                });
                this.model.set('directionsRenderer', directionsRenderer);
                this.showClearControl();

            },
            addDayFilterControl: function () {

                var daytoggle = new DaysFilter({daysFilter: this.daysFilter}).render().el;
                daytoggle.index = 1;
                this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(daytoggle);
            },

            showClearControl: function () {
                if (this.removeRouteOverlayControl) {
                    this.removeRouteOverlayControl.close();
                }
                this.removeRouteOverlayControl = new ClearRouteMapControl({parent: this, renderer: this.model.get('directionsRenderer')});

                this.removeRouteOverlayControl.index = 1;
                this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(this.removeRouteOverlayControl.render().el);
            },

            coordinateChange: function () {

                if (_.contains(_.keys(this.model.changedAttributes()), 'latStart')) {
                    $("#start").html(this.model.get('id'));
                }

                else if (_.contains(_.keys(this.model.changedAttributes()), 'latEnd')) {
                    $("#end").html(this.model.get('id'));
                }
            },
            applyFilter: function (change) {

                this.removeMarkers();
                var self = this;
                var count = 0;


                // filter out houses that fit the filter

                this.collection.each(function (houseModel) {
                    if (self.filter.filter(houseModel)) {
                        var inc = false;
                        // if this is a change event to filter all -> ignore days filter
                        if (typeof change !== 'undefined' && 'activeFilter' in change.changed && self.filter.get('activeFilter').get('name') == 'all') {
                            inc = true;
                        } else if (self.daysFilter.filter(houseModel)) {
                            inc = true;
                        }
                        if (inc) {
                            self.addHouse(houseModel);
                            count++;
                        }
                    }

                });
                if (count > 0) {
                    this.fitBoundingBox();
                }
            },
            close: function () {
                $(window).unbind("resize.app");
                $(window).unbind("orientationchange.app");
                this.removeMarkers();
                this.remove();
                this.unbind();
            }


        })
        ;

    return Map;
})
;