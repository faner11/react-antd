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
 * @interface Todo
 */
export interface Todo {
    /**
     * 
     * @type {number}
     * @memberof Todo
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Todo
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof Todo
     */
    title?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Todo
     */
    completed?: boolean;
}

/**
 * Check if a given object implements the Todo interface.
 */
export function instanceOfTodo(value: object): value is Todo {
    return true;
}

export function TodoFromJSON(json: any): Todo {
    return TodoFromJSONTyped(json, false);
}

export function TodoFromJSONTyped(json: any, ignoreDiscriminator: boolean): Todo {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'userId': json['userId'] == null ? undefined : json['userId'],
        'title': json['title'] == null ? undefined : json['title'],
        'completed': json['completed'] == null ? undefined : json['completed'],
    };
}

export function TodoToJSON(json: any): Todo {
    return TodoToJSONTyped(json, false);
}

export function TodoToJSONTyped(value?: Todo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'userId': value['userId'],
        'title': value['title'],
        'completed': value['completed'],
    };
}

