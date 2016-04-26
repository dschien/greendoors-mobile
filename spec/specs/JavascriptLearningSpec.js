define([], function () {

    describe("JavaScript", function () {


        var testOr = function (arg) {
            return arg || 1;
        };

        it("should test-or for null", function () {

            expect(testOr(null)).toBe(1);
        });

    });

});