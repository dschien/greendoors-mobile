/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        globals = require('globals'),
        templates = require('js/templates/templates'),
        template = templates['login/password-reset'],
        user = require('app/models/user');

    return Backbone.View.extend({
        className: 'menu-page',
        initialize: function () {
            _.bindAll(this, "render", 'passwordReset');
        },

        render: function () {
            this.$el.html(template());
            return this;
        },

        events: {
            "click #password-reset-button": 'passwordReset',
            "click #pw-reset-cancel": 'cancel'


        },
        cancel: function () {
            Backbone.history.navigate('login', true);
        },
        passwordReset: function (event) {

            var emailForm = $("#email-reset-tf");
            var isValid = emailForm.parsley('validate');
            if (isValid) {
                $(event.target).toggleClass('is-disabled');

                var email = emailForm.val();
                // call backend

                var posting = $.ajax({
                    type: "POST",
                    url: globals.urls.resetPassword,
                    // leave this as the default (form encode)
                    contentType: 'application/x-www-form-urlencoded',
                    // the oauth method on django does not honor the data type setting.
                    // leave unset
                    dataType: 'json',
                    data: {email: email},
                    cache: false
                });
                posting.done(function (data) {
                    navigator.notification.alert('Instructions sent to your email address.', null, 'Success');
                    Backbone.history.navigate("login", true);
                });
                posting.fail(function (data) {

                    try {
                        if (data.responseJSON) {
                            navigator.notification.alert(data.responseJSON.message, null, "Failure");
                        }
                    } catch (er) {
                        console.log(er);
                    }
                    emailForm.parsley('destroy');
                    emailForm.parsley();
                });


            }
        },

        close: function () {
            this.remove();
            this.unbind();
        }

    });

});