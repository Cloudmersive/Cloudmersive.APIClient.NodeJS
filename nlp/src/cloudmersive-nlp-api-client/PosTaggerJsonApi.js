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
    define(['ApiClient', 'model/PosRequest', 'model/PosResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PosRequest'), require('../model/PosResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Nlpapi) {
      root.Nlpapi = {};
    }
    root.Nlpapi.PosTaggerJsonApi = factory(root.Nlpapi.ApiClient, root.Nlpapi.PosRequest, root.Nlpapi.PosResponse);
  }
}(this, function(ApiClient, PosRequest, PosResponse) {
  'use strict';

  /**
   * PosTaggerJson service.
   * @module cloudmersive-nlp-api-client/PosTaggerJsonApi
   * @version v1
   */

  /**
   * Constructs a new PosTaggerJsonApi. 
   * @alias module:cloudmersive-nlp-api-client/PosTaggerJsonApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the posTaggerJsonPost operation.
     * @callback module:cloudmersive-nlp-api-client/PosTaggerJsonApi~posTaggerJsonPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Part-of-speech tag a string
     * Part-of-speech (POS) tag a string and return result as JSON
     * @param {module:model/PosRequest} request Input string
     * @param {module:cloudmersive-nlp-api-client/PosTaggerJsonApi~posTaggerJsonPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PosResponse}
     */
    this.posTaggerJsonPost = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling posTaggerJsonPost");
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
      var returnType = PosResponse;

      return this.apiClient.callApi(
        '/nlp/PosTaggerJson', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
