import FORMAT_AMOUNT_TEMPLATE_URL from './constants';

import controller from './selector.controller';

/**
 * @name uiBbAccountSelector
 * @type {Object}
 *
 * @property {Object} ngModel Account selector model
 * @property {Array} accounts List of accounts
 * @property {Function} ngChange Callback function triggered when account is selected
 * @property {?Boolean} selectAll True if select all option is enabled (false by default)
 * @property {?Boolean} multiple True if multiple selection is enabled (false by default)
 * @property {?Boolean} multicurrency True if multiple currency selection is enabled
 * (true by default). If set to false, Select all option will be hidden if more than one
 * currency is listed. Also, once an item is selected, all items with different currency
 * will become disabled. This property has an effect only if multiple is set to true
 * @property {Labels} labels Object with labels
 * @property {?String} selectAllTemplateId Enables select all option and contains template id
 * @property {?String} customTemplateId Id of the template that will be used for rendering
 * instead of default ui-bb-account-selector/option-template.html template
 * @property {?Function} onAccountsLoad Function to retrieve filtered accounts. It should
 * update accounts assigns to `accounts` property and number of accounts in `totalItems` property
 * @property {?Function} onClear Function to be called once the search input is cleared
 * @property {?Number} totalItems Total items in the list. Used internally for select all item
 * @property {?SearchBox} searchBox Object contains minLength of search
 * string and config object of searchBox
 * @property {?String} formatAmountTemplateUrl Custom template url for popup element.
 */
