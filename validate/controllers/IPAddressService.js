'use strict';


/**
 * Geolocate an IP address
 * Identify an IP address Country, State/Provence, City, Zip/Postal Code, etc.  Useful for security and UX applications.
 *
 * value String IP address to geolocate, e.g. \"55.55.55.55\"
 * returns GeolocateResponse
 **/
exports.iPAddress_Post = function(value) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "RegionCode" : "RegionCode",
  "CountryName" : "CountryName",
  "RegionName" : "RegionName",
  "ZipCode" : "ZipCode",
  "TimezoneStandardName" : "TimezoneStandardName",
  "Latitude" : 0.8008281904610115,
  "City" : "City",
  "CountryCode" : "CountryCode",
  "Longitude" : 6.027456183070403
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

