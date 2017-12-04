/* eslint-disable */
/**
 * @module data-bb-backbase-demo-login-http-ng
 *
 * @description A data module for accessing the BackBase-Demo-Login REST API.
 *
 * @returns {String} `data-bb-backbase-demo-login-http-ng`
 * @example
 * import backBaseDemoLoginDataModuleKey, {
 *   backBaseDemoLoginDataKey,
 * } from 'data-bb-backbase-demo-login-http-ng';
 */

import ng from 'vendor-bb-angular';

import backBaseDemoLoginData from './data-bb-backbase-demo-login-http';

const backBaseDemoLoginDataModuleKey = 'data-bb-backbase-demo-login-http-ng';
/**
 * @name backBaseDemoLoginDataKey
 * @type {string}
 * @description Angular dependency injection key for the BackBaseDemoLoginData service
 */
export const backBaseDemoLoginDataKey = 'data-bb-backbase-demo-login-http-ng:backBaseDemoLoginData';
/**
 * @name default
 * @type {string}
 * @description Angular dependency injection module key
 */
export default ng
    .module(backBaseDemoLoginDataModuleKey, [])

/**
 * @constructor BackBaseDemoLoginData
 * @type {object}
 *
 * @description Public api for data-bb-backbase-demo-login-http-ng service
 *
 */
.provider(backBaseDemoLoginDataKey, [() => {
    const portal = window.b$ && window.b$.portal;
    const serverRoot = (portal.config) ? portal.config.serverRoot : '';
    const config = {
        baseUri: `${serverRoot}/services/rest/`,
        headers: '',
    };

    /**
     * @name BackBaseDemoLoginDataProvider
     * @type {object}
     * @ngkey data-bb-backbase-demo-login-http-ng:backBaseDemoLoginDataProvider
     * @description
     * Data service that can be configured with custom base URI.
     *
     * @example
     * // Configuring in an angular app:
     * angular.module(...)
     *   .config(['data-bb-backbase-demo-login-http-ng:backBaseDemoLoginDataProvider',
     *     (dataProvider) => {
     *       dataProvider.setBaseUri('http://my-service.com/');
     *       });
     *
     * // Configuring With config-bb-providers-ng:
     * export default [
     *   ['data-bb-backbase-demo-login-http-ng:backBaseDemoLoginDataProvider', (dataProvider) => {
     *       dataProvider.setBaseUri('http://my-service.com/');
     *   }]
     * ];
     */
    return {
        /**
         * @name BackBaseDemoLoginDataProvider#setBaseUri
         * @type {function}
         * @param {string} baseUri Base URI which will be the prefix for all HTTP requests
         */
        setBaseUri: (baseUri) => {
            config.baseUri = baseUri;
        },

        /**
         * @name BackBaseDemoLoginDataProvider#$get
         * @type {function}
         * @return {object} An instance of the service
         */
        $get: [
            '$http',
            '$httpParamSerializer',
            /* into */
            backBaseDemoLoginData(config),
        ],
    };
}])

.name;