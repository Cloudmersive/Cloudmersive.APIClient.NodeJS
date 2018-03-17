'use strict';


/**
 * Converts an uploaded image in common formats such as JPEG, PNG into text via Optical Character Recognition.
 *
 * imageFile File Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.
 * returns ImageToTextResponse
 **/
exports.imageOcr_Post = function(imageFile) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "TextResult" : "TextResult",
  "MeanConfidenceLevel" : 0.8008282
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

