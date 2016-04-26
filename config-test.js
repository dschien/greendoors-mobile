/**
 * Created by schien on 19/11/13.
 */

require.config({
    catchError: true,
    baseUrl: './../',
    paths: {
        backbone: 'js/lib/backbone',
        dualstorage: 'js/lib/backbone.dualstorage.amd',
        backbonetouch: 'js/lib/backbone.touch',
        store: 'js/storage/MemoryStore',
        backend: 'js/storage/LSBackend',
        async: 'js/lib/async',
        domReady: 'js/lib/domReady',
        fastclick: 'js/lib/fastclick',
        gmaps: 'js/lib/google_maps',

        document: "js/lib/document",
        window: "js/lib/window",
        math: "js/lib/math",
        parsley: 'js/lib/parsley',
        handlebars: 'js/lib/handlebarsamd',
        iScroll: 'js/lib/iscroll',
        // todo use the lite version on mobile
        jquery: 'js/lib/jquery',
        richmarker: 'js/lib/richmarker_req',

        underscore: 'js/lib/underscore',

        errorhandler: 'js/lib/errorhandler',

        MapMainView: 'js/views/MapMainView',
        text: 'js/lib/text',

        globals: 'app/globals',
        Application: 'app/MainApp'


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

        backbonetouch :{
            deps: [
                'underscore',
                'jquery',
                'backbone'
            ]
        },
        dualstorage: {
            deps: ['underscore', 'backbone']
        },
        'parsley': { deps: ['jquery'] }

    },
    // for ripple
    waitSeconds: 0
});