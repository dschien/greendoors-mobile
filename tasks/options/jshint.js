module.exports = {
    jshintrc: '.jshintrc',
    ignores: ['js/templates.js'],
    files: ['<%= dirs.build %>/<%= grunt.config.get("build_preprocessed_folder") %>/**/*.js']
}