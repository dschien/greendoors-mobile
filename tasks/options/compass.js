module.exports = {
    /**
     * Some dependencies need to be compiled in-place
     */
    dependencies: {                   // Target
        options: {              // Target options
            sassDir: './<%= grunt.config.get("build_main") %>/<%= grunt.config.get("build_preprocessed_folder") %>/sass',
            cssDir: './<%= grunt.config.get("build_main") %>/<%= grunt.config.get("build_dist_folder") %>/css',
            environment: 'production'
        }
    },
    app: {                   // Target
        options: {              // Target options
            sassDir: './<%= grunt.config.get("build_main") %>/<%= grunt.config.get("build_preprocessed_folder") %>/sass',
            cssDir: './<%= grunt.config.get("build_main") %>/<%= grunt.config.get("build_dist_folder") %>/css',
            environment: 'production'
        }
    }
}