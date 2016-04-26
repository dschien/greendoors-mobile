/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        allFilter = require('app/models/filter/allFilter'),
        favouriteFilter = require('app/models/filter/favouritesFilter'),
        featureFilter = require('app/models/filter/featureFilter'),
        globals = require('globals'),
        Filter = Backbone.Model.extend({

            urlRoot: globals.urls.filter,

            local: true, // never save remotely
            defaults: {
                activeFilter: null
            },
            initialize: function (attributes, options) {
                _.bindAll(this, 'filter');
            },

            filter: function (item) {
                return this.get('activeFilter') ? this.get('activeFilter').filter(item) : true;
            }




        });

    return new Filter();

})
;