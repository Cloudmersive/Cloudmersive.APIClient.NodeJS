'use strict';


/**
 *
 * inputFile File Input file to perform the operation on.
 * returns VirusScanResult
 **/
exports.scan_File = function(inputFile) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "FoundViruses" : [ {
    "FileName" : "FileName",
    "VirusName" : "VirusName"
  }, {
    "FileName" : "FileName",
    "VirusName" : "VirusName"
  } ],
  "CleanResult" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

