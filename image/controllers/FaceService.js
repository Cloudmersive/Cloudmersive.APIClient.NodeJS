'use strict';


/**
 * Crop image to face (square)
 * Crop an image to the face (rectangular crop).  If there is more than one face present, choose the first one.
 *
 * imageFile File Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
 * returns File
 **/
exports.face_CropFirst = function(imageFile) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crop image to face (round)
 * Crop an image to the face (circular/round crop).  If there is more than one face present, choose the first one.
 *
 * imageFile File Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
 * returns File
 **/
exports.face_CropFirstRound = function(imageFile) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find faces in an image
 * Locate the positions of all faces in an image
 *
 * imageFile File Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
 * returns FaceLocateResponse
 **/
exports.face_Locate = function(imageFile) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Successful" : true,
  "FaceCount" : 5,
  "Faces" : [ {
    "BottomY" : 5,
    "TopY" : 6,
    "RightX" : 1,
    "LeftX" : 0
  }, {
    "BottomY" : 5,
    "TopY" : 6,
    "RightX" : 1,
    "LeftX" : 0
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

