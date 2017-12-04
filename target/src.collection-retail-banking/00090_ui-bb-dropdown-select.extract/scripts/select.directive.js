/**
 * @name uiBbDropdownSelectDirective
 * @type {object}
 *
 * @property {boolean} isOpen Defines whether or not the dropdown is open
 * @property {?boolean} multiple True if multiple selection is enabled (false by default)
 * @property {boolean} ngDisabled Defines whether or not the dropdown is disabled
 * @property {object} ngModel Dropdown model
 * @property {?string} placeholder Placeholder text
 * @property {function} ngChange Callback function triggered when dropdown item is selected
 * @property {function} selectedAs Allows to customize selected value
 * @property {object} labels Object with labels that will be attached to dropdown's scope
 */
function UiBbDropdownSelectController($timeout, $attrs, $scope) {
  const instance = {
    $onInit: () => {
      instance.ngModelController.$render = instance.render.bind(instance);
    },
    render: () => {
      Object.assign($scope, {
        $option: instance.ngModelController.$viewValue || instance.ngModelController.$modelValue,
      });
    },
  };

  instance.select = option => {
    // different behaviour is needed for single and multiple selection
    if (instance.multiple) {
      if (!Array.isArray(instance.model)) {
        instance.model = [];
      }
      const currentIndex = instance.model.indexOf(option);
      if (currentIndex >= 0) {
        instance.model.splice(currentIndex, 1);
      } else {
        instance.model.push(option);
      }
    } else {
      // make sure list is always closed when item is selected
      instance.isOpen = false;
      instance.model = option;
    }

    instance.ngModelController.$render();
    $timeout(() => instance.ngChange({ $item: instance.model }));
  };

  instance.isSelected = function isSelected(option) {
    return instance.multiple ? instance.model.indexOf(option) > -1 : instance.model === option;
  };

  instance.getSelectedConfig = () => ({
    selectedAs: $attrs.selectedAs ? '{{ $ctrl.selectedAs(this) }}' : false,
    templateUrl: $attrs.templateUrl,
    clone: false,
  });

  /**
   * @description
   * Close menu if next focused element is outside of container
   *
   * @name uiBbDropdownSelectDirective#onBlur
   * @type {function}
   * @param {object} event
   */
  instance.onBlur = function onBlur(event) {
    // For some browsers, when clicking on opened dropdown, additionally to
    // click event, focusin and focusout events are sent. As focusout changes
    // isOpen state, dropdown closes and opens back really quick. To prevent that,
    // focusout will be ignored in this case. Only way to recognize this situation is
    // by inspecting event object and its relatedTarget and target properties
    if (event.relatedTarget === null && event.target && event.target.tagName === 'BUTTON') {
      return;
    }

    if (event.relatedTarget) {
      const originalParent = this;
      let relatedParent = event.relatedTarget;

      while (relatedParent) {
        if (relatedParent === originalParent) {
          return;
        }

        relatedParent = relatedParent.parentNode;
      }
    }

    instance.isOpen = false;
    $scope.$digest();
  };

  /**
   * @description
   * Handles clicks on the items in the list
   *
   * @name uiBbDropdownSelectDirective#clickHandler
   * @type {function}
   * @param {object} event
   */
  instance.clickHandler = (event) => {
    if (instance.multiple) {
      event.stopPropagation();
    }
  };

  return instance;
}

export default function uiBbDropdownSelectDirective() {
  return {
    require: {
      ngModelController: 'ngModel',
      ngDropdownController: 'uiBbDropdownSelect',
    },
    transclude: true,
    bindToController: true,
    controllerAs: '$ctrl',
    controller: ['$timeout', '$attrs', '$scope', UiBbDropdownSelectController],
    template: (element, attrs) => `
      <div class="dropdown-select"
        data-ng-class="{selected: $ctrl.multiple ? $ctrl.model.length : $ctrl.model}"
        uib-dropdown
        data-keyboard-nav
        data-is-open="$ctrl.isOpen">

        <button type="button" class="btn btn-default btn-dropdown-toggle ${attrs.class}"
          uib-dropdown-toggle
          data-ng-disabled="$ctrl.disabled">
          <span class="dropdown-option dropdown-selected" ui-bb-dropdown-selected></span>
          <span class="dropdown-option placeholder">${attrs.placeholder || ''}</span>
          <i class="fa chevron-icon fa-chevron-down chevron-down"
            data-role="select-account-button">
          </i>
        </button>

        <ul class="uib-dropdown-menu ng-transclude-node dropdown-menu"
          uib-dropdown-menu
          data-ng-transclude
          data-ng-click="$ctrl.clickHandler($event)"
          role="menu"
          tabindex="-1"
          aria-labelledby="single-button">
        </ul>
      </div>
		`,
    scope: {
      isOpen: '=?',
      disabled: '=ngDisabled',
      model: '=ngModel',
      ngChange: '&',
      selectedAs: '&',
      multiple: '<',
      labels: '<',
    },
    link: function uiBbDropdownSelectLink(scope, element, attrs, controller) {
      element.removeClass(attrs.class);
      element.on('focusout', controller.ngDropdownController.onBlur);
    },
  };
}
