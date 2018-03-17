'use strict';

var utils = require('../utils/writer.js');
var ConvertData = require('../service/ConvertDataService');

module.exports.convertData_CsvToJson = function convertData_CsvToJson (req, res, next) {
  var inputFile = req.swagger.params['inputFile'].value;
  ConvertData.convertData_CsvToJson(inputFile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.convertData_XmlToJson = function convertData_XmlToJson (req, res, next) {
  ConvertData.convertData_XmlToJson()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
