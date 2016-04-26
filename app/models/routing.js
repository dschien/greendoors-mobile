/**
 * Created by schien on 10/11/2013.
 */
define(['backbone'

], function (Backbone) {
    "use strict";
    var RoutingModel = Backbone.Model.extend({
        // never on the server
        local: true,
        defaults: {
            waypoints: []
        },
        toggle: function (house_id) {
            var waypoints = this.get('waypoints');
            if (_.contains(waypoints, house_id)) {
                this.set('waypoints', _.without(waypoints, house_id));
            } else {
                waypoints.push(house_id);
                this.set('waypoints', waypoints);
            }
        },

        isWaypoint: function (house_id) {
            return _.contains(this.get('waypoints'), house_id);
        },

        hasHouse: function (house_id) {
            return this.isWaypoint(house_id);
        }

    });
    return RoutingModel;
});