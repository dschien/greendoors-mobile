/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        MessageModel = require('app/models/message'),
        templates = require('js/templates/templates');

    return Backbone.View.extend({

        initialize: function (options) {
            _.bindAll(this, "render");
            this.listenToOnce(Backbone.history, "all", this.close)

        },
        events: {
            "click #send-message-button": "send",
            "click #message-cancel-button": "close",
            "keyup #message-text": 'keyPressed'
        },
        render: function () {
            this.$el.html(templates['contact-view']());
            this.$el.find('#message-text').parsley({showErrors: true, successClass: 'parsley-light-success', errorClass: 'parsley-light-error', messages: {rangelength: 'The text should be between 20 and 500 characters.'}})
            return this;
        },
        keyPressed: function () {
//            if (this.$el.find("#message-text").val()) {
            var button = this.$el.find('#send-message-button');
            var isValid = this.$el.find('#message-text').parsley('validate');
            if (isValid) {
                button.prop('disabled', false);

            } else {
                button.prop('disabled', true);
            }
//            $(this).unbind(event);
        },
        send: function () {
            var text = this.$el.find('#message-text').val();
            // todo : send message

            new MessageModel.Message({house:this.model.get('id'), 'text':text}).save();
            this.close()
        },
        close: function () {
            this.stopListening(Backbone.history);
            this.remove();
            this.unbind();
        }
    });

});