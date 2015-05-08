var application = require("application");
var context = application.android.context;

exports.available = function (uri) {
  return new Promise(function (resolve, reject) {
    try {
      var pm = context.getPackageManager();
      try {
        pm.getPackageInfo(uri, android.content.pm.PackageManager.GET_ACTIVITIES);
        resolve(true);
      } catch(e) {
        resolve(false);
      }
    } catch (ex) {
      console.log("Error in appavailability.available: " + ex);
      reject(ex);
    }
  });
};