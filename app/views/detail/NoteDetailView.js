/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),

        templates = require('js/templates/templates'),
        noteTemplate = templates['house/inline_note'];

    return Backbone.View.extend({

        initialize: function (options) {
            _.bindAll(this, "render");
            this.listenTo(window.greendoors.notes, 'add remove change', this.render);
        },

        render: function () {
            var note = window.greendoors.notes.findWhere({house: this.model.get('id')});
            this.$el.html(noteTemplate(note ? note.toJSON() : {}));
            return this;
        },

        close: function () {
            this.stopListening(Backbone.history);
//            $(window).off('hashchange', this.close);
            this.remove();
            this.unbind();
        }


    });

});