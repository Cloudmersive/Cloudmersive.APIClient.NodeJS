'use strict';


/**
 * Partially check whether an email address is valid
 * Validate an email address by identifying whether its parent domain has email servers defined.  This call is less limited than syntaxOnly but not as comprehensive as address/full.
 *
 * email String Email address to validate, e.g. \"support@cloudmersive.com\"
 * returns AddressGetServersResponse
 **/
exports.email_AddressGetServers = function(email) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Servers" : [ "Servers", "Servers" ],
  "Success" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fully validate an email address
 * Performs a full validation of the email address.  Checks for syntactic correctness, identifies the mail server in question if any, and then contacts the email server to validate the existence of the account - without sending any emails.
 *
 * email String Email address to validate, e.g. \"support@cloudmersive.com\"
 * returns FullEmailValidationResponse
 **/
exports.email_FullValidation = function(email) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ValidAddress" : true,
  "MailServerUsedForValidation" : "MailServerUsedForValidation"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Validate email adddress for syntactic correctness only
 * Validate whether a given email address is syntactically correct via a limited local-only check.  Use the address/full API to do a full validation.
 *
 * value String Email address to validate, e.g. \"support@cloudmersive.com\"
 * returns AddressVerifySyntaxOnlyResponse
 **/
exports.email_Post = function(value) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ValidAddress" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

