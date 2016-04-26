define(['js/storage/MemoryStore',
        'underscore',
        'js/constants',
        'spec/helpers/dbHelper'],
//    'js/storage/data'], function (store, _, util, data) {
    function (store, _, constants, helper) {


        describe("MemoryStoreSpec", function () {

            var db = new store();

            helper.setDB(db);

            var apiVersion = db.getAPIVersion();

            beforeEach(function () {
                localStorage.clear();
                db.setHostname(helper.testServer);
                runs(function () {
//                helper.register();
                    helper.login();
                });
            });


            var house_id_3 = '0003';
            var house_id_1 = '0001';
            var house_id_35 = '0035';

            beforeEach(function () {
                runs(function () {
                    db = new store();
                });
            });

            // general
            it("should have been initialised by beforeEach", function () {
                expect(db).toBeDefined();
                expect(db.savedHouses.length).toBe(0);

            });

            it("should create separate instances for homes", function () {
                var house;
                runs(function () {

                    db.findById(house_id_1, function (res) {
                        house = res;
                    });
                });

                waitsFor(function () {
                    return (typeof house !== "undefined");
                }, "The Value should be set", 50);


                var house2;
                runs(function () {

                    db.findById(house_id_3, function (res) {
                        house2 = res;
                    });
                });

                waitsFor(function () {
                    return (typeof house2 !== "undefined");
                }, "The Value should be set", 50);


                runs(function () {
                    expect(house).not.toBe(house2);
                });

            });
            // notes
            it("should load notes as well", function () {
                var house;
                runs(function () {
                    db.findById(house_id_35, function (res) {
                        house = res;
                    });
                });

                waitsFor(function () {
                    return (typeof house !== "undefined");
                }, "The Value should be set", 150);


                runs(function () {
                    expect(house.note).toBeDefined();
                    expect(house.note).toMatch('lives here');
                });
            });

            it("should save and load notes as well", function () {
                var house;
                runs(function () {
                    db.findById(house_id_3, function (res) {
                        house = res;
                    });
                });

                waitsFor(function () {
                    return (typeof house !== "undefined");
                }, "The Value should be set", 50);

                var success = false;
                runs(function () {
                    house.setNote('This is a test', function (res) {
                        success = res;
                    });
                });

                waitsFor(function () {
                    return success;
                }, "the note should be saved", 50);

                var house2;
                //reload the house
                runs(function () {
                    db.findById(house_id_3, function (res) {
                        house2 = res;
                    });
                });

                waitsFor(function () {
                    return (typeof house2 !== "undefined");
                }, "The Value should be set", 50);


                runs(function () {
                    expect(house2.id).toBe(house_id_3);
                    expect(db.notes[house_id_3]).toBeDefined();
                    expect(db.notes[house_id_3]).toMatch('This is a test');
                    expect(house2.note).toBeDefined();
                    expect(house2.note).toMatch('This is a test');
                });
            });

            it("should only load notes when there are any", function () {
                var house;
                runs(function () {
                    db.findById(house_id_3, function (res) {
                        house = res;
                    });
                });

                waitsFor(function () {
                    return (typeof house !== "undefined");
                }, "The Value should be set", 50);


                runs(function () {
                    expect(house.note).not.toBeDefined();
                });
            });


            // house find
            it("should find a house by id", function () {
                var house;
                runs(function () {
                    db.findById(house_id_1, function (res) {
                        house = res;
                    });
                });

                waitsFor(function () {
                    return (typeof house !== "undefined");
                }, "The Value should be set", 50);

                runs(function () {
                    expect(house.type).toBe(_.where(data.houses, {id: house_id_1})[0].type);
                });

            });

            it("should merge the measure name and description ", function () {
                var house;
                runs(function () {
                    db.findById(house_id_1, function (res) {
                        house = res;
                    });
                });

                waitsFor(function () {
                    return (typeof house !== "undefined");
                }, "The Value should be set", 50);

                runs(function () {
                    var house_measures = _.pluck(house.measures, 'name');
                    expect(house_measures.length).toBeGreaterThan(0);

                    var all_measures = _.pluck(data.measures, 'name');
                    var isValid = function (item) {
                        return _.contains(all_measures, item);
                    };
                    expect(_.every(house_measures, isValid)).toBe(true);
                });

            });

            it("should get its saved homes as empty by default", function () {
                var homes;
                runs(function () {
                    db.getSavedHouses(function (res) {
                        homes = res;
                    });
                });

                waitsFor(function () {
                    return (typeof homes !== "undefined");
                }, "The Value should be set", 150);


                runs(function () {
                    expect(homes.length).toBe(0);
                });

            });

            it("should know of home ids", function () {
                var ids = db.getHomeIds();
                expect(ids).toContain(house_id_1);
                expect(ids).toContain(house_id_3);
            });

            it("should retain saved homes", function () {
                expect(db.savedHouses.length).toBe(0);

                var house;
                runs(function () {
                    db.findById(house_id_1, function (res) {
                        house = res;
                    });
                });

                waitsFor(function () {
                    return (typeof house !== "undefined");
                }, "The Value should be set", 50);


                runs(function () {
                    expect(house.type).toBe(_.where(data.houses, {id: house_id_1})[0].type);
                });

                var success = false;
                runs(function () {
                    house.toggleFavourite(function (res) {
                        success = res;
                    });
                });

                waitsFor(function () {
                    return success;
                }, "The Value should be set", 150);

                runs(function () {
                    expect(db.savedHouses.length).toBe(1);
                });
            });

            it("should be able to remove homes as well", function () {
                expect(db.savedHouses.length).toBe(0);

                var house;
                runs(function () {
                    db.findById(house_id_1, function (res) {
                        house = res;
                    });
                });

                waitsFor(function () {
                    return (typeof house !== "undefined");
                }, "The Value should be set", 50);


                runs(function () {
                    expect(house.type).toBe(_.where(data.houses, {id: house_id_1})[0].type);
                });


                var success = false;
                runs(function () {
                    house.toggleFavourite(function (res) {
                        success = res;
                    });
                });

                waitsFor(function () {
                    return success;
                }, "The Value should be set", 150);

                runs(function () {
                    expect(db.savedHouses.length).toBe(1);
                });

                runs(function () {
                    db.removeFavouriteHouseById(house_id_1, function (res) {
                        success = res;
                    });
                });

                waitsFor(function () {
                    return success;
                }, "The Value should be set", 150);

                var homes;

                runs(function () {
                    db.getSavedHouses(function (res) {
                        homes = res;
                    });
                });

                waitsFor(function () {
                    return (typeof homes !== "undefined");
                }, "The Value should be set", 150);

                runs(function () {
                    expect(homes.length).toBe(0);
                });
            });

            it("should save home and then retrieve it", function () {
                expect(db.savedHouses.length).toBe(0);

                // save a house
                var success = false;

                var house;
                runs(function () {
                    db.findById(house_id_1, function (res) {
                        house = res;
                    });
                });

                waitsFor(function () {
                    return (typeof house !== "undefined");
                }, "should find house [1]", 50);


                runs(function () {
                    expect(house.type).toBe(_.where(data.houses, {id: house_id_1})[0].type);
                });

                success = false;
                runs(function () {
                    house.toggleFavourite(function (res) {
                        success = res;
                    });
                });

                waitsFor(function () {
                    return success;
                }, "should save the favourite", 150);

                var homes;

                runs(function () {
                    db.getSavedHouses(function (res) {
                        homes = res;
                    });
                });

                waitsFor(function () {
                    return (typeof homes !== "undefined");
                }, "should load the saved homes", 150);

                runs(function () {
                    expect(homes.length).toBe(1);
                });

                // save another
                var house2;
                runs(function () {

                    db.findById(house_id_3, function (res) {
                        house2 = res;
                    });
                });

                waitsFor(function () {
                    return (typeof house2 !== "undefined");
                }, "should load another house", 50);

                runs(function () {
                    expect(house.type).toBe(_.where(data.houses, {id: house_id_1})[0].type);
                    expect(house2.type).toBe(_.where(data.houses, {id: house_id_3})[0].type);
                });

                runs(function () {
                    house2.toggleFavourite(function (res) {
                        success = res;
                    });
                });

                waitsFor(function () {
                    return success;
                }, "save another house to favs", 150);


                runs(function () {
                    db.getSavedHouses(function (res) {
                        homes = res;
                    });
                });

                waitsFor(function () {
                    return (homes.length == 2);
                }, "should reload the favs", 150);

                runs(function () {
                    expect(homes.length).toBe(2);
                    expect(homes[0].type).toBe(_.where(data.houses, {id: house_id_1})[0].type);
                    expect(homes[1].type).toBe(_.where(data.houses, {id: house_id_3})[0].type);
                });


            });


            // filters
            it("should load filters", function () {

                expect(db.filters.default).toBeDefined();

                var filter = false;
                runs(function () {
                    db.loadFilterViewModel(function (res) {
                        filter = res;
                    }, 'default');
                });

                waitsFor(function () {
                    return filter;
                }, "The Value should be set", 150);

                runs(function () {
                    expect(filter).toBeDefined();
                    expect(filter.distance).toBe(5000);
                    expect(_.where(filter.measures, {setting: true})).toEqual([]);
                    expect(_.every(filter.measures, function (item) {
                        return item.name;
                    })).toBeTruthy();
                });


            });

            it("should save filters", function () {
                var success;
                runs(function () {
                    db.persistFilterSettings({open: true}, function (res) {
                        success = res;
                    }, 'test');
                });

                waitsFor(function () {
                    return success;
                }, "The Value should be set", 150);

                var filter = false;
                runs(function () {
                    db.loadFilterViewModel(function (res) {
                        filter = res;
                    }, 'test');
                });

                waitsFor(function () {
                    return filter;
                }, "The filter should be defined", 150);

                runs(function () {
                    expect(filter.open).toBe(true);
                });
            });

            it("should load the default filters", function () {

                expect(db.filters.default).toBeDefined();

                var filter = false;
                runs(function () {
                    db.loadFilterViewModel(function (res) {
                        filter = res;
                    });
                });

                waitsFor(function () {
                    return filter;
                }, "the default filter to be defined", 150);

                runs(function () {
                    expect(filter.distance).toBe(5000);
                });


            });

            it("should save to the default filters", function () {

                expect(db.filters.default).toBeDefined();

                var filter = false;
                runs(function () {
                    db.loadFilterViewModel(function (res) {
                        filter = res;
                    });
                });

                waitsFor(function () {
                    return filter;
                }, "the default filter to be defined", 150);

                runs(function () {
                    expect(filter.distance).toBe(5000);
                });


                var success;
                runs(function () {
                    db.persistFilterSettings({distance: 5000, open: true}, function (res) {
                        success = res;
                    });
                });

                waitsFor(function () {
                    return success;
                }, "The Value should be set", 150);

                filter = false;
                runs(function () {
                    db.loadFilterViewModel(function (res) {
                        filter = res;
                    });
                });

                waitsFor(function () {
                    return filter;
                }, "The filter should be defined", 150);

                runs(function () {
                    expect(filter.open).toBe(true);
                });

            });

            it("should find open homes by filter ", function () {

                var houses;
                runs(function () {
                    db.findByFilter({open: true}, function (res) {
                        houses = res;
                    });
                });

                waitsFor(function () {
                    return (typeof houses !== "undefined");
                }, "The Value should be set", 50);

                runs(function () {
                    expect(_.every(houses, function (house) {
                        return house.open > data.opentimes.Closed;
                    })).toBe(true);
                });


            });

            it("should find homes with min number of bedrooms by filter ", function () {

                var houses;
                var minBedrooms = 4;
                runs(function () {
                    db.findByFilter({bedrooms: minBedrooms}, function (res) {
                        houses = res;
                    });
                });

                waitsFor(function () {
                    return (typeof houses !== "undefined");
                }, "The Value should be set", 50);

                runs(function () {
                    expect(houses.length).toBeGreaterThan(0);
                    var expectedHouses = _.filter(data.houses, function (house) {
                        return house.bedrooms >= minBedrooms;
                    });

                    var expectedLength = expectedHouses.length;

                    expect(houses.length).toBe(expectedLength);

                    expect(_.where(houses, {bedrooms: minBedrooms}).length).toBe(_.where(data.houses, {bedrooms: minBedrooms}).length);


                    var countWithMoreThanFourBedrooms = _.every(houses, function (house) {
                        return house.bedrooms >= minBedrooms;
                    });
                    expect(countWithMoreThanFourBedrooms).toBe(true);
                });
            });

            it("should find homes with measures present by filter ", function () {

                var houses;

//            var measures = ['0001','0005'];
                var measures = [data.measures[0].id, data.measures[1].id];

                var expectedHouses = _.filter(data.houses, function (house) {
                    var ids = _.pluck(house.measures, 'id');
                    var a = _.contains(ids, measures[0]);
                    var b = _.contains(ids, measures[1]);
                    return a && b;
                });

                runs(function () {
                    db.findByFilter({measures: measures}, function (res) {
                        houses = res;
                    });
                });

                waitsFor(function () {
                    return (typeof houses !== "undefined");
                }, "The Value should be set", 50);

                runs(function () {
                    expect(houses.length).toBeGreaterThan(0);
                    expect(houses.length).toBe(expectedHouses.length);
                });
            });

        });

    });
