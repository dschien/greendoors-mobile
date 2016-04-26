/**
 * Created by schien on 19/11/13.
 */

"use strict";
define(function (require) {

    var $ = require('jquery'),
        Backbone = require('backbone'),
        BaseRouter = require('app/routers/BaseRouter'),
        settings = require('app/models/settings'),
        TemplateView = require('app/views/TemplateView'),
        LoginView = require('app/views/login/LoginView'),
        RegistrationView = require('app/views/login/RegistrationView'),
        PasswordResetView = require('app/views/login/PasswordReset'),
        RegistrationReminderView = require('app/views/login/RegistrationReminderView'),
        Transitioner = require('app/routers/MenuPageTransitioner'),
        transitioner = new Transitioner($('#content')),
        user = require('app/models/user');

    return BaseRouter.extend({

        routes: {
            "start": "start",
            "login": "login",
            "register": "register",
            "registrationReminder": "registrationReminder",
            "guestMode": 'guestMode',
            'passwordReset': 'passwordReset'

        },

        initialize: function (options) {
            this.bind("all", this.trackPageChanges); // automatically call cleanUp when calling a route from another router
            user.bind('change:authenticated', this.start, this);
        },
        start: function () {
            if (!user.get('authenticated')) {
                var templateView = new TemplateView({templateName: 'login/login-start'});
                transitioner.transition(templateView.render().$el, templateView);
            } else {
                console.log('beginning routing')
                Backbone.history.navigate("main", true);
            }
        },
        guestMode: function () {
            Backbone.history.navigate("main", true);
        },
        login: function () {
            var loginView = new LoginView();
            transitioner.transition(loginView.render().$el, loginView);
        },
        register: function () {
            var registrationView = new RegistrationView();
            transitioner.transition(registrationView.render().$el, registrationView);
        },
        passwordReset: function () {
            var passwordResetView = new PasswordResetView();
            transitioner.transition(passwordResetView.render().$el, passwordResetView);
        },
        registrationReminder: function () {
            var registrationReminderView = new RegistrationReminderView();
            transitioner.transition(registrationReminderView.render().$el, registrationReminderView);
        },

        /**
         * Remove the current page when leaving this router.
         */
        cleanUp: function () {
            transitioner.getCurrentView().close();
        }


    });

});