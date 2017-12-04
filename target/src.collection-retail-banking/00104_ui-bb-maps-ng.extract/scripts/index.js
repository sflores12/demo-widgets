/**
 * @module ui-bb-maps-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbMapsNg from 'ui-bb-maps-ng';
 *
 * export const dependencyKeys = [
 *   uiBbMapsNg,
 * ];
 *
 * // file: templates/template.ng.html
 * <g-map places="$ctrl.loadPlaces()" preferences="$ctrl.getPlacesPreferences()">
 *  {{ ::'places.message.loading' | i18n }}
 * </g-map>
 */
import angular from 'vendor-bb-angular';
import i18nNgKey from 'ui-bb-i18n-ng';

import mapApi from './map-api';
import mapView from './map-view';
import listView from './list-view';
import search from './map-search';
import mapsHelpers from './maps-helpers';
const mapsHelpersKey = 'ui-bb-maps-ng:maps-helpers';

export const moduleKey = 'ui-bb-maps-ng';

export default angular
  .module(moduleKey, [i18nNgKey])
  .factory(mapsHelpersKey, ['$q', mapsHelpers])
  .directive('gMapApi', ['$q', mapsHelpersKey, mapApi])
  .directive('gMap', [mapsHelpersKey, mapView])
  .directive('gMapSearch', [search])
  .directive('placeList', ['$q', mapsHelpersKey, listView])
  .name;
