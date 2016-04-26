/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery');

    return function MainTransitioner(container, navbar) {

        var homepage = null, currentPage = null, currentView = null;

        this.setHomepage = function (page) {
            homepage = page;
            $(homepage).addClass('page page-left');
            container.append(page);
            currentPage = page;
        }

        this.getHomepage = function () {
            return homepage;
        }

        this.setNavbar = function (el) {
            navbar.append(el);
        }

        // Use this function directly if you want to control the sliding direction outside PageSlider
        this.setPage = function (page, view, options) {

            // move homepage to center
            if (page === homepage) {
                this.removePrefixClasses(page, "page-");
                if (homepage !== currentPage) { // is there already a page -> remove the corresponding view
                    currentView.close();

                }
                currentPage = homepage;
                $(page).addClass('page page-center');
                if (!options || !options.cleanUp) {
                    $('.horizontal-bar-container.bottom').show()
                }
            } else { // make sure, homepage is left
                if (homepage !== currentPage) { // is there already a page -> remove
                    $(currentPage).remove();
                } else { // move homepage left, set page to center
                    this.removePrefixClasses($(homepage), "page-");
                    $(homepage).addClass('page page-half');
//                    $(homepage).addClass('page page-left');
//                    $('.horizontal-bar-container.bottom').hide()
                }
                $(page).addClass('page page-right transition');
                container.append(page);
                setTimeout(function () {
                    $(page).addClass('page-detail-half ');
                    $(page).removeClass('page-right');
                })

                currentPage = page;
                currentView = view;
            }
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