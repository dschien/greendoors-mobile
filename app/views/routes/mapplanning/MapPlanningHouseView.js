/**
 * Created by schien on 10/11/2013.
 */
define(['backbone', 'richmarker', 'js/templates/templates'],
    function (Backbone, Richmarker, templates) {
        var MapHouseView = Backbone.View.extend({
            tagName: 'li', // name of (orphan) root tag in this.el

            initialize: function (options) {
                _.bindAll(this, 'render', 'tap', 'remove'); // every function that uses 'this' as the current object should be in here

                this.listenTo(this.model, "change:selected", this.refresh, this);

                this.latlng = new google.maps.LatLng(this.model.get('latitude'), this.model.get('longitude'));
                this.map = options.map;
            },
            refresh: function () {
                this.remove();
                this.render();
            },
            render: function () {

                var contentString = templates['routes_mapplannig_mapmarker'](this.model.toJSON());

                this.location_marker = new Richmarker({
                    position: this.latlng,
                    map: this.map,
                    draggable: false,
                    flat: true,
                    content: contentString
                });
                var self = this;

                google.maps.event.addListener(this.location_marker, 'click', function () {
                    self.tap(self.model.get('id'));
                });


                return this; // for chainable calls, like .render().el
            },
            tap: function () {
                this.model.set('selected', !this.model.get('selected'));
            },
            remove: function () {
                this.location_marker.setMap(null);
                this.location_marker = null;
            }
        });
        return MapHouseView;
    });