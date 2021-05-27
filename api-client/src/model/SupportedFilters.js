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
import MetaFilter from './MetaFilter';
import StatFilter from './StatFilter';

/**
* The SupportedFilters model module.
* @module model/SupportedFilters
* @version 1.0.0
*/
export default class SupportedFilters {
    /**
    * Constructs a new <code>SupportedFilters</code>.
    * @alias module:model/SupportedFilters
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SupportedFilters</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SupportedFilters} obj Optional instance to populate.
    * @return {module:model/SupportedFilters} The populated <code>SupportedFilters</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SupportedFilters();
                        
            
            if (data.hasOwnProperty('stat')) {
                obj['stat'] = ApiClient.convertToType(data['stat'], [StatFilter]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], [MetaFilter]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/StatFilter>} stat
    */
    'stat' = undefined;
    /**
    * @member {Array.<module:model/MetaFilter>} meta
    */
    'meta' = undefined;




}
