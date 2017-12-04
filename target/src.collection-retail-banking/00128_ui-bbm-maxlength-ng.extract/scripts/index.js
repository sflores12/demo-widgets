/**
 * @module ui-bbm-maxlength-ng
 *
 * @description
 * Directive to prevent typing symbols based on the maxlength value.
 *
 */
import angular from 'vendor-bb-angular';

import uiBbmMaxlength from './directive';

import { MODULE_KEY, DIRECTIVE_KEY } from './constants';

/**
 * @name default
 * @type {string}
 * @description Angular module name
 */
export default angular
  .module(MODULE_KEY, [])
  .directive(DIRECTIVE_KEY, uiBbmMaxlength)
  .name;
