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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Slice model module.
* @module model/Slice
* @version 1.0.0
*/
var Slice = function () {
    /**
    * Constructs a new <code>Slice</code>.
    * @alias module:model/Slice
    * @class
    */

    function Slice() {
        _classCallCheck(this, Slice);

        this['id'] = undefined;
        this['name'] = undefined;
        this['file'] = undefined;
        this['start'] = undefined;
        this['end'] = undefined;
        this['duration'] = undefined;
        this['meta'] = undefined;
    }

    /**
    * Constructs a <code>Slice</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Slice} obj Optional instance to populate.
    * @return {module:model/Slice} The populated <code>Slice</code> instance.
    */


    _createClass(Slice, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Slice();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('file')) {
                    obj['file'] = _ApiClient2.default.convertToType(data['file'], 'String');
                }
                if (data.hasOwnProperty('start')) {
                    obj['start'] = _ApiClient2.default.convertToType(data['start'], 'Number');
                }
                if (data.hasOwnProperty('end')) {
                    obj['end'] = _ApiClient2.default.convertToType(data['end'], 'Number');
                }
                if (data.hasOwnProperty('duration')) {
                    obj['duration'] = _ApiClient2.default.convertToType(data['duration'], 'Number');
                }
                if (data.hasOwnProperty('meta')) {
                    obj['meta'] = _ApiClient2.default.convertToType(data['meta'], { 'String': 'String' });
                }
            }
            return obj;
        }

        /**
        * @member {Number} id
        */

        /**
        * @member {String} name
        */

        /**
        * @member {String} file
        */

        /**
        * @member {Number} start
        */

        /**
        * @member {Number} end
        */

        /**
        * @member {Number} duration
        */

        /**
        * @member {Object.<String, String>} meta
        */

    }]);

    return Slice;
}();

exports.default = Slice;