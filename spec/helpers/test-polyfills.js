/**
 * Created by schien on 18/09/2013.
 */
define([], function () {
    navigator.notification = {alert: function (message, completeCallback, title, buttonLabel) {
        // Using standard alert
        console.log('ALERT:' + message);
    }};
});
