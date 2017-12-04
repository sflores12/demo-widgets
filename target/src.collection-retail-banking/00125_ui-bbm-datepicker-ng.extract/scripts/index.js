/**
 * @module ui-bbm-datepicker-ng
 * @description
 * Mobile DatePicker UI component
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbmDatepickerNgKey from 'ui-bbm-datepicker-ng';
 *
 * export const dependencyKeys = [
 *   uiBbmDatepickerNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bbm-datepicker-ng
 *   data-label="'Start date'"
 *   data-title="'Select a start date'"
 *   data-ng-model="$ctrl.startDate"
 *   data-min-date="'2017-05-10T14:00:00+0200'">
 *   data-max-date="'2018-01-01T14:00:00+0200'"
 *   data-date-labels="ext.helpers.dateLabels">
 * </ui-bbm-datepicker-ng>
 */
import angular from 'vendor-bb-angular';
import uiBbDateLabelFilterKey from 'ui-bb-date-label-filter-ng';

import controller from './controller';
import component from './component';
import dateDecoratorFilter from './date-decorator.filter';

import { COMPONENT_KEY, CONTROLLER_KEY, MODULE_KEY } from './constants';

import '../styles/index.css';

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */
export default angular.module(MODULE_KEY, [uiBbDateLabelFilterKey])
  .controller(CONTROLLER_KEY, ['$element', '$filter', controller])
  .component(COMPONENT_KEY, component)
  .filter('dateDecorator', ['$filter', dateDecoratorFilter])
  .name;
