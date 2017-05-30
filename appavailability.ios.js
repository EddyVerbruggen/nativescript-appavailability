var utils = require("utils/utils");

exports.available = function (scheme) {
  return new Promise(function (resolve, reject) {
    try {
      var url = NSURL.URLWithString(scheme);
      var app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
      var avail = app.canOpenURL(url);
      resolve(avail);
    } catch (ex) {
      console.log("Error in appavailability.available: " + ex);
      reject(ex);
    }
  });
};

exports.availableSync = function (scheme) {
  try {
    var url = NSURL.URLWithString(scheme);
    var app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
    return app.canOpenURL(url);
  } catch (ex) {
    console.log("Error in appavailability.availableSync: " + ex);
    return false;
  }
};