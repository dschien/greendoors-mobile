/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        TemplateView = require('app/views/TemplateView'),
        templates = require('js/templates/templates'),
        template = templates['login/registration-view'],
        globals = require('globals'),
        user = require('app/models/user');

    return Backbone.View.extend({
        className: 'input-page',
        initialize: function () {
            _.bindAll(this, "render", 'register');

        },

        render: function () {
            this.$el.html(template({'server': globals.urls.checkusername}));
            setTimeout(function () {
                $('#registration-form').parsley()
            }, 100);
            return this;
        },

        events: {
            "click #reg-register-button": 'register',
            "click #reg-cancel-button": 'cancel'
        },
        register: function (ev) {


//            var isValid = $('#registration-form').parsley('validate');
            if ($('#registration-form').parsley('isValid')) {
                $(ev.target).prop('disabled', true);
                var uname = $('#reg-name-tf').val();
                var email = $('#reg-email-tf').val();
                var pass = $('#reg-pass-tf').val();
                // call backend

                var newsletter = true,
                    research = true;

                var callback = function (res) {
                    console.log(res)
                    navigator.notification.alert('You are successfully logged in and ready to collect information.', null, 'Welcome');
                };

                var activityView = new TemplateView({templateName: 'activity', data: {header: "Updating", message: "Loading"}});
                $('body').append(activityView.render().$el);

                var deferred = user.register(email, uname, pass, newsletter, research, callback, function (res) {
                    console.log(res)
                    navigator.notification.alert(res, null, "Registration Failure", "OK");
                });

                deferred.always(function () {
                    activityView.remove();
                    activityView.unbind();
                    $(ev.target).prop('disabled', false);
                })
            }
        },
        cancel: function () {
            Backbone.history.navigate('login', true);
        },
        close: function () {
            this.remove();
            this.unbind();
        }
    });

});