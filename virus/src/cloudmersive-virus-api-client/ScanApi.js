/**
 * virusapi
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
    define(['ApiClient', 'model/VirusScanResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VirusScanResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Virusapi) {
      root.Virusapi = {};
    }
    root.Virusapi.ScanApi = factory(root.Virusapi.ApiClient, root.Virusapi.VirusScanResult);
  }
}(this, function(ApiClient, VirusScanResult) {
  'use strict';

  /**
   * Scan service.
   * @module cloudmersive-virus-api-client/ScanApi
   * @version v1
   */

  /**
   * Constructs a new ScanApi. 
   * @alias module:cloudmersive-virus-api-client/ScanApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the scanFile operation.
     * @callback module:cloudmersive-virus-api-client/ScanApi~scanFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VirusScanResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:cloudmersive-virus-api-client/ScanApi~scanFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VirusScanResult}
     */
    this.scanFile = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling scanFile");
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
        'inputFile': inputFile
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = VirusScanResult;

      return this.apiClient.callApi(
        '/virus/scan/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
