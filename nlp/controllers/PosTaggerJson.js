'use strict';

var utils = require('../utils/writer.js');
var PosTaggerJson = require('../service/PosTaggerJsonService');

module.exports.posTaggerJson_Post = function posTaggerJson_Post (req, res, next) {
  var request = req.swagger.params['request'].value;
  PosTaggerJson.posTaggerJson_Post(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