const uiBbAccountSelector = {
  bindings: {
    model: '<ngModel',
    ngChange: '&',
    accounts: '<',
    selectAll: '<',
    multiple: '<',
    multicurrency: '<',
    labels: '<',
    customTemplateId: '@',
    selectAllTemplateId: '@',
    onAccountsLoad: '&',
    onClear: '&',
    totalItems: '=',
    searchBox: '<',
    formatAmountTemplateUrl: '@?',
  },
  template: ['$attrs', (attrs) => `
    <div class="bb-account-selector">
      <ui-bb-dropdown-select class="bb-account-selector-toggle drop-shadow"
        data-ng-model="$ctrl.state.accounts.selected"
        data-ng-change="$ctrl.onChange({ $item: $item.isSelectAll ? null : $item })"
        data-template-url="ui-bb-account-selector/selected-template.html"
        data-is-open="$ctrl.state.isOpen"
        data-multiple="$ctrl.multiple"
        data-labels="$ctrl.labels"
        data-placeholder="${attrs.placeholder}">
        <li class="dropdown-option p-3"
          data-ng-if="::$ctrl.searchBox">
          <ui-bb-search-box-ng class="d-block"
            data-ng-model="$ctrl.state.search.value"
            data-config="$ctrl.state.search.config"
            data-ng-click="$ctrl.onSearchBoxClick($event)"
            data-on-change="$ctrl.onSearch(search)"
            data-on-submit="$ctrl.onSearch(search)"
            data-is-loading="$ctrl.state.accounts.isSearching">
          </ui-bb-search-box-ng>
        </li>
        <li class="dropdown-option p-3"
          data-ng-show="!$ctrl.state.accounts.data.length"
          data-ng-bind="$ctrl.labels.noAccounts">
        </li>
        <ui-bb-list data-on-scroll-to-end="$ctrl.onLoadMore()"
          class="d-block bb-account-selector-scrollable-area">
          <ui-bb-dropdown-option data-ng-if="$ctrl.selectAll"
            data-option="$ctrl.state.allAccountsOption"
            data-selected="$ctrl.totalItems === ($ctrl.state.accounts.selected || {}).length"
            data-template-url="ui-bb-account-selector/option-template.html">
          </ui-bb-dropdown-option>
          <ui-bb-dropdown-option data-ng-repeat="account in $ctrl.state.accounts.data"
            data-option="account"
            data-ng-disabled="account.disabled"
            data-template-url="ui-bb-account-selector/option-template.html">
          </ui-bb-dropdown-option>
          <li class="dropdown-option p-3"
            data-ng-show="$ctrl.state.accounts.isLoadingMore">
            <span class="bb-account-selector-spinner center-block"></span>
          </li>
        </ui-bb-list>
      </ui-bb-dropdown-select>
    </div>
    <script type="text/ng-template" id="ui-bb-account-selector/selected-template.html">
      <a href
        tabindex="0"
        class="d-block pl-3 py-4 pr-10 bb-account-selector-option"
        data-ng-include="$ctrl.multiple
          ? 'ui-bb-account-selector/option-multiple-selected-template.html'
          : 'ui-bb-account-selector/option-content-template.html'"
      >
      </a>
    </script>
    <script type="text/ng-template" id="ui-bb-account-selector/option-template.html">
      <a href
        tabindex="{{ $option.disabled ? -1 : 0 }}"
        class="d-block pl-3 py-3 pr-7 bb-account-selector-option"
        data-ng-disabled="$option.disabled"
        data-ng-class="{active: $ctrl.isSelected()}"
        data-ng-include="'ui-bb-account-selector/option-content-template.html'">
      </a>
    </script>
    <script type="text/ng-template" id="ui-bb-account-selector/option-content-template.html">
      <div class="absolute-center-y" data-ng-if="${attrs.multiple}">
        <input type="checkbox"
          value="{{ $option.id }}"
          tabindex="-1"
          data-ng-click="$ctrl.select();$event.stopPropagation()"
          data-ng-checked="$ctrl.isSelected()"
          data-ng-disabled="$option.disabled"
        />
      </div>
      <div data-ng-if="$option.isSelectAll"
        data-ng-class="{ 'ml-6': ${attrs.multiple} }"
        class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between
          bb-account-selector-option-content">
        <div class="d-inline-block" data-ng-bind="$option.label"></div>
        <div class="d-inline-block" data-ng-bind="$option.quantity"></div>
      </div>
      <div data-ng-hide="$option.isSelectAll"
        data-ng-class="{ 'ml-6': ${attrs.multiple} }"
        class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between
          bb-account-selector-option-content">
        <div class="d-inline-block">
          <div><strong data-ng-bind="$option.name"></strong></div>
          <div data-ng-bind="$option.identifier"></div>
        </div>
        <div class="d-inline-block" data-ng-hide="$option.hideAmounts">
          <div data-ng-include="'${FORMAT_AMOUNT_TEMPLATE_URL}'"></div>
        </div>
      </div>
    </script>

    <script type="text/ng-template"
      id="ui-bb-account-selector/option-multiple-selected-template.html"
    >
      <div class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between
          bb-account-selector-option-content row-fluid">
        <div class="d-inline-block col-xs-12 pl-0">
          <div class="col-xs-12 p-0">
            <strong data-ng-if="$option.length === 1" data-ng-bind="$option[0].name"></strong>
            <strong data-ng-if="$option.length > 1">
              {{ $option.length }} {{ $ctrl.labels.selectedAccounts }}
            </strong>
          </div>
          <div class="col-xs-12 col-sm-6 bb-ellipsis p-0">
            <span data-ng-if="$option.length === 1" data-ng-bind="$option[0].identifier"></span>
            <span data-ng-if="$option.length > 1" data-ng-repeat="account in $option">
              {{ account.name }}{{$last ? '' : ', '}}
            </span>
          </div>
        </div>
        <div class="d-inline-block" data-ng-hide="$option.length > 1 || $option[0].hideAmounts">
          <div data-ng-include="'${FORMAT_AMOUNT_TEMPLATE_URL}'"></div>
        </div>
      </div>
    </script>
    
    <script type="text/ng-template" id="${FORMAT_AMOUNT_TEMPLATE_URL}">
      <ui-bb-format-amount 
        data-amount="$option.length ? $option[0].amount : $option.amount"
        data-currency="$option.length ? $option[0].currency : $option.currency"
        data-wrap>
      </ui-bb-format-amount>
    </script>
  `],
  controller: ['$templateCache', '$element', '$attrs', '$scope', controller],
};

export default uiBbAccountSelector;

/**
 * Labels type definition
 * @typedef {Object} Labels
 * @property {String} allAccounts Label for all accounts
 * @property {String} accounts Label for plural accounts
 * @property {String} account Label for single accounts
 * @property {String} noAccounts Label for no accounts
 * @property {String} selectedAccounts Label for selected accounts
 */

/**
 * Labels type definition
 * @typedef {Object} SearchBox
 * @property {String}  minLength Minimum length of search string to apply search
 * @property {Object}  config SearchBox config object
 */
