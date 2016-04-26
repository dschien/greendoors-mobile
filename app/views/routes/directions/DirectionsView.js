/**
 * Created by schien on 19/11/13.
 *
 *
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),

        templates = require('js/templates/templates');

    return Backbone.View.extend({

        events: {

            "click #calculate-directions-button": 'calculate',
            "click .modeSelect": 'modeSelect'
        },

        initialize: function () {
            _.bindAll(this, "render", 'modeSelect');

            var ModeModel = Backbone.Model.extend({defaults: {
                mode: 'BICYCLING'
            }});
            this.mode = new ModeModel();

            this.listenTo(this.mode, 'change', this.render);
        },

        render: function () {
            var data = this.model.toJSON();
            _.extend(data, this.mode.toJSON());

            this.$el.html(templates['directions'](data));

            return this;
        },
        modeSelect: function (e) {
            var dialog = $(e.target).closest('.modeSelect');
            this.mode.set('mode', dialog.data('mode'));
        },
        calculate: function () {
            window.greendoors.routingModel.set('mode', this.mode.get('mode'));
            window.greendoors.routingModel.set('end', {latitude: this.model.get('latitude'), longitude: this.model.get('longitude')});
            Backbone.history.navigate('getPosition/showRoute', {trigger:true, replace:true});

        }
    });

});