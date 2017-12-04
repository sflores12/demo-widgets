/**
 * @name uiBbLoadMoreComponent
 * @type {object}
 * @description
 * Load More Component Object
 *
 * @property {string} label Text to display
 * @property {function} onLoadMore Callback to call when clicking button
 */
const component = {
  bindings: {
    label: '@',
    onLoadMore: '&',
  },
  controller: 'controller',
  template: `
    <nav class="text-center" data-ng-class="{ disabled: $ctrl.loadingMore }">
      <button class="btn btn-default"
        data-ng-click="$ctrl.onClickLoadMore()"
      >
        {{ $ctrl.label }}
      </button>
    </nav>
  `,
};

export default component;
