/**
 * Created by schien on 18/09/2013.
 */
define(['js/storage/MemoryStore',
        'underscore',
        'js/constants',
        'spec/helpers/dbHelper',
        'js/services/GeolocationService'
    ],
    function (store, _, constants, helper, geolocationService) {


        describe("MemoryStoreSpec", function () {

            var DAO = new store();

            helper.setDB(DAO);

            var apiVersion = DAO.getAPIVersion();

            var watchID = 1;
            /**
             * var lat_n = 51.507033;
             var long_e = -2.482910;
             var ne = new google.maps.LatLng(lat_n, long_e);
             var lat_s = 51.408201;
             var long_w = -2.711563;
             var sw = new google.maps.LatLng(lat_s, long_w);
             */
            (function setupPlatformMethod() {
//                spyOn(navigator.geolocation, 'watchPosition').andReturn(745);
                navigator.geolocation.watchPosition = function watchPosition(success, error, options) {
                    var northEastBritol = {latitude: 51.447588, longitude: -2.619553};
                    var position = {coords: northEastBritol};
                    success(position);

                    return  watchID;
                };
            })();

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
            it("should start and stop service", function () {

                geolocationService.startTrackingPosition();
                expect(geolocationService.stopTrackPosition()).toBe(watchID);

            });

            // general
            it("should sort houses correctly ", function () {

                // south east
                var houses = geolocationService.sortModel(helper.houses, 51.406390, -2.50145);
                var cache = geolocationService._getCache();
                expect(Object.keys(cache.distance).length).toBe(houses.length);
                expect(houses[0].address).toBe('2 Callington Rd, Brislington, BS4 5BW');

//              // house in bishopston
                var lat = 51.479224;
                var long = -2.600502;
                houses = geolocationService.sortModel(helper.houses, lat, long);
                cache = geolocationService._getCache();
                expect(Object.keys(cache.distance).length).toBe(houses.length);
                expect(houses[0].address).toBe('10 Kings Ave, Bishopston, BS7 8JN');
                expect(cache.position.latitude).toBe(lat);
                expect(cache.position.longitude).toBe(long);

                // south west
                var lat2 = 51.435604;
                var long2 = -2.617149;
                houses = geolocationService.sortModel(helper.houses, lat2, long2);
                cache = geolocationService._getCache();
                expect(Object.keys(cache.distance).length).toBe(houses.length);
                expect(houses[0].address).toBe('1a Pembroke Rd, Southville, BS3 1PP');
                expect(cache.position.latitude).toBe(lat2);
                expect(cache.position.longitude).toBe(long2);
            });

            // general
            it("should use the cache if position hasn't changed", function () {

                // not far away...
                var long = -2.503638;
                var lat = 51.408522;

                // south east
                houses = geolocationService.sortModel(helper.houses, lat, long);
                var cache = geolocationService._getCache();

                var houses = geolocationService.sortModel(helper.houses, 51.406390, -2.50145);
                cache = geolocationService._getCache();

                expect(cache.position.latitude).toBe(lat);
                expect(cache.position.longitude).toBe(long);
            });


        });
    });