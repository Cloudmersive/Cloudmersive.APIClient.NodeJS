'use strict';

var utils = require('../utils/writer.js');
var BarcodeLookup = require('../service/BarcodeLookupService');

module.exports.barcodeLookup_EanLookup = function barcodeLookup_EanLookup (req, res, next) {
  var value = req.swagger.params['value'].value;
  BarcodeLookup.barcodeLookup_EanLookup(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
