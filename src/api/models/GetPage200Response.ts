/* tslint:disable */
/* eslint-disable */
/**
 * Cats example
 * The cats API description
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime'
import type { PageItem } from './PageItem'
import { PageItemFromJSON, PageItemFromJSONTyped, PageItemToJSON } from './PageItem'

/**
 *
 * @export
 * @interface GetPage200Response
 */
export interface GetPage200Response {
  /**
   *
   * @type {number}
   * @memberof GetPage200Response
   */
  current: number
  /**
   *
   * @type {number}
   * @memberof GetPage200Response
   */
  pageSize: number
  /**
   *
   * @type {number}
   * @memberof GetPage200Response
   */
  total: number
  /**
   *
   * @type {Array<PageItem>}
   * @memberof GetPage200Response
   */
  data: Array<PageItem>
}

/**
 * Check if a given object implements the GetPage200Response interface.
 */
export function instanceOfGetPage200Response(value: object): boolean {
  let isInstance = true
  isInstance = isInstance && 'current' in value
  isInstance = isInstance && 'pageSize' in value
  isInstance = isInstance && 'total' in value
  isInstance = isInstance && 'data' in value

  return isInstance
}

export function GetPage200ResponseFromJSON(json: any): GetPage200Response {
  return GetPage200ResponseFromJSONTyped(json, false)
}

export function GetPage200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPage200Response {
  if (json === undefined || json === null) {
    return json
  }
  return {
    current: json['current'],
    pageSize: json['pageSize'],
    total: json['total'],
    data: (json['data'] as Array<any>).map(PageItemFromJSON),
  }
}

export function GetPage200ResponseToJSON(value?: GetPage200Response | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    current: value.current,
    pageSize: value.pageSize,
    total: value.total,
    data: (value.data as Array<any>).map(PageItemToJSON),
  }
}