/**
 * Created by schien on 19/11/13.
 */

require.config({
    catchError: true,
    baseUrl: './',
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
        moment: 'js/lib/moment.min',
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

        globals: 'app/globals'

//        Application: 'app/MainApp'


    },
    shim: {

//        'jquery': {
//            exports: '$'
//        },
        Application: {
            deps: ['jquery']
        },
        gmaps: {
            exports: 'google',
            deps: ['async']
        },
        handlebars: {
            exports: 'Handlebars'

        },
        fastclick: {
            exports: 'Fastclick'
        },
        iScroll: {
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

        backbonetouch: {
            deps: [
                'underscore',
                'jquery',
                'backbone'
            ]
        },
        dualstorage: {
            deps: ['underscore', 'backbone']
        },
        parsley: { deps: ['jquery'] }

    },
    // for ripple
    waitSeconds: 0
});

define(function (require) {

        function onDeviceReady(desktop) {
            console.log('device ready')

            var globals = require('globals'),
//                settings = require('app/models/settings'),
                TemplateView = require('app/views/TemplateView'),
                domReady = require('domReady');

            if (desktop !== true) {
                try {
                    // Hiding splash screen when app is loaded
                    navigator.splashscreen.hide();
                } catch (err) {
//                alert('Error hiding splashscreen:' + err);
                }
            }
            domReady(function () {
//                    // check if initial app start
                var hideRequire = true;
                if (hideRequire) {
                    require(['app/MainApp', 'app/models/settings'], function (app, settings) {
                        if (!localStorage.getItem(globals.urls.houses) && settings.get('offline')) {
                            var offlineView = new TemplateView({templateName: 'offlineAppStart',
                                data: {header: "Offline", message: "Please go online for first start"}});
                            $('body').append(offlineView.render().$el);
                            $("#start").click(function () {
                                offlineView.close();
                                start();
                            })
                        } else {
                            app.initialize();
                        }
                    })
                }
            })
        }

        function start() {
            if (typeof device != 'undefined') {
//                if (device.platform === 'iOS' || device.platform === 'Android') {
//            setTimeout(function () {
//                alert('loading')
                document.addEventListener('deviceready', onDeviceReady, false);
//                }
//            if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {

//            if (navigator.userAgent.match(/iP[ha][od].*OS 7/)) {
//                document.body.style.marginTop = "20px";
//            }
//            }, 1500)
            }

            else {
                // On desktop don't have to wait for anything
                onDeviceReady(true);
            }


        }

        start();


//        .initialize();

    }


)
;