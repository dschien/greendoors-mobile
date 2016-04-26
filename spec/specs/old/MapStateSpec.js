define(['../../js/app', 'underscore', 'js/constants'], function (appController, _, constants) {


    describe("MapState change", function () {
        it("should not load the map if network state is disabled", function () {

            runs(function () {


            });


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
    });


});