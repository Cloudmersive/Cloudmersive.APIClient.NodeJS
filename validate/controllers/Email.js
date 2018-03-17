'use strict';

var utils = require('../utils/writer.js');
var Email = require('../service/EmailService');

module.exports.email_AddressGetServers = function email_AddressGetServers (req, res, next) {
  var email = req.swagger.params['email'].value;
  Email.email_AddressGetServers(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.email_FullValidation = function email_FullValidation (req, res, next) {
  var email = req.swagger.params['email'].value;
  Email.email_FullValidation(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.email_Post = function email_Post (req, res, next) {
  var value = req.swagger.params['value'].value;
  Email.email_Post(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
