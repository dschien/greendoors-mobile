/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery');

    return function PageSlider(container) {

        var currentPage,
            stateHistory = [];

        this.back = function () {
            location.hash = stateHistory[stateHistory.length - 2];
        };

        // Use this function if you want PageSlider to automatically determine the sliding direction based on the state history
        this.slidePage = function (page) {
            var l = stateHistory.length,
                state = window.location.hash;

            if (l === 0) {
                stateHistory.push(state);
                this.slidePageFrom(page);
                return;
            }
            if (state === stateHistory[l - 2]) { // == go back
                stateHistory.pop();
                this.slidePageFrom(page, 'page-left');
            } else {
                stateHistory.push(state);
                this.slidePageFrom(page, 'page-right');
            }

        };

        // Use this function directly if you want to control the sliding direction outside PageSlider
        this.slidePageFrom = function (page, from) {
            this.removePrefixClasses(page, "page-");

            container.append(page);

            if (!currentPage || !from) {
//                page.attr("class", "page page-center");
                $(page).addClass('page page-center');
                currentPage = page;
                return;
            }

            this.removePrefixClasses(currentPage, "page-");

            // Position the page at the starting position of the animation
//            page.attr("class", "page " + from);
            $(page).addClass("page " + from);

            currentPage.one('webkitTransitionEnd', function (e) {
//                if (e.target.attr('id')!== 'homePage') {
                $(e.target).not('.homePage').remove();
                $(page).removeClass("page-right");
            });


            // Force reflow. More information here: http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
            container[0].offsetWidth;

            // Position the new page and the current page at the ending position of their animation with a transition class indicating the duration of the animation
            $(page).addClass("page transition page-center");
            $(currentPage).addClass("page transition " + (from === "page-left" ? "page-right" : "page-left"));
            currentPage = page;
        };

        this.removePrefixClasses = function ($el, prefix) {
            var classes = $el.attr("class");
            if (classes) {
                classes = classes.split(" ").filter(function (item) {
                    return item.lastIndexOf(prefix, 0) !== 0;
                });
                $el.attr("class", classes.join(" "));
            }
        }
    };

});