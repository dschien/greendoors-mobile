/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        globals = require('globals'),
        Filter = Backbone.Model.extend({

            urlRoot: globals.urls.filter,

            local: true, // never save remotely

            sat: 1,
            sun: 2,
            both: 3,
            // 3 - both, 2
            defaults: {
                features: [],
                name: 'day',
                day: null
            },
            matches: function (houseDay) {
                switch (this.get('day')) {
                    case 1:
                        return _.contains([1], houseDay);
                    case 2:
                        return _.contains([2], houseDay);
                    case 3:
                        return _.contains([1, 2, 3], houseDay);
                }
                return false;
            },
            filter: function (it) {
                return this.get('day') ? this.matches(it.get('day')) : true;
            }
        });

    return new Filter();

})
;