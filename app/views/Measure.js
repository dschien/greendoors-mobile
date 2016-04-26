/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        templates = require('js/templates/templates'),

        template = templates['measure'];


    return Backbone.View.extend({

        initialize: function () {
            this.render();
        },

        render: function () {

            this.$el.html(template(this.measure));
            return this;
        }

    });

});