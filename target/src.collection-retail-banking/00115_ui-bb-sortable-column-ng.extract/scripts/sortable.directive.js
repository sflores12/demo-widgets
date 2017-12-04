/* eslint max-len: ["error", { "ignoreComments": true }] */

/**
 * @name uiBbSortableColumnDirective
 * @type {object}
 *
 * @property {object} options
 * @property {object} options.key The column key to sort
 * @property {object} options.direction Default direction to sort, ascending or descending
 * @property {boolean} active Show or hide sort caret
 * @property {function} onSort Callback called when clicked on the column header. It is called with `key` and `direction` arguments
 */
const directive = function uiBbSortableColumnDirective(sortDirection) {
  return {
    restrict: 'A',
    transclude: true,
    scope: {
      options: '=',
      active: '=',
      onSort: '&',
    },
    template: `
      <ng-transclude data-ng-if="!options"></ng-transclude>
      <span data-ng-click="toggleDirection()"
        data-role="sort-{{key}}"
        data-ng-if="options"
        data-ng-class="{ 'bb-sortable': key }"
        data-ng-mouseenter="hover = true"
        data-ng-mouseleave="hover = false">
        <ng-transclude></ng-transclude>
        <i data-ng-if="key"
          aria-hidden="true"
          class="fa bb-sortable-icon"
          data-ng-class="{
            invisible: !active && !hover,
            'fa-caret-down bb-sortable-icon-down':
              direction === '${sortDirection.DESCENDING}',
            'fa-caret-up bb-sortable-icon-up':
              direction === '${sortDirection.ASCENDING}'
          }"
        >
        </i>
      </span>
    `,
    link: scope => {
      if (!scope.options) {
        return;
      }

      Object.assign(scope, {
        direction: scope.options.direction === sortDirection.ASCENDING ?
          sortDirection.ASCENDING : sortDirection.DESCENDING,

        key: scope.options.key,

        /**
         * @name toggleDirection
         * @description
         * If the component is active it will toggle the sort direction. Then it will call `onSort` callback.
         * If `key` is not provided in the options it will bypass and do nothing.
         * @type {function}
         * @inner
         */
        toggleDirection: () => {
          if (!scope.key) { return; }
          if (scope.active) {
            Object.assign(scope, {
              direction: scope.direction === sortDirection.DESCENDING ?
                sortDirection.ASCENDING : sortDirection.DESCENDING,
            });
          }
          scope.onSort({ key: scope.key, direction: scope.direction });
        },
      });
    },
  };
};

export default directive;
