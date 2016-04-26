module.exports = {
    options: {
        context: {
            version: '<%= pkg.version %>'
        }
    },
    all: {
        files: [
            {'<%= dirs.build %>/<%= grunt.config.get("build_dist_folder") %>/index.html': '<%= dirs.build %>/<%= grunt.config.get("build_folder") %>/index.template.html'},
            {
                expand: true,
                cwd: '<%= dirs.build %>/<%= grunt.config.get("build_folder") %>/',
                src: [
                    "app/**/*.*",
                    "sass/**/*.*",
                    "templates/**/*.*"
                ],
                dest: '<%= dirs.build %>/<%= grunt.config.get("build_preprocessed_folder") %>/'
            }
        ]
    }
}