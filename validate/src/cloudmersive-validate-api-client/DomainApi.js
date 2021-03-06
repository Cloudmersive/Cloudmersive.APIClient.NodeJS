/**
 * validateapi
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CheckResponse', 'model/WhoisResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CheckResponse'), require('../model/WhoisResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Validateapi) {
      root.Validateapi = {};
    }
    root.Validateapi.DomainApi = factory(root.Validateapi.ApiClient, root.Validateapi.CheckResponse, root.Validateapi.WhoisResponse);
  }
}(this, function(ApiClient, CheckResponse, WhoisResponse) {
  'use strict';

  /**
   * Domain service.
   * @module cloudmersive-validate-api-client/DomainApi
   * @version v1
   */

  /**
   * Constructs a new DomainApi. 
   * @alias module:cloudmersive-validate-api-client/DomainApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the domainCheck operation.
     * @callback module:cloudmersive-validate-api-client/DomainApi~domainCheckCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a domain name
     * Check whether a domain name is valid or not.  API performs a live validation by contacting DNS services to validate the existence of the domain name.
     * @param {String} domain Domain name to check, for example \&quot;cloudmersive.com\&quot;
     * @param {module:cloudmersive-validate-api-client/DomainApi~domainCheckCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CheckResponse}
     */
    this.domainCheck = function(domain, callback) {
      var postBody = domain;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainCheck");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = CheckResponse;

      return this.apiClient.callApi(
        '/validate/domain/check', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainPost operation.
     * @callback module:cloudmersive-validate-api-client/DomainApi~domainPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WhoisResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get WHOIS information for a domain
     * Validate whether a domain name exists, and also return the full WHOIS record for that domain name.  WHOIS records include all the registration details of the domain name, such as information about the domain&#39;s owners.
     * @param {String} domain Domain name to check, for example \&quot;cloudmersive.com\&quot;
     * @param {module:cloudmersive-validate-api-client/DomainApi~domainPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WhoisResponse}
     */
    this.domainPost = function(domain, callback) {
      var postBody = domain;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = WhoisResponse;

      return this.apiClient.callApi(
        '/validate/domain/whois', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
