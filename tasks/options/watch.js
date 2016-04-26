module.exports = {
    default: {
        options: {
            dateFormat: function (time) {
                grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                grunt.log.writeln('Waiting for more changes...');
            }
        },
        files: ['<config:lint.files>', 'js/*.js', 'js/storage/*.js', 'js/views/*.js', "templates/**/*.handlebars", "sass/*.scss"],
        tasks: [
//            'jshint',
            'handlebars', 'compass']
    },
    scss: {
        files: ["sass/*-template.scss"],
        tasks: ['env:all', 'preprocess:all', 'env:ios', 'preprocess:ios']
    }

}