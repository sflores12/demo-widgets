/**
 * @name uiBbExpandableComponent
 * @type {object}
 * @description
 * Expandable Component Object
 *
 * @property {string} summary Transcluded content of <ui-bb-expandable-summary-ng>
 * @property {string} details Transcluded content of <ui-bb-expandable-details-ng>
 * @property {string} chevron Condition to show/hide chevron arrow
 */
const component = {
  transclude: {
    summary: 'uiBbExpandableSummaryNg',
    details: 'uiBbExpandableDetailsNg',
  },
  bindings: {
    chevron: '<',
  },
  controller: 'uiBbExpandableController',
  template: `
    <div ng-click="$ctrl.toggle()" class="dropdown-select">
      <i ng-if="$ctrl.chevron" class="fa chevron-icon pull-right"
        role="button"
        ng-class="{ 'fa-chevron-down chevron-down': $ctrl.isCollapsed,
                    'fa-chevron-up chevron-up': !$ctrl.isCollapsed }"
      ></i>
      <div ng-transclude="summary" class="bb-expandable-summary"></div>
    </div>
    <div ng-transclude="details" class="bb-expandable-details"
      uib-collapse="$ctrl.isCollapsed"></div>
  `,
};
export default component;
