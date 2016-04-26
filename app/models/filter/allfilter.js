/**
 * Created by schien on 19/11/13.
 *
 * Filters nothing.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        globals = require('globals'),
        Filter = Backbone.Model.extend({

            urlRoot: globals.urls.filter,

            local: true, // never save remotely
            defaults: {
                name: 'all'
            },
            filter: function () {
                return true;
            }
        });

    return new Filter();

})
;