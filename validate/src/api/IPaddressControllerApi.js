/**
 * validateapi
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GeolocateResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GeolocateResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Validateapi) {
      root.Validateapi = {};
    }
    root.Validateapi.IPaddressControllerApi = factory(root.Validateapi.ApiClient, root.Validateapi.GeolocateResponse);
  }
}(this, function(ApiClient, GeolocateResponse) {
  'use strict';

  /**
   * IPaddressController service.
   * @module api/IPaddressControllerApi
   * @version v1
   */

  /**
   * Constructs a new IPaddressControllerApi. 
   * @alias module:api/IPaddressControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the iPaddressControllerPost operation.
     * @callback module:api/IPaddressControllerApi~iPaddressControllerPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeolocateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} value 
     * @param {module:api/IPaddressControllerApi~iPaddressControllerPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeolocateResponse}
     */
    this.iPaddressControllerPost = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling iPaddressControllerPost");
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
      var returnType = GeolocateResponse;

      return this.apiClient.callApi(
        '/validate/ip/geolocate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
