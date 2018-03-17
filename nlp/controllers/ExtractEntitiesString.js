'use strict';

var utils = require('../utils/writer.js');
var ExtractEntitiesString = require('../service/ExtractEntitiesStringService');

module.exports.extractEntitiesString_Post = function extractEntitiesString_Post (req, res, next) {
  var value = req.swagger.params['value'].value;
  ExtractEntitiesString.extractEntitiesString_Post(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
