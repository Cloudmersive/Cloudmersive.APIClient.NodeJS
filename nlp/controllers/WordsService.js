'use strict';


/**
 * Get adjectives in string
 * Retrieves all adjectives in input string
 *
 * input String Input string
 * returns String
 **/
exports.words_Adjectives = function(input) {
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
 * Get adverbs in input string
 * Returns all adverb words in the input string
 *
 * input String Input string
 * returns String
 **/
exports.words_Adverbs = function(input) {
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
 * Get words in input string (JSON)
 * Get the component words in an input string, formatted as JSON
 *
 * input String String to process
 * returns GetWordsJsonResponse
 **/
exports.words_GetWordsJson = function(input) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Words" : [ {
    "Word" : "Word",
    "StartPosition" : 1,
    "WordIndex" : 6,
    "EndPosition" : 5
  }, {
    "Word" : "Word",
    "StartPosition" : 1,
    "WordIndex" : 6,
    "EndPosition" : 5
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
 * Get words from string
 * Segment an input string into its component words
 *
 * input String Input string
 * returns String
 **/
exports.words_GetWordsString = function(input) {
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
 * Get nouns in string
 * Returns all of the nouns in the input string
 *
 * input String Input string
 * returns String
 **/
exports.words_Nouns = function(input) {
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
 * Get the verbs in a string
 * Get all of the verbs in the input string.
 *
 * input String Input string
 * returns String
 **/
exports.words_Post = function(input) {
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
 * Returns all pronounts in string
 * Returns all pronouns in the input string
 *
 * input String Input string
 * returns String
 **/
exports.words_Pronouns = function(input) {
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
 * Get proper nouns in a string
 * Returns all of the proper nouns in a string.  Proper nouns are named entities such as \"Hilton\".
 *
 * input String Input string
 * returns String
 **/
exports.words_ProperNouns = function(input) {
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

