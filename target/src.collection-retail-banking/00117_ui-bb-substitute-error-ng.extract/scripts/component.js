/**
 * @name uiBbSubstituteErrorComponent
 * @type {object}
 * @description
 * Substitute Error Component Object
 *
 * @property {object} error Object containing error message. Kept for backwards compatibility.
 * @property {string} message Translated error message
 */
export default {
  bindings: {
    error: '<',
    message: '<',
  },
  transclude: true,
  template: `
    <div data-ng-if="$ctrl.message || $ctrl.error"
        class="jumbotron text-center">
      <h1><i class="fa fa-exclamation-triangle pull-right" aria-hidden="true"></i></h1>
      <p>{{$ctrl.message || $ctrl.error.message}}</p>
    </div>
    <ng-transclude data-ng-if="!$ctrl.message && !$ctrl.error"></ng-transclude>
  `,
};
