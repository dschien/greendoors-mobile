/**
 * Created by schien on 10/11/2013.
 */
define(['backbone', 'richmarker'],
    function (Backbone, Richmarker) {
        var settings = require('app/models/settings');
        var MapHouseView = Backbone.View.extend({
            tagName: 'li', // name of (orphan) root tag in this.el
            className: "mapIcon",
            initialize: function (options) {
                _.bindAll(this, 'render', 'refresh', 'showHome', 'remove'); // every function that uses 'this' as the current object should be in here
                this.listenTo(window.greendoors.favourites, 'add remove sync', this.refresh);
                this.listenTo(this.model, 'sync change', this.change);
                this.map = options.map;
            },
            refresh: function (model, collection, options) {
                if (this.model.get('id') === model.get('house')) {
                    this.render();
                }
            },
            change: function (model, propertyValue) {
                console.log('model changed:' + model.changed)
                if (model.changed.hasOwnProperty('selected')){
                    this.render()
                }
            },
            render: function () {

                var latlng = new google.maps.LatLng(this.model.get('latitude'), this.model.get('longitude'));

                var contentString = '<div class="numberCircle">' + this.model.get('id') + '</div>';

                if (this.model.get('selected')) {
                    contentString = '<div class="numberCircle selected">' + this.model.get('id') + '</div>';
                }

                if (window.greendoors.favourites.isFavourite(this.model.get('id'))) {
                    contentString = '<i class="mapIcon fa fa-star fa-2x"></i>'.concat(contentString);
                }

                console.log('adding location marker for house ' + this.model.get('id'))

                if (typeof this.location_marker != 'undefined' && !this.location_marker == null) {
                    this.location_marker.setMap(null);
                    this.location_marker = null;
                }

//                this.location_marker = new google.maps.Marker({
//                    position: latlng,
//                    map: this.map,
//                    title: 'Hello World!'
//                });

                this.location_marker = new Richmarker({
                    position: latlng,
                    map: this.map,
                    draggable: false,
                    flat: true,
                    content: contentString
                });
                var self = this;

                google.maps.event.addListener(this.location_marker, 'click', function () {
                    self.showHome(self.model.get('id'));
                });

                return this; // for chainable calls, like .render().el
            },
            showHome: function (id) {
                settings.set('selectedHouse', this.model.get('id'));
                Backbone.history.navigate("houses/" + this.model.get('id'), true);
            },

            remove: function () {
                this.location_marker.setMap(null);
//                this.location_marker.onRemove();
//                $(this.location_marker.content).remove()
                this.location_marker = null;

            }
        });
        return MapHouseView;
    });