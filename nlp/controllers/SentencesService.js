'use strict';


/**
 * Extract sentences from string
 * Segment an input string into separate sentences, output result as a string.
 *
 * input String Input string
 * returns String
 **/
exports.sentences_Post = function(input) {
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

