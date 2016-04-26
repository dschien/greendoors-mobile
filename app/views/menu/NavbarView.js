/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        user = require('app/models/user'),
        scanModels = require('app/models/scan'),
        templates = require('js/templates/templates'),
        template = templates['horizontal_bar/foldout-menu-top'];

    return Backbone.View.extend({

        initialize: function () {
            _.bindAll(this, "render");
            this.listenTo(user, 'change:authenticated', this.render);
            this.render();
        },
        render: function () {
            this.$el.html(template({guestMode: !user.get('authenticated')}));
            return this;
        },
        events: {
            "click #scanbutton": 'scan'
        },
        scan: function () {
            var scanner = cordova.require("com.phonegap.plugins.barcodescanner.barcodescanner");

            if (typeof scanner === 'undefined') {
                navigator.notification.alert('barcode scanner API not found');
            }
            var self = this;
            scanner.scan(function (text) {
                self.scanSuccess(text);
            });
        },
        scanSuccess: function (result) {
            function isNumber(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }

            var regExp = /(\d){8}/g;

            var code = result.text.match(regExp)[0];
            if (isNumber(code)) {
                var house, measure;
                try {
                    house = parseFloat(code.substring(0, 4));
                    measure = parseFloat(code.substring(4, 8));
                } catch (err) {
                    console.log('ERROR ' + err);
                    navigator.notification.alert('Text: ' + code + ' is not a known identifier.', 'Scan failed');
                    return;
                }

                window.greendoors.scans.create({text: code})

                navigator.notification.alert('Successfully saved scan for house ' +
                    house + ' for your personal report.', null, 'Scan complete');

                /*

                 console.log('ERROR during saving scan');
                 navigator.notification.alert('The QR code was processed.');

                 */
            }


        }
    })
});