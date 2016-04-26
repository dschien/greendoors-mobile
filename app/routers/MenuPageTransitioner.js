/**
 * Created by schien on 19/11/13.
 *
 * Simple transitioner that replaces the existing page and removes the old.
 *
 *
 */
define(function (require) {

    "use strict";

    var $ = require('jquery');

    return function PageSlider(container) {

        var currentPage = null , currentView = null;

        this.getCurrentView = function () {
            return currentView;
        };

        // Use this function directly if you want to control the sliding direction outside PageSlider
        this.transition = function (page, view) {
            if (currentPage !== null) {
                // remove the view
                currentView.close();
            }
            $(page).addClass('page page-center');
            container.append(page);
            currentPage = page;
            currentView = view;
            $('.horizontal-bar-container.bottom').hide()
            // Force reflow. More information here: http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
            container[0].offsetWidth;


        };


    };

});