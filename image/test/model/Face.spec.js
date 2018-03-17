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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Imageapi);
  }
}(this, function(expect, Imageapi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Imageapi.Face();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Face', function() {
    it('should create an instance of Face', function() {
      // uncomment below and update the code to test Face
      //var instane = new Imageapi.Face();
      //expect(instance).to.be.a(Imageapi.Face);
    });

    it('should have the property leftX (base name: "LeftX")', function() {
      // uncomment below and update the code to test the property leftX
      //var instane = new Imageapi.Face();
      //expect(instance).to.be();
    });

    it('should have the property topY (base name: "TopY")', function() {
      // uncomment below and update the code to test the property topY
      //var instane = new Imageapi.Face();
      //expect(instance).to.be();
    });

    it('should have the property rightX (base name: "RightX")', function() {
      // uncomment below and update the code to test the property rightX
      //var instane = new Imageapi.Face();
      //expect(instance).to.be();
    });

    it('should have the property bottomY (base name: "BottomY")', function() {
      // uncomment below and update the code to test the property bottomY
      //var instane = new Imageapi.Face();
      //expect(instance).to.be();
    });

  });

}));