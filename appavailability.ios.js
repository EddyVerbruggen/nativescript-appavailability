exports.available = function (scheme) {
  return new Promise(function (resolve, reject) {
    try {
      var url = NSURL.URLWithString(scheme);
      var avail = UIApplication.sharedApplication.canOpenURL(url);
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
    return UIApplication.sharedApplication.canOpenURL(url);
  } catch (ex) {
    console.log("Error in appavailability.availableSync: " + ex);
    return false;
  }
};
