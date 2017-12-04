/**
 * @module ui-bb-iban-ng
 *
 * @description
 * IBAN input custom validation directive.
 *
 */
import angular from 'vendor-bb-angular';

import uiBbIban from './directive';

/**
 * @name default
 * @type {string}
 * @description Angular module name
 */
export default angular.module('ui-bb-iban-ng', [])
  .directive('uiBbIban', uiBbIban)
  .name;
