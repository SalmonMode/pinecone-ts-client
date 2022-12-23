/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Vector
 */
export interface Vector {
    /**
     * This is the vector's unique id.
     * @type {string}
     * @memberof Vector
     */
    id: string;
    /**
     * This is the vector data included in the request.
     * @type {Array<number>}
     * @memberof Vector
     */
    values: Array<number>;
    /**
     * This is the metadata included in the request.
     * @type {object}
     * @memberof Vector
     */
    metadata?: object;
}

/**
 * Check if a given object implements the Vector interface.
 */
export function instanceOfVector(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "values" in value;

    return isInstance;
}

export function VectorFromJSON(json: any): Vector {
    return VectorFromJSONTyped(json, false);
}

export function VectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Vector {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'values': json['values'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function VectorToJSON(value?: Vector | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'values': value.values,
        'metadata': value.metadata,
    };
}

