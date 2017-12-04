/**
 * @module model-bb-login-ng
 *
 * @description
 * Model for login and user menu widgets
 *
 * @example
 * import modelLoginModuleKey, { modelLoginKey } from 'model-bb-login-ng';
 *
 * angular
 *   .module('ExampleModule', [
 *     modelLoginModuleKey,
 *   ])
 *   .factory('someFactory', [
 *     modelLoginKey,
 *     // into
 *     function someFactory(loginModel) {
 *       // ...
 *     },
 *   ]);
 */
import angular from 'vendor-bb-angular';

import cXPAuthenticationDataModuleKey, {
  cXPAuthenticationDataKey,
} from 'data-bb-cxp-authentication-http-ng';

import Model from './login';

export const moduleKey = 'model-bb-login-ng';
export const modelLoginKey = `${moduleKey}:model`;

export default angular
  .module(moduleKey, [cXPAuthenticationDataModuleKey])

  .factory(modelLoginKey, [
    '$q',
    cXPAuthenticationDataKey,
    /* into */
    Model,
  ])

  .name;
