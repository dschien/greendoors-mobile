/**
 * Created by schien on 19/11/13.
 */
define([
    'settings',
    'backbone',
    'underscore'
], function (config, Backbone) {
    var server = config.server;
    var frome_api = 'frome2014/';
    var bristol_api = 'api/v2/';

    var globals = {
        urls: {
            host: server,

            houses: server + frome_api + "houses",
            app_version: server + frome_api + "app_version",
            userdata_latest: server + frome_api + "userdata_latest",


            scans: server + frome_api + "scans",
            measures: server + frome_api + "measures",
            measurecategories: server + frome_api + "measurecategories",
            message: server + frome_api + "message",
            useraction: server + frome_api + "useraction",
            favourites: server + frome_api + "favourites",
            notes: server + frome_api + "notes",
            settings: server + frome_api + "settings",
            user: server + frome_api + "user",
            filter: server + frome_api + "filter",
            resetPassword: server + frome_api + "reset_password",

            registration: server + bristol_api + 'app_register',
            checkusername: server + bristol_api + "check_username"

        },

        viewConfig: {
            mainViewListDefaultClass: 'home-center',
            mapViewListDefaultClass: 'home-left mapcanvas'
        },
        constants: {
            OAUTH_TOKEN: 'OAUTH_TOKEN',
            EVERYTHING_ELSE_MEASURE: 29
        }
    };

//    var oldSync = Backbone.sync;
//
//    Backbone.sync = function(method, model, options) {
//        var url = _.isFunction(model.url) ? model.url() : model.url;
//
//        if (url) {  // If no url, don't override, let Backbone.sync do its normal fail
//            options = options || {};
//            options.url = server + url;
//        }
//
//        // Let normal Backbone.sync do its thing
//        return oldSync.call(this, method, model, options);
//    }

    _.extend(globals, config);
    return globals;

})
;