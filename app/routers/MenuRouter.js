/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        settings = require('app/models/settings'),
        MenuView = require('app/views/menu/MenuView'),
        BaseRouter = require('app/routers/BaseRouter'),
        settings = require('app/models/settings'),
        WelcomeView = require('app/views/welcome/WelcomeView'),
        TemplateView = require('app/views/TemplateView'),
//        MapPlanningView = require('app/views/routes/mapplanning/MapPlanningView'),
//        LocationView = require('app/views/routes/legs/LocationView'),
//        LegView = require('app/views/routes/legs/LegView'),
//        MapPointView = require('app/views/routes/legs/MapPointView'),
//        NameSearchView = require('app/views/routes/legs/NameSearchView'),
//        ListPlanningView = require('app/views/routes/lists/ListPlanningView'),
        RoutingModel = require('app/models/routing'),
        Transitioner = require('app/routers/MenuPageTransitioner'),
        transitioner = new Transitioner($('#content'));

    return BaseRouter.extend({

        routes: {
            "menu": "menu",
//            "routes": "routesMenu",
//            "routes/position/*leg": "routesPosition",
//            "routes/legs/*leg": "routesLeg",
//
//            "routes/search/*leg": "routesSearch",
//            "routes/pointonmap/*leg": "routesPointOnMap",
//            "routes/planning/map": "mapPlanning",
//            "routes/roundtrip": "roundtrip",
//
//            "routes/lists": 'routesLists',
//            "routes/lists/filtered": "routesListFiltered",
//            "routes/lists/favourites": "routesListFavourites",
//            "routes/lists/all": "routesListAll",

            "info(/*path)": "info",
//            "subinfo": "subinfo",
            "settings": "settings"


        },

        initialize: function (options) {

            this.bind("all", this.trackPageChanges); // automatically call cleanUp when calling a route from another router

            window.greendoors.routingModel = new RoutingModel();
        },

        // central menu
        menu: function () {
            var menuView = new MenuView();
            transitioner.transition(menuView.render().$el, menuView);
        },

        // routes main menu
        routesMenu: function () {
            var templateView = new TemplateView({templateName: 'routes', model: window.greendoors.routingModel});
            transitioner.transition(templateView.render().$el, templateView);
        },

        // set start
        routesLeg: function (leg) {
            var legView = new LegView({templateName: 'routes_mapplanning_' + leg, leg: leg});
            transitioner.transition(legView.render().$el, legView);
        },
        routesPointOnMap: function (leg) {
            var mapPointView = new MapPointView({templateName: 'routes_point_selection', leg: leg});
            transitioner.transition(mapPointView.render().$el, mapPointView);
            mapPointView.mapView.mapResize();
        },
        routesSearch: function (leg) {
            var mapSearchView = new NameSearchView({templateName: 'routes_name_search', leg: leg});
            transitioner.transition(mapSearchView.render().$el, mapSearchView);
            mapSearchView.mapView.mapResize();
        },
        // show a spinner while waiting for geolocation
        routesPosition: function (leg) {
            var locationView = new LocationView({leg: leg});
            transitioner.transition(locationView.render().$el, locationView);
        },
        roundtrip: function () {
            var latlng = window.greendoors.routingModel.get('start');
            window.greendoors.routingModel.set('end', latlng);
            Backbone.history.navigate("routes", true);
        },


        routesLists: function () {
            var templateView = new TemplateView({templateName: 'routes_lists'});
            transitioner.transition(templateView.render().$el, templateView);
        },
        routesListFavourites: function () {
            var favouriteListView = new ListPlanningView(window.greendoors.favourites);
            transitioner.transition(favouriteListView.render().$el, favouriteListView);
        },

        info: function (path) {
            if (path) {
                var data = {};
                if (path.match(/settings/g)) {
                    data['version'] = greendoors.version;
                }
                if (path.match(/help/g)) {
                    Backbone.history.navigate("main", true);
                    $('body').append(new WelcomeView().$el);
                    return
                }

                var templateView = new TemplateView({templateName: path, data: data});
                transitioner.transition(templateView.render().$el, templateView);
            } else {
                var templateView2 = new TemplateView({templateName: 'menu/info'});
                transitioner.transition(templateView2.render().$el, templateView2);
            }
        },
        cleanUp: function () {
            transitioner.getCurrentView().close();
        },
        mapPlanning: function () {
            var mapPlanningView = new MapPlanningView();
            transitioner.transition(mapPlanningView.render().$el);
            mapPlanningView.mapView.mapResize();
        }

    })
        ;

})
;