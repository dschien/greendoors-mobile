/**
 * Created by schien on 19/11/13.
 */

require.config({
    catchError: true,

    baseUrl: '../',
    paths: {
        backbone: 'js/lib/backbone',
        dualstorage: 'js/lib/backbone.dualstorage.amd',
        store: 'js/storage/MemoryStore',
        backend: 'js/storage/LSBackend',
        async: 'js/lib/async',
        domReady: 'js/lib/domReady',
        fastclick: 'js/lib/fastclick',
        gmaps: "js/lib/google_maps",
        document: "js/lib/document",
        window: "js/lib/window",
        math: "js/lib/math",

        handlebars: 'js/lib/handlebarsamd',
        iScroll: 'js/lib/iscroll',
        // todo use the lite version on mobile
//        iScroll: 'lib/iscroll-lite',
//        iScroll: 'lib/iscroll',
        jquery: 'js/lib/jquery',
        richmarker: 'js/lib/richmarker_req',
        underscore: 'js/lib/underscore',

        errorhandler: 'js/lib/errorhandler',

        MapMainView: 'js/views/MapMainView',
        text: 'js/lib/text',

        globals: 'app/globals',
        app: './app',

        HouseView: '/app/app/views/detail/House'


    },
    shim: {

        'jquery': {
            exports: '$'
        },
        gmaps: {
            exports: 'google',
            deps: ['async']
        },
        'handlebars': {
            exports: 'Handlebars'

        },
        'fastclick': {
            exports: 'Fastclick'
        },
        'iScroll': {
            deps: ['document', 'math', 'window'],
            exports: 'iScroll'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        dualstorage: {
            deps: ['underscore', 'backbone']
        }

    },
    // for ripple
    waitSeconds: 0
});

define(function (require) {

    var Backbone = require('backbone'),
        DualStorage = require('dualstorage'),
        templates = require('js/templates/templates');

    Handlebars.registerPartial('houseActions', templates.house_actions);
    Handlebars.registerPartial('measure', templates['measure']);

    var settingsModels = require('app/models/settings');
    window.greendoors = {};
    window.greendoors.settings = new settingsModels.Settings();

    var
        $ = require('jquery'),
        MainRouter = require('app/routers/MainRouter'),
        MenuRouter = require('app/routers/MenuRouter'),
        BaseRouter = require('app/routers/BaseRouter'),
        houseModels = require('app/models/house'),
        measureCategoryModels = require('app/models/measureCategories'),
        measureModels = require('app/models/measure'),
        favouritesModels = require('app/models/favourite'),
        notesModels = require('app/models/Notes'),
        houses = new houseModels.HouseCollection(),
        measures = new measureModels.MeasureCollection(),
        measureCategories = new measureCategoryModels.MeasureCategoryCollection(),
        favourites = new favouritesModels.FavouriteCollection(),
        notes = new notesModels.NoteCollection();


    $.ajaxSetup({
        beforeSend: function setRequestHeader(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer c01d6ce7483e183de08346eb608e6c77fa8d7dd5');
        }
    });

    var houseCall = houses.fetch();
    var measureCall = measures.fetch();
    var measureCategoryCall = measureCategories.fetch();
    var favouritesCall = favourites.fetch();
    var notesCall = notes.fetch();

    var self = this;

    // global variable

    window.greendoors.measures = measures;
    window.greendoors.favourites = favourites;
    window.greendoors.notes = notes;

    var mainRouter = new MainRouter({houses: houses});
    var menuRouter = new MenuRouter();

    Backbone.history.start({root: "/app/"});

    // load both houses and settings
    $.when(houseCall, measureCall, measureCategoryCall, favouritesCall, notesCall).done(function () {
        self.collection = houses;
        // start with the menu
        Backbone.history.navigate("menu", true);
    })
});