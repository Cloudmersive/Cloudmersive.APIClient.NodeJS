'use strict';

var utils = require('../utils/writer.js');
var PosTaggerString = require('../service/PosTaggerStringService');

module.exports.posTaggerString_Post = function posTaggerString_Post (req, res, next) {
  var input = req.swagger.params['input'].value;
  PosTaggerString.posTaggerString_Post(input)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
