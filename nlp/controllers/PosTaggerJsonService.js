'use strict';


/**
 * Part-of-speech tag a string
 * Part-of-speech (POS) tag a string and return result as JSON
 *
 * request PosRequest Input string
 * returns PosResponse
 **/
exports.posTaggerJson_Post = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "TaggedSentences" : [ {
    "Words" : [ {
      "Word" : "{}",
      "Tag" : "{}"
    }, {
      "Word" : "{}",
      "Tag" : "{}"
    } ]
  }, {
    "Words" : [ {
      "Word" : "{}",
      "Tag" : "{}"
    }, {
      "Word" : "{}",
      "Tag" : "{}"
    } ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

