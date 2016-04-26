/**
 * Created by schien on 28/11/13.
 */


/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        moment = require('moment'),
        UserActionModule = require('app/models/useraction');


    return    Backbone.Router.extend({

        /**
         * Function is called after a route was changed.
         * @param route
         * @param router
         */
        trackPageChanges: function (route, router) {
            // only the current router should respond
            if (route === 'route:' + this.current().route) {
                // if a current router is defined
                if (window.greendoors.currentRouter && !(window.greendoors.currentRouter === this)) {
//                    !window.greendoors.currentRouter.current().route) {
//                    console.log('router changed');
                    // now clean up the previous
                    window.greendoors.currentRouter.cleanUp();

                }
                // set this as the new current router
                window.greendoors.currentRouter = this;
            }

            this.saveRoutingEvent(route);
        },
        current: function () {
            var Router = this,
                fragment = Backbone.history.fragment,
                routes = _.pairs(Router.routes),
                route = null, params = null, matched;

            matched = _.find(routes, function (handler) {
                route = _.isRegExp(handler[0]) ? handler[0] : Router._routeToRegExp(handler[0]);
                return route.test(fragment);
            });

            if (matched) {
                // NEW: Extracts the params using the internal
                // function _extractParameters
                params = Router._extractParameters(route, fragment);
                route = matched[1];
            }

            return {
                route: route,
                fragment: fragment,
                params: params
            };
        },
        saveRoutingEvent: function (route) {
            new UserActionModule.UserAction({timestamp: moment().format("YYYY-MM-DDTHH:mm:ss.SSSZZ"), 'route': route}).save()
        }


    });

});