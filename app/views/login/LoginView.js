/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        templates = require('js/templates/templates'),
        TemplateView = require('app/views/TemplateView'),
        template = templates['login/login-view'],
        user = require('app/models/user');

    return Backbone.View.extend({
        className: 'input-page',
        initialize: function () {
            _.bindAll(this, "render", 'login');

        },

        render: function () {
            this.$el.html(template());
            return this;
        },

        events: {
            "click #login-login-button": 'login',
            "click #login-register-button": 'register',
            "click #login-continue-unregistered": 'guestMode'
//            "click #password-reset": 'passwordReset'

        },
        login: function (ev) {

            var loginForm = $("#login-form");
            var isValid = loginForm.parsley('validate');
            if (isValid) {
                $(ev.target).prop('disabled',true);
                var uname = $('#login-username-text').val();
                var pass = $('#login-password-field').val();
                // call backend

                var callback = function (res) {
                    navigator.notification.alert('You are successfully logged in and ready to collect information.', null, 'Welcome');
//                    Backbone.history.navigate("main", true);
                };

                var activityView = new TemplateView({templateName: 'activity', data: {header: "Updating", message: "Loading"}});
                $('body').append(activityView.render().$el);

                var deferred = user.authenticate(uname, pass, callback, function (res) {
                    console.log(res);
                    loginForm.parsley('destroy');
                    loginForm.parsley();
                    navigator.notification.alert("Username or Password wrong", null, "Failure");
                });

                deferred.always(function () {
                    activityView.remove();
                    activityView.unbind();
                    $(ev.target).prop('disabled',false);
                })
            }
        },
        register: function () {
            Backbone.history.navigate('register', {replace:true, trigger:true});
        },
        guestMode: function () {
            Backbone.history.navigate('registrationReminder', true);
        },
        passwordReset: function () {
            Backbone.history.navigate('passwordReset');
        },
        close: function () {
            this.remove();
            this.unbind();
        }

    });

});