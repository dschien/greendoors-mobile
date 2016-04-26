navigator.notification = {
    alert: function (message, completeCallback, title, buttonLabel) {
        // Using standard alert
        alert(message);
    },
    confirm: function (message, buttonCallback, title, buttonLabel) {
        // Using standard alert
        alert(message);
        // one is the first button from left (ok)
        buttonCallback(1);
    }

}
