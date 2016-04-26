/**
 * Created by schien on 19/11/13.
 */
/**
 * Created by schien on 10/11/2013.
 */
(function (Handlebars) {
    "use strict";

    Handlebars.registerHelper('checked', function (flag) {
        return flag === true ? ' checked ' : '';
    });

    /** {{#loop this.disruption}}
     <a class="disruption"><i class="icon-bolt"></i></a>
     {{/loop}}*/
    Handlebars.registerHelper('loop', function (count, options) {
        var out = "";

        while (count--) {
            out += options.fn();
        }

        return out;
    });

    /**
     * If Less Than or Equal To
     * if_lteq this compare=that
     * {{#if_lteq x compare=y}} ... {{/if_lteq}}
     */
    Handlebars.registerHelper('if_lteq', function (context, options) {
        if (context <= options.hash.compare)
            return options.fn(this);
        return options.inverse(this);
    });

    /**
     * If Equals
     * if_eq this compare=that
     */
    Handlebars.registerHelper('if_eq', function (context, options) {
        if (context == options.hash.compare)
            return options.fn(this);
        return options.inverse(this);
    });


    /*






     */

    /**
     * Render a house type enum
     *
     */
    Handlebars.registerHelper('type_enum', function (type) {
        switch (type) {
            case 1:
                return 'Detached';
            case 2:
                return 'Semi';
            case 3:
                return 'Terrace';
            case 4:
                return 'Bungalow';
            case 5:
                return 'Multi Occupant';

        }

    });

    /**
     * Render a house type enum
     * accessibilityInvert: {"Full": 1, "Partial": 2, "None": 0}
     */
    Handlebars.registerHelper('accessibility_enum', function (type) {
        switch (type) {
            case 0:
                return 'None';
            case 1:
                return 'Partial';
            case 2:
                return 'Full';
        }

    });

    /**
     * Render a house contact enum
     *      contactInvert: {"Month": 1, "Year": 2, "None": 0 },
     */
    Handlebars.registerHelper('contact_enum', function (type) {
        switch (type) {
            case 1:
                return 'Month';
            case 2:
                return 'Year';
            case 0:
                return 'None';

        }

    });

    /**
     * Render a house age enum
     *      ageInvert: {"Georgian": 0, "Victorian": 1, "1920s": 2, "1930s": 3, "1950s": 5, "1960s": 6, "1970s": 7, "New": 8 },
     */
    Handlebars.registerHelper('age_enum', function (type) {
        switch (type) {
            case 0:
                return 'Georgian';
            case 1:
                return 'Victorian';
            case 2:
                return '1920s';
            case 3:
                return '1930s';
            case 5:
                return '1950s';
            case 6:
                return '1960s';
            case 7:
                return '1970s';
            case 8:
                return 'New';
            case 11:
                return 'Pre-Georgian';
            case 12:
                return 'Edwardian';
            case 20:
                return '2000s';

        }

    });

    /**
     * Render a house open enum
     * openInvert: {"Sat": 1, "Sun": 2, "Sat and Sun": 3, "Closed": 0},

     */
    Handlebars.registerHelper('open_enum', function (open) {
        switch (open) {
            case 0:
                return 'Closed';
            case 1:
                return 'Saturday';
            case 2:
                return 'Sunday';
            case 3:
                return 'Saturday and Sunday';

        }

    });
    /**
     * Render a house open enum
     * openInvert: {"Sat": 1, "Sun": 2, "Sat and Sun": 3, "Closed": 0},
     *
     * Opening Times
     10:00am – 3:00pm	1
     2:00pm – 5:00pm	2
     2:00pm	3
     11:30am, 2:30pm	4
     11:00am	5
     1:00pm – 4:00pm	6
     12:00pm, 2:00pm	7
     12:00pm – 3:00pm	8
     10:30am	9
     12:00pm, 3:00pm	10
     12:00pm – 4:00pm	11
     11:00am, 12:00pm, 2:00pm, 3:00pm	12

     */
    Handlebars.registerHelper('time_enum', function (time) {
        switch (time) {
            case 0:
                return '10-12';
            case 1:
                return '10:00am – 3:00pm';
            case 2:
                return '2:00pm – 5:00pm';
            case 3:
                return '2:00pm';
            case 4:
                return '11:30am, 2:30pm';
            case 5:
                return '11:00am';
            case 6:
                return '1:00pm – 4:00pm';
            case 7:
                return '12:00pm, 2:00pm';
            case 8:
                return '12:00pm – 3:00pm';
            case 9:
                return '10:30am';
            case 10:
                return '12:00pm, 3:00pm';
            case 11:
                return '12:00pm – 4:00pm';
            case 12:
                return '11:00am, 12:00pm, 2:00pm, 3:00pm';

        }

    });


    Handlebars.registerHelper("debug", function (optionalValue) {
        console.log("Current Context");
        console.log("====================");
        console.log(this);

        if (optionalValue) {
            console.log("Value");
            console.log("====================");
            console.log(optionalValue);
        }
    });

})(Handlebars);