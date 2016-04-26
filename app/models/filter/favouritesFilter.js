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
            defaults: {
                features: [],
                name: 'favs'
            },
            filter: function (it) {
                return _.contains(window.greendoors.favourites.pluck('house'), it.get('id'));
            }


        });

    return new Filter();

})
;