module.exports = {
    compile: {
        options: {
            name: 'config',
            baseUrl: './',
            mainConfigFile: '<%= dirs.build %>/<%= grunt.config.get("build_folder") %>/config.js',
            out: '<%= dirs.build %>/<%= grunt.config.get("build_dist_folder") %>/optimized.js',
            excludeShallow: [
                "js/templates/templates", 'cordova.js'
            ],
            include: [
                'app/MainApp',
//                'app/models/settings',
                'app/views/map/MapView'
//                            'js/services/EmailService',
//                            'js/views/controllers/contact-view.js'
            ]
        }
    }
}