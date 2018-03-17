'use strict';

var utils = require('../utils/writer.js');
var GenerateBarcode = require('../service/GenerateBarcodeService');

module.exports.generateBarcode_EAN13 = function generateBarcode_EAN13 (req, res, next) {
  var value = req.swagger.params['value'].value;
  GenerateBarcode.generateBarcode_EAN13(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.generateBarcode_EAN8 = function generateBarcode_EAN8 (req, res, next) {
  var value = req.swagger.params['value'].value;
  GenerateBarcode.generateBarcode_EAN8(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.generateBarcode_QRCode = function generateBarcode_QRCode (req, res, next) {
  var value = req.swagger.params['value'].value;
  GenerateBarcode.generateBarcode_QRCode(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.generateBarcode_UPCA = function generateBarcode_UPCA (req, res, next) {
  var value = req.swagger.params['value'].value;
  GenerateBarcode.generateBarcode_UPCA(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.generateBarcode_UPCE = function generateBarcode_UPCE (req, res, next) {
  var value = req.swagger.params['value'].value;
  GenerateBarcode.generateBarcode_UPCE(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
