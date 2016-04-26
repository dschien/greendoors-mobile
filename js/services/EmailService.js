/**
 * Created with JetBrains WebStorm.
 * User: schien
 * Date: 29/07/2013
 * Time: 16:25
 * To change this template use File | Settings | File Templates.
 */
/* jshint sub:true */
/*jshint -W055 */
define(['jquery',
        'underscore'
        ],
    /*
     @param {!jQuery} $
     @param {!js/templates} templates
     */
    function ($, _) {

        var EmailService = {

            openEmailComposer: function (toAddress, subject) {
                subject = subject || 'Greendoors Smartphone App';
                toAddress = toAddress || 'green-doors@bristol.ac.uk';

                if (navigator.userAgent.match(/(iPad|iPhone|iPod)/) && typeof cordova !== 'undefined') {

                    var emailComposer = cordova.require('emailcomposer.EmailComposer');
                    emailComposer.show({
                        to: toAddress,
                        cc: '',
                        bcc: '',
                        subject: subject,
                        body: '',
                        isHtml: true,
                        attachments: [
                            // attach a HTML file using a UTF-8 encoded string
//                        {
//                            mimeType: 'text/html',
//                            encoding: 'UTF-8',
//                            data: '<html><body><h1>Hello, World!</h1></body></html>',
//                            name: 'demo.html'
//                        },
//                        // attach a base-64 encoded veresion of of http://cordova.apache.org/favicon.ico
//                        {
//                            mimeType: 'text/png',
//                            encoding: 'Base64',
//                            data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS4xLjIiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjE8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K5JKPKQAAAtpJREFUOBFNU0toE1EUPTOZTJI2qbG0qUnwg1IFtSBI967cCBHcSsGFgktdC125EvwVLKi0FApaCChuRMSFqAitCNrGJE1DadpSYz5OvpPJ5Od5007xwc1998475513743U6/Uk7K1Op6O0Wq2pdrvt597odrugh/A0hcdk+luhUKhgY0Ryf5HsmizLNz0eN9qtNvRGA8xBdTohyxJjQ8TrBEzaIOk/BQNk3+YHL1WAKiyguL1Wr1tK3C6XteeZ01SRFCSy+Nlb07zdG0umcPvOXTyde8lbZbjcbjyYnsG5CxG8fvsBBJKs+8wG2QouMvFOJB9Mz+JnLA6P24UBnxcNo4nk2jpiiVWEQ2G8j87ApSqo643rgUBg1lJgGMaUAK/EkyhVaxg7eQLhoUEoThX9JBk54MVh/wDSm1uYj75Bv9eHRqNxL5PJTFpF1DRN8fX3oVKp4GhwGB6/H50eoO3sIBgYRpdvr/v8cCeS8KgOFHNZZLNZlfVTLQWKoixDkuElyeLXJdT7vGiHw/j+7QdezC9gCw6MX76Ezx+/QJYkVKiShU6y0MuWAjKlzJYJp+JAIZdDJl+AT3ZgM7OJYqGA4Jkx/C5X4XEpvMSDaq0K0zRTAmcRkCnZZutEm4p6A3MPn8Ahel/SoJstbEVf4dNCFIPBQ/ByRqpU0Gw2UyzbhkVAOSkywuGQMT5+HgOsuEtRIJ06jl63B4nqmuzGwZEAnE7FIhCYSCRSsggIXmcnxLtw4+oViNluc4Q7HCbbi4ES34tayRoyHknTdgdpdHQ0S4KcUJBKrdXuP3q8XGZH/uTzyOXyKJXLeD4zF1uJr2ZFnfh26Lq+sU8gSZJaLpfTBmWyQLWlxaWczlpoWskk2GzyefH4r7+JRGKHZ4WS9MTEREUQWJPIpJv7Y7SztCM0EYvV3XX7I28w3qbFaBtUotsEKhN+2hCtjybmwwZzay07pzMSf+cSCcx/K8WXLZEV/swAAAAASUVORK5CYII=',
//                            name: 'cordova.png'
//                        }
                            // attach a file using a hypothetical file path
                            //,{ filePath: './path/to/your-file.jpg' }
                        ],
                        onSuccess: function (winParam) {
                            console.log('EmailComposer onSuccess - return code ' + winParam.toString());
                        },
                        onError: function (error) {
                            console.log('EmailComposer onError - ' + error.toString());
                        }
                    });
                } else {
                    var target = _.template("mailto:<%= data.toAddress %>?subject=<%= data.subject %>",
                        {toAddress: toAddress, subject: subject}, {variable: 'data'});
                    window.location.href = target;
                }
            }



        };


        return {
            getSingleton: function () {
                return EmailService;
            }
        };
    });