/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        device = require('app/models/device'),
        templates = require('js/templates/templates'),
        MeasureView = require('app/views/detail/MeasureItem'),
        HouseActionsView = require('app/views/detail/HouseActions'),
        NotesDetailView = require('app/views/detail/NoteDetailView'),
        houseTemplate = templates['house-view'];


    Handlebars.registerPartial('measure', templates['measure']);

    return Backbone.View.extend({

        initialize: function (options) {
            _.bindAll(this, "render");

            this.mapModel = options.mapModel;
            this.childViews = [];

            this.render();
            $(window).bind("orientationchange.app", _.bind(this.resize, this));
            $(window).bind("resize.app", _.bind(this.resize, this));
        },

        attributes: {
            class: 'detailsPage page-right transition'
        },

        render: function () {
            var self = this;


            // render base template
            var data = this.model.toJSON();
            if (data.comments) {
                data['comments'] = this.buildUrls(data['comments'])
            }
            data.baseUrl = require.toUrl('');

            this.$el.html(houseTemplate(data));

            // add the buttons
            var houseActionsView = new HouseActionsView({model: this.model, mapModel: this.mapModel});
            $('.house-actions', this.$el).append(houseActionsView.$el);
            this.childViews.push(houseActionsView);

            // add the measures
            var container = document.createDocumentFragment();
            _.each(this.model.get('measures'), function (measureObj) {
                var measureView = new MeasureView({data: measureObj});
                self.childViews.push(measureView);
                container.appendChild(measureView.render().el)
            });
            $('.measures', this.el).append(container);

            $('.houseNotes', this.el).append(new NotesDetailView({model: this.model}).render().$el);

            this.resize();

            return this;
        },
        buildUrls: function (input) {
            var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
            var regex = new RegExp(expression);
            var count = 1;
            var compiled = _.template("<a class='booking-link' onclick=\"window.open(encodeURI('<%= url %>'), '_blank', 'location=no,closebuttoncaption=Close');\"><%= count %>. Tour Booking</a>");
//            var compiled = _.template("<a class='booking-link'  target='_blank' href='<%= url %>'>Booking Link <%= count %></a>");

            var out = input.replace(regex, function (a, b) {
                return compiled({url: a,'count': count++});
            })
            return out;
        },
        resize: function () {

            var $houseList = $('.house-view', this.el);

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
            _.each(this.childViews, function (childView) {
                if (childView.close) {
                    childView.close();
                }
            })
        }
    });

});