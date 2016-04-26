module.exports = {
    options: { force: true },
    docs: ['docs/'],
    target: ["<%= targetdir%>/"],
    www: ["<%= dirs.www%>/"],
    android: ["<%= android_project%>/assets/www"],
    build: ['<%= dirs.build %>/<%= grunt.config.get("build_folder") %>/', '<%= dirs.build %>/<%= grunt.config.get("build_dist_folder") %>/', '<%= dirs.build %>/<%= grunt.config.get("build_preprocessed_folder") %>/']


}