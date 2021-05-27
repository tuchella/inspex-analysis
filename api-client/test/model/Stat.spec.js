/**
 * Interactive Spectral Exploration
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    factory(root.expect, root.InteractiveSpectralExploration);
  }
}(this, function(expect, InteractiveSpectralExploration) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new InteractiveSpectralExploration.Stat();
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

  describe('Stat', function() {
    it('should create an instance of Stat', function() {
      // uncomment below and update the code to test Stat
      //var instane = new InteractiveSpectralExploration.Stat();
      //expect(instance).to.be.a(InteractiveSpectralExploration.Stat);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new InteractiveSpectralExploration.Stat();
      //expect(instance).to.be();
    });

    it('should have the property composition (base name: "composition")', function() {
      // uncomment below and update the code to test the property composition
      //var instane = new InteractiveSpectralExploration.Stat();
      //expect(instance).to.be();
    });

  });

}));
