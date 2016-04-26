/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        HouseItemView = require('app/views/list/ListItem'),
        templates = require('js/templates/templates'),
        template = templates['menu/menu'],
        user = require('app/models/user');

    return Backbone.View.extend({

        attributes: {
            class: 'menu-page'
        },

        initialize: function () {
            this.render();
        },

        render: function () {

            var data = {guestMode:!user.get('authenticated')}
            this.$el.html(template(data));
            return this;
        },

        close: function () {
            this.remove();
            this.unbind();
        }
    });

});