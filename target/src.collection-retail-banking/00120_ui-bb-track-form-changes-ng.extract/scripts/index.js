/**
 * @module ui-bb-track-form-changes-ng
 * @description
 * Contains UI directive to track changes on the provided object
 * and set $pristine flag of ngForm directive to true when tracking
 * object value changes back to initial value.
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbTrackChanges from 'ui-bb-track-form-changes-ng';
 *
 * export const dependencyKeys = [
 *   uiBbTrackChanges,
 * ];
 *
 * // file: templates/template.ng.html
 * <form ui-bb-track-changes="formObject">
 *   <input name="firstName" ng-model="formObject.name" />
 *   <input name="lastName" ng-model="formObject.lastName" />
 * </form>
 */
import angular from 'vendor-bb-angular';

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */
export default angular
  .module('ui-bb-track-form-changes-ng', [])
  .directive('uiBbTrackChanges', () => ({
    require: 'form',
    scope: {
      trackingValue: '=uiBbTrackChanges',
    },
    link: (scope, elem, attr, form) => {
      const initialValue = angular.copy(scope.trackingValue);

      scope.$watch(() => scope.trackingValue, (newValue) => {
        if (angular.equals(newValue, initialValue) && !form.$pristine) {
          form.$setPristine();
        }
      }, true);
    },
  }))
  .name;
