module.exports = {
    /**
     * Copy all application files to prepare folder
     */
    prepare: {
        files: [
            {
                '<%= dirs.build %>/<%= grunt.config.get("build_folder") %>/': [
                    "app/**", "sass/**", "font/**", "img/**", "js/**", "lib/**",
                    "config.xml",
                    "index.template.html",
                    "config.js",
                    "assets/img/icons/ios/**",
                    "assets/img/splash/ios/**",
                    'icon.png',
                    "package.json",
                    "templates/**"]

            }
        ]
    },
    /**
     * Copy unprocessed files to dist folder
     */
    unprocessed: {
        files: [
            {
                expand: true,
                dest: '<%= dirs.build %>/<%= grunt.config.get("build_dist_folder") %>/',
                cwd: '<%= dirs.build %>/<%= grunt.config.get("build_folder") %>/',
                src: [
                    "font/**", "img/**", "lib/**",
                    "config.xml",
                    "config.js",
                    "index.html"
                ]

            }
        ]

    },
    /**
     * Copy to target dir (www)
     */
    optimised: {
        files: [
            {
                expand: true,
                dest: "<%= targetdir%>/",
                cwd: '<%= dirs.build %>/<%= grunt.config.get("build_dist_folder") %>/',
                src: [
                    "css/**",
                    "font/**",
                    "img/**",
//                                "js/**",
                    "js/templates/templates.js",
//                    "js/lib/require.js",
                    "lib/**",
                    "index.html",
                    "config.js",
                    "optimized.js",
                    "index.html"
//                    "package.json"
                ]

            },
            {
                src: '<%= dirs.build %>/<%= grunt.config.get("build_dist_folder") %>/index.html',

                dest: 'create-me'}
        ]

    },
    /**
     * Copy to target folder (www)
     */
    debug: {
        files: [

            {
                expand: true,
                dest: "<%= targetdir%>/",
                cwd: '<%= dirs.build %>/<%= grunt.config.get("build_folder") %>/',
                src: [  "js/**"]
            },
            {
                expand: true,
                dest: "<%= targetdir%>/",
                cwd: '<%= dirs.build %>/<%= grunt.config.get("build_preprocessed_folder") %>/',
                src: [  "app/**"]
            },
            {
                expand: true,
                dest: "<%= targetdir%>/",
                cwd: '<%= dirs.build %>/<%= grunt.config.get("build_dist_folder") %>/',
                src: [  "**"]
            }
        ]
    },
    minimum: {
        files: [
            {
                '<%= dirs.www%>/': [
                    "config.xml"
                ]

            }
        ]
    },

    browser: {
        files: [
            {
                "<%= targetdir%>/": [
                    "cordova-polyfill.js"
                ]

            }
        ]
    },
    django: {
        files: [
            {   dest: '<%= dirs.django%>/',
                src: ["index.html", 'optimized.js', 'lib/handlebars.runtime.js', 'lib/HandlebarHelpers.js', 'lib/require.js', 'js/templates/templates.js', 'css/**', 'font/**', 'cordova-polyfill.js', 'img/**'],
                cwd: '<%= dirs.www_web%>',
                expand: true},
            {   dest: '<%= dirs.django%>/',
                src: ['cordova-polyfill.js'],
                cwd: '.',
                expand: true
            }
        ]
    },
    djangodebug: {
        files: [
            {   dest: '<%= dirs.django%>/debug/',
                src: ["**"],
                cwd: '<%= dirs.www_web%>',
                expand: true}
//                        {   dest: '<%= django_project%>/static/lib',
//                            src: ['lib/handlebars.runtime.js'],
//                            cwd: 'assets/<%= projectName%>/img/icons/ios/',
//                            expand: true}
        ]
    },
    resources: {
        files: [
            {   dest: '<%= ios_project%>/Resources/icons/',
                src: ["**"],
                cwd: 'assets/<%= projectName%>/img/icons/ios/',
                expand: true},
            {
                dest: '<%= ios_project%>/Resources/splash/',
                src: ["**"],
                cwd: 'assets/<%= projectName%>/img/splash/ios/',
                expand: true
            },
            {
                dest: '<%= android_project%>/res/drawable-xhdpi/',
                src: ["splash/android/res/drawable-xhdpi/splash.9.png", "icons/android/icon-96-xhdpi.png"],
                cwd: 'assets/<%= projectName%>/img/', expand: true, flatten: true, filter: 'isFile',
                rename: rename
            },
            {
                dest: '<%= android_project%>/res/drawable-xxhdpi/',
                src: ["splash/android/res/drawable-xxhdpi/splash.9.png", "icons/android/icon-144-xxhdpi.png"],
                cwd: 'assets/<%= projectName%>/img/', expand: true, flatten: true, filter: 'isFile',
                rename: rename
            },
            {
                dest: '<%= android_project%>/res/drawable-hdpi/',
                src: ["splash/android/res/drawable-hdpi/splash.9.png", "icons/android/icon-72-hdpi.png"],
                cwd: 'assets/<%= projectName%>/img/', expand: true, flatten: true, filter: 'isFile',
                rename: rename
            },
            {
                dest: '<%= android_project%>/res/drawable-mdpi/',
                src: ["splash/android/res/drawable-mdpi/splash.9.png", "icons/android/icon-48-mdpi.png"],
                cwd: 'assets/<%= projectName%>/img/', expand: true, flatten: true, filter: 'isFile',
                rename: rename
            },
            {
                dest: '<%= android_project%>/res/drawable-ldpi/',
                src: ["splash/android/res/drawable-mhdpi/splash.9.png", "icons/android/icon-36-ldpi.png"],
                cwd: 'assets/<%= projectName%>/img/', expand: true, flatten: true, filter: 'isFile',
                rename: rename
            }
        ]
    },
    mapdebug: {
        files: [
            {
                "<%= targetdir%>/test/": [ 'config-debug.js', 'css/mapview.css', 'js/lib/jquery.js', 'js/constants.js', 'js/lib/richmarker_req.js', 'js/views/MapMainView.js', 'req-test.html', "js/lib/require.js", 'js/lib/gmapsDone.js']

            }
        ]
    }
}
function rename(dest, src) {
    // use the source directory to create the file
    // example with your directory structure
    //   dest = 'dev/js/'
    //   src = 'module1/js/main.js'
    var filename = src.replace(/^.*[\\\/]/, '');
    if (filename.indexOf('icon') === 0) {
        return dest + 'icon.png';
    }
    if (filename.indexOf('splash') === 0) {
        return dest + 'splash.png';
    }
    return dest + src;
}