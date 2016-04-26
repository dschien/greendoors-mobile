module.exports = {
    pivotal: {
        src: ['js/storage/*.js'],
        options: {
            amd: true,
            verbose: true,
//                        specs: ['./spec/FooSpec.js', './spec/BarSpec.js'],
            specs: './spec/**/*Spec.js',
//                        helpers: './spec/**/*Helper.js',
            template: require('grunt-template-jasmine-requirejs'),
            templateOptions: {
                requireConfigFile: 'config.js',
                requireConfig: {
                    baseUrl: './'
                }
            }
        }
    }
}