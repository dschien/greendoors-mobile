/**
 * Created with JetBrains WebStorm.
 * User: schien
 * Date: 31/07/2013
 * Time: 15:56
 * To change this template use File | Settings | File Templates.
 */
require.config({

    baseUrl: './../',
    paths: {
        jquery: 'js/lib/jquery',
        store: 'js/storage/MemoryStore',

        'jasmine': 'spec/lib/jasmine-1.2.0/jasmine',
        'jasmine-html': 'spec/lib/jasmine-1.2.0/jasmine-html',
        spec: '.'
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});


require(['jquery', 'jasmine-html'], function ($, jasmine) {

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('MemoryStoreSpec');


    $(function () {
        require(specs, function (spec) {
            jasmineEnv.execute();
        });
    });

});