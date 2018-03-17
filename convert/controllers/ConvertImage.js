'use strict';

var utils = require('../utils/writer.js');
var ConvertImage = require('../service/ConvertImageService');

module.exports.convertImage_ImageFormatConvert = function convertImage_ImageFormatConvert (req, res, next) {
  var format1 = req.swagger.params['format1'].value;
  var format2 = req.swagger.params['format2'].value;
  var inputFile = req.swagger.params['inputFile'].value;
  ConvertImage.convertImage_ImageFormatConvert(format1,format2,inputFile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
