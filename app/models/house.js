/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        globals = require('globals'),
        DualStorage = require('app/models/DualStorageCollection'),

        House = Backbone.Model.extend({
            urlRoot: globals.urls.houses
        }),

        HouseCollection = DualStorage.Collection.extend({
            model: House,
            url: globals.urls.houses
        });

    return {
        House: House,
        HouseCollection: HouseCollection
    };

});