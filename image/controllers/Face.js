'use strict';

var utils = require('../utils/writer.js');
var Face = require('../service/FaceService');

module.exports.face_CropFirst = function face_CropFirst (req, res, next) {
  var imageFile = req.swagger.params['imageFile'].value;
  Face.face_CropFirst(imageFile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.face_CropFirstRound = function face_CropFirstRound (req, res, next) {
  var imageFile = req.swagger.params['imageFile'].value;
  Face.face_CropFirstRound(imageFile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.face_Locate = function face_Locate (req, res, next) {
  var imageFile = req.swagger.params['imageFile'].value;
  Face.face_Locate(imageFile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
