/* tslint:disable */
/* eslint-disable */
/**
 * JSON Placeholder
 * Fake Online REST API for Testing and Prototyping
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Album
 */
export interface Album {
    /**
     * 
     * @type {number}
     * @memberof Album
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Album
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof Album
     */
    title?: string;
}

/**
 * Check if a given object implements the Album interface.
 */
export function instanceOfAlbum(value: object): value is Album {
    return true;
}

export function AlbumFromJSON(json: any): Album {
    return AlbumFromJSONTyped(json, false);
}

export function AlbumFromJSONTyped(json: any, ignoreDiscriminator: boolean): Album {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'userId': json['userId'] == null ? undefined : json['userId'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function AlbumToJSON(json: any): Album {
    return AlbumToJSONTyped(json, false);
}

export function AlbumToJSONTyped(value?: Album | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'userId': value['userId'],
        'title': value['title'],
    };
}
