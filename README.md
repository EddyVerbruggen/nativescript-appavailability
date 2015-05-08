# NativeScript AppAvailability

A module to check for availability of other apps in your NativeScript app.

## Installation
From the command prompt go to your app's `app` folder and execute:

```
npm install nativescript-appavailability
```

## Usage

### available

```js
  var appAvailability = require( "./node_modules/nativescript-appavailability/appavailability" );

  // examples of what to pass:
  // - for iOS: maps://
  // - for Android: com.facebook.katana
  appAvailability.available("com.facebook.katana").then(function(avail) {
      alert("Avail? " + avail);
  })
```

You may wonder how one would determine the correct identifier for an app.

Android: simply search the Play Store and use the id in the URL. For Twitter this is com.twitter.android because the URL is https://play.google.com/store/apps/details?id=com.twitter.android.

iOS: this one is a bit harder but this site should cover most apps you're interested in. When in doubt you can always fire up Safari on your iPhone and type for example 'twitter://' in the address bar, if the app launches you're good.
