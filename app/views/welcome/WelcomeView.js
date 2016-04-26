/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        settings = require('app/models/settings'),
        user = require('app/models/user'),
        templates = require('js/templates/templates'),
        template = templates['welcome'];

    Handlebars.registerPartial('welcome/navigation', templates['welcome/navigation']);

    return Backbone.View.extend({
        templates: [
            'welcome/0_welcome',
            'welcome/1_welcome-top-back',
            'welcome/2_welcome-top-scan',
            'welcome/3_welcome-top-filter',
            'welcome/4_welcome-top-info',
            'welcome/5_welcome-bottom-all',
            'welcome/6_welcome-bottom-filtered',
            'welcome/7_welcome-bottom-favs',
            'welcome/8_welcome-bottom-toggle',
            'welcome/9_welcome-house',
            'welcome/10_welcome-icons'
        ],
        initialize: function () {
            _.bindAll(this, "render", 'nextView');
            this.templateIdx = 0;
            this.render(0);
        },
        render: function (index) {
            console.log("showing welcome view");
            var data = {username: user.get('username')};
            this.$el.html(templates[this.templates[this.templateIdx]](data));
            if (this.templateIdx === 9) {
                Backbone.history.navigate("houses/2", true);
            }

            return this;
        },
        nextView: function () {
            this.templateIdx += 1;
            this.render();
        },
        previousView: function () {
            this.templateIdx -= 1;
            this.render();
        },
        events: {
            "click #finishLater": 'close',
            "click #startApp": 'close',
            "click #nextView": 'nextView',
            "click #previousView": 'previousView'

        },
        close: function () {
            settings.set('tutorialDisplayed', true);
            Backbone.history.navigate("main", true);
            $('.horizontal-bar-container.bottom').show()
            this.unbind();
            this.remove();

        }

    });

});