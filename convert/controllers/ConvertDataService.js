'use strict';


/**
 * CSV to JSON conversion
 * Convert a CSV file to a JSON object array
 *
 * inputFile File Input file to perform the operation on.
 * returns Object
 **/
exports.convertData_CsvToJson = function(inputFile) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * XML to JSON conversion
 * Convert an XML string or file into JSON
 *
 * returns Object
 **/
exports.convertData_XmlToJson = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

