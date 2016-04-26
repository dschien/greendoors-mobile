/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Favourite = require('app/models/favourite'),
        templates = require('js/templates/templates'),
        SendMessageView = require('app/views/detail/SendMessageView'),
        TakeNoteView = require('app/views/detail/TakeNoteView'),
        settings = require('app/models/settings'),
        actionsTemplate = templates['house_actions'],
        user = require('app/models/user');

    Handlebars.registerPartial('houseActions', templates.house_actions);

    return Backbone.View.extend({

        initialize: function () {
            _.bindAll(this, "render", 'centerMap', 'toggleFavourite', "changeNote", 'refresh');
//            this.listenTo(window.greendoors.favourites, 'add remove', this.render);
            this.listenTo(window.greendoors.favourites, 'add remove sync', this.refresh);
            this.listenTo(window.greendoors.notes, 'add remove change', this.render);
            this.listenTo(user, 'change:authenticated', this.render);
            this.listenTo(settings, 'change:offline', this.render);
            this.render();
        },
        events: {
            "click button:enabled.showon-map": 'centerMap',
            "click button:enabled.toggle-favourite": 'toggleFavourite',
            "click button:enabled.take-note": 'changeNote',
            "click button:enabled.route-there": 'directions',
            "click button:enabled.send-message": 'sendMessage'
        },
        refresh: function (model, collection, options) {
            if (this.model.get('id') === model.get('house')) {
                this.render();
            }
        },
        render: function () {
            var data = this.model.toJSON();

            data.offline = settings.get('offline');

            data.guestMode = !user.get('authenticated');

            // is fav?
            if (window.greendoors.favourites.isFavourite(this.model.get('id'))) {
                data.fav = true;
            }

            if (window.greendoors.notes.findWhere({house: this.model.get('id')})) {
                data.note = true;
            }

            this.$el.html(actionsTemplate(data));
            return this;
        },
        centerMap: function () {
            window.greendoors.mapModel.set({'longCenter': this.model.get('longitude'), 'latCenter': this.model.get('latitude'), 'id': this.model.get('id')});
            Backbone.history.navigate('main/map' + this.model.get('id'), true);
            return false;
        },
        toggleFavourite: function () {
            // check if this exists
            window.greendoors.favourites.toggle(this.model.get('id'));
        },
        changeNote: function (e) {

            var takeNoteView = new TakeNoteView({model: this.model});
            $('body').append(takeNoteView.render().el);

        },
        directions: function () {
            Backbone.history.navigate('directionFromLocation/' + this.model.get('id'), {replace:true,trigger:true});

        },
        sendMessage: function () {
            var sendMessageView = new SendMessageView({model: this.model});
            $('body').append(sendMessageView.render().el);

        },
        close: function () {
            this.remove();
            this.unbind();
        }
    });
});