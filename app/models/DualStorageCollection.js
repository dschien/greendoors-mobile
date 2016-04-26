/**
 * Created by schien on 23/11/13.
 */
/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        globals = require('globals'),
        settings = require('app/models/settings'),

        DualStorageCollection = Backbone.Collection.extend({
            initialize: function () {
                this.listenTo(settings, 'change:offline', this.connectionChange);
                // on app start, sync
            },
            local: function () {
                return settings.get('offline');
            },
            connectionChange: function () {
                if (!settings.get('offline')) { // we're back online -> sync to server
                    this.syncDirtyAndDestroyed();
                }
            }
        });

    return {
        Collection: DualStorageCollection
    };

});