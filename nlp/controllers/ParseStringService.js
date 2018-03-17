'use strict';


/**
 * Parse string to syntax tree
 * Parses the input string into a Penn Treebank syntax tree
 *
 * input String Input string
 * returns String
 **/
exports.parseString_Post = function(input) {
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

