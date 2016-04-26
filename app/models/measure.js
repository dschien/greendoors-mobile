/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        globals = require('globals'),
        DualStorage = require('app/models/DualStorageCollection'),

        Measure = Backbone.Model.extend({
            urlRoot: globals.urls.measures
        }),

        MeasureCollection = DualStorage.Collection.extend({
            model: Measure,
            url: globals.urls.measures
        });

    return {
        Measure: Measure,
        MeasureCollection: MeasureCollection
    };

});