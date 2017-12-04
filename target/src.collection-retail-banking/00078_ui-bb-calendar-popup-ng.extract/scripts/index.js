/**
 * @module ui-bb-calendar-popup-ng
 * @description
 * UI datepicker popup component
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbCalendarPopupKey from 'ui-bb-calendar-popup-ng';
 *
 * export const dependencyKeys = [
 *   uiBbCalendarPopupKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-calendar-popup
 *   data-date="$ctrl.date"
 *   data-config="$ctrl.calendarPopupConfig"
 *   data-disabled="false">
 * </ui-bb-calendar-popup>
 */

import angular from 'vendor-bb-angular';
import vendorBbUibDatepickerKey from 'vendor-bb-uib-datepicker';
import vendorBbUibPositionKey from 'vendor-bb-uib-position';
import vendorBbUibDatepickerPopupKey from 'vendor-bb-uib-datepicker-popup';

import uiBbCalendarPopupController from './calendar-popup.controller';
import uiBbCalendarPopupComponent from './calendar-popup.component';

const dependencyKeys = [
  vendorBbUibPositionKey,
  vendorBbUibDatepickerKey,
  vendorBbUibDatepickerPopupKey,
];

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */
export default angular.module('ui-bb-calendar-popup-ng', dependencyKeys)
  .controller('uiBbCalendarPopupController', [
    '$filter',
    '$locale',
    '$scope',
    uiBbCalendarPopupController,
  ])
  .component('uiBbCalendarPopup', uiBbCalendarPopupComponent)
  .name;
