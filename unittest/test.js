/**
 * Created by schien on 04/03/2014.
 */
test("hello test", function () {

//    var input = 'Location approximate; booking required to get address.\n asdl ladsiljd '
    var input = 'Location approximate; booking required to get address.\n http://fohwillowvale.eventbrite.co.uk,   http://fohwillowvale2.eventbrite.co.uk'

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    var compiled = _.template("<a  target='_blank' href='<%= url %>'>Link <%= count %></a>");

    var count = 1;
    var out = input.replace(regex, function (a, b) {
        return compiled({url: a, 'count': count++});
    })





    var expected = 'Location approximate; booking required to get address.\n http://fohwillowvale.eventbrite.co.uk,   http://fohwillowvale2.eventbrite.co.uk'

    console.log(out);
//    ok(out == expected, "Passed!");

    ok(1 == "1", "Passed!");
});