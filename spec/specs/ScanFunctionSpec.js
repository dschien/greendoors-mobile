/**
 * Created by schien on 18/09/2013.
 */
define(['js/storage/MemoryStore',
        'underscore',
        'js/constants',
        'spec/helpers/dbHelper',
        'js/controllers/NavBarController',
        'polyfill'
    ],
    function (store, _, constants, helper, NavBarController) {


        describe("MemoryStoreSpec", function () {

            var DAO = new store();

            helper.setDB(DAO);

            var apiVersion = DAO.getAPIVersion();

            beforeEach(function () {
                localStorage.clear();

                // to get past the authentication
                helper.setOAuthToken();

                // get the DAO
                DAO.setHostname(helper.testServer);
                helper.setDB(DAO);
                apiVersion = DAO.getAPIVersion();

                // now
                helper.initHouses();

                // or login
//                    helper.login();
            });


            // general
            it("should save a scan of house and measure", function () {
                var navBarController = new NavBarController();
                navBarController.scanSuccess({text: '00090004'});
            });

            it("should save a scan of house alone", function () {
                var navBarController = new NavBarController();
                navBarController.scanSuccess({text: '00240000'});
            });

            it("should not save a scan of arbitrary text", function () {
                var navBarController = new NavBarController();
                navBarController.scanSuccess({text: 'foo'});
            });

        });
    });