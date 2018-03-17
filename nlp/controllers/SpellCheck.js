'use strict';

var utils = require('../utils/writer.js');
var SpellCheck = require('../service/SpellCheckService');

module.exports.spellCheck_CheckJson = function spellCheck_CheckJson (req, res, next) {
  var value = req.swagger.params['value'].value;
  SpellCheck.spellCheck_CheckJson(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.spellCheck_CheckSentenceJson = function spellCheck_CheckSentenceJson (req, res, next) {
  var value = req.swagger.params['value'].value;
  SpellCheck.spellCheck_CheckSentenceJson(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.spellCheck_CheckSentenceString = function spellCheck_CheckSentenceString (req, res, next) {
  var value = req.swagger.params['value'].value;
  SpellCheck.spellCheck_CheckSentenceString(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.spellCheck_Correct = function spellCheck_Correct (req, res, next) {
  var value = req.swagger.params['value'].value;
  SpellCheck.spellCheck_Correct(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.spellCheck_CorrectJson = function spellCheck_CorrectJson (req, res, next) {
  var value = req.swagger.params['value'].value;
  SpellCheck.spellCheck_CorrectJson(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.spellCheck_Post = function spellCheck_Post (req, res, next) {
  var value = req.swagger.params['value'].value;
  SpellCheck.spellCheck_Post(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
