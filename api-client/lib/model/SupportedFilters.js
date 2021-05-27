'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _MetaFilter = require('./MetaFilter');

var _MetaFilter2 = _interopRequireDefault(_MetaFilter);

var _StatFilter = require('./StatFilter');

var _StatFilter2 = _interopRequireDefault(_StatFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The SupportedFilters model module.
* @module model/SupportedFilters
* @version 1.0.0
*/
var SupportedFilters = function () {
    /**
    * Constructs a new <code>SupportedFilters</code>.
    * @alias module:model/SupportedFilters
    * @class
    */

    function SupportedFilters() {
        _classCallCheck(this, SupportedFilters);

        this['stat'] = undefined;
        this['meta'] = undefined;
    }

    /**
    * Constructs a <code>SupportedFilters</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SupportedFilters} obj Optional instance to populate.
    * @return {module:model/SupportedFilters} The populated <code>SupportedFilters</code> instance.
    */


    _createClass(SupportedFilters, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SupportedFilters();

                if (data.hasOwnProperty('stat')) {
                    obj['stat'] = _ApiClient2.default.convertToType(data['stat'], [_StatFilter2.default]);
                }
                if (data.hasOwnProperty('meta')) {
                    obj['meta'] = _ApiClient2.default.convertToType(data['meta'], [_MetaFilter2.default]);
                }
            }
            return obj;
        }

        /**
        * @member {Array.<module:model/StatFilter>} stat
        */

        /**
        * @member {Array.<module:model/MetaFilter>} meta
        */

    }]);

    return SupportedFilters;
}();

exports.default = SupportedFilters;