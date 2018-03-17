'use strict';

var utils = require('../utils/writer.js');
var ApikeyUsage = require('../service/ApikeyUsageService');

module.exports.apikeyUsage_Get = function apikeyUsage_Get (req, res, next) {
  var id = req.swagger.params['id'].value;
  ApikeyUsage.apikeyUsage_Get(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
