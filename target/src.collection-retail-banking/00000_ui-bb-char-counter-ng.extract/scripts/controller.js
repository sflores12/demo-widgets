import {
  InitialConfig,
  InitialState,
  ValidElementsList,
  KeyboardKeys,
} from './constants';

export default function controller($scope, $document) {
  const ctrl = this;

  /**
   * @name updateCounterState
   * @type {function}
   * @inner
   *
   * @description
   * Applies changes of attached input element into component's state object
   */
  const updateCounterState = () => {
    const counter = ctrl.textEl.value.length;
    $scope.$apply(() => {
      ctrl.state = {
        counter,
        isValid: counter <= ctrl.config.maxChars,
      };
    });
  };

  /**
   * @name preventInput
   * @type {function}
   *
   * @description
   * Prevent from further input in case of respective config property is true
   * and the input limit is reached
   *
   * @param {KeyboardEvent} event
   */
  const preventInput = event => {
    const isDeleting = !event || (event && (event.keyCode === KeyboardKeys.BackSpace ||
      event.keyCode === KeyboardKeys.Delete));

    if (ctrl.textEl.value.length >= ctrl.config.maxChars && !isDeleting) {
      event.preventDefault();
    }
  };

  /**
   * @name $onInit
   * @type {function}
   *
   * @description
   * Init hook - initialize component model
   */
  function $onInit() {
    if (!ctrl.textEl && ctrl.textElQuery) {
      ctrl.textEl = $document[0].querySelector(ctrl.textElQuery);
    }

    // Should be native element
    ctrl.isTextEl = ctrl.textEl && ctrl.textEl.tagName &&
      ValidElementsList.indexOf(ctrl.textEl.tagName.toUpperCase()) !== -1;

    if (!ctrl.isTextEl) {
      return;
    }

    // Init state
    ctrl.state = Object.assign({}, InitialState, ctrl.state);

    // Init configuration
    ctrl.config = Object.assign({}, InitialConfig, ctrl.config);

    // Add keypress listener to text input (to prevent input if needed)
    if (ctrl.config.blockTyping) {
      ctrl.textEl.addEventListener('keypress', preventInput, false);
    }

    // Add keyup listener to text input (to check input limits)
    ctrl.textEl.addEventListener('keyup', updateCounterState, false);
  }

  Object.assign(ctrl, {
    $onInit,
  });
}
