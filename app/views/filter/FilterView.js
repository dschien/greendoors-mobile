/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        globals = require('globals'),
        device = require('app/models/device'),
        templates = require('js/templates/templates'),
        filter = require('app/models/filter/featureFilter'),
        mainFilter = require('app/models/filter/filter'),
        template = templates['filter-view'];

    Handlebars.registerPartial('filterCheckboxItem', templates['filter-checkbox-item']);

    return Backbone.View.extend({

        initialize: function (options) {
            _.bindAll(this, "render", 'applyFilter', 'resetFilter', 'getTemplateData');
            this.render();
            $(window).bind("orientationchange.app", _.bind(this.resize, this));
            $(window).bind("resize.app", _.bind(this.resize, this));
        },

        render: function () {
            // todo: set hooks according to filter settings
            this.$el.html(template(this.getTemplateData()));

            this.resize();
            return this;
        },
        attributes: {
            class: 'detailsPage page-right transition'
        },
        events: {
            "click #filter-apply-button": "applyFilter",
            "click #filter-reset-button": "resetFilter"
        },
        getTemplateData: function () {

            var selectedMeasures = filter.toJSON()['measures'];

            var res = {};

            // copy in the measure categories
            res.measureCategories = window.greendoors.measureCategories.toJSON();

            // for the measures - create a compatible array to pass to the handlebar templating engine
            var measures = window.greendoors.measures.toJSON();

            _.each(res.measureCategories, function (cat) {
                // init measurement arrays
                cat.measures = [];
            });

            _.each(res.measureCategories, function (cat) {
                    if (cat.id <= 5) {
                        _.each(measures, function (measure) {
                            if (measure.category === cat.id) {
                                // copy over
                                var m = _.extend({}, measure);
                                if (_.contains(selectedMeasures, measure.id)) {
                                    m.setting = true;
                                }
                                cat.measures.push(m);
                            }
                        });
                    }
                }
            );

            var m = {short: 'Everything else', measure: globals.constants.EVERYTHING_ELSE_MEASURE, id: globals.constants.EVERYTHING_ELSE_MEASURE};
            if (_.contains(selectedMeasures, globals.constants.EVERYTHING_ELSE_MEASURE)) {
                m.setting = true;
            }
            res.other = m;

            var bedrooms = filter.get('bedrooms');
            if (bedrooms) {
                res.bedrooms = bedrooms;
            }
            var distance = filter.get('distance');
            if (bedrooms) {
                res.distance = distance;
            }

            return res;
        },
        applyFilter: function () {
            window.greendoors.houses.each(function(it){
                it.set('selected',false);
            })

            // todo: validate number format in input fields?
            // temp measures before updating model
            var measures = [];

            var filterElements = this.$el.find('[data-filter-bind]');

            filterElements.filter('[data-filter-bind = measures]').each(
                function () {
                    if (this.checked) {
                        console.log('measure: ' + this.getAttribute("data-measure-id"));
                        measures.push(Number(this.getAttribute("data-measure-id")));
                    }
                }
            );

            if (measures.length > 0) {
                filter.set('measures', measures);
            }

            var others = filterElements.filter(':not([data-filter-bind=measures])');
            var textFields = others.filter(':input:text');

            textFields.each(
                function () {
                    if (this.value) {
                        console.log('text filters: ' + this.getAttribute("data-filter-bind"));
                        filter.set([this.getAttribute("data-filter-bind")], this.value);
                    }
                }
            );

            var numberFields = others.filter('[type=number]');
            numberFields.each(
                function () {
                    if (this.value) {
                        console.log('number filters: ' + this.getAttribute("data-filter-bind"));
                        filter.set(this.getAttribute("data-filter-bind"), Number(this.value));
                    }
                }
            );

            var otherCheckBoxes = others.filter(':input:checkbox');
            otherCheckBoxes.each(
                function () {
                    if (this.checked) {
                        console.log('other checkbox: ' + this.getAttribute("data-filter-bind"));
                        filter.set(this.getAttribute("data-filter-bind"), true);
                    }
                }
            );
            // update the main filter, so that map and list are re-rendered
            mainFilter.set('activeFilter', filter);
            mainFilter.trigger('change');

            Backbone.history.navigate('main', true);

        },
        resize: function(){

            var $houseList = $('#filter-view', this.el);

            var topMargin = 0;
            if (typeof device != 'undefined') {
                topMargin = device.get('topMargin');
            }

            $houseList.css('height', window.innerHeight - 2 * 48 - topMargin);
        },
        resetFilter: function () {
            filter.reset();
            this.render();
        },
        close: function () {
            $(window).unbind("resize.app");
            $(window).unbind("orientationchange.app");
            this.remove();
            this.unbind();
        }
    });

});