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
    define(['ApiClient', 'model/FaceLocateResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FaceLocateResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Imageapi) {
      root.Imageapi = {};
    }
    root.Imageapi.FaceApi = factory(root.Imageapi.ApiClient, root.Imageapi.FaceLocateResponse);
  }
}(this, function(ApiClient, FaceLocateResponse) {
  'use strict';

  /**
   * Face service.
   * @module cloudmersive-image-api-client/FaceApi
   * @version v1
   */

  /**
   * Constructs a new FaceApi. 
   * @alias module:cloudmersive-image-api-client/FaceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the faceCropFirst operation.
     * @callback module:cloudmersive-image-api-client/FaceApi~faceCropFirstCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crop image to face (square)
     * Crop an image to the face (rectangular crop).  If there is more than one face present, choose the first one.
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:cloudmersive-image-api-client/FaceApi~faceCropFirstCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.faceCropFirst = function(imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling faceCropFirst");
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
      var accepts = ['application/octet-stream'];
      var returnType = File;

      return this.apiClient.callApi(
        '/image/face/crop/first', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the faceCropFirstRound operation.
     * @callback module:cloudmersive-image-api-client/FaceApi~faceCropFirstRoundCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crop image to face (round)
     * Crop an image to the face (circular/round crop).  If there is more than one face present, choose the first one.
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:cloudmersive-image-api-client/FaceApi~faceCropFirstRoundCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.faceCropFirstRound = function(imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling faceCropFirstRound");
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
      var accepts = ['application/octet-stream'];
      var returnType = File;

      return this.apiClient.callApi(
        '/image/face/crop/first/round', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the faceLocate operation.
     * @callback module:cloudmersive-image-api-client/FaceApi~faceLocateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FaceLocateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find faces in an image
     * Locate the positions of all faces in an image
     * @param {File} imageFile Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
     * @param {module:cloudmersive-image-api-client/FaceApi~faceLocateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FaceLocateResponse}
     */
    this.faceLocate = function(imageFile, callback) {
      var postBody = null;

      // verify the required parameter 'imageFile' is set
      if (imageFile === undefined || imageFile === null) {
        throw new Error("Missing the required parameter 'imageFile' when calling faceLocate");
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
      var returnType = FaceLocateResponse;

      return this.apiClient.callApi(
        '/image/face/locate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
