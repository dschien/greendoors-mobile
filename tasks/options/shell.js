module.exports = {
    cordova: {
        options: {                      // Options
            stdout: true
        },
        command: [
            'cordova build'
        ].join('&&')
    },
    ios: {
        options: {                      // Options
            stdout: true
        },
        command: [
            'cordova prepare ios'
//                        'cordova build ios'
        ].join('&&')
    },
    android: {
        options: {                      // Options
            stdout: true
        },
        command: [
//                        'cordova prepare android',
            'cordova build android'
        ].join('&&')
    },
    androidRelease: {
        options: {                      // Options
            stdout: true
        },
        command: [
//                        'cordova prepare android',
            'cordova build --release android'
        ].join('&&')
    },
    androidInstall: {
        options: {                      // Options
            stdout: true
        },
        command: [
//                        'cordova prepare android',
            'adb install -r ./../platforms/android/bin/Greendoors-debug.apk'
        ].join('&&')
    },
    adb: {
        options: {                      // Options
            stdout: true
        },
        command: [
            'adb uninstall uk.ac.bris.cs.greendoors',
            'adb install ./../platforms/android/bin/Greendoors-debug.apk'
        ].join('&&')
    }
}