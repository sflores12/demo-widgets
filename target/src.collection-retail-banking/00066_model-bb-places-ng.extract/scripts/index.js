/**
 * @module model-bb-places-ng
 *
 * @description
 * Model for widget-bb-places-ng
 *
 * @example
 * import modelPlacesModuleKey, { modelPlacesKey } from 'model-bb-places-ng';
 *
 * angular
 *   .module('ExampleModule', [
 *     modelPlacesModuleKey,
 *   ])
 *   .factory('someFactory', [
 *     modelPlacesKey,
 *     // into
 *     function someFactory(placesModel) {
 *       // ...
 *     },
 *   ]);
 */
import angular from 'vendor-bb-angular';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import placesDataModuleKey, {
  placesDataKey,
} from 'data-bb-places-http-ng';

import Model from './places';

export const moduleKey = 'model-bb-places-ng';
export const modelPlacesKey = `${moduleKey}:model`;

export default angular
  .module(moduleKey, [
    widgetModuleKey,
    placesDataModuleKey,
  ])

  .factory(modelPlacesKey, [
    '$q',
    widgetKey,
    placesDataKey,
    /* into */
    Model,
  ])

  .name;

/**
 * @typedef {Object} PlacesWidgetPreferences
 * @property {number} latitude
 * @property {number} longitude
 * @property {number} mapZoom
 * @property {number} placesFilterRadius
 * @property {string} apiKey
 * @property {string} mapApiUrl
 */
