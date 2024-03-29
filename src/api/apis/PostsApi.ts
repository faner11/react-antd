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


import * as runtime from '../runtime';
import type {
  Comment,
  Post,
} from '../models/index';
import {
    CommentFromJSON,
    CommentToJSON,
    PostFromJSON,
    PostToJSON,
} from '../models/index';

export interface GetPostsRequest {
    id?: number;
    userId?: number;
}

export interface PostsIdCommentsGetRequest {
    id: number;
}

export interface PostsIdGetRequest {
    id: number;
}

/**
 * 
 */
export class PostsApi extends runtime.BaseAPI {

    /**
     * Get all available posts
     */
    async getPostsRaw(requestParameters: GetPostsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Post>>> {
        const queryParameters: any = {};

        if (requestParameters['id'] != null) {
            queryParameters['id'] = requestParameters['id'];
        }

        if (requestParameters['userId'] != null) {
            queryParameters['userId'] = requestParameters['userId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/posts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PostFromJSON));
    }

    /**
     * Get all available posts
     */
    async getPosts(requestParameters: GetPostsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Post>> {
        const response = await this.getPostsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get comments for a specific post
     */
    async postsIdCommentsGetRaw(requestParameters: PostsIdCommentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Comment>>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postsIdCommentsGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/posts/{id}/comments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CommentFromJSON));
    }

    /**
     * Get comments for a specific post
     */
    async postsIdCommentsGet(requestParameters: PostsIdCommentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Comment>> {
        const response = await this.postsIdCommentsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get specific post
     */
    async postsIdGetRaw(requestParameters: PostsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Post>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postsIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/posts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostFromJSON(jsonValue));
    }

    /**
     * Get specific post
     */
    async postsIdGet(requestParameters: PostsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Post> {
        const response = await this.postsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
