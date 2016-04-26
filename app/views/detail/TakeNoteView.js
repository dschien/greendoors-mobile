/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        templates = require('js/templates/templates');

    return Backbone.View.extend({

        initialize: function (options) {
            _.bindAll(this, "render", 'close', 'save', 'keyPressed');
            this.listenToOnce(Backbone.history, "all", this.close)
        },
        events: {
            "click #note-cancel-button": "close",
            "click #save-note-button": 'save',
            "keyup #note-text": 'keyPressed'
        },
        render: function () {
            var note = window.greendoors.notes.findWhere({house: this.model.get('id')});
            this.$el.html(templates['note-view'](note ? note.toJSON() : {text: null}));
            this.$el.find('#note-text').parsley({showErrors: true, successClass: 'parsley-light-success', errorClass: 'parsley-light-error', messages: {maxlength: 'The text should be shorter than 1000 characters.'}})
            return this;
        },
        keyPressed: function () {
            var button = this.$el.find('#save-note-button');

            var isValid = this.$el.find("#note-text").parsley('validate');
            if (isValid) {
                button.prop('disabled', false);

            } else {
                button.prop('disabled', true);
            }
        },
        save: function () {
            var text = this.$el.find('#note-text').val();
            window.greendoors.notes.setNote(this.model.get('id'), text);
            this.close()
        },
        close: function () {
            this.stopListening(Backbone.history);
//            $(window).off('hashchange', this.close);
            this.remove();
            this.unbind();
        }


    });

});