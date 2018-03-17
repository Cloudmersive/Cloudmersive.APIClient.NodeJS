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
    define(['ApiClient', 'model/GeolocateResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GeolocateResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Validateapi) {
      root.Validateapi = {};
    }
    root.Validateapi.IPAddressApi = factory(root.Validateapi.ApiClient, root.Validateapi.GeolocateResponse);
  }
}(this, function(ApiClient, GeolocateResponse) {
  'use strict';

  /**
   * IPAddress service.
   * @module cloudmersive-validate-api-client/IPAddressApi
   * @version v1
   */

  /**
   * Constructs a new IPAddressApi. 
   * @alias module:cloudmersive-validate-api-client/IPAddressApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the iPAddressPost operation.
     * @callback module:cloudmersive-validate-api-client/IPAddressApi~iPAddressPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeolocateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Geolocate an IP address
     * Identify an IP address Country, State/Provence, City, Zip/Postal Code, etc.  Useful for security and UX applications.
     * @param {String} value IP address to geolocate, e.g. \&quot;55.55.55.55\&quot;
     * @param {module:cloudmersive-validate-api-client/IPAddressApi~iPAddressPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeolocateResponse}
     */
    this.iPAddressPost = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling iPAddressPost");
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
