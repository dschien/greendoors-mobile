module.exports = function (grunt) {

    /**
     * phone code for in-browser runtime: debug setting javascript not optimised
     * 1. set dev env - for index.html settings (use not obfuscated config)
     * 2. set all device env (for target dir)
     * 3. set targetdir folder to www
     * 4. clean targetdir folder
     * 5. preprocess sass and index.html
     * 6. copy to target dir
     * 7. copy mock cordova.js
     */
    grunt.registerTask('debug', ['env:dev', 'env:all', 'setTarget', 'clean:release', 'preprocess:all', 'preprocess:all', 'copy:all']);

    /**
     *
     * phone code for in-browser runtime
     * 1. set dev env - for index.html settings (use not obfuscated config)
     * 2. set all device env (for target dir)
     * 3. set targetdir folder to www
     * 4. clean targetdir folder
     * 5. preprocess sass and index.html
     * 6. copy to target dir
     * 7. copy mock cordova.js
     */
    grunt.registerTask('debug-phone-in-browser', ['env:dev', 'env:all', 'clean:release', 'setTarget', 'clean:release', 'preprocess:all', 'preprocess:all', 'copy:all', "copy:debug"]);

    /**
     *
     * iOS code for in-browser runtime
     * 1. set dev env - for index.html settings (use not obfuscated config)
     * 2. set ios env (for target dir)
     * 3. set targetdir folder to www-ios
     * 4. clean targetdir folder
     * 5. preprocess sass and index.html
     * 6. copy to target dir
     * 7. copy mock cordova.js
     */
    grunt.registerTask('debug-ios', ['config:ios', 'env:dev', 'env:ios', 'clean:release', 'setTarget', 'clean:release', 'preprocess:ios', 'preprocess:all', 'copy:all', 'copy:minimum']);

    /**
     *
     * Web deployment - DEV
     * 1. set dev env - for index.html settings (use not obfuscated config)
     * 2. set web env (for target dir)
     * 3. set targetdir folder to www-web
     * 4. clean targetdir folder
     * 5. preprocess sass and index.html
     * 6. copy to target dir
     * 7. copy mock cordova.js
     */
    grunt.registerTask('debug-web', ['env:dev', 'env:web', 'setTarget', 'clean:release', 'preprocess:all', 'preprocess:all', 'copy:all', 'copy:browser', "copy:debug"]);

    /**
     * WEB release - full compile incl. handlebars, optimise - all platforms
     *
     * 1. set prod and web env
     * 2. set target folder (www-web)
     * 3. clean
     * 4. jshint, handlebars, compass
     * 5. preprocess sass and index.html
     * 6. copy optimised
     * 7. copy resources
     *
     */
    grunt.registerTask('web', ['env:prod', 'env:web', 'setTarget', 'clean:release', 'jshint', 'handlebars', 'compass', 'preprocess:all', 'preprocess:all', 'requirejs', 'copy:optimised', 'copy:resources', 'copy:browser', 'bump']);


    /**
     * Set target directory depending on environment variable or command line option (--target=<folder>)
     */
    grunt.registerTask("log", "log.", function () {
        grunt.log.write(process.env.GH_PW)
    });

    grunt.registerTask("setTarget", "Set the output folder for the build.", function () {
        this.requiresConfig('targetdir');
        if (grunt.option("target")) {
            grunt.config('targetdir', grunt.option("target"));
            grunt.log.writeln('setting output folder: ' + grunt.config('targetdir'))
            return;
        }

        if (process.env.TARGET) {
            grunt.config('targetdir', process.env.TARGET);
            grunt.log.writeln('setting output folder: ' + grunt.config('targetdir'))
        }
    });


    grunt.registerTask('build-debug', [
        'setTarget',
        'clean:build',
        'clean:www',
        'clean:target',
        'copy:prepare',
        // preprocess to build/dist

        'preprocess:all',
        // copy unprocessed from build/prepare to build/dist
        'copy:unprocessed',
//        'jshint',

        'handlebars',
        'compass:app',
        // copy to target dir
        'copy:debug',
        'copy:minimum'

    ]);

    /**
     * Generic build task for all devices
     */
    grunt.registerTask('build', [
        'setTarget',
        'clean:build',
        'clean:www',
        'clean:target',
        // copy to build/prepare
        'copy:prepare',
        // preprocess to build/dist

        'preprocess:all',
        // copy unprocessed from build/prepare to build/dist
        'copy:unprocessed',
//        'jshint',

        'handlebars',
        // optimise
        'requirejs:compile',
        // compass
        'compass:app',
        // copy to target dir
        'copy:optimised',
        // copy config.xml
        'copy:minimum',
        'bump'
    ]);


    grunt.registerTask('ios', [ 'config:ios', 'env:prod', 'env:ios', 'build']);
    grunt.registerTask('ios-debug', [ 'config:ios', 'env:dev', 'env:ios', 'build-debug']);

    grunt.registerTask('android', [ 'config:android', 'env:prod', 'env:android', 'build']);
    grunt.registerTask('android-debug', [ 'config:android', 'env:dev', 'env:android', 'build-debug']);

    grunt.registerTask('web', [ 'config:web', 'env:prod', 'env:web', 'build']);
    grunt.registerTask('web-debug', [ 'config:web', 'env:dev', 'env:web', 'build-debug']);

//
}