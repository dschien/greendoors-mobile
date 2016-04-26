/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        HouseListView = require('app/views/list/HouseList'),
        BottomMenuView = require('app/views/MainBottomMenuView'),
        filter = require('app/models/filter/filter'),
        dayFilter = require('app/models/filter/daysFilter'),
        models = require('app/models/house'),
        templates = require('js/templates/templates'),
        MapModel = require('app/models/map'),
        template = templates['main'],
        device = require('app/models/device'),
        settings = require('app/models/settings');

    return Backbone.View.extend({
        className: "homePage",

        initialize: function (houses) {
            _.bindAll(this, "render", 'toggleViewState', 'offline', 'online', 'connectionChange');
            this.listenTo(settings, 'change:offline', this.connectionChange);
            this.houseList = houses;
            this.filter = filter;
            this.dayFilter = dayFilter;
            this.render();
            if (!settings.get('offline')) {
                this.online();
            }
//            $(window).bind("orientationchange.app", _.bind(this.resize, this));
//            $(window).bind("resize.app", _.bind(this.resize, this));
        },
        connectionChange: function () {
            settings.get('offline') ? this.offline() : this.online()
        },
        render: function () {
            this.listView = new HouseListView({collection: this.houseList, model: this.mapModel, filter: this.filter, daysFilter: this.dayFilter});
            this.$el.append(this.listView.render().$el);

            this.bottomMenu = new BottomMenuView({mainView: this, filter: this.filter});
            $('body').append(this.bottomMenu.el);
//            this.$el.prepend(this.bottomMenu.$el);

            this.viewState = 'list';

            return this;
        },
        online: function () {
            if (!this.mapView) {
                this.mapModel = new MapModel();
                window.greendoors.mapModel = this.mapModel;
                var self = this;

                require(['app/views/map/MapView'], function (MapView) {
                    console.log('loaded map view');
                    self.mapView = new MapView({collection: self.houseList, model: self.mapModel, filter: self.filter, daysFilter: self.dayFilter});

                    self.$el.prepend(self.mapView.$el);
                    self.mapView.render();
                })
            }
        },
        offline: function () {
            this.setListView();
            if (this.mapView) {
                this.mapModel = null;
                this.mapView.close();
                this.mapView = null;
            }

        },
        events: {
            "keyup .search-key": "search",
            "keypress .search-key": "onkeypress"
        },

        toggleViewState: function () {
            if (this.viewState === 'list') {
                this.setMapView();
            } else {
                this.setListView();
            }
        },

        setMapView: function () {
            if (!this.mapView) {
                return
            }
            this.mapView.$el.removeClass('home-left');
            this.mapView.$el.addClass('home-center');

            this.listView.$el.addClass('home-left');
            this.listView.$el.removeClass('home-center');
            this.viewState = 'map';

        },

        setListView: function () {
            this.listView.$el.removeClass('home-left');
            this.listView.$el.addClass('home-center');

            this.mapView.$el.addClass('home-left');
            this.mapView.$el.removeClass('home-center');

            this.viewState = 'list';
        },


        search: function (event) {
            var key = $('.search-key').val();
            this.houseList.fetch({reset: true, data: {id: key}});
        },

        onkeypress: function (event) {
            if (event.keyCode === 13) { // enter key pressed
                event.preventDefault();
            }
        },
//        resize: function(){
//
//            var $houseList = $('html', this.el);
//
//            var topMargin = 0;
//            if (typeof device != 'undefined') {
//                topMargin = device.get('topMargin');
//            }
//
//            $houseList.css('height', window.innerHeight);
//        },
//        close: function () {
//
//            $(window).unbind("resize.app");
//            $(window).unbind("orientationchange.app");
//        }



    });

})
;