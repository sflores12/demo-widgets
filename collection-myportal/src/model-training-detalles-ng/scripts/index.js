/**
 * @module model-training-detalles-ng
 *
 * @description
 * Model for widget-training-detalles-ng
 *
 * @example
 * import modelDetallesModuleKey, { modelDetallesKey } from 'model-training-detalles-ng';
 *
 * angular
 *   .module('ExampleModule', [
 *     modelDetallesModuleKey,
 *   ])
 *   .factory('someFactory', [
 *     modelDetallesKey,
 *     // into
 *     function someFactory(detallesModel) {
 *       // ...
 *     },
 *   ]);
 */
import angular from 'vendor-bb-angular';

import Model from './detalles';

import backBaseDemoLoginDataModuleKey, {backBaseDemoLoginDataKey} from "data-bb-backbase-demo-login-http-ng";


const moduleKey = 'model-training-detalles-ng';
export const modelDetallesKey = `${moduleKey}:model`;

export default angular
  .module(moduleKey, [backBaseDemoLoginDataModuleKey,
  ])

  .factory(modelDetallesKey, [
    '$q',
    /* into */
	backBaseDemoLoginDataKey,
    Model,
  ])

  .name;
