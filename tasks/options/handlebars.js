module.exports = {
    compile: {
        options: {
            amd: true,
            namespace: 'JST',
            wrapped: true,
            processName: function (filename) {
                // funky name processing here
                return filename
                    .replace(/^.\/build\/.*\/preprocessed\/templates\//, '')
                    .replace(/^.\/templates\//, '')
                    .replace(/\.handlebars$/, '');
            }
        },
        files: {

            './<%= grunt.config.get("build_main") %>/<%= grunt.config.get("build_dist_folder") %>/js/templates/templates.js': ['./<%= grunt.config.get("build_main") %>/<%= grunt.config.get("build_preprocessed_folder") %>/templates/**/*.handlebars']
        }
    }
}