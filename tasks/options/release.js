module.exports = {

    options: {
        bump: false, //default: true
//        file: 'component.json', //default: package.json
//        add: false, //default: true
//        commit: false, //default: true
//        tag: false, //default: true
        push: false, //default: true
        pushTags: false, //default: true
        npm: false, //default: true
        npmtag: false, //default: no tag
//        folder: 'folder/to/publish/to/npm', //default project root
//        tagName: 'some-tag-<%= version %>', //default: '<%= version %>'
//        commitMessage: 'check out my release <%= version %>', //default: 'release <%= version %>'
//        tagMessage: 'tagging version <%= version %>', //default: 'Version <%= version %>',
        github: {
            repo: '<%= github_repo%>', //put your user/repo here
            usernameVar: 'GHUB_USERNAME', //ENVIRONMENT VARIABLE that contains Github username
            passwordVar: 'GH_PW' //ENVIRONMENT VARIABLE that contains Github password
        }
    }


}