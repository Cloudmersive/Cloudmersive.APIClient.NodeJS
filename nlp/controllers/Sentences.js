'use strict';

var utils = require('../utils/writer.js');
var Sentences = require('../service/SentencesService');

module.exports.sentences_Post = function sentences_Post (req, res, next) {
  var input = req.swagger.params['input'].value;
  Sentences.sentences_Post(input)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
