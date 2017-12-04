/**
 * @module widget-bb-places-ng
 *
 * @description
 * Places widget
 *
 * @usage
 * <div ng-controller="PlacesController as $ctrl">
 *   <g-map-api preferences="$ctrl.getPlacesPreferences()">
 *     <g-map places="$ctrl.loadPlaces"></g-map>
 *   </g-map-api>
 * </div>
 */
import angular from 'vendor-bb-angular';
import extendHooks from 'lib-bb-widget-extension-ng';
import modelPlacesModuleKey, { modelPlacesKey } from 'model-bb-places-ng';
import widgetModuleKey, { widgetKey } from 'lib-bb-widget-ng';
import eventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';
import bbIntentModuleKey, { bbIntentKey } from 'lib-bb-intent-ng';

import Controller from './controller';
import * as defaultHooks from './default-hooks';

const hooksKey = 'widget-bb-places-ng:hooks';

function run(widget, bus, bbIntent) {
  bus.publish('cxp.item.loaded', {
    id: widget.getId(),
  });
  bbIntent.init();
}

export default angular
  .module('widget-bb-places-ng', [
    modelPlacesModuleKey,
    eventBusModuleKey,
    widgetModuleKey,
    bbIntentModuleKey,
  ])
  .factory(hooksKey, extendHooks(defaultHooks))
  .controller('PlacesController', [
    // dependencies to inject
    modelPlacesKey,
    hooksKey,
    eventBusKey,
    /* into */
    Controller,
  ])
  .run([
    widgetKey,
    eventBusKey,
    bbIntentKey,
    run,
  ])
  .name;

/**
 * @typedef {Object} PlacesParameters
 * @property {number} latitude Latitude for current location
 * @property {number} longitude Longitude for current location
 * @property {number} radius Search radius
 * @property {?string} city Search by city name
 * @property {?string} country Search by country name
 */

/**
 * @typedef {Object} Place
 * @property {string} id The internal place identifier
 * @property {string} name The place's name, suitable for display to users
 * @property {string} address.addressLine1 First line of address
 * @property {?string} address.addressLine2 Second line of address
 * @property {?string} address.addressLine3 Third line of address
 * @property {string} address.postalCode Post (ZIP) code of the place
 * @property {string} address.country Place's country
 * @property {number} latitude Latitude of the place
 * @property {number} longitude Longitude of the place
 * @property {string} placeType Type of the place (atm, branch, ...)
 */
