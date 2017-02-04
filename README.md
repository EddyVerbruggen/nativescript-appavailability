# NativeScript AppAvailability

A plugin to check for availability of other apps on the device.

## Installation
Run the following command from the root of your project:

```
tns plugin add nativescript-appavailability
```

## Usage

### TypeScript
```js
const isAppAvailable = require("nativescript-appavailability").available;

// examples of what to pass:
// - for iOS: "maps://", "twitter://", "fb://"
// - for Android: "com.facebook.katana"
appavailability.available("twitter://").then((avail: boolean) => {
  console.log("App available? " + avail);
})
```

### JavaScript

```js
var appAvailability = require("nativescript-appavailability");

// examples of what to pass:
// - for iOS: "maps://", "twitter://", "fb://"
// - for Android: "com.facebook.katana"
appAvailability.available("com.facebook.katana").then(function(avail) {
  console.log("App available? " + avail);
})
```

## iOS whitelisting
To get useful results on iOS 9 and up you need to whitelist the URL Scheme
you're querying in the application's `.plist`.

Luckily NativeScript made this pretty easy. Just open `app/App_ResourcesiOS/Info.plist`
and add this if you want to query for both `twitter://` and `fb://`:

```xml
  <key>LSApplicationQueriesSchemes</key>
  <array>
    <string>fb</string>
    <string>twitter</string>
  </array>
```

You may wonder how one would determine the correct identifier for an app.
* Android: simply search the Play Store and use the id in the URL. For Twitter this is com.twitter.android because the URL is https://play.google.com/store/apps/details?id=com.twitter.android.
* iOS: this one is a bit harder but this site should cover most apps you're interested in. When in doubt you can always fire up Safari on your iPhone and type for example 'twitter://' in the address bar, if the app launches you're good.
