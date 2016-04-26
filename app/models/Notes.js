/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        globals = require('globals'),
        settings = require('app/models/settings'),
        DualStorage = require('app/models/DualStorageCollection'),

        Note = Backbone.Model.extend({
            urlRoot: globals.urls.notes
        }),

        NoteCollection = DualStorage.Collection.extend({
            model: Note,
            url: globals.urls.notes,

            setNote: function (house_id, text) {
                var notes = this.where({house: house_id});
                if (notes.length > 0) {
                    // there should only be one entry
                    _.each(notes, function (it) {
                        it.set("text", text);
                        it.save();
                    });
                } else {
                    var timestamp = moment().format("YYYY-MM-DDTHH:mm:ss.SSSZZ");
                    this.create({house: house_id, "text": text, 'timestamp': timestamp})
                    settings.set('userdata_version_local', timestamp);
                }
            }

        });

    return {
        Note: Note,
        NoteCollection: NoteCollection
    };

});