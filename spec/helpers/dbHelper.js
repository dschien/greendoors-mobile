/**
 * Created by schien on 17/09/2013.
 */
define(['text!spec/helpers/houses.json'], function (houses_json) {
    console.log('spec/helpers');
    var helper = {

        initHouses: function () {
            var houses = JSON.parse(houses_json);
            this.houses = houses;
            this.db.backend.save('houses', houses);
        },
        setOAuthToken: function (token) {
            localStorage.setItem('OAUTH_TOKEN', token);
        },
        setDB: function (db) {
            this.db = db;
        },
        makeid: function makeRandomString(size) {
            size = size || 5;
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < size; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        },
        getEndpointURL: function () {
            return  this.testServer;
        },
        defaultPassword: 'test',
        testServer: 'https://localhost:8000',
        getDefaultUsername: function () {
            return this.defaultPassword + this.now();
        },
//            testServer: 'https://dgd',
        defaultEmail: 'email@test.me',
        register: function register(failure, successCallback, pass, username, email) {

            email = email || this.defaultEmail;

            var password = pass || this.defaultPassword;
            this.db.register(email, username || this.getDefaultUsername(), password, true, true, successCallback, failure);
            return {password: pass, username: username};
        },
        login: function login(username, credentials, successCallback, failureCallback) {
            credentials = credentials || '9tzbFVkdeTRU1gNzwc5w';
            username = username || 'schien';
            var self = this;
            this.db.authenticate(
                username,
                credentials,
                    successCallback || function (success) {
                    console.log('Authentication successful');
                },
                    failureCallback || function (failure) {
                    console.log('An error occured during authentication: ' + failure);

                    self.register(failureCallback || function () {
                        expect('Could not login or register. Check server is up.').toBe(false);
                    }, successCallback);
                }
            );
        },
        serverTimeout: 5000,


        now: function () {
            var date = new Date(),
                datevalues = [
                        date.getMonth() + 1,
                    date.getDate(),
                    date.getHours(),
                    date.getMinutes(),
                    date.getSeconds()
                ];
            return _.reduce(datevalues, function (memo, item) {
                return memo + '_' + item;
            }, '');
        }
    };

    return helper;

});