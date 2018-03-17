'use strict';

var utils = require('../utils/writer.js');
var ConvertTemplate = require('../service/ConvertTemplateService');

module.exports.convertTemplate_ApplyHtmlTemplate = function convertTemplate_ApplyHtmlTemplate (req, res, next) {
  var value = req.swagger.params['value'].value;
  ConvertTemplate.convertTemplate_ApplyHtmlTemplate(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
