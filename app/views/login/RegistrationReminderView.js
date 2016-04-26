/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        templates = require('js/templates/templates'),
        template = templates['login/registration-reminder-view'];

    return Backbone.View.extend({
        className: 'menu-page',
        initialize: function () {
            _.bindAll(this, "render");
            this.render();
        },

        render: function () {
            this.$el.html(template());
            return this;
        },

        events: {
            "click #reg-remind-reg-button": 'register',
            "click #reg-remind-guest-button": 'guestMode'
        },

        register: function () {
            Backbone.history.navigate('register', true);
        },
        guestMode: function () {
            Backbone.history.navigate('guestMode', true);
        },
        close: function () {
            this.remove();
            this.unbind();
        }
    });

});