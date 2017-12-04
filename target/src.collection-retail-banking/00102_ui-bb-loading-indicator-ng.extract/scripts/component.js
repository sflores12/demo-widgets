import UiBbLoadingIndicatorController from './loading-indicator.controller';

/**
 * @name uiBbLoadingIndicatorNg
 * @type {object}
 * @description
 * Loading indicator component.
 *
 * @property {boolean} isLoading Controls whether or not loading indicator is visible
 * @property {?number} showDelay Loading message display delay in ms
 *
 * Can be used to avoid bad user experience while rebuilding parts of the current form
 * based on changes in user input/selection. Rather than displaying loading message immediately,
 * it will pop up on slow server response only
 * @property {string} loadingText Loading message
 */
export default {
  bindings: {
    isLoading: '<',
    showDelay: '<',
    loadingText: '@',
  },
  transclude: true,
  template: `
    <div data-ng-if="$ctrl.showComponent" class="jumbotron text-center">
      {{ $ctrl.loadingText || 'Loading...' }}
    </div>
    <ng-transclude data-ng-if="!$ctrl.showComponent"></ng-transclude>
  `,
  controller: ['$timeout', UiBbLoadingIndicatorController],
};
