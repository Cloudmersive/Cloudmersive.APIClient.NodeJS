/**
 * barcodeapi
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
    define(['ApiClient', 'model/ProductMatch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductMatch'));
  } else {
    // Browser globals (root is window)
    if (!root.Barcodeapi) {
      root.Barcodeapi = {};
    }
    root.Barcodeapi.BarcodeLookupResponse = factory(root.Barcodeapi.ApiClient, root.Barcodeapi.ProductMatch);
  }
}(this, function(ApiClient, ProductMatch) {
  'use strict';




  /**
   * The BarcodeLookupResponse model module.
   * @module model/BarcodeLookupResponse
   * @version v1
   */

  /**
   * Constructs a new <code>BarcodeLookupResponse</code>.
   * @alias module:model/BarcodeLookupResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>BarcodeLookupResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BarcodeLookupResponse} obj Optional instance to populate.
   * @return {module:model/BarcodeLookupResponse} The populated <code>BarcodeLookupResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Matches')) {
        obj['Matches'] = ApiClient.convertToType(data['Matches'], [ProductMatch]);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * @member {Array.<module:model/ProductMatch>} Matches
   */
  exports.prototype['Matches'] = undefined;



  return exports;
}));


