'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Swagger Petstore
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The PropertyFilter model module.
* @module model/PropertyFilter
* @version 1.0.0
*/
var PropertyFilter = function () {
    /**
    * Constructs a new <code>PropertyFilter</code>.
    * @alias module:model/PropertyFilter
    * @class
    */

    function PropertyFilter() {
        _classCallCheck(this, PropertyFilter);

        this['key'] = undefined;
        this['values'] = undefined;
    }

    /**
    * Constructs a <code>PropertyFilter</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PropertyFilter} obj Optional instance to populate.
    * @return {module:model/PropertyFilter} The populated <code>PropertyFilter</code> instance.
    */


    _createClass(PropertyFilter, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PropertyFilter();

                if (data.hasOwnProperty('key')) {
                    obj['key'] = _ApiClient2.default.convertToType(data['key'], 'String');
                }
                if (data.hasOwnProperty('values')) {
                    obj['values'] = _ApiClient2.default.convertToType(data['values'], ['String']);
                }
            }
            return obj;
        }

        /**
        * @member {String} key
        */

        /**
        * @member {Array.<String>} values
        */

    }]);

    return PropertyFilter;
}();

exports.default = PropertyFilter;