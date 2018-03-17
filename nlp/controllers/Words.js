'use strict';

var utils = require('../utils/writer.js');
var Words = require('../service/WordsService');

module.exports.words_Adjectives = function words_Adjectives (req, res, next) {
  var input = req.swagger.params['input'].value;
  Words.words_Adjectives(input)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.words_Adverbs = function words_Adverbs (req, res, next) {
  var input = req.swagger.params['input'].value;
  Words.words_Adverbs(input)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.words_GetWordsJson = function words_GetWordsJson (req, res, next) {
  var input = req.swagger.params['input'].value;
  Words.words_GetWordsJson(input)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.words_GetWordsString = function words_GetWordsString (req, res, next) {
  var input = req.swagger.params['input'].value;
  Words.words_GetWordsString(input)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.words_Nouns = function words_Nouns (req, res, next) {
  var input = req.swagger.params['input'].value;
  Words.words_Nouns(input)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.words_Post = function words_Post (req, res, next) {
  var input = req.swagger.params['input'].value;
  Words.words_Post(input)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.words_Pronouns = function words_Pronouns (req, res, next) {
  var input = req.swagger.params['input'].value;
  Words.words_Pronouns(input)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.words_ProperNouns = function words_ProperNouns (req, res, next) {
  var input = req.swagger.params['input'].value;
  Words.words_ProperNouns(input)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
