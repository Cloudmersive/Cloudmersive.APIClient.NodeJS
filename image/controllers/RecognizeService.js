'use strict';


/**
 * Describe an image in natural language
 * Generate an English language text description of the image as a sentence.
 *
 * imageFile File Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
 * returns ImageDescriptionResponse
 **/
exports.recognize_Describe = function(imageFile) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "RunnerUpOutcome" : {
    "Description" : "Description",
    "ConfidenceScore" : 0.8008281904610115
  },
  "Highconfidence" : true,
  "BestOutcome" : {
    "Description" : "Description",
    "ConfidenceScore" : 0.8008281904610115
  },
  "Successful" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

