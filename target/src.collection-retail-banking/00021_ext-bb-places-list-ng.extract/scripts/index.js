/**
 * @module ext-bb-places-list-ng
 *
 * @description
 * Places widget list extension.
 *
 * @requires ui-bb-i18n-ng
 * @requires ui-bb-maps-ng
 * @requires ui-bb-substitute-error-ng
 * @requires ui-bb-loading-indicator-ng
 * @requires vendor-bb-angular-ng-aria
 *
 * @example
 * <!-- places widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bb-places-list-ng</value>
 * </property>
 *
 * Usage of ui-bb-maps-ng component in template
 *
 * <g-map-api preferences="$ctrl.getPlacesPreferences()" ng-hide="$ctrl.loadingPlaces">
 *   <place-listn places="$ctrl.loadPlaces"
 *     messages="{
 *       list: ('places.message.setup.list' | i18n),
 *       error: ('places.message.setup.error' | i18n),
 *       empty: ('places.message.setup.empty' | i18n),
 *     }"
 *   >
 *     <div class="form-group">
 *       <g-map-search></g-map-search>
 *       <span class="fa fa-search text-muted form-control-feedback" aria-hidden="true"></span>
 *       <span class="sr-only" data-i18n-key="places.input.search"></span>
 *     </div>
 *   </place-list>
 * </g-map-api>
 *
 * where
 * places {object[]} Array of map points to be placed on map
 * places.latitude {number} Latitude of one point
 * places.longitude {number} Longitude of one point
 * preferences {object} Preference object containing api key, zoom level, etc.
 * messages {object} Object with messages that will be shown in various states of the extension
 * messages.list {string} Message displayed while list is being loaded
 * and distnaces are being calculated
 * messages.error {string} Message displayed if error occured
 * messages.empty {string} Message displayed if there are no items to show
 */
import i18nNgKey from 'ui-bb-i18n-ng';
import uiBbMapsNg from 'ui-bb-maps-ng';
import uiBbLoadingIndicatorKey from 'ui-bb-loading-indicator-ng';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';

export const dependencyKeys = [
  i18nNgKey,
  uiBbMapsNg,
  uiBbLoadingIndicatorKey,
  uiBbSubstituteErrorNgKey,
  ngAriaModuleKey,
];

export const hooks = {};

export const helpers = {};

export const events = {};
