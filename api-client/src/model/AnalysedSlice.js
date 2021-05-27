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

import ApiClient from '../ApiClient';

/**
* The AnalysedSlice model module.
* @module model/AnalysedSlice
* @version 1.0.0
*/
export default class AnalysedSlice {
    /**
    * Constructs a new <code>AnalysedSlice</code>.
    * @alias module:model/AnalysedSlice
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AnalysedSlice</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AnalysedSlice} obj Optional instance to populate.
    * @return {module:model/AnalysedSlice} The populated <code>AnalysedSlice</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnalysedSlice();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], 'String');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Number');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Number');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], {'String': 'String'});
            }
            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'Number');
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'Number');
            }
            if (data.hasOwnProperty('z')) {
                obj['z'] = ApiClient.convertToType(data['z'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {String} file
    */
    'file' = undefined;
    /**
    * @member {Number} start
    */
    'start' = undefined;
    /**
    * @member {Number} end
    */
    'end' = undefined;
    /**
    * @member {Number} duration
    */
    'duration' = undefined;
    /**
    * @member {Object.<String, String>} meta
    */
    'meta' = undefined;
    /**
    * @member {Number} x
    */
    'x' = undefined;
    /**
    * @member {Number} y
    */
    'y' = undefined;
    /**
    * @member {Number} z
    */
    'z' = undefined;




}
