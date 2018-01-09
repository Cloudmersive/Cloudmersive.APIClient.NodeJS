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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Validateapi) {
      root.Validateapi = {};
    }
    root.Validateapi.GeolocateResponse = factory(root.Validateapi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GeolocateResponse model module.
   * @module model/GeolocateResponse
   * @version v1
   */

  /**
   * Constructs a new <code>GeolocateResponse</code>.
   * @alias module:model/GeolocateResponse
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>GeolocateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeolocateResponse} obj Optional instance to populate.
   * @return {module:model/GeolocateResponse} The populated <code>GeolocateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CountryCode')) {
        obj['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
      }
      if (data.hasOwnProperty('CountryName')) {
        obj['CountryName'] = ApiClient.convertToType(data['CountryName'], 'String');
      }
      if (data.hasOwnProperty('City')) {
        obj['City'] = ApiClient.convertToType(data['City'], 'String');
      }
      if (data.hasOwnProperty('RegionCode')) {
        obj['RegionCode'] = ApiClient.convertToType(data['RegionCode'], 'String');
      }
      if (data.hasOwnProperty('RegionName')) {
        obj['RegionName'] = ApiClient.convertToType(data['RegionName'], 'String');
      }
      if (data.hasOwnProperty('ZipCode')) {
        obj['ZipCode'] = ApiClient.convertToType(data['ZipCode'], 'String');
      }
      if (data.hasOwnProperty('TimezoneStandardName')) {
        obj['TimezoneStandardName'] = ApiClient.convertToType(data['TimezoneStandardName'], 'String');
      }
      if (data.hasOwnProperty('Latitude')) {
        obj['Latitude'] = ApiClient.convertToType(data['Latitude'], 'Number');
      }
      if (data.hasOwnProperty('Longitude')) {
        obj['Longitude'] = ApiClient.convertToType(data['Longitude'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} CountryCode
   */
  exports.prototype['CountryCode'] = undefined;
  /**
   * @member {String} CountryName
   */
  exports.prototype['CountryName'] = undefined;
  /**
   * @member {String} City
   */
  exports.prototype['City'] = undefined;
  /**
   * @member {String} RegionCode
   */
  exports.prototype['RegionCode'] = undefined;
  /**
   * @member {String} RegionName
   */
  exports.prototype['RegionName'] = undefined;
  /**
   * @member {String} ZipCode
   */
  exports.prototype['ZipCode'] = undefined;
  /**
   * @member {String} TimezoneStandardName
   */
  exports.prototype['TimezoneStandardName'] = undefined;
  /**
   * @member {Number} Latitude
   */
  exports.prototype['Latitude'] = undefined;
  /**
   * @member {Number} Longitude
   */
  exports.prototype['Longitude'] = undefined;



  return exports;
}));


