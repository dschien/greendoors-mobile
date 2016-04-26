/**
 * Created by schien on 21/09/2013.
 */

var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

require.config({

    baseUrl: '/base/',


    paths: {
        store: 'js/storage/MemoryStore',
        backend: 'js/storage/LSBackend',
        async: 'js/lib/async',
        domReady: 'js/lib/domReady',
        fastclick: 'js/lib/fastclick',
        "gmaps": "js/lib/google_maps",
//        handlebars: 'js/lib/handlebarsamd',
        handlebars: 'lib/handlebars.runtime.amd',
        iScroll: 'js/lib/iscroll',
        jquery: 'js/lib/jquery',
        richmarker: 'js/lib/richmarker_req',
        underscore: 'js/lib/underscore',
        MapMainView: 'js/views/MapMainView',
        text: 'js/lib/text',
        polyfill: 'spec/helpers/test-polyfills',
        templates: 'js/templates/templates'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        gmaps: {
            exports: 'google'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'fastclick': {
            exports: 'Fastclick'
        },
        'iScroll': {
            exports: 'iScroll'
        },
        underscore: {
            exports: '_'
        },
        templates: {
            deps: ['handlebars']
        }
    },

    deps: tests,

    callback: window.__karma__.start
});
