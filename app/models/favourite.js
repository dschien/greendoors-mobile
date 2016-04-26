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

        Favourite = Backbone.Model.extend({
            urlRoot: globals.urls.favourites
        }),

        FavouriteCollection = DualStorage.Collection.extend({
            model: Favourite,

            url: globals.urls.favourites,

            /**
             * Either create a favourite (if not already one) or destroy a favourite (if already one)
             * @param house_id
             */
            toggle: function (house_id) {
                var favourites = this.where({house: house_id});
                if (favourites.length > 0) {
                    _.each(favourites, function (it) {
                        it.destroy();
                    });
                } else {
                    var timestamp = moment().format("YYYY-MM-DDTHH:mm:ss.SSSZZ");
                    settings.set('userdata_version_local', timestamp);
                    this.create({house: house_id, 'timestamp': timestamp}, {remote: !settings.get('offline')})

                }
            },

            isFavourite: function (house_id) {
                return this.findWhere({house: house_id}) ? true : false;
            },

            hasHouse: function (house_id) {
                return this.isFavourite(house_id);
            }



        });

    return {
        Favourite: Favourite,
        FavouriteCollection: FavouriteCollection
    };

});