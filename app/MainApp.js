/**
 * Created by schien on 19/11/13.
 */
define(function (require) {
    var
        Backbone = require('backbone'),
        fastclick = require('fastclick'),
        DualStorage = require('dualstorage'),
        templates = require('js/templates/templates'),
        parsley = require('parsley'),
        settings = require('app/models/settings'),
        sync = require('app/models/DataSync'),
        TemplateView = require('app/views/TemplateView');

    function initialize(refresh) {
        console.log('Starting app')

        fastclick.attach(document.body);

        var
            MainRouter = require('app/routers/MainRouter'),
            MenuRouter = require('app/routers/MenuRouter'),
            StartRouter = require('app/routers/StartRouter'),
            user = require('app/models/user');

        // show a spinner while waiting for houses...
        function showLoadingWaitScreen() {
            var startupView = new TemplateView({templateName: 'wait', data: {header: "Starting", message: "Loading Resources"}});
            startupView.listenToOnce(window.greendoors.houses, 'request', function () {
                $('body').append(this.render().$el);
            });
            startupView.listenToOnce(window.greendoors.houses, 'sync', function () {
                this.remove();
                this.unbind();
            });
            startupView.listenToOnce(window.greendoors.houses, 'error', function () {
                this.$el.html('Something went wrong. Check your internet connection.');
            });
        }

        showLoadingWaitScreen();
//
//
//        (function prepareUserData() {
////            var activityView = new TemplateView({templateName: 'activity', data: {header: "Updating", message: "Loading User Data"}});
//
////            activityView.listenToOnce(user, 'change:authenticated', function () {
////                if (user.get('authenticated')) {
////                    $('body').append(activityView.render().$el);
////                    loadUserData()
////                }
////            });
////
////            activityView.listenToOnce(favourites, 'error', function () {
////                this.$el.html('Could not load user data.');
////            });
////
////            // load user data
////            if (user.get('authenticated')) {
////                loadUserData();
////            }
//
//            /**
//             * When finished loading user data, hide waiting screen
//             */
//            function loadUserData() {
//
//                settings.sync_user_data().done(function () {
////                    activityView.remove();
////                    activityView.unbind();
//                    // finished loading user data, sync
//                    if (!settings.get('offline')) {
//                        favourites.syncDirtyAndDestroyed();
//                        scans.syncDirtyAndDestroyed();
//                        notes.syncDirtyAndDestroyed();
//                    }
//                })
//            }
//        })();


        sync.fetch_app_data().done(function () {
            // start with the menu
            console.log('starting app')
            // for testing...
            if (refresh) {
                return;
            }
            new MainRouter({houses: window.greendoors.houses});
            new MenuRouter();
            new StartRouter();

            Backbone.history.start({root: "/app/"});
            Backbone.history.navigate("start", {replace: true, trigger: true});
        })
    }

    return {initialize: initialize};
})
;