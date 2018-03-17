'use strict';

var utils = require('../utils/writer.js');
var Recognize = require('../service/RecognizeService');

module.exports.recognize_Describe = function recognize_Describe (req, res, next) {
  var imageFile = req.swagger.params['imageFile'].value;
  Recognize.recognize_Describe(imageFile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
