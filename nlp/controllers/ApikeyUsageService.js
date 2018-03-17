'use strict';


/**
 * Get API Key usage
 * Use this API to determine how many API calls you have made during this month.
 *
 * id String API key to check
 * returns Long
 **/
exports.apikeyUsage_Get = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

