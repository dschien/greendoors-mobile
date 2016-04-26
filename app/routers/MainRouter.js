/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        BaseRouter = require('app/routers/BaseRouter'),
        PageSlider = require('app/utils/HouseSlider'),
        PageTransitioner = require('app/routers/MainTransitioner'),
        TemplateView = require('app/views/TemplateView'),
        HomeView = require('app/views/Main'),
        FilterView = require('app/views/filter/FilterView'),
        HouseView = require("app/views/detail/House"),
        houseModels = require("app/models/house"),
        settings = require('app/models/settings'),
        WelcomeView = require('app/views/welcome/WelcomeView'),
        NavbarView = require('app/views/menu/NavbarView'),
        WaitingForPositionView = require('app/views/routes/directions/WaitingForPositionView'),
        templates = require('js/templates/templates'),

        transitioner = new PageTransitioner($('#content'), $('#navbar'));

    return BaseRouter.extend({

        routes: {
            "main(/*view)": "main",
            "houses/:id": "houseDetails",
            "directions/:id": "detailedDirectionsPlanning",
            "directionFromLocation/:id": "directionFromLocation",
            "getPosition/*nextView": 'getPosition',
            'showRoute': 'showRoute',
            'showFilter': 'showFilter'

        },

        initialize: function (options) {
            this.bind("all", this.trackPageChanges); // automatically call cleanUp when calling a route from another router

            this.housesCollection = options.houses;
            this.mainView = new HomeView(this.housesCollection);
            transitioner.setHomepage(this.mainView.$el);


            this.navbar = new NavbarView();
            this.navbar.$el.hide();
            transitioner.setNavbar(this.navbar.el);

        },

        navbarInitialised: false,

        main: function (view) {

            if (!settings.get('tutorialDisplayed')) {
                $('body').append(new WelcomeView().$el);
            }

            this.navbar.$el.show();

            transitioner.setPage(this.mainView.$el, this.mainView);
//            this.mainView.mapView.render(); // resize map
            if (view) {
                if (view === 'list') {
                    this.mainView.setListView();
                } else {
                    this.mainView.setMapView();
                }
            }
        },

        houseDetails: function (id) {
            var house = window.greendoors.houses.findWhere({'id': Number(id)});
            var houseView = new HouseView({model: house, mapModel: this.mainView.mapModel});
            transitioner.setPage(houseView.$el, houseView);

        },
        showFilter: function () {
            var filterView = new FilterView();
            transitioner.setPage(filterView.$el, filterView);
        },
        directionFromLocation: function (id) {
            // get lat/ long from house
            var house = this.housesCollection.findWhere({id: Number(id)});
            window.greendoors.routingModel.set('end', {latitude: house.get('latitude'), longitude: house.get('longitude')});

            if (!window.greendoors.routingModel.get('isPollingLocation')){
                window.greendoors.routingModel.set('isPollingLocation', true);
                var waitingForPositionView = new WaitingForPositionView({leg: 'start', nextRoute: 'showRoute'});
                transitioner.setPage(waitingForPositionView.render().$el, waitingForPositionView);
            }
        },
        detailedDirectionsPlanning: function (id) {
            require(["app/views/routes/directions/DirectionsView"], function (DirectionsView) {
                var house = window.greendoors.houses.findWhere({id: Number(id)});
                var directionsView = new DirectionsView({model: house});
                transitioner.setPage(directionsView.render().$el, directionsView);
            });

        },
        cleanUp: function () {
            transitioner.setPage(this.mainView.$el, this.mainView, {cleanUp:true}); // will also remove any page that is not a homepage)
            transitioner.removePrefixClasses(this.mainView.$el, "page-");
            this.mainView.$el.addClass("page transition page-left");

            this.navbar.$el.hide();
        },
        getPosition: function (nextView) {
            var waitingForPositionView = new WaitingForPositionView({leg: 'start', nextRoute: nextView});
            transitioner.setPage(waitingForPositionView.render().$el, waitingForPositionView);
        },
        showRoute: function () {
            this.mainView.mapView.route();
            Backbone.history.navigate('main/map', {trigger:true});
        }

    });

});