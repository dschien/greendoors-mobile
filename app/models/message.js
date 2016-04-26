/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        globals = require('globals'),

        Message = Backbone.Model.extend({

            urlRoot: globals.urls.message

        }),

        MessageCollection = Backbone.Collection.extend({

            model: Message,

            url: globals.urls.message

        });

    return {
        Message: Message,
        MessageCollection: MessageCollection
    };

});