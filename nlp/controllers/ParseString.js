'use strict';

var utils = require('../utils/writer.js');
var ParseString = require('../service/ParseStringService');

module.exports.parseString_Post = function parseString_Post (req, res, next) {
  var input = req.swagger.params['input'].value;
  ParseString.parseString_Post(input)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
