'use strict';

var utils = require('../utils/writer.js');
var Scan = require('../service/ScanService');

module.exports.scan_File = function scan_File (req, res, next) {
  var inputFile = req.swagger.params['inputFile'].value;
  Scan.scan_File(inputFile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
