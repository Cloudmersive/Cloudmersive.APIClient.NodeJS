'use strict';

var utils = require('../utils/writer.js');
var LanguageDetection = require('../service/LanguageDetectionService');

module.exports.languageDetection_Post = function languageDetection_Post (req, res, next) {
  var textToDetect = req.swagger.params['textToDetect'].value;
  LanguageDetection.languageDetection_Post(textToDetect)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
