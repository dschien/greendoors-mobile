//define(['../js/app', 'underscore', '../js/util'], function (controller, _, util) {
define([], function () {
    describe("AppController", function () {


        var testOr = function (arg) {
            return arg || 1;
        };

        it("should match", function () {

            expect(testOr(null)).toBe(1);
        });

    });

    describe("AppController.Router", function () {
        it("should match numbers with leading zeros", function () {
            this.detailsURL = /^#homes\/(\d{1,})/;
            var match = '#homes/0001'.match(this.detailsURL);

            expect(match).not.toBe(null);
            match = '#homes/xyz'.match(this.detailsURL);
            expect(match).toBe(null);
        });
    });

});