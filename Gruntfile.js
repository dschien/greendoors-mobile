/*global module:false*/
module.exports = function (grunt) {
    "use strict";

    grunt.config('server', grunt.option('server') || process.env.GRUNT_GREENDOORS_SERVER || null);
    grunt.config('compress', grunt.config('env') === 'production');

    grunt.config('device', 'BROWSER');

    var config = {
        github_repo: 'dschien/greendoors-phone',
        ios_project: './../platforms/ios/Frome Greendoors',
        android_project: './../platforms/android',
        dirs: {
            build: 'build',
            merges_ios: './../merges/ios',
            merges_android: './../merges/android',
            www: './../www',
            www_web: './../www-web',
            django: '/Users/schien/sites/env/greendoors/greendoors/frome2014/app',
            prepare: 'prepare',
            preprocessed: 'preprocessed',
            dist: 'dist'
        },
        servers: {
            prod: 'https://greendoors.cs.bris.ac.uk/',
            dev: 'https://greendoors.cs.bris.ac.uk/'
        },

        targetdir: './../www',

        projectName: "frome",
        env: {
            dev: {
                NODE_ENV: 'DEVELOPMENT',
                SERVER: grunt.config('server') ? grunt.config('server') : '<%= servers.dev %>',
                REQUIRE: 'require(["config"]);'
            },

            prod: {
                SERVER: grunt.config('server') ? grunt.config('server') : '<%= servers.prod %>',
                NODE_ENV: 'PRODUCTION',
                REQUIRE: 'require.config({ paths: {  "config": "optimized"  }, catchError: true }); require(["config"]);'
            },
            ios: {
                DEVICE: 'ios',
                TARGET: '<%= dirs.merges_ios%>'
            },
            android: {
                DEVICE: 'android',
                TARGET: '<%= dirs.merges_android%>'
            },
            all: {
                DEVICE: 'all',
                TARGET: '<%= dirs.www%>'
            },
            web: {
                DEVICE: 'BROWSER',
                TARGET: '<%= dirs.www_web%>'
//                    django_project: ''
            }
        },
        config: {
            ios: {
                options: {
                    variables: {
                        'build_main': '<%= dirs.build%>',
                        'build_folder': 'ios/<%= dirs.prepare%>',
                        'build_preprocessed_folder': 'ios/<%= dirs.preprocessed%>',
                        'build_dist_folder': 'ios/<%= dirs.dist%>'
                    }
                }
            },
            android: {
                options: {
                    variables: {
                        'build_main': '<%= dirs.build%>',
                        'build_folder': 'android/<%= dirs.prepare%>',
                        'build_preprocessed_folder': 'android/<%= dirs.preprocessed%>',
                        'build_dist_folder': 'android/<%= dirs.dist%>'
                    }
                }
            },
            web: {
                options: {
                    variables: {
                        'build_main': '<%= dirs.build%>',
                        'build_folder': 'web/<%= dirs.prepare%>',
                        'build_preprocessed_folder': 'web/<%= dirs.preprocessed%>',
                        'build_dist_folder': 'web/<%= dirs.dist%>'
                    }
                }
            },
            // handle with care! this will overwrite source files if you apply copy and preprocess in the watch task
            watch: {
                options: {
                    'build_main': '.',
                    'build_folder': '.',
                    'build_preprocessed_folder': '.',
                    'build_dist_folder': '.'
                }
            }
        },
        pkg: grunt.file.readJSON('package.json'),
        bump: '<json:ios_config.json>',
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
        }


//            concat: {
//                dist: {
//                    src: ['<banner:meta.banner>', '<file_strip_banner:lib/<%= pkg.name %>.js>'],
//                    dest: 'dist/<%= pkg.name %>.js'
//                }
//            },
//            min: {
//                dist: {
//                    src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
//                    dest: 'dist/<%= pkg.name %>.min.js'
//                }
//            },


    }


// Default task.

//
    grunt.loadTasks('tasks');


    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-config');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-clean');
//    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-bower-requirejs');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-release');

    function loadConfig(path) {
        var glob = require('glob');
        var object = {};
        var key;

        glob.sync('*', {cwd: path}).forEach(function (option) {
            key = option.replace(/\.js$/, '');
            object[key] = require(path + option);
        });

        return object;
    }

    grunt.util._.extend(config, loadConfig('./tasks/options/'));

// Project configuration.
    grunt.initConfig(config);
}
;
