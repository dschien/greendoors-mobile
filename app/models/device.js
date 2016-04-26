/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        globals = require('globals'),

        Device = Backbone.Model.extend({

            urlRoot: globals.urls.device,

            local: true, // never save remotely
            defaults: {

            },
            initialize: function (attributes, options) {
                var res = {};
                if (typeof device !== "undefined") {
                    for (var key in device) if (_.has(device, key)) res[key] = device[key];
                }
                else {
                    res = { model: navigator.userAgent,
                        "platform": 'pc', "cordova": 'none', "uuid": 'none', "version": 'none'}
                }
                this.set('device', res);


                // add margin for ios
                var marginTop = 0;
                if (typeof device != 'undefined') {
                    if (device.platform === 'iOS' && device.version.substring(0, 1) === '7') {
                        marginTop = 20;
                    }
                }
                this.set('topMargin', marginTop);
            }


        });

    return new Device();

});