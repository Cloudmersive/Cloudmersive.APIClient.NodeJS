'use strict';


/**
 * Validate a domain name
 * Check whether a domain name is valid or not.  API performs a live validation by contacting DNS services to validate the existence of the domain name.
 *
 * domain String Domain name to check, for example \"cloudmersive.com\"
 * returns CheckResponse
 **/
exports.domain_Check = function(domain) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ValidDomain" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get WHOIS information for a domain
 * Validate whether a domain name exists, and also return the full WHOIS record for that domain name.  WHOIS records include all the registration details of the domain name, such as information about the domain's owners.
 *
 * domain String Domain name to check, for example \"cloudmersive.com\"
 * returns WhoisResponse
 **/
exports.domain_Post = function(domain) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "WhoisServer" : "WhoisServer",
  "CreatedDt" : "2000-01-23T04:56:07.000+00:00",
  "ValidDomain" : true,
  "RawTextRecord" : "RawTextRecord"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

