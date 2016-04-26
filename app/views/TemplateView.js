/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        templates = require('js/templates/templates');

    return Backbone.View.extend({
        className: 'menu-page',
        initialize: function (options) {
            this.templateName = options.templateName;
            this.data = options.data || {};
            this.data = _.extend(this.data, options.model ? options.model.toJSON() : {});

            this.render();
        },
        render: function () {
            this.$el.html(templates[this.templateName](this.data));
            return this;
        },
        close: function () {
            this.remove();
            this.unbind();
        }
    });

});