'use strict';

var utils = require('../utils/writer.js');
var ConvertWeb = require('../service/ConvertWebService');

module.exports.convertWeb_UrlToPdf = function convertWeb_UrlToPdf (req, res, next) {
  var input = req.swagger.params['input'].value;
  ConvertWeb.convertWeb_UrlToPdf(input)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.convertWeb_UrlToPdf_1 = function convertWeb_UrlToPdf_1 (req, res, next) {
  var input = req.swagger.params['input'].value;
  ConvertWeb.convertWeb_UrlToPdf_1(input)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.convertWeb_UrlToScreenshot = function convertWeb_UrlToScreenshot (req, res, next) {
  var input = req.swagger.params['input'].value;
  ConvertWeb.convertWeb_UrlToScreenshot(input)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
