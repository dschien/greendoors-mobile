/**
 * Created by schien on 19/09/2013.
 */
define(['jquery', 'js/constants', 'backbone'],
    function ($, constants, Backbone) {

        var LocationModel = Backbone.Model.extend({

        });

//        document.addEventListener("pause", singleton().stopTrackPosition, false);
//        document.addEventListener("resume", singleton().startTrackingPosition, false);

        function singleton() {
            var instance = (function () {


                if (typeof(Number.prototype.toRad) === "undefined") {
                    Number.prototype.toRad = function () {
                        return this * Math.PI / 180;
                    };
                }

                var trackingEnabled = true;

                var locationModel = new LocationModel({latitude: null, longitude: null});


                /**

                 Properties in Position.Coordinates:
                 latitude: Latitude in decimal degrees. (Number)
                 longitude: Longitude in decimal degrees. (Number)

                 altitude: Height of the position in meters above the ellipsoid. (Number)

                 accuracy: Accuracy level of the latitude and longitude coordinates in meters. (Number)

                 altitudeAccuracy: Accuracy level of the altitude coordinate in meters. (Number)

                 heading: Direction of travel, specified in degrees counting clockwise relative to the true north. (Number)
                 */
                function updateLocation(position) {

                    console.log('got new location: ' + position.coords.latitude + ", " + position.coords.longitude);

                    // if the position is more than 50 meters away...
                    var minUpdateDistance = 0.05;
                    if (cache.position === null || this.calcDistance( cache.position.latitude, cache.position.longitude,
                            locationModel.get('latitude'), locationModel.get('longitude')) > minUpdateDistance) {

                        locationModel.set('latitude', position.coords.latitude, {silent: true});
                        locationModel.set('longitude', position.coords.longitude, {silent: true});
                        locationModel.trigger('change');
                    }

                }

                var watchID;
                var secs30 = 30000;
                var secs10 = 10000;
                var mins1 = 60000;
                var mins10 = 600000;
                var secs5 = 10000;

                function startTrackingPosition() {
                    var self = this;
                    console.log('Starting tracking position');
                    if (watchID === null && trackingEnabled) {

                        watchID = navigator.geolocation.watchPosition(
                            $.proxy(updateLocation, self),
                            $.proxy(errorStatus, self),
//                            $.proxy(errorCallback_highAccuracy, self),
                            { maximumAge: secs30, timeout: secs10, enableHighAccuracy: true });
                    }
                }

                function errorStatus(error) {

                    var msg = "Still waiting for position. Current status: =";
                    if (error.code == error.PERMISSION_DENIED)
                        msg += "permission denied)";
                    else if (error.code == error.POSITION_UNAVAILABLE)
                        msg += "position unavailable)";
                    else if (error.code == error.TIMEOUT)
                        msg += "timeout";
                    console.log(msg)

                }

                function errorCallback_highAccuracy(error) {
                    if (error.code == error.TIMEOUT) {
                        // Attempt to get GPS loc timed out after 5 seconds,
                        // try low accuracy location

                        var self = this;
                        if (watchID === null && trackingEnabled) {
                            watchID = navigator.geolocation.watchPosition(
                                $.proxy(updateLocation, self),
                                function (error) {
                                    console.log('can not track position: ' + error);
                                },
                                {maximumAge: mins1, timeout: secs5, enableHighAccuracy: false});
                            return;
                        }
                    }

                    var msg = "Location error = ";
                    if (error.code == error.PERMISSION_DENIED)
                        msg += "PERMISSION_DENIED";
                    else if (error.code == error.POSITION_UNAVAILABLE)
                        msg += "POSITION_UNAVAILABLE";


                }

                function stopTrackPosition() {
                    console.log('Stopped tracking position');
                    if (watchID !== null) {
                        navigator.geolocation.clearWatch(watchID);
                        watchID = null;
                        return watchID;
                    }
                    return -1;
                }

                function calcDistance(lat1, lon1, lat2, lon2) {
                    var R = 6371; // km
                    var dLat = (lat2 - lat1).toRad();
                    var dLon = (lon2 - lon1).toRad();
                    lat1 = lat1.toRad();
                    lat2 = lat2.toRad();

                    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
                    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    var d = R * c;
                    return d;
                }


                var cache = {position: null, distance: {}};

                /**
                 * Iterate over model,
                 * for each entry calculate distance to location,
                 * order by distance,
                 * cache results.
                 *
                 * @param latitude
                 * @param lng
                 */
                function sortModel(model, lat, long) {

                    // use our values
                    lat = lat || locationModel.get('latitude');
                    long = long || locationModel.get('longitude');

                    // if we don't watch location, use defaults
                    if (watchID === null || lat === null || long === null) {
                        return model;
                    }

                    var maxDist = 0.500;
                    var useCache = false;
                    var self = this;
                    // if cache position is within bounds, use cache
                    if (cache.position !== null &&
                        self.calcDistance(
                            cache.position.latitude,
                            cache.position.longitude,
                            lat, long) < maxDist) {
                        useCache = !useCache;
                    } else {
                        // invalidate
                        cache.position = {latitude: lat, longitude: long};
                        cache.distance = {};
                    }

                    // sort
                    return _.sortBy(model, function (house) {
                            // use the cache - if available
                            if (useCache && cache.distance[house.id]) {
                                return cache.distance[house.id];
                            } else {
                                // calc new
                                var distance = self.calcDistance(lat, long, house.latitude, house.longitude);
                                // store in cache
                                cache.distance[house.id] = distance;
                                return  distance;
                            }
                        }
                    );
                }


                var queryCurrentLocation = function (fail, success) {

                    var self = this;

                    locationModel.once("change", function () {
                        success(locationModel.get('latitude'), locationModel.get('longitude'))
                    });

                    navigator.geolocation.getCurrentPosition(
                        // success
                        $.proxy(updateLocation, self),
                        // fail - timeout
                        $.proxy(function () {
                            // try using existing coords
                            if (locationModel.get('latitude') !== null && locationModel.get('longitude') !== null) {
                                success(locationModel.get('latitude'), locationModel.get('longitude'));
                            }
                        }, self), { maximumAge: mins10, timeout: secs10, enableHighAccuracy: true });
                };


                return { // public interface
                    startTrackingPosition: $.proxy(startTrackingPosition, instance),
                    stopTrackPosition: $.proxy(stopTrackPosition, instance),
                    calcDistance: calcDistance,
                    sortModel: sortModel,
                    _getCache: function () {
                        return cache;
                    },
                    disableTracking: function () {
                        trackingEnabled = false;
                    },
                    getCurrentLocation: function () {
                        return {latitude: locationModel.get('latitude'), longitude: locationModel.get('longitude')};
                    },
                    queryCurrentLocation: $.proxy(queryCurrentLocation, instance)
                };
            })
            ();

            singleton = function () { // re-define the function for subsequent calls
                return instance;
            };

            return singleton(); // call the new function
        }

        return singleton();
    }
)
;