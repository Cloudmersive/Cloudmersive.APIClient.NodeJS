'use strict';

var utils = require('../utils/writer.js');
var ImageOcr = require('../service/ImageOcrService');

module.exports.imageOcr_Post = function imageOcr_Post (req, res, next) {
  var imageFile = req.swagger.params['imageFile'].value;
  ImageOcr.imageOcr_Post(imageFile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
