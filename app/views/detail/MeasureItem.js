/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        templates = require('js/templates/templates'),
        MeasurePopOut = require('app/views/detail/MeasurePopOut'),
        measureTemplate = templates['measure'];


    return Backbone.View.extend({

//        className: 'house-list-item',

        initialize: function (options) {
            _.bindAll(this, 'render', 'showCostDisclaimer', 'showMeasureDescriptions', 'showDisruptionDisclaimer');
            this.data = options.data;
        },
        events: {
            "click a.measure-anchor": 'showMeasureDescriptions',
            "click a.cost": 'showCostDisclaimer',
            "click a.disruption": 'showDisruptionDisclaimer'
        },
        render: function () {
            // measures is an attribute, i.e. POJO
            var m = window.greendoors.measures.findWhere({id: this.data.measure});
            var measureTemplate2 = measureTemplate(_.extend(this.data, m.toJSON()));
            this.$el.html(measureTemplate2);
            return this;
        },
        showMeasureDescriptions: function () {
            var id = this.data.measure;
            var measure = window.greendoors.measures.findWhere({'id': id});
            var data = measure.toJSON();
            this.showPopOut('measurePopout', data);

        },
        showPopOut: function (templateName, data) {
            $('body').append(new MeasurePopOut({templateName: templateName, data: data}).render().el);
        },
        showDisruptionDisclaimer: function () {
            this.showPopOut('disruptionDisclaimer')
        },
        showCostDisclaimer: function () {
            this.showPopOut('costDisclaimer')
        },
        close: function () {
            this.remove();
            this.unbind();

        }


    });

});