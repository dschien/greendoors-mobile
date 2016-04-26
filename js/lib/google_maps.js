/**
 * Created with JetBrains WebStorm.
 * User: schien
 * Date: 31/07/2013
 * Time: 12:09
 * To change this template use File | Settings | File Templates.
 */
define('gmaps', ['async!https://maps.googleapis.com/maps/api/js?sensor=false'],
    function () {
        return window.google;
    });