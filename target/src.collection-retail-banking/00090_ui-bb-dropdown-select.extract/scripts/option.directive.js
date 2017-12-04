/**
 * @name uiBbDropdownOption
 * @type {object}
 */
function uiBbDropdownOptionController($scope) {
  const instance = {
    isSelected() {
      return this.selected || this.uiBbDropdownSelectController.isSelected(instance.option);
    },
    select() {
      if (!$scope.$ctrl.ngDisabled) {
        this.uiBbDropdownSelectController.select(instance.option);
      }
    },
    $onInit() {
      Object.assign($scope, { $option: this.option });
    },
  };

  return instance;
}

export default function uiBbDropdownOption($templateRequest, $compile) {
  return {
    require: {
      uiBbDropdownSelectController: '^^uiBbDropdownSelect',
    },
    transclude: true,
    replace: true,
    bindToController: true,
    controllerAs: '$ctrl',
    controller: ['$scope', uiBbDropdownOptionController],
    template: `
      <li role="menuitem" class="dropdown-option" data-ng-class="{active: $ctrl.isSelected()}"
        data-ng-click="$ctrl.select()" tabindex="-1">
        <a class="clearfix cursor-pointer" tabindex="0" href="javascript:void(0)"></a>
      </li>
    `,
    scope: {
      option: '=',
      arrowNavigation: '<',
      selected: '<',
      ngDisabled: '<',
    },
    link(scope, element, attrs, controllers, transclude) {
      const appendOption = el => (scope.$ctrl.arrowNavigation === true
        ? element.children().append(el)
        : element.empty().append(el));
      if (attrs.templateUrl) {
        $templateRequest(attrs.templateUrl).then(tplContent => {
          $compile(tplContent.trim())(scope, appendOption);
        });
      } else {
        transclude(scope, appendOption);
      }
    },
  };
}
