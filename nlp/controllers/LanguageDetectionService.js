'use strict';


/**
 * Detect language of text
 * Automatically determine which language a text string is written in.  Supports Danish (DAN), German (DEU), English (ENG), French (FRA), Italian (ITA), Japanese (JPN), Korean (KOR), Dutch (NLD), Norwegian (NOR), Portuguese (POR), Russian (RUS), Spanish (SPA), Swedish (SWE), Chinese (ZHO).
 *
 * textToDetect String Text to detect language of
 * returns LanguageDetectionResponse
 **/
exports.languageDetection_Post = function(textToDetect) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "DetectedLanguage_FullName" : "DetectedLanguage_FullName",
  "Successful" : true,
  "DetectedLanguage_ThreeLetterCode" : "DetectedLanguage_ThreeLetterCode"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

