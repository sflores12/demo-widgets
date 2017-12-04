/**
 * @module ui-bb-char-counter-ng
 * @description
 * UI component for displaying chars counter.
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbCharCounterNg from 'ui-bb-char-counter-ng';
 *
 * export const dependencyKeys = [
 *   uiBbCharCounterNg,
 * ];
 *
 * // file: templates/template.ng.html
 * <textarea name="description"></textarea>
 * <ui-bb-char-counter-ng
 *   data-state="stateTextarea"
 *   data-text-el="$ctrl.textElTextarea"
 *   data-config="$ctrl.configTextarea">
 * </ui-bb-char-counter-ng>
 */
import angular from 'vendor-bb-angular';

import component from './component';
import controller from './controller';

export default angular
  .module('ui-bb-char-counter-ng', [])
  .component('uiBbCharCounterNg', component)
  .controller('controller', ['$scope', '$document', controller])
  .name;
