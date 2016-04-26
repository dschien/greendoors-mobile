/**
 * Created by schien on 10/11/2013.
 */
define(['backbone'

], function (Backbone) {
    "use strict";
    var Map = Backbone.Model.extend({
        defaults: {
            latCenter: 51.455698,
            longCenter: -2.602118
        },
        // never on the server
        local: true
    });
    return Map;
});