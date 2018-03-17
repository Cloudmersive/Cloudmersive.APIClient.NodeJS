'use strict';


/**
 * Lookup a barcode value and return product data
 *
 * value String Barcode value
 * returns BarcodeLookupResponse
 **/
exports.barcodeLookup_EanLookup = function(value) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Matches" : [ {
    "EAN" : "EAN",
    "Title" : "Title"
  }, {
    "EAN" : "EAN",
    "Title" : "Title"
  } ],
  "Successful" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

