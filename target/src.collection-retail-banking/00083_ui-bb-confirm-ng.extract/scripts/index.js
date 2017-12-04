/**
 * @module ui-bb-confirm-ng
 * @description
 * UI component for displaying the confirmation modal dialog.
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbConfirmKey from 'ui-bb-confirm-ng';
 *
 * export const dependencyKeys = [
 *   uiBbConfirmKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <button data-ng-click="isConfirmationOpen = true">Open confirmation</button>
 *
 * <!-- Large dialog, opened without animation -->
 * <ui-bb-confirm
 *   data-is-open="isConfirmationOpen"
 *   data-labels="{
 *     heading: 'Are you sure?',
 *     bodyText: 'Are you sure you want to perform this action?',
 *     cancel: 'Cancel',
 *     confirm: 'Ok',
 *   }"
 *   data-size="'lg'"
 *   data-animation="false"
 *   data-onCancel="$ctrl.onCancel()"
 *   data-onConfirm="$ctrl.doAction()">
 * </ui-bb-confirm>
 *
 * <!-- Dialog with red confirm button which can't be dismissed and centered buttons -->
 * <ui-bb-confirm
 *   data-is-open="isConfirmationOpen"
 *   data-labels="{
 *     heading: 'Are you sure?',
 *     bodyText: 'Are you sure you want to delete this item?',
 *     cancel: 'No',
 *     confirm: 'Delete',
 *   }"
 *   data-confirm-btn-class="'btn-danger'"
 *   data-is-dismissible="false"
 *   data-footer-class="'text-centered'"
 *   data-onClose="$ctrl.onClose()"
 *   data-onConfirm="$ctrl.doAction()">
 * </ui-bb-confirm>
 */
import angular from 'vendor-bb-angular';
import ngSanitizeKey from 'vendor-bb-angular-sanitize';
import uiBbModalkey from 'ui-bb-modal-ng';

import component from './component';

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */
export default angular
  .module('ui-bb-confirm-ng', [
    ngSanitizeKey,
    uiBbModalkey,
  ])
  .component('uiBbConfirm', component)
  .name;
