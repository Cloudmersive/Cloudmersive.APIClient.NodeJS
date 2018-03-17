/**
 * convertapi
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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/HtmlTemplateApplicationRequest', 'model/HtmlTemplateApplicationResponse', 'model/HtmlTemplateOperation', 'model/HtmlToPdfRequest', 'model/ScreenshotRequest', 'cloudmersive-convert-api-client/ConvertDataApi', 'cloudmersive-convert-api-client/ConvertDocumentApi', 'cloudmersive-convert-api-client/ConvertImageApi', 'cloudmersive-convert-api-client/ConvertTemplateApi', 'cloudmersive-convert-api-client/ConvertWebApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/HtmlTemplateApplicationRequest'), require('./model/HtmlTemplateApplicationResponse'), require('./model/HtmlTemplateOperation'), require('./model/HtmlToPdfRequest'), require('./model/ScreenshotRequest'), require('./cloudmersive-convert-api-client/ConvertDataApi'), require('./cloudmersive-convert-api-client/ConvertDocumentApi'), require('./cloudmersive-convert-api-client/ConvertImageApi'), require('./cloudmersive-convert-api-client/ConvertTemplateApi'), require('./cloudmersive-convert-api-client/ConvertWebApi'));
  }
}(function(ApiClient, HtmlTemplateApplicationRequest, HtmlTemplateApplicationResponse, HtmlTemplateOperation, HtmlToPdfRequest, ScreenshotRequest, ConvertDataApi, ConvertDocumentApi, ConvertImageApi, ConvertTemplateApi, ConvertWebApi) {
  'use strict';

  /**
   * ERROR_UNKNOWN.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Convertapi = require('index'); // See note below*.
   * var xxxSvc = new Convertapi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Convertapi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Convertapi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Convertapi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The HtmlTemplateApplicationRequest model constructor.
     * @property {module:model/HtmlTemplateApplicationRequest}
     */
    HtmlTemplateApplicationRequest: HtmlTemplateApplicationRequest,
    /**
     * The HtmlTemplateApplicationResponse model constructor.
     * @property {module:model/HtmlTemplateApplicationResponse}
     */
    HtmlTemplateApplicationResponse: HtmlTemplateApplicationResponse,
    /**
     * The HtmlTemplateOperation model constructor.
     * @property {module:model/HtmlTemplateOperation}
     */
    HtmlTemplateOperation: HtmlTemplateOperation,
    /**
     * The HtmlToPdfRequest model constructor.
     * @property {module:model/HtmlToPdfRequest}
     */
    HtmlToPdfRequest: HtmlToPdfRequest,
    /**
     * The ScreenshotRequest model constructor.
     * @property {module:model/ScreenshotRequest}
     */
    ScreenshotRequest: ScreenshotRequest,
    /**
     * The ConvertDataApi service constructor.
     * @property {module:cloudmersive-convert-api-client/ConvertDataApi}
     */
    ConvertDataApi: ConvertDataApi,
    /**
     * The ConvertDocumentApi service constructor.
     * @property {module:cloudmersive-convert-api-client/ConvertDocumentApi}
     */
    ConvertDocumentApi: ConvertDocumentApi,
    /**
     * The ConvertImageApi service constructor.
     * @property {module:cloudmersive-convert-api-client/ConvertImageApi}
     */
    ConvertImageApi: ConvertImageApi,
    /**
     * The ConvertTemplateApi service constructor.
     * @property {module:cloudmersive-convert-api-client/ConvertTemplateApi}
     */
    ConvertTemplateApi: ConvertTemplateApi,
    /**
     * The ConvertWebApi service constructor.
     * @property {module:cloudmersive-convert-api-client/ConvertWebApi}
     */
    ConvertWebApi: ConvertWebApi
  };

  return exports;
}));
