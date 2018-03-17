'use strict';


/**
 * Extract entities from string
 * Extract the named entitites from an input string.
 *
 * value String Input string
 * returns String
 **/
exports.extractEntitiesString_Post = function(value) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

