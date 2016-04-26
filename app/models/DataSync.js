/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),

        globals = require('globals'),
        settings = require('app/models/settings'),
        user = require('app/models/user'),

        houseModels = require('app/models/house'),
        measureCategoryModels = require('app/models/measureCategories'),
        measureModels = require('app/models/measure'),
        houses = new houseModels.HouseCollection(),
        measures = new measureModels.MeasureCollection(),
        measureCategories = new measureCategoryModels.MeasureCategoryCollection(),
        favouritesModels = require('app/models/favourite'),
        scanModels = require('app/models/scan'),
        notesModels = require('app/models/Notes'),
        favourites = new favouritesModels.FavouriteCollection(),
        scans = new scanModels.ScanCollection(),
        notes = new notesModels.NoteCollection(),

        SyncData = Backbone.Model.extend({

            urlRoot: globals.urls.data,

            local: true, // never save remotely
            defaults: {
                appdata_version_local: localStorage.getItem('appdata_version_local') || "0.0.0",
                appdata_version_server: localStorage.getItem('appdata_version_server') || "0.0.0",
                userdata_version_local: null,
                userdata_version_server: null

            },
            initialize: function (attributes, options) {
                console.log('init settings')

                window.greendoors.favourites = favourites;
                window.greendoors.scans = scans;
                window.greendoors.notes = notes;

                window.greendoors.houses = houses;
                window.greendoors.measures = measures;
                window.greendoors.measureCategories = measureCategories;

                user.bind('change:authenticated', this.sync_user_data, this);
                // if we're already authenticated, then check now
                if (user.get('authenticated') && !this.get('offline')) {
                    this.sync_user_data().done(function () {
                        console.log('finished loading user data')
                    })
                    this.startUpdateTimer();
                }

                this.listenTo(settings, 'change:offline', this.connectionChange);

                /**
                 * Store which version we have locally
                 */
                this.listenTo(this, 'change:appdata_version_local', this.storeAppDataVersion);
                this.listenTo(this, 'change:appdata_version_server', this.storeAppDataVersion);

                /**
                 * If the server model versions change, then sync models
                 */
                this.listenTo(this, 'change:appdata_version_server', this.checkAppData);
                this.listenTo(this, 'change:userdata_version_server', this.checkAppData);


            },
            storeAppDataVersion: function () {
                localStorage.setItem('appdata_version_local', this.get('appdata_version_local'))
                localStorage.setItem('appdata_version_server', this.get('appdata_version_server'))
            },

            /**
             * Get the server model versions
             * @param options
             */
            getServerAppDataVersion: function update(options) {
                options = options || _.extend({silent: false}, options);

                if (options.silent) {

                } else {
                    // todo: show activity
                }


                var self = this;

                $.ajax({
                    type: "GET",
                    url: globals.urls.app_version,
                    contentType: "application/json; charset=utf-8"
                }).done(function (data, textStatus, jqXHR) {
                    if (jqXHR.status == 200) {
                        self.set('appdata_version_server', data.version);

                        self.set('userdata_version_server', data.user_data_version ? data.user_data_version : null);
                    }
                }).fail(
                    function (jqXHR) {
                        console.log('ERROR: something went wrong during client update: ' + jqXHR.status);
                    }
                ).always(function (arg1, textStatus, arg2) {
                        var response = arg1 ? arg1 : arg2;
                        if (response.status == 401) {
                            localStorage.clear()
                            // remove authentication
                            user.set('oauthToken', null);
                            Backbone.history.navigate('start', {trigger: true});
                            navigator.notification.alert('Your login credentials have expired. Please login again');
                        }
                    });
            },
            /**
             * Sync app data models (houses, measures, etc)
             * @returns {*}
             */
            fetch_app_data: function () {
                var houseCall = houses.fetch();
                var measureCall = measures.fetch();
                var measureCategoryCall = measureCategories.fetch();

                var self = this;

                return $.when(houseCall, measureCall, measureCategoryCall).done(function () {
                    self.set('appdata_version_local', self.get('appdata_version_server'))
                });
            },
            /**
             * Sync user data models
             * @returns {*}
             */
            sync_user_data: function () {
                // first sync dirty data
                if (!this.get('offline')) {
                    favourites.syncDirtyAndDestroyed();
                    scans.syncDirtyAndDestroyed();
                    notes.syncDirtyAndDestroyed();
                }
                // now fetch new data
                var favouritesCall = favourites.fetch();
                var scansCall = scans.fetch();
                var notesCall = notes.fetch();

                return $.when(favouritesCall, scansCall, notesCall);
            },
            /**
             * Compare local and server model versions
             */
            checkAppData: function () {
                if (this.get('appdata_version_server') !== this.get('appdata_version_local')) {
                    this.fetch_app_data()
                }
                if (this.get('userdata_version_server') !== this.get('userdata_version_local')) {
                    this.sync_user_data()
                }
            },
            /**
             * Get server model version
             *
             */
            startUpdateTimer: function () {
                var self = this;
                this.timer = setInterval(function () {
                    console.log('polling updates')
                    self.getServerAppDataVersion();
                }, 5000);
            },
            stopUpdateTimer: function () {
                clearInterval(this.timer);
            },
            /**
             * Start and stop timer that retrieves server model versions
             */
            connectionChange: function () {
                if (!this.get('offline')) { // we're back online -> sync to server
                    this.startUpdateTimer();
                } else {
                    this.stopUpdateTimer()
                }
            }



        });


    return new SyncData();

})
;