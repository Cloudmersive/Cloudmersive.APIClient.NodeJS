/**
 * imageapi
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
    define(['ApiClient', 'model/NsfwResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NsfwResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Imageapi) {
      root.Imageapi = {};
    }
    root.Imageapi.NsfwApi = factory(root.Imageapi.ApiClient, root.Imageapi.NsfwResult);
  }
}(this, function(ApiClient, NsfwResult) {
  'use strict';

  /**
   * Nsfw service.
   * @module cloudmersive-image-api-client/NsfwApi
   * @version v1
   */

  /**
   * Constructs a new NsfwApi. 
   * @alias module:cloudmersive-image-api-client/NsfwApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the nsfwClassify operation.
     * @callback module:cloudmersive-image-api-client/NsfwApi~nsfwClassifyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NsfwResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NSFW image classifier
     * Classify an image into Not Safe For Work (NSFW)/Porn/Racy content and Safe Content.
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:cloudmersive-image-api-client/NsfwApi~nsfwClassifyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NsfwResult}
     */
    this.nsfwClassify = function(imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling nsfwClassify");
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
        'imageFile': imageFile
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = NsfwResult;

      return this.apiClient.callApi(
        '/image/nsfw/classify', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
