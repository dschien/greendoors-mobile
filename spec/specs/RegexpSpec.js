/**
 * Created by schien on 23/09/2013.
 */
define(function () {
    describe("RegexpSpec", function () {

        function parse(path) {
            var id = Number(path.replace(/[^\d]/g, ''))
            var templateName = path.replace(/[\#\d\/]/g, '')
            return {id: id, templateName: templateName};
        }

        it("should parse the template name and id from path", function () {

            var path = '#contact-view/34'
            var __ret = parse(path);
            var id = __ret.id;
            var templateName = __ret.templateName;
            expect(id).toBe(34);
            expect(templateName).toBe('contact-view');

        });

        it("should parse the template name from path", function () {

            var path = '#contact-view'
            var __ret = parse(path);
            var id = __ret.id;
            var templateName = __ret.templateName;
            expect(id).toBe(0);
            expect(templateName).toBe('contact-view');

        });

    });
});