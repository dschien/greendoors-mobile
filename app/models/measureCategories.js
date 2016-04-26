/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        globals = require('globals'),
        DualStorage = require('app/models/DualStorageCollection'),

        MeasureCategory = Backbone.Model.extend({

            urlRoot: globals.urls.measurecategories

        }),

        MeasureCategoryCollection = DualStorage.Collection.extend({

            model: MeasureCategory,

            url: globals.urls.measurecategories

        });

    return {
        MeasureCategory: MeasureCategory,
        MeasureCategoryCollection: MeasureCategoryCollection
    };

});