'use strict';

var utils = require('../utils/writer.js');
var Resize = require('../service/ResizeService');

module.exports.resize_Post = function resize_Post (req, res, next) {
  var maxWidth = req.swagger.params['maxWidth'].value;
  var maxHeight = req.swagger.params['maxHeight'].value;
  var imageFile = req.swagger.params['imageFile'].value;
  Resize.resize_Post(maxWidth,maxHeight,imageFile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
