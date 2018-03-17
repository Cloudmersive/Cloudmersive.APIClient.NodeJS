'use strict';


/**
 * NSFW image classifier
 * Classify an image into Not Safe For Work (NSFW)/Porn/Racy content and Safe Content.
 *
 * imageFile File Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
 * returns NsfwResult
 **/
exports.nsfw_Classify = function(imageFile) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Score" : 0.8008281904610115,
  "ClassificationOutcome" : "ClassificationOutcome",
  "Successful" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

