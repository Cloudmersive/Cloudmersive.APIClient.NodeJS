'use strict';

var utils = require('../utils/writer.js');
var IPAddress = require('../service/IPAddressService');

module.exports.iPAddress_Post = function iPAddress_Post (req, res, next) {
  var value = req.swagger.params['value'].value;
  IPAddress.iPAddress_Post(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
