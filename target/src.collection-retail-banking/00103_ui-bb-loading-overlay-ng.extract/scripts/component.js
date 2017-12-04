/**
 * @name uiBbLoadingOverlayNg
 * @type {object}
 * @description
 * Loading overlay component.
 *
 * @property {boolean} isLoading Controls whether or not loading overlay is visible
 *
 * It shows an overlay with a spinning animation in it that will be positioned
 * on top of the current content.
 */
export default {
  bindings: {
    isLoading: '<',
  },
  transclude: true,
  template: `
    <div class="bb-loading-overlay">
      <ng-transclude></ng-transclude>
      <div ng-if="$ctrl.isLoading">
        <div class="bb-loading-overlay-cover"></div>
        <div class="bb-loading-overlay-spinner"></div>
      </div>
    </div>
  `,
};
