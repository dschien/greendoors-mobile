/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        device = require('app/models/device'),
        HouseItemView = require('app/views/list/ListItem'),
        DaysFilter = require('app/views/filter/DaysFilter'),
        templates = require('js/templates/templates'),
        dayControl = templates['list/dayToggle'],
        globals = require('globals'),
        template = templates['list-main-view'];

    return Backbone.View.extend({

        className: globals.viewConfig.mainViewListDefaultClass,

        initialize: function (options) {
            _.bindAll(this, 'render', 'addListItem', 'applyFilter', 'filterDays');

            this.listenTo(this.collection, "sync", this.render, this);
            this.listenTo(this.collection, "add", this.addListItem, this);
            this.listenTo(this.collection, "remove", this.removeListItem, this);
            this.filter = options.filter;
            this.listenTo(this.filter, "change", this.applyFilter, this);

            this.houseItemViews = {};
//            this.render();
            // dual storage does not fire sync on load

            // are there additional houses in the collection?
            if (this.collection.length > Object.keys(this.houseItemViews).length) {
                var self = this;
                this.collection.each(function (houseModel) {
                    if (!self.houseItemViews[houseModel.get('id')]) {
                        self.houseItemViews[houseModel.get('id')] = new HouseItemView({model: houseModel});
                    }
                });
            }
            this.daysFilter = options.daysFilter;
            this.listenTo(this.daysFilter, "change", this.applyFilter, this);
            $(window).bind("orientationchange.app", _.bind(this.resize, this));
            $(window).bind("resize.app", _.bind(this.resize, this));

        },
        addListItem: function (houseModel, collection) {
            if (!this.houseItemViews[houseModel.get('id')]) {
                this.houseItemViews[houseModel.get('id')] = new HouseItemView({model: houseModel});
            }
        },
        removeListItem: function (houseModel, collection) {
            if (this.houseItemViews[houseModel.get('id')]) {
                delete this.houseItemViews[houseModel.get('id')];
            }
        },
        applyFilter: function (change) {
            var self = this;
            var count = 0
            this.collection.each(function (houseModel) {
                var inc = false;
                if (self.filter.filter(houseModel)) {
                    // if this is a change event to filter all -> ignore days filter
                    if (typeof change !== 'undefined' && 'activeFilter' in change.changed && self.filter.get('activeFilter').get('name') == 'all') {
                        inc = true;
                    } else if (self.daysFilter.filter(houseModel)) {
                        inc = true;
                    }
                }
                if (inc) {
                    self.houseItemViews[houseModel.get('id')].$el.show()
                    count++;
                } else {
                    self.houseItemViews[houseModel.get('id')].$el.hide()
                }

            });

            if (count > 0) {
                $('#empty-list-placeholder', this.el).hide();
            } else {
                $('#empty-list-placeholder', this.el).show();
            }
        },
        filterDays: function (e) {
            var button = $(e.target);
            var day = button.attr('data-day');
            day = Number(day);
            this.daysFilter.set('day', day);

            $('.days-filter').removeClass('active');
            $('.days-filter[data-day=' + day + ']').addClass('active');
        },
        events: {
            "click .days-filter": 'filterDays'

        },
        render: function () {
            console.log('rendering list')
            this.$el.html(template(this.collection.toJSON()));
            var self = this;
            // append days toggle subview

            $('#daysFilterHook', this.el).append($(dayControl()));

            // append item subviews
            var container = document.createDocumentFragment();

            this.collection.each(function (it) {
                container.appendChild(self.houseItemViews[it.get('id')].el)
                // need to delegate events after removing the view
                self.houseItemViews[it.get('id')].delegateEvents();
                self.houseItemViews[it.get('id')].delegateEventsToChildren();
            });
            var $houseList = $('.house-list', this.el);
            $houseList.append(container);

            $('#empty-list-placeholder', this.el).hide();

            this.resize();

            return this;
        },
        resize: function(){

            var $houseList = $('.house-list', this.el);
            var topMargin = 0;
            if (typeof device != 'undefined') {
                topMargin = device.get('topMargin');
            }
            $houseList.css('height', window.innerHeight - 2 * 48 - topMargin);
        },
        close: function () {
            $(window).unbind("resize.app");
            $(window).unbind("orientationchange.app");
            this.remove();
            this.unbind();
            _.each(this.houseItemViews, function (childView) {
                if (childView.close) {
                    childView.close();
                }
            })
        }
    });

});