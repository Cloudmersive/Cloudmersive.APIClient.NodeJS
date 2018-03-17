'use strict';


/**
 * Apply HTML template
 * Apply operations to fill in an HTML template, generating a final HTML result
 *
 * value HtmlTemplateApplicationRequest Operations to apply to template
 * returns HtmlTemplateApplicationResponse
 **/
exports.convertTemplate_ApplyHtmlTemplate = function(value) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "FinalHtml" : "FinalHtml",
  "Successful" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

