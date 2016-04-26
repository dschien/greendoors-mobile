/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        templates = require('js/templates/templates'),
        clearRouteTemplate = templates['clear-route-control'];


    return Backbone.View.extend({

        initialize: function (options) {
            _.bindAll(this, 'render', 'removeRouteOverlay');
            this.parent = options.parent;
            this.directionsRenderer = options.renderer;
            this.render();
        },
        events: {
            "click .removeRouteOverlayControl": 'removeRouteOverlay'
        },
        render: function () {
            this.$el.html(clearRouteTemplate());
            return this;
        },
        removeRouteOverlay: function () {
            this.parent.map.controls[google.maps.ControlPosition.TOP_RIGHT].clear();
            this.directionsRenderer.setMap(null);
            this.parent.centerMap();
            this.parent.fitBoundingBox();
            this.remove();
        },
        close:function(){
            this.removeRouteOverlay();
        }

    });

});