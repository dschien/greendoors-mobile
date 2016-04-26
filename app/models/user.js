/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        globals = require('globals'),
        device = require('app/models/device'),

        User = Backbone.Model.extend({

            urlRoot: globals.urls.user,

            local: true, // never save remotely
            defaults: {
                authenticated: false,
                oauthToken: null,
                username: null
//                offline: true
            },

            initialize: function (attributes, options) {
                this.bind('change:oauthToken', this.onOAuthTokenChange, this);
                this.bind('change:username', this.onUsernameChange, this);
                this.set({'oauthToken': localStorage.getItem(globals.constants.OAUTH_TOKEN)});
                this.set({'username': JSON.parse(localStorage.getItem('username'))});
            },

            onOAuthTokenChange: function (status, oAuthToken) {
                this.set({'authenticated': !!oAuthToken});
                // add oauth token to ajax default
                this.initOAuthToken(oAuthToken);
            },

            onUsernameChange: function () {
                localStorage.setItem('username', JSON.stringify(this.get('username')))
            },

            setOAuthToken: function (apiKey) {
                localStorage.setItem(globals.constants.OAUTH_TOKEN, apiKey)
                this.initOAuthToken(apiKey);
                this.set({'oauthToken': apiKey});
            },


            initOAuthToken: function (token) {
                // store the oauth token
                var oauthString = 'Bearer ' + token;

                $.ajaxSetup({
                    beforeSend: function setRequestHeader(xhr) {
                        xhr.setRequestHeader('Authorization', oauthString);
                    }
                });
            },

            authenticate: function (username, password, successCallback, failureCallback, client_id, client_secret) {
                // login to server

                var defaultClientId = "fa9f07760c0ca2df114a"; // local
                var defaultClientSecret = "9efab4b1e37024370aa0f91f92afcc4bf8c22550"; // local
                var content = {"client_id": client_id || defaultClientId, "client_secret": client_secret || defaultClientSecret,
                    "grant_type": "password", "username": username, "password": password};
                var strData = content;
//                var strData = JSON.stringify(content);
                var self = this;
                console.log('authentication: sending to server:' + strData);
                var posting = $.ajax({
                    type: "POST",
                    url: globals.urls.host + 'oauth2/access_token',
                    // leave this as the default (form encode)
                    contentType: 'application/x-www-form-urlencoded',
                    // the oauth method on django does not honor the data type setting.
                    // leave unset
                    dataType: 'json',
                    data: strData,
                    cache: false
                });
                posting.done(function (data) {
                    console.log('login successful. storing authentication');
                    self.set('username', username);

                    self.setOAuthToken(data.access_token);

                    successCallback(data);
                });
                posting.fail(function (data) {
//                    jquery.parseJSON(data.responseText);
                    var reason = "An unknown error occured (" + data.statusText + ")";
                    try {
                        if (data.responseJSON) {
                            var response = data.responseJSON;
                            console.log('failed to login:' + response);

                            if (response.error === "invalid_grant") { // credentials
                                reason = "Username or password wrong";
                            } else if (response.error === 'invalid_client') { // client
                                reason = "App outdated. Please update";
                            }
                        }

                    } catch (er) {
                        console.log(er);
                    }
                    failureCallback(reason);

                });
                return posting;
            },

            register: function (email, username, password, newsletter, research, successCallback, failureCallback) {
                var self = this;
                var strData = JSON.stringify({"username": username, "password": password, "email": email, "device": device.get('device'), 'newsletter': newsletter, 'research': research});
//                console.log(strData);

                var posting = $.ajax({
                    type: "POST",
                    url: globals.urls.registration,
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    data: strData,
                    cache: false
                });
                posting.done(function (data) {
//                        console.log('register success:' + JSON.stringify(data));
                    self.authenticate(username, password, successCallback, failureCallback, data.client_id, data.client_secret);

                });
                posting.fail(function (data) {
                    console.log('failed to login:' + data.responseText);
                    var msg = 'Unknown error occurred.' + data.statusText;
                    try {
                        msg = _.reduce(data.responseJSON, function (memo, failure, dataType) {
                            return memo + failure + ", ";
                        }, "Errors: ");
                    } catch (err) {
                        // nothing to be done.
                    }
                    failureCallback(msg);
                });
                posting.always(function (data) {
                    console.log("returned from register call");
                })
                return posting;
            }


        });

    return new User();

})
;