/**
 * Created by schien on 19/08/2013.
 */
define(function () {
    "use strict";
//    console.log('constants.js');
    var constants = {
        OAUTH_TOKEN: 'OAUTH_TOKEN',

        NETWORK_CONN_AVAILABLE: 'device/network/on',
        NETWORK_CONN_DISABLED: 'device/network/off',

        MAINVIEW_SHOWMAP: "home/show-map",
        MAINVIEW_CENTERMAP: "home/map/center",
        MAINVIEW_ROUTE: "home/route",

        MAINVIEW_MARK_STALE: "home/stale",

        APP_STARTROUTING: 'app/startrouting',
        APP_SHOW_HOMEPAGE: 'app/home',
        APP_MAINVIEW_FILTER: 'app/main-model/filter',
        APP_MAINVIEW_RESET: 'app/main-model/reset',
        APP_MAINVIEW_SAVED: 'app/main-model/saved',

        APP_GUESTMODE: 'app/guestmode',
        APP_REPLACE_VIEW: 'app/replace/view',
        APP_REMOVE_VIEWS_AND_SHOW_VIEW: 'app/remove/views',

        LOCATION_CHANGED: 'location/changed',
        LOCATION_SETTING_ENABLED: 'location/enabled',
        LOCATION_SETTING_DISABLED: 'location/disabled',


        SETTING_LOCATION_ENABLED: 'setting_location_enabled',
        SETTING_FONT_SIZE: 'setting_font_size',

        MESSAGE_BAR_SHOW: 'background/start',
        MESSAGE_BAR_REMOVE: 'background/end',

        LOGIN_STARTROUTING: 'login/startrouting',
        LOGIN_SHOWLOGIN: 'login/show/login',
        LOGIN_SHOW_REGISTER: 'login/show/register',
        LOGIN_SHOW_REGISTERREMINDER: 'login/show/registerreminder',
        AUTHENTICATED_OR_LOGIN_REQUIRED: 'login/show/loginrequired',

        SERVER_LOGIN: 'server/login',
        SERVER_REGISTER: 'server/register',
        SERVER_SENDMSG: 'server/send_msg',

        DATA_SCAN_DESCRIPTION: 'data/scan/desc',
        DATA_SAVE_SCAN: 'data/scan/save',
        DATA_FIND_MEASURE: 'data/find/measure',
        DATA_REMOVE_FAV_BY_ID: 'data/remove/fav',
        IS_AUTHENTICATED: 'data/logged-in',


        STORAGE_KEY_FILTER: 'filter',
        STORAGE_KEY_SCANS: 'scan',
        STORAGE_KEY_NOTES: 'note',
        STORAGE_KEY_FAVS: 'fav',
        STORAGE_KEY_MESSAGE: 'message',
        STORAGE_KEY_SYNC_REQUIRED: 'tosynch',

        TIMESTAMP: 'timestamp',


        EVERYTHING_ELSE_MEASURE: 29
    };


    return constants;
});