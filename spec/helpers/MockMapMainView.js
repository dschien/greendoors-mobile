/**
 * Created with JetBrains WebStorm.
 * User: schien
 * Date: 23/07/13
 * Time: 17:36
 * To change this template use File | Settings | File Templates.
 */
/* jshint sub:true */

define([
        'jquery',
//    'gmaps',
//    'js/lib/google_maps',
//    'richmarker',
        'js/constants'
//    'async!https://maps.googleapis.com/maps/api/js?sensor=true'
    ],
    /*
     @param {!jQuery} $
     @param {!js/modules/richmarker_req} Richmarker
     */
    function ($, constants) {
        console.log('MapMainView.js');
        var MapMainView = function () {
            "use strict";

            var self = this;

            this.initialize = function () {
                console.log('map init');
                this.el = $('<div id="mapcanvas" class="map-homepage" style="background-color: red"/>');

                this.map = {};
                $.Topic(constants.MAINVIEW_CENTERMAP).subscribe(this.centerMap);
                $.Topic(constants.LOCATION_CHANGED).subscribe($.proxy(this.updatePositionMarker, this));

            };


            this.getPositionMarkerHTML = function () {
                return '<div><i class="icon-circle icon-2x mapmarker-position"></i></div>';
//                return '<div><i class="mapmarker-position"></i></div>';
            };

            this.updatePositionMarker = function (lat, lng) {
                $('#mapcanvas').append($('<p>Lat, long: ' + lat + ',' + lng + '</p>'))
            };

            this.removePositionMaker = function () {
                if (typeof this.positionMarker !== 'undefined' && this.positionMarker !== null) {
                    this.positionMarker.setMap(null);
                    this.positionMarker = null;
                }
            };


            this.getMarkerDefinition = function (house) {

                var classString = house.open > 0 ? 'open' : 'closed';
                var text = '<div><i class="icon-home icon-4x mapmarker-' + classString + '"></i></div>';

                return text;
            };

            this.addMapMarkers = function (houses) {
                this.markers = [];

                var i;
                for (i = 0; i < houses.length; i++) {
                    var house = houses[i];

                    var marker = $('<p>house' + house.id + '</p>');
                    $('#mapcanvas').append(marker)

                    this.markers.push(marker);
                }
            };

            var showHome = function (id) {
                return function () {
                    window.location.hash = 'homes/' + id;
                };
            };


            this.render = function (houses) {
                console.log('render');

                if (typeof houses === "undefined") {
                    return this;
                }

                this.addMapMarkers(houses);
                return this;
            };

            this.mapResize = function () {
                var mapcanvas = $('#mapcanvas');
                mapcanvas.css('height', $(window).height() - 2 * mapcanvas.css('top').replace(/[^-\d\.]/g, ''));

            };

            this.clearOverlays = function () {
                if (this.markers) {
                    for (var i = 0; i < this.markers.length; i++) {
                        this.markers[i].remove();
                        this.markers[i] = null;
                    }

                    this.markers = null;
                }
            };

            this.centerMap = function (lat, lng) {
            };

            this.setModel = function (houses) {

                if (houses.length === 0) {

                    this.clearOverlays();


                    return;
                } else {
                    // find bounding box

                    // remove all markers
                    this.clearOverlays();
                    // add new markers
                    this.addMapMarkers(houses);
                }
            };


            this.remove = function () {
                // todo implement
                this.clearOverlays();
                this.map = null;
                this.el.remove();
            };


            this.initialize();


        };


        return MapMainView;
    }
)
;
