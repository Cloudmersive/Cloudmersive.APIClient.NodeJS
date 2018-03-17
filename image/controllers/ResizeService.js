'use strict';


/**
 * Resize an image with parameters
 * Resize an image to a maximum width and maximum height, while preserving the image's original aspect ratio
 *
 * maxWidth Integer Maximum width of the output image - final image will be as large as possible while less than or equial to this width
 * maxHeight Integer Maximum height of the output image - final image will be as large as possible while less than or equial to this height
 * imageFile File Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
 * returns Object
 **/
exports.resize_Post = function(maxWidth,maxHeight,imageFile) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

