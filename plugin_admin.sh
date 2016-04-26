#!/usr/local/bin/zsh
cd ..

lw=('emailcomposer' 'org.apache.cordova.device'   'org.apache.cordova.dialogs'   'org.apache.cordova.geolocation'  'org.apache.cordova.inappbrowser'  'org.apache.cordova.network-information'  'org.apache.cordova.splashscreen')

for i in $lw; do
  cordova plugin remove $i
  cordova plugin add $i
done


#plugman install --plugins_dir plugins --plugin com.phonegap.plugins.barcodescanner --platform android --project platforms/android
#plugman install --plugins_dir plugins --plugin com.phonegap.plugins.barcodescanner --platform ios --project platforms/ios


cd greendoors-phone