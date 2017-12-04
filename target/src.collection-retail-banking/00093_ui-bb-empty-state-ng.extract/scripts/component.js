/**
 * @name uiBbEmptyStateNg
 * @type {object}
 * @description
 * Empty state component.
 *
 * @property {string} iconClasses Specify the icon class names
 * @property {string} title Title of the component
 * @property {string} subtitle Sub title of the component
 * @property {boolean} isEmpty Specify if the component is shown or not
 *
 * Can be used to avoid bad user experience while missing data
 */
const component = {
  bindings: {
    iconClasses: '@',
    title: '@',
    subtitle: '@',
    isEmpty: '<',
  },
  transclude: true,
  template: `
    <div class="col-xs-12 text-center" data-ng-show="$ctrl.isEmpty">
      <i class="{{$ctrl.iconClasses || 'fa fa-4x fa-bar-chart text-muted' }} empty-state-icon"
        aria-hidden="true"
      ></i>
      <p class="empty-state-title"
        data-role="empty-state-title">
        <strong>{{ $ctrl.title }}</strong></p>
      <p class="empty-state-subtitle text-muted"
        data-role="empty-state-subtitle"
        data-ng-bind-html="$ctrl.subtitle"></p>
    </div>

    <ng-transclude data-ng-hide="$ctrl.isEmpty"></ng-transclude>
  `,
};

export default component;
