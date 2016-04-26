/**
 * Created by schien on 05/09/2013.
 */
define(function () {

    var errorhander = function (err) {
        var txt = "ERROR during module loading: ";
        if (err.message) {
            txt = txt.concat(err.message);
        }
        if (err.requireModules) {
            txt = txt.concat(err.requireModules);
        }
        console.log(txt);
    };

    // register error handler
    console.log('error handler loaded');


    requirejs.onError = errorhander;
    require.onError = errorhander;

    return function (errObject) {

        requireType = errObject.requireType;
        requireModules = errObject.requireModules.trim().split(' ');
        console.log(requireType, requireModules);
        alert(requireType + requireModules);
    };

});