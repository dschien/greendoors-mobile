/**
 * Created by schien on 18/09/2013.
 */
define([
        'js/storage/MemoryStore',
        'js/app',
        'underscore',
        'js/constants',
        'spec/helpers/dbHelper',
        'polyfill'
    ],
    function (store, appController, _, constants, helper) {


        describe("LoginController", function () {


//            afterEach(function () {
//                document.getElementById('stage').innerHTML = '<div class="navbar"></div><div id="content"></div>';
//            });

            var DAO, apiVersion;

            beforeEach(function () {

                runs(function () {
                    localStorage.clear();

                    // to get past the authentication
                    helper.setOAuthToken();

                    appController.initialize();

                    // get the DAO
                    DAO = appController.store;
                    DAO.setHostname(helper.testServer);
                    helper.setDB(DAO);
                    apiVersion = DAO.getAPIVersion();

                    // now
                    helper.initHouses();

                    // or login
//                    helper.login();

                });
            });

//
//            it("should go to the list view", function () {
//                var username;
//                var password = helper.defaultPassword;
//
//                runs(function () {
//                    helper.register(function () {
//                            expect('Could not register. Check \n' +
//                                '1) server is up, \n' +
//                                '2) you are allowed to do XS request \n' +
//                                '3) you have accepted a self-signed cert for this session').toBe(false);
//                        }, function (data) {
//                            username = data.username;
//                        }
//                    );
//                });
//
//                waitsFor(function () {
//                    if (username) {
//                        return true;
//                    }
//                    return false;
//                }, "username should be defined after registration", 2500);
//
//                runs(function () {
//                    var loginSelector = $('#login-username-text');
//                    if (loginSelector.length > 0) {
//                        usernameField = loginSelector[0];
//                        passwordField = $('#login-password-field')[0];
//                        loginButton = $('#login-login-button')[0];
//
//                        usernameField.value = username;
//                        passwordField.value = password;
//                        loginButton.click();
//                    }
//                });
//
//                var mainView;
//                waitsFor(function () {
//                    var mainViewSelector = $('#list-main-view');
//                    if (mainViewSelector.length > 0) {
//                        mainView = mainViewSelector[0];
//                        return true;
//                    }
//                    return false;
//                }, "should go to list main view after login", helper.serverTimeout);
//            });


            it("should go change between filter, etc", function () {


                waitsFor(function () {
                    var mainViewSelector = $('#list-main-view');
                    if (mainViewSelector.length !== 0) {
                        return true;
                    }
                    return false;
                }, "should go to list main view after login", helper.serverTimeout);

                runs(function () {
                    expect($('#list-main-view').length > 0).toBe(true);
                });

            });

            it("should go change between filter, etc", function () {

                waitsFor(function () {
                    var mainViewSelector = $('#list-main-view');
                    if (mainViewSelector.length !== 0) {
                        return true;
                    }
                    return false;
                }, "should go to list main view after login", helper.serverTimeout);

                runs(function () {
                    // clear existing house list
                    $('.house-list').empty();
                    db.setIsFavouriteById(1, true, function () {
                        done = true;
                    }, function (err) {
                        console.log('ERROR: ' + err);
                    });
                });

                waitsFor(function () {
                    var houses = $('.house-list li');
                    return (houses ? houses.length > 0 : false);
                }, "should show a list of houses", 150);


            });
        });


    });