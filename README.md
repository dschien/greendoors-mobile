# Documentation Greendoors Phonegap


## Contents
[Setup](#setup)

[Building](#building)

[Development](#development)

## Setup

### Install NPM
Platform specific. On Ubuntu use apt-get, on OSX use homebrew.

### Install Cordova
Tested with 3.3.1-0.1.2
```Bash
sudo npm install -g cordova 3.3.1-0.1.2
```

### Create a new project
```Bash
cordova create greendoors-app
cd greendoors-app
```
Add a new device (similar with iOS)
```Bash
cordova platform add android
cordova build
```

### Install Barcode Scanner Plugin
```Bash
git clone https://github.com/dschien/BarcodeScanner.git plugins/com.phonegap.plugins.barcodescanner
```

#### Install Cordova Plugin Mgr
```Bash
sudo npm install -g plugman 0.18
plugman install --plugins_dir plugins --plugin com.phonegap.plugins.barcodescanner --platform android --project platforms/android
plugman install --plugins_dir plugins --plugin com.phonegap.plugins.barcodescanner --platform ios --project platforms/ios
```

#### Install Geolocation Plugin
```Bash
cordova plugin add org.apache.cordova.geolocation
```

#### Install Splashscreen Plugin
```Bash
cordova plugin add org.apache.cordova.splashscreen
```

#### Install Notification Plugin
Required for alerts
```Bash
cordova plugin add org.apache.cordova.dialogs
```

#### Install Device Plugin
```Bash
cordova plugin add org.apache.cordova.device
```

### Install Email Plugin
For iOS use this: https://github.com/steve-jansen/cordova-ios-emailcomposer
```Bash
cordova plugin add emailcomposer # using the http://plugins.cordova.io registry
```




### Checkout project sources
```Bash
git clone https://github.com/dschien/greendoors-phone.git
```

### Configure Project
```
cd greendoors-phone
```

You need grunt for build and development

####
```Bash
npm install -G grunt
```

Then install the grunt requirements. Also, dependency management is done with bower, which is installed as well.
```Bash
npm install
```

## Building

The dev dir is full of files we don't need, so we copy the files we do need over to the `./../www` directory.

```Bash
grunt copy:build
```

Now we can build. (replace [platform] which one of android or iOS).
```Bash
cd ..
cordova build [platform]
```

Now try installing it.
```Bash
adb install -r platforms/android/bin/<project-name>-debug.apk
```

## Development

### Dependencies
Use bower to fetch new dependencies, then use bower-installer to copy them into the `js/lib` folder.
```Bash
bower install [lib name]
bower-installer
```

### Grunt watch
During coding, use JSLint to check JS syntax and compile handlebars. This automated with grunt.
Keep a shell open with
```Bash
grunt watch
```


# Testing

## Jasmine

* For local testing, there must be a server running behind https.
* When using self-signed be sure to open a page in the browser to accept the certificate for the session
* Also make sure to start the browser without cross-site scripting protection []
One can create an alias for that: `alias ogc='open -a Google\ Chrome --args --disable-web-security'`


# Device Fragmentation

## Topcoat
Topcoat css set the text-rendering property which causes Android not to render svg any more - must be disabled.

## Scroll Div
Android pre 3.0 (honeycomb) won't scroll divs. One solution is to use iscroll or similar.

## IScroll
On HTC One S the iScroll has a problem with firing events twice for some widgets - so happened with the star icon in the house
detail view.

## Javascript
### Android 2.3 trips over using the 'new' as a property accessor and thinks it's the reserved keyword. Workaround - use
item getter notation.
### Android 2.3 does not property dataset accessors. Use .getAttribute('data-*')

## Top-Bar iOS6/7
Change origin coords on iOS6.
In `MainController.m` add this to `viewWillAppear`
```
//Lower screen 20px on ios 6

    if ([[[UIDevice currentDevice] systemVersion] floatValue] <= 7) {
      CGRect viewBounds = [self.webView bounds];
        viewBounds.origin.y = -20;
        viewBounds.size.height = viewBounds.size.height + 20;
        self.webView.frame = viewBounds;
    }

```

# Preprocessing
Is performed by grunt preprocess
The main preprocessing steps are:
- add 20px margin to the top for iOS. This is done in horizontal-bar and pages. They compile from templates to the target files for each platform. Index.html catches the relevant
- use of optimised js code for release

# Deployment
## Merges
iOS specific code is written to the merges directory.
It overrides the content in the www directory.

# Cordova Processing
[https://gist.github.com/dpogue/4100866] has an example of a node hook script.
These sit in a .cordova/hooks/* folder for a specific build phase


# Backbone

## Memory Leaks
Firstly, in order to avoid memory leaks, unbind views on `remove()` by using `listen` as described here:
[http://ozkatz.github.io/avoiding-common-backbonejs-pitfalls.html]

Secondly, remove views (and children).
We use a dedicated page transitioner that holds references to views and slides them in/out.
Thus, when a new view that is cheap is shown, the old is destroyed.
Expensive views (map and house list) are only created once.

# Touch Events
We use fastclick to enable browser and phone events without delay with the [fastclick.js] library


#Tweaks

## iOS

### Viewport settings:
when running the iPhone version in the iPad, then the viewport bounds are not respected.
https://issues.apache.org/jira/browse/CB-4323

### Status Bar appearance:
Set plist properties
[http://stackoverflow.com/questions/19328582/how-to-set-light-content-style-to-status-bar-in-a-phonegap-app]

Open your info.plist (resources folder):

set: "View controller-based status bar appearance" to NO
set: "Status bar style" to "UIStatusBarStyleLightContent".

### Changing coordinate origin from iOS6 to iOS7 (20px bar)
In `MainViewController.m`, in method `willAppear` add:
```
// View defaults to full size.  If you want to customize the view's size, or its subviews (e.g. webView),
    // you can do so here.
    //Lower screen 20px on ios 7
    float version = [[[UIDevice currentDevice] systemVersion] floatValue];
    if (version < 7) {
        CGRect viewBounds = [self.webView bounds];
        viewBounds.origin.y = -20;
        viewBounds.size.height = viewBounds.size.height + 20;
        self.webView.frame = viewBounds;
    }
```

# Assets

## Splashscreen
Use the photoshop actions in a bitbucket folder to create splash screens

## Templates
for iOS and android icons photoshop templates exist

For Android splashscreens use 9Patch generator at [http://android-ui-utils.googlecode.com/hg/asset-studio/dist/index.html]

# Build System
## Workflow
For each platform:
1. copy to /build/prepare
2. preprocess to /build/preprocess
3. compile (handlebars, require, compass) to /build/dist
4. copy to cordova directories ./../merges/<platform>

## Grunt Setup
### environment variables for processes
Uses config:env and env:env for legacy reasons.

### command line switches
with options - currently only server.

### Composition of tasks
Tasks are defined in dir tasks/tasks.js

### Composition of options
Tasks options are configured in tasks/options


# Android App Store Submission

## Build for release
[http://developer.android.com/tools/publishing/app-signing.html]
`cordova build --release`

### Sign
`jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore Greendoors-release-unsigned.apk alias_name`

### Verify
`jarsigner -verify Greendoors-release-unsigned.apk`

### Zipalign
`zipalign -v 4 Greendoors-release-unsigned.apk Greendoors.apk`

## Distribute
[https://play.google.com/apps/publish/]

# Release
Each version that is deployed for testing should be accompanied by a release.

