define([
        'js/storage/MemoryStore',
        'js/app',
        'underscore',
        'js/constants',
        'spec/helpers/dbHelper',
        'polyfill'
    ],
    function (store, appController, _, constants, helper, poly) {


        describe("LoginController", function () {


            afterEach(function () {
                document.getElementById('stage').innerHTML = '<div class="navbar"></div><div id="content"></div>';
            });

            var DAO, apiVersion;

            beforeEach(function () {

                runs(function () {
                    localStorage.clear();
                    appController.initialize();

                    // get the DAO
                    DAO = appController.store;
                    DAO.setHostname(helper.testServer);

                    helper.setDB(DAO);

                    apiVersion = DAO.getAPIVersion();
                });

            });

            it("should successfully loginview", function () {
                var loginView;
                runs(function () {

                });

                waitsFor(function () {

                    var loginSelector = $('#login-view');
                    if (loginSelector.length > 0) {
                        loginView = loginSelector[0];
                        return true;
                    }
                    return false;
                }, "The Value should be set", 500);

                runs(function () {
                    expect(loginView).toBeDefined();
                });
            });


            it("should successfully login after prior registration", function () {
                var username;
                var password = helper.defaultPassword;

                runs(function () {
                    helper.register(function () {
                            expect('Could not register. Check \n' +
                                '1) server is up, \n' +
                                '2) you are allowed to do XS request \n' +
                                '3) you have accepted a self-signed cert for this session').toBe(false);
                        }, function (data) {
                            username = data.username;
                        }
                    );
                });


                waitsFor(function () {
                    if (username) {
                        return true;
                    }
                    return false;
                }, "username should be defined after registration", 2500);

                runs(function () {
                    var loginSelector = $('#login-username-text');
                    if (loginSelector.length > 0) {
                        usernameField = loginSelector[0];
                        passwordField = $('#login-password-field')[0];
                        loginButton = $('#login-login-button')[0];

                        usernameField.value = username;
                        passwordField.value = password;
                        loginButton.click();
                    }
                });

                var mainView;
                waitsFor(function () {
                    var mainViewSelector = $('#list-main-view');
                    if (mainViewSelector.length > 0) {
                        mainView = mainViewSelector[0];
                        return true;
                    }
                    return false;
                }, "should go to list main view after login", helper.serverTimeout);

                runs(function () {
                    expect(mainView).toBeDefined();
                    var auth_token = localStorage.getItem(constants.OAUTH_TOKEN);
                    if (auth_token === null || auth_token === "null") {
                        // fail
                        expect(false).toBe(true);
                    }
                });
            });

            it("should successfully register", function () {
                var usernameField;
                var passwordField;
                var registerButton;
                var emailField;


                runs(function () {
                    var registrationButton = $('#login-register-button');
                    registrationButton.click();
                    console.log('clicking register button');
                });

                waitsFor(function () {
                    var emailSelector = $('#reg-email-tf');

                    if (emailSelector.length > 0) {

                        usernameField = $('#reg-name-tf')[0];
                        passwordField = $('#reg-pass-tf')[0];
                        emailField = $('#reg-email-tf')[0];

                        registerButton = $('#reg-register-button');
                        console.log('got reg view');
                        return true;
                    }
                    return false;
                }, "The Value should be set", helper.serverTimeout);

                runs(function () {
                    usernameField.value = helper.getDefaultUsername();
                    passwordField.value = helper.defaultPassword;
                    emailField.value = helper.defaultEmail;

                    registerButton.click();

                });

                var mainView;
                waitsFor(function () {
                    var mainViewSelector = $('#list-main-view');
                    if (mainViewSelector.length > 0) {
                        mainView = mainViewSelector[0];
                        return true;
                    }
                    return false;
                }, "The Value should be set", helper.serverTimeout);

                runs(function () {
                    expect(mainView).toBeDefined();
                    var auth_token = localStorage.getItem(constants.OAUTH_TOKEN);
                    if (auth_token === null || auth_token === "null") {
                        // fail
                        expect(false).toBe(true);
                    }
                });
            });

            /*
             it("should successfully register with test account not authenticated", function () {
             var usernameField;
             var passwordField;
             var registerButton;
             var emailField;


             runs(function () {
             // delete the auth token if present
             localStorage.clear();
             appController.initialize();

             });

             var continueToRegisterButton;

             waitsFor(function () {
             var registrationButton = $('#login-register-button');

             if (registrationButton.length > 0) {
             continueToRegisterButton = registrationButton[0];
             return true;
             }
             return false;
             }, "The Value should be set", 2500);

             runs(function () {
             continueToRegisterButton.click();
             console.log('clicking register button');
             });

             waitsFor(function () {
             var emailSelector = $('#reg-email-tf');

             if (emailSelector.length > 0) {

             usernameField = $('#reg-name-tf')[0];
             passwordField = $('#reg-pass-tf')[0];
             emailField = $('#reg-email-tf')[0];

             registerButton = $('#reg-register-button');
             console.log('got reg view');
             return true;
             }
             return false;
             }, "The Value should be set", 1500);

             runs(function () {
             usernameField.value = 'schien';
             passwordField.value = 'asd';
             emailField.value = 'dschien@gmail.com';

             registerButton.click();

             });

             var mainView;
             waitsFor(function () {
             var mainViewSelector = $('#list-main-view');
             if (mainViewSelector.length > 0) {
             mainView = mainViewSelector[0];
             return true;
             }
             return false;
             }, "The Value should be set", 2500);

             runs(function () {
             expect(mainView).toBeDefined();
             var auth_token = localStorage.getItem(constants.OAUTH_TOKEN);
             if (auth_token !== null && auth_token !== "null") {
             // fail
             expect(false).toBe(true);
             }
             });
             });
             */
        });


    });