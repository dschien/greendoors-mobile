/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        allFilter = require('app/models/filter/allFilter'),
        favouriteFilter = require('app/models/filter/favouritesFilter'),
        featureFilter = require('app/models/filter/featureFilter'),
        filter = require('app/models/filter/filter'),
        dayFilter = require('app/models/filter/daysFilter'),
        settings = require('app/models/settings'),
        templates = require('js/templates/templates'),
        template = templates['horizontal_bar/homepage_bottom_menu'];

    return Backbone.View.extend({

        initialize: function (options) {
            _.bindAll(this, "render", 'toggleView', 'filterChanged');
            this.render();
            this.mainView = options.mainView;
            this.listenTo(filter, "change", this.filterChanged, this);
        },

        render: function () {

            this.setElement(template());
            return this;
        },

        events: {
            "click #homepage-toggle": 'toggleView',
            "click #filter-selection-favs": 'showSaved',
            "click #filter-selection-features": 'showFiltered',
            "click #filter-selection-all": 'showAll'
        },

        toggleView: function () {
            if (!settings.get('offline')) {
                var toggle = $('#homepage-toggle').children(':first');
                // template starts with the map icon displayed
                // -> change to list icon
                toggle.toggleClass('fa-location-arrow fa-list');
                this.mainView.toggleViewState();
            }
        },
        deselectAll:function(){
            window.greendoors.houses.each(function(it){
                it.set('selected',false);
            })
        },
        showFiltered: function () {
            this.deselectAll();

            filter.set('activeFilter', featureFilter);

            this.highLightActiveFilter()
        },
        showSaved: function () {
            this.deselectAll();
            filter.set('activeFilter', favouriteFilter);
            this.highLightActiveFilter()
        },
        showAll: function () {
            this.deselectAll();
            filter.unset('activeFilter', {silent: true});
            filter.set('activeFilter', allFilter);
            dayFilter.set('day', null, {silent: true});
            $('.days-filter').removeClass('active');
            this.highLightActiveFilter()

        },
        filterChanged: function () {
            this.$el.find('[id^=filter-selection-] > i').removeClass('filter-selection-active')

            this.highLightActiveFilter()


        },
        highLightActiveFilter: function () {
            // highlight current selection
            var name = filter.get('activeFilter').get('name');
            this.$el.find('[id=filter-selection-' + name + '] > i').addClass('filter-selection-active')

        }

    });

});