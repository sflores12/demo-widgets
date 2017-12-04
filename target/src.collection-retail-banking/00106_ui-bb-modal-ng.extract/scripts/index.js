/**
 * @module ui-bb-modal-ng
 * @description
 * UI component for displaying the custom modal.
 *
 * To open modal dialog define "is-open" attribute with scope property
 * as value. Modal dialog can be opened by changing value of scope property to "true".
 * "is-open" has two-way data binding, so when modal dialog is closed, scope property
 * value will change to "false".
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 *
 * import uiBbModalKey from 'ui-bb-modal-ng';
 *
 * export const dependencyKeys = [
 *   uiBbModalKey,
 * ]
 *
 * // file: templates/template.ng.html
 * <button data-ng-click="ext.isModalOpen = true">Open Modal</button>
 *
 * <ui-bb-modal
 *   data-is-open="ext.isModalOpen"
 *   data-animation="true"
 *   data-size="'sm'"
 *   data-backdrop="'static'"
 *   data-keyboard="true"
 *   data-on-open="$ctrl.someAction()"
 *   data-on-close="$ctrl.dismissAction()">
 *   <div data-ng-include="'#template.ng.html'"></div>
 * </ui-bb-modal>
 */
import angular from 'vendor-bb-angular';
import vendorBbUibModalKey from 'vendor-bb-uib-modal';
import directive from './directive';

/**
 * @name uiBbModalNg
 * @description
 * @type {object}
 * AngularUI Modal component
 */
export default angular
  .module('ui-bb-modal-ng', [vendorBbUibModalKey])
  .directive('uiBbModal', directive)
  .name;
