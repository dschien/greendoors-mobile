/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        globals = require('globals'),

        UserAction = Backbone.Model.extend({

            urlRoot: globals.urls.useraction,
            defaults: {
                'device': typeof device != 'undefined' ? device.platform + " " + device.version : navigator.userAgent.substring(0, Math.min(1024, navigator.userAgent.length))
            }

        }),

        UserActionCollection = Backbone.Collection.extend({

            model: UserAction,

            url: globals.urls.useraction

        });

    return {
        UserAction: UserAction,
        UserActionCollection: UserActionCollection
    };

});