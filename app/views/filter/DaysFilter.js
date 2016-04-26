/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        templates = require('js/templates/templates'),
        template = templates['map/day_toggle-control'];


    return Backbone.View.extend({

        initialize: function (options) {
            _.bindAll(this, 'render', 'filterDays');
            this.daysFilter = options.daysFilter;
//            this.listenTo(this.daysFilter, "change", this.filterDays, this);
        },
        events: {
            "click .days-filter": 'filterDays'

        },
        render: function () {

            this.$el.html(template());
            return this;
        },
        filterDays: function (e) {
            var day = $(e.target).attr('data-day');
            day = Number(day);
            this.daysFilter.set('day', day);

            $('.days-filter').removeClass('active');
            $('.days-filter[data-day=' + day + ']').addClass('active');
        }

    });

});