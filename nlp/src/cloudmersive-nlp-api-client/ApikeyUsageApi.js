/**
 * nlpapi
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Nlpapi) {
      root.Nlpapi = {};
    }
    root.Nlpapi.ApikeyUsageApi = factory(root.Nlpapi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * ApikeyUsage service.
   * @module cloudmersive-nlp-api-client/ApikeyUsageApi
   * @version v1
   */

  /**
   * Constructs a new ApikeyUsageApi. 
   * @alias module:cloudmersive-nlp-api-client/ApikeyUsageApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apikeyUsageGet operation.
     * @callback module:cloudmersive-nlp-api-client/ApikeyUsageApi~apikeyUsageGetCallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get API Key usage
     * Use this API to determine how many API calls you have made during this month.
     * @param {String} id API key to check
     * @param {module:cloudmersive-nlp-api-client/ApikeyUsageApi~apikeyUsageGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.apikeyUsageGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apikeyUsageGet");
      }


      var pathParams = {
        'id': id
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
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/nlp/apikeyUsage/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));