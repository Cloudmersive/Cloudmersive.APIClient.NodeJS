'use strict';

var utils = require('../utils/writer.js');
var Domain = require('../service/DomainService');

module.exports.domain_Check = function domain_Check (req, res, next) {
  var domain = req.swagger.params['domain'].value;
  Domain.domain_Check(domain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.domain_Post = function domain_Post (req, res, next) {
  var domain = req.swagger.params['domain'].value;
  Domain.domain_Post(domain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
