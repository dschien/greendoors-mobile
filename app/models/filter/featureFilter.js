/**
 * Created by schien on 19/11/13.
 */
define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        globals = require('globals'),
        Filter = Backbone.Model.extend({

            urlRoot: globals.urls.filter,

            local: true, // never save remotely
            defaults: {
                measures: [],
                bedrooms: null,
                distance: null,
                mode: 'OR',
                name: 'features'
            },
            addEnabledMeasure: function (measureId) {
                this.set('measures', this.get('measures').push(measureId))
            },

            clearMeasures: function () {
                this.set('measures', [])
            },

            /**
             * reset this model to its defaults
             * Fires change event once
             */
            reset: function () {
                this.clear({silent: true}).set(this.defaults);
            },

            /**
             * Filter by these properties (if selected):
             * - measures,
             * - number of bedrooms
             *
             * @param it - a house
             * @return boolean - true if keep, false otherwise
             */
            filter: function findByFilter(it) {

                // check if open only
                if (this.get('open') && it.open == 0) {
                    return false;
                }

                // filter by bedrooms
                var selectedBedrooms = this.get('bedrooms');
                if (selectedBedrooms && it.get('bedrooms') < selectedBedrooms) {
                    return false;
                }

                // filter by measures present - OR - mode at least one measure must be present
                var selectedMeasures = this.get('measures');
                if (selectedMeasures.length > 0) {
                    // flag for OR - mode: if others are not included we can still check the explicit measures
                    var othersIncluded = false;
                    var houseMeasureIds = _.pluck(it.get('measures'), 'measure');

                    // check if this house has at least one of the desired measures...
                    // check if the everything measure is ticked -> just find one that is larger than x
                    if (_.contains(selectedMeasures, globals.constants.EVERYTHING_ELSE_MEASURE)) {
                        // find largest
                        if (_.max(houseMeasureIds) >= globals.constants.EVERYTHING_ELSE_MEASURE) {
                            othersIncluded = true;
                        } else { // others not included
                            if (this.get('mode') == 'AND') { // others asked for but not present -> exclude house
                                return false;
                            }
                        }
                    }

                    // check explicitly set measures
                    if (!othersIncluded) {
                        if (this.get('mode') == 'OR') {
                            // check at least one is present in both arrays
                            var explicitIncluded = _.intersection(houseMeasureIds, selectedMeasures).length > 0
                            if (!explicitIncluded) { // reject house
                                return false;
                            }
                        } else { // AND - mode
                            // check all desired features are present - no measure is absent in the houseMeasureIds
                            explicitIncluded = _.difference(selectedMeasures, houseMeasureIds).length == 0
                            if (!explicitIncluded) { // reject house
                                return false;
                            }
                        }
                    }
                }

                return true;
            }

        });

    return new Filter();

})
;