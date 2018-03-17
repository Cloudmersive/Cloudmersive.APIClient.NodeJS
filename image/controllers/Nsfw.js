'use strict';

var utils = require('../utils/writer.js');
var Nsfw = require('../service/NsfwService');

module.exports.nsfw_Classify = function nsfw_Classify (req, res, next) {
  var imageFile = req.swagger.params['imageFile'].value;
  Nsfw.nsfw_Classify(imageFile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
