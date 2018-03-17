'use strict';

var utils = require('../utils/writer.js');
var ConvertDocument = require('../service/ConvertDocumentService');

module.exports.convertDocument_AutodetectToPdf = function convertDocument_AutodetectToPdf (req, res, next) {
  var inputFile = req.swagger.params['inputFile'].value;
  ConvertDocument.convertDocument_AutodetectToPdf(inputFile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.convertDocument_DocxToPdf = function convertDocument_DocxToPdf (req, res, next) {
  var inputFile = req.swagger.params['inputFile'].value;
  ConvertDocument.convertDocument_DocxToPdf(inputFile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.convertDocument_PptxToPdf = function convertDocument_PptxToPdf (req, res, next) {
  var inputFile = req.swagger.params['inputFile'].value;
  ConvertDocument.convertDocument_PptxToPdf(inputFile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.convertDocument_XlsxToCsv = function convertDocument_XlsxToCsv (req, res, next) {
  var inputFile = req.swagger.params['inputFile'].value;
  ConvertDocument.convertDocument_XlsxToCsv(inputFile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.convertDocument_XlsxToPdf = function convertDocument_XlsxToPdf (req, res, next) {
  var inputFile = req.swagger.params['inputFile'].value;
  ConvertDocument.convertDocument_XlsxToPdf(inputFile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
