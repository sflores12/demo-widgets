/**
 * @module model-training-login-ng
 *
 * @description
 * Model for widget-training-login-ng
 *
 * @example
 * import modelLoginModuleKey, { modelLoginKey } from 'model-training-login-ng';
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

import Model from './login';

import backBaseDemoLoginDataModuleKey, {backBaseDemoLoginDataKey} from "data-bb-backbase-demo-login-http-ng";

const moduleKey = 'model-training-login-ng';
export const modelLoginKey = `${moduleKey}:model`;


export default angular
  .module(moduleKey, [backBaseDemoLoginDataModuleKey,
  ])

  .factory(modelLoginKey, [
    '$q',
    /* into */
    backBaseDemoLoginDataKey, 
    Model,
  ])

.name;
