/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        globals = require('globals'),

        Scan = Backbone.Model.extend({

            urlRoot: globals.urls.scans

        }),

        ScanCollection = Backbone.Collection.extend({

            model: Scan,
            local: false,
            url: globals.urls.scans

        });

    return {
        Scan: Scan,
        ScanCollection: ScanCollection
    };

});