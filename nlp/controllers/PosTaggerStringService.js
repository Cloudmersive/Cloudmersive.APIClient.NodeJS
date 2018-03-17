'use strict';


/**
 * Part-of-speech tag a string
 * Perform a part-of-speech (POS) tagging on the input string.
 *
 * input String Input string
 * returns String
 **/
exports.posTaggerString_Post = function(input) {
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

