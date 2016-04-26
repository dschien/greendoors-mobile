define(['js/storage/MemoryStore',
        'underscore',
        'js/constants',
        'spec/helpers/dbHelper'],
    function (store, _, constants, helper) {

        describe("BackgroundSyncSpec", function () {

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


            it('should save scans to backend', function () {
                var done = false;
                runs(function () {
                    db.saveScan('0001', function () {
                        done = true;
                    }, function (err) {
                        console.log('error: ' + err);
                    });
                });

                waitsFor(function () {
                    return (done === true);
                }, "posting should be done", 150);

                runs(function () {
                    var scans = db.backend.load(constants.STORAGE_KEY_SCANS);
                    expect(scans[0].text).toBe('0001');
                });
            });
            it('should sync scans to backend', function () {
                var done = false;

                // random string
                var text = helper.makeid();
                runs(function () {

                    db.saveScan(text, function () {
                        done = true;
                    }, function (err) {
                        console.log('error: ' + err);
                    });
                });

                waitsFor(function () {
                    return (done === true);
                }, "The Value should be set", 150);

                // wait for the authentication settings to be stored
                waits(helper.serverTimeout);

                runs(function () {
                    // trigger an update
                    $.Topic(constants.NETWORK_CONN_AVAILABLE).publish();
                });

                waitsFor(function () {
                    var scans = db.backend.load(constants.STORAGE_KEY_SCANS);
                    var neu = _.where(scans, {new: true});
                    return (neu.length === 0 );
                }, "no scan should be still be marked new", helper.serverTimeout);

                var type = 'scan';
                var posting;
                var res;
                runs(function () {

                    posting = $.ajax({
                        type: "GET",
                        url: helper.getEndpointURL() + apiVersion + type
                    });
                    posting.done(function (data) {
                        res = data;
                    });
                    /**
                     *
                     */
                    posting.fail(function (fail) {
                        expect(false).toBe(true);
                    });
                });


                /**
                 * @param {Object} data Ajax Result
                 *
                 */

                waitsFor(function () {
                    return (res);
                }, "waiting for response from server", helper.serverTimeout);

                runs(function () {
                    var scan = _.where(res, {text: text});
                    expect(scan).toBeDefined();
                });
            });

            it('should save favourites to backend', function () {
                var done = false;
                runs(function () {
                    db.setIsFavouriteById(1, true, function () {
                        done = true;
                    }, function (err) {
                        console.log('ERROR: ' + err);
                    });
                });

                waitsFor(function () {
                    return (done === true);
                }, "posting should be done", 150);

                runs(function () {
                    var favs = db.backend.load(constants.STORAGE_KEY_FAVS);
                    var fav = favs[0];
                    expect(fav.house).toBe(1);
                    expect(fav.fav).toBeTruthy();
                });
            });


            it('should remove favs from backend', function () {
                var done = false;
                runs(function () {

                    db.backend.save(constants.STORAGE_KEY_FAVS, [
                        {"house": 1, "timestamp": 1378136505751, "new": true}
                    ]);
                    db.removeFavouriteHouseById(1, function () {
                        done = true;
                    });
                });

                waitsFor(function () {
                    return (done === true);
                }, "posting should be done", 150);

                runs(function () {
                    var favs = db.backend.load(constants.STORAGE_KEY_FAVS);
                    items = _.where(favs, {house: 1});
                    expect(_.where(items, {fav: true}).length).toBe(0);
                });
            });


            it('should set notes to backend', function () {
                var done = false;
                runs(function () {

                    db.backend.save(constants.STORAGE_KEY_NOTES, [
                        {house: 1, "timestamp": 1378136505751, "new": true, text: 'Test'}
                    ]);
                    db.setNoteForHouseID(1, 'Test2', function () {
                        done = true;
                    });
                });

                waitsFor(function () {
                    return (done === true);
                }, "posting should be done", 150);

                runs(function () {
                    var notes = db.backend.load(constants.STORAGE_KEY_NOTES);
                    var note = _.where(notes, {house: 1});
                    expect(note.length).toBe(1);
                    expect(note[0].text).toBe('Test2');
                });
            });


            it('should sync notes with server', function () {
                var done = false;

                // random string
                var text = helper.makeid();
                runs(function () {
                    db.setNoteForHouseID(1, 'Test2', function () {
                        done = true;
                    });
                });

                waitsFor(function () {
                    return (done === true);
                }, "The Value should be set", 350);

                // wait for authorization to be stored
                waits(helper.serverTimeout);

                runs(function () {
                    $.Topic(constants.NETWORK_CONN_AVAILABLE).publish();
                });

                waitsFor(function () {
                    var notes = db.backend.load(constants.STORAGE_KEY_NOTES);
                    var neu = _.where(notes, {new: true});
                    return (neu.length === 0 );
                }, "after sync no note should be left marked new", helper.serverTimeout);

                var type = 'note';
                var posting;
                var res;
                runs(function () {
                    posting = $.ajax({
                        type: "GET",
                        url: helper.getEndpointURL() + apiVersion + type
                    });
                    posting.done(function (data) {
                        console.log(data);
                        res = data;
                    });
                    /**
                     *
                     */
                    posting.fail(function () {
                        console.log(data);
                        expect(false).toBe(true);
                    });
                });

                /**
                 * @param {Object} data Ajax Result
                 *
                 */
                waitsFor(function () {
                    return (res);
                }, "note should be resolved from server", 500);

                runs(function () {
                    var note = _.where(res, {text: text});
                    expect(note).toBeDefined();
                });
            });

            it('should sync messages with server', function () {
                var done = false;

                // random string
                var text = helper.makeid();
                runs(function () {
                    db.sendMessage(1, 'Dear Householder... ', function () {
                        done = true;
                    });
                });

                waitsFor(function () {
                    return (done === true);
                }, "The Value should be set", 150);

                // wait for authorization to be stored
                waits(helper.serverTimeout);


                runs(function () {
                    $.Topic(constants.NETWORK_CONN_AVAILABLE).publish();
                });

                waitsFor(function () {
                    var notes = db.backend.load(constants.STORAGE_KEY_MESSAGE);
                    var neu = _.where(notes, {new: true});
                    return (neu.length === 0 );
                }, "none should be new", 10500);

                var type = 'message';
                var posting;
                var res;
                runs(function () {
                    posting = $.ajax({
                        type: "GET",
                        url: helper.getEndpointURL() + apiVersion + type
                    });
                    posting.done(function (data) {
                        console.log(data);
                        res = data;
                    });
                    /**                                                                                                                        `
                     *
                     */
                    posting.fail(function () {
                        console.log(data);
                        expect(false).toBe(true);
                    });
                });

                /**
                 * @param {Object} data Ajax Result
                 *
                 */

                waitsFor(function () {
                    return (res);
                }, "message should be resolved from server", 500);

                runs(function () {
                    var message = _.where(res, {text: text});
                    expect(message).toBeDefined();
                });


            });
        });


    })
;
