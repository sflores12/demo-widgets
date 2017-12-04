import { CONTROLLER_KEY } from './constants';

/**
 * @name uiBBSearchBoxComponent
 * @type {object}
 *
 * @property {Config}    config         Configuration object
 * @property {?Boolean}  disabled       Enables/disabled component
 * @property {String}    ngModel        Component model value
 * @property {?Function} onChange       Function to attach to on change event,
 *                                      it will be called every time user adds
 *                                      text to component
 * @property {?Function} onSubmit       Function to attach to on submit event,
 *                                      the component will be submitted
 *                                      after user pressed enter and it
 *                                      has a value
 * @property {?Function} onClear        Function to attach to on clear event,
 *                                      when clicking clear button event will be fired.
 * @property {boolean}   isLoading      Controls whether or not loading indicator is visible
 * @property {boolean}   forcedSubmit   Controls whether or not onSubmit callback
 *                                      should be triggered regardless to state of ngModel
 *
 */

/**
 * Config type definition
 * @typedef {Object} Config
 * @property {String}   id              Id of the input
 * @property {String}   name            Name of the input
 * @property {?Number}  debounce        Time in ms to start search after writting,
 *                                      0 to start search immediately after writing
 * @property {?Boolean} hideButton      Controls whether or not should hide action button
 * @property {?Boolean} showIcon        Controls whether or not should show search icon
 * @property {?String}  iconClasses     String with css-classes for button icon
 * @property {Labels}   Labels          Texts used in component
 */

/**
 * Labels type definition
 * @typedef {Object} Labels
*  @property {String} title             Accessibility label for component
 * @property {String} placeholder       Placeholder label for the search input
 * @property {String} clear             Accesibility label for clear button
 * @property {String} button            Accesibility label for main button
 */
const component = {
  bindings: {
    config: '<',
    disabled: '<',
    ngModel: '<',
    onChange: '&',
    onSubmit: '&',
    onClear: '&',
    isLoading: '<',
    forcedSubmit: '<',
  },
  controller: CONTROLLER_KEY,
  template: `
    <div class="bb-search-box"
      data-ng-class="{
        empty: !$ctrl.hasValue(),
        disabled: $ctrl.disabled
      }">
      <label for="bb-search-box-{{ $ctrl.config.id }}"
        class="sr-only"
        data-ng-bind="$ctrl.config.labels.title">
      </label>
      <span class="bb-search-box-icon text-center"
        data-ng-if="::$ctrl.config.showIcon">
        <i aria-hidden="true" class="fa fa-search"></i>
      </span>
      <button type="button"
        class="close bb-search-box-clear"
        data-ng-class="{ 'shift-right': $ctrl.config.hideButton }"
        data-role="search-clear-button"
        data-ng-attr-aria-label="{{ $ctrl.config.labels.clear }}"
        data-ng-disabled="$ctrl.disabled"
        data-ng-click="$ctrl.clear()"
        data-ng-show="$ctrl.hasValue() && !$ctrl.state.isLoading">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="bb-search-box-spinner"
        data-ng-class="{ 'shift-right': $ctrl.config.hideButton }"
        data-ng-attr-aria-label="{{ $ctrl.config.labels.loading }}"
        data-ng-show="$ctrl.state.isLoading">
      </span>
      <div class="bb-search-box-wrapper"
        data-ng-class="{ 'input-group': !$ctrl.config.hideButton }">
        <input type="search"
          id="bb-search-box-{{ $ctrl.config.id }}"
          name="{{ $ctrl.config.name }}"
          autocomplete="off"
          class="form-control bb-search-box-input"
          data-role="search-input"
          placeholder="{{ $ctrl.config.labels.placeholder }}"
          data-ng-disabled="$ctrl.disabled"
          data-ng-change="$ctrl.setValue()"
          data-ng-keyup="$ctrl.onKeyup($event)"
          data-ng-model="$ctrl.state.value"
          data-ng-class="{ 'pl-7': $ctrl.config.showIcon }"
          data-ng-model-options="{ debounce: $ctrl.config.debounce || 0 }">
        <span class="input-group-btn" data-ng-if="!$ctrl.config.hideButton">
          <button type="button"
            class="btn btn-default"
            data-role="search-button"
            data-ng-attr-aria-label="{{ $ctrl.config.labels.submit }}"
            data-ng-disabled="$ctrl.disabled"
            data-ng-click="$ctrl.submitSearch()">
            <i aria-hidden="true" data-ng-class="$ctrl.config.iconClasses || 'fa fa-search'"></i>
          </button>
        </span>
      </div>
    </div>
  `,
};

export default component;
