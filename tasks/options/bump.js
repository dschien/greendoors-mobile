module.exports = {
    options: {
        files: ['package.json'],
        updateConfigs: ['pkg'],
        commit: false,
//                    commitMessage: 'Release v%VERSION%',
//                    commitFiles: ['package.json'], // '-a' for all files
//                    createTag: true,
//                    tagName: 'v%VERSION%',
//                    tagMessage: 'Version %VERSION%',
        push: false
//                    pushTo: 'upstream',
//                    gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
    }
}