/**
 * @module ext-bb-places-ng
 *
 * @description
 * Places widget map extension.
 *
 * @requires ui-bb-substitute-error-ng
 * @requires ui-bb-i18n-ng
 * @requires ui-bb-maps-ng
 * @requires vendor-bb-angular-ng-aria
 *
 * @example
 * <!-- places widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bb-places-ng</value>
 * </property>
 *
 * Usage of ui-bb-maps-ng component in template
 *
 * <g-map-api preferences="$ctrl.getPlacesPreferences()">
 *   <g-map places="$ctrl.loadPlaces">
 *     <div class="form-group has-feedback">
 *       <g-map-search></g-map-search>
 *       <span class="fa fa-search text-muted form-control-feedback" aria-hidden="true"></span>
 *       <span class="sr-only" data-i18n-key="places.input.search"></span>
 *     </div>
 *   </g-map>
 * </g-map-api>
 *
 * where
 * places {object[]} Array of map points to be placed on map
 * places.latitude {number} Latitude of one point
 * places.longitude {number} Longitude of one point
 * preferences {object} Preference object containing api key, zoom level, etc.
 */
import i18nNgKey from 'ui-bb-i18n-ng';
import uiBbMapsNg from 'ui-bb-maps-ng';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';

import * as extHooks from './hooks';

import '../styles/index.css';

export const dependencyKeys = [
  i18nNgKey,
  uiBbMapsNg,
  uiBbSubstituteErrorNgKey,
  ngAriaModuleKey,
];

export const hooks = extHooks;

export const helpers = {};

export const events = {};
