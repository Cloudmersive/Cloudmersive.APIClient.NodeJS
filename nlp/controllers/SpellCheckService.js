'use strict';


/**
 * Spell check word
 * Spell check a word as JSON
 *
 * value String Input sentence
 * returns CheckJsonResponse
 **/
exports.spellCheck_CheckJson = function(value) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Correct" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Check if sentence is spelled correctly
 * Checks whether the sentence is spelled correctly and returns the result as JSON
 *
 * value String Input sentence
 * returns CheckSentenceJsonResponse
 **/
exports.spellCheck_CheckSentenceJson = function(value) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "IncorrectCount" : 0,
  "Words" : [ {
    "Suggestions" : [ "Suggestions", "Suggestions" ],
    "Word" : {
      "Word" : "Word",
      "StartPosition" : 1,
      "WordIndex" : 6,
      "EndPosition" : 5
    },
    "Correct" : true
  }, {
    "Suggestions" : [ "Suggestions", "Suggestions" ],
    "Word" : {
      "Word" : "Word",
      "StartPosition" : 1,
      "WordIndex" : 6,
      "EndPosition" : 5
    },
    "Correct" : true
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Spell check a sentence
 * Check if a sentence is spelled correctly
 *
 * value String Input sentence word
 * returns Boolean
 **/
exports.spellCheck_CheckSentenceString = function(value) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find spelling corrections
 * Find the spelling corrections for a word
 *
 * value String Input word
 * returns String
 **/
exports.spellCheck_Correct = function(value) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find spelling corrections
 * Find spelling correction suggestions and return result as JSON
 *
 * value String Input string
 * returns CorrectJsonResponse
 **/
exports.spellCheck_CorrectJson = function(value) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Suggestions" : [ "Suggestions", "Suggestions" ],
  "Correct" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Spell check a word
 * Check if a word is spelled correctly
 *
 * value String Input string word
 * returns Boolean
 **/
exports.spellCheck_Post = function(value) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

