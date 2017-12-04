// Temporary disable capsInNew until it fixed in lib-bbm-plugins
/* eslint new-cap: ["error", { "capIsNew": false }] */
import plugins from 'lib-bbm-plugins';

export default function DropdownController($element) {
  const ctrl = this;

  const ngModelCtrl = $element.controller('ngModel');

  ctrl.displayValue = '';

  ctrl.opened = false;

  /**
   * @description
   * Returns the list of items, that needs to be displayed in the dropdown.
   *
   * @name getPluginItems
   * @type {function}
   *
   * @returns {Array.<string>}
   * @inner
   */
  const getPluginItems = () => (
    ctrl.options.map(option => option.text)
  );

  /**
   * @description
   * Returns the index of the selected option.
   *
   * @name getSelectedOptionIndex
   * @type {function}
   *
   * @returns {number}
   * @inner
   */
  const getSelectedOptionIndex = () => (
    ctrl.options.findIndex(({ id }) => id === ctrl.ngModel)
  );

  /**
   * @description
   * Returns params for the dropdown plugin.
   *
   * @name getPluginParams
   * @type {function}
   *
   * @returns {DropdownParams}
   * @inner
   */
  const getPluginParams = () => ({
    title: ctrl.title || '',
    selectedIndex: getSelectedOptionIndex(),
    items: getPluginItems(),
  });

  /**
   * @description
   * Returns the selected option.
   *
   * @name getSelectedOption
   * @type {function}
   *
   * @returns {DropdownOption}
   * @inner
   */
  const getSelectedOption = () => ctrl.options[getSelectedOptionIndex()];

  /**
   * @description
   * Sets the given option as the selected one.
   *
   * @name selectOption
   * @type {function}
   *
   * @param {?DropdownOption} option
   * @inner
   */
  const selectOption = option => {
    if (option) {
      ngModelCtrl.$setViewValue(option.id);
    }
  };

  /**
   * @description
   * Opens a dropdown.
   *
   * @name openDropdown
   * @type {function}
   *
   * @inner
   */
  const openDropdown = () => {
    if (!ctrl.opened) {
      plugins.Dropdown().show(getPluginParams())
        .then(({ item }) => {
          ctrl.opened = false;
          selectOption(ctrl.options[item]);
        })
        .catch(() => {
          ctrl.opened = false;
        });

      ctrl.opened = true;
    }
  };

  /**
   * @description
   * Updates the display value.
   *
   * @name updateDisplayValue
   * @type {function}
   *
   * @inner
   */
  const updateDisplayValue = () => (
    ctrl.displayValue = getSelectedOption()
      ? getSelectedOption().text
      : ''
  );

  /**
   * @description
   * Angular hook to handle changes.
   *
   * @name $onChanges
   * @type {function}
   *
   * @param {Object} changes
   * @inner
   */
  const $onChanges = ({ ngModel, options }) => {
    if (ngModel || options) {
      updateDisplayValue();
    }
  };

  Object.assign(ctrl, {
    $onChanges,
    openDropdown,
  });
}

/**
 * @typedef {Object} DropdownParams
 * @property {string} title Dropdown title
 * @property {number} selectedIndex Index of the selected option
 * @property {Array.<DropdownOption>} items List of options
 * @inner
 */
