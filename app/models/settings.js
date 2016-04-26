/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        globals = require('globals'),
        user = require('app/models/user'),

        Settings = Backbone.Model.extend({

            urlRoot: globals.urls.settings,

            local: true, // never save remotely
            defaults: {
                authenticated: false,
                oauthToken: null,
                // offline by default, change if online
                offline: true,
                guestMode: true,
                selectedHouse: null

            },
            initialize: function (attributes, options) {
                console.log('init settings')

                // offline
//                var isConnectionOffline = true;
                // online
                var isConnectionOffline = false;
                this.set('offline', (typeof navigator.connection !== "undefined") ? navigator.connection.type === Connection.NONE : isConnectionOffline);
                this.set({'tutorialDisplayed': JSON.parse(localStorage.getItem('tutorialDisplayed'))});

                this.bind('change:tutorialDisplayed', this.setTutorialDisplayed, this);
                user.bind('change:authenticated', this.setGuestMode, this);

                this.bind('change:selectedHouse', this.markHouseSelected, this);

                var self = this;
                document.addEventListener("online", function () {
                    self.set('offline', false)
                });
                document.addEventListener("offline", function () {
                    self.set('offline', true)
                });
            },
            markHouseSelected: function (model, current) {
                var previous = model.previous('selectedHouse');
                if (previous) {
                    var oldHouse = window.greendoors.houses.findWhere({id: previous});
                    oldHouse.set('selected', false);
                }

                var house = window.greendoors.houses.findWhere({id: current});
                house.set('selected', true);
            },
            storeAppDataVersion: function () {
                localStorage.setItem('appdata_version_local', this.get('appdata_version_local'))
            },
            setGuestMode: function (val) {
                if (!user.get('authenticated')) {
                    this.set('guestMode', true);
                } else {
                    this.set('guestMode', false);
                }
            },

            setTutorialDisplayed: function (val) {
                localStorage.setItem('tutorialDisplayed', this.get('tutorialDisplayed'))
            }
        });


    return new Settings();

})
;