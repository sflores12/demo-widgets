/**
* @module ui-bb-number-input-ng
* @description
* UI number input component
* The idea of this component is to have an input(numeric) element
* which simply does not allow the user to select an invalid number
* instead of invalidating the form with ng-min and ng-max. The browser's
* native min and max only denies the user to select invalid values with the
* input field's controls or arrow keys(user can still manually enter
* an invalid value).
*
* @example
* // In an extension:
* // file: scripts/index.js
* import uiBbNumberInputKey from 'ui-bb-number-input-ng';
*
* export const dependencyKeys = [
*   uiBbNumberInputKey,
* ];
*
* // file: templates/template.ng.html
* <ui-bb-number-input class="form-control occurence-field"
*   name="repeat"
*   ng-model="$ctrl.repeat"
*   min-value="$ctrl.repeatMin"
*   max-value="$ctrl.repeatMax">
* </ui-bb-number-input>
*/

import angular from 'vendor-bb-angular';

import component from './component';

export default angular.module('ui-bb-number-input-ng', [])
  .directive('uiBbNumberInput', component)
  .name;
