import { CONTROLLER_KEY, POPUP_TEMPLATE_URL, MATCH_TEMPLATE_URL } from './constants';

/**
 * @name uiBBAutocompleteSearchComponent
 * @type {object}
 *
 * @property {String} ngModel Component model value
 * @property {String} disabled Controls whether or not component disabled or not
 * @property {Object} searchBoxConfig Configuration object for search box component
 * @property {Number} searchMinLength Minimum search string length for show dropdown result
 * @property {Function} loadResult Function to retrieve search result. It gets an object with:
 * - searchValue - Search query string
 * - isLoadMore - Indicates that Function should load next page of results
 * Function should return a Promise with object with properties:
 * - data - array of results
 * - totalItems - Total count of results
 * - hasMore - Controls whether or not load service has more results
 * @property {String} labelKey Property name of result item that will be used for show in search
 * field after select item
 * @property {Function} onSelect Function that calls after select result item
 * @property {Function} onClear Function that calls after input field was cleared
 * @property {Messages} messages Messages object
 * @property {String?} popupTemplateUrl Custom template url for popup element.
 * The referenced template should contain the element with attribute 'data-role="list-wrapper"'
 * for append matched results to it.
 * @property {String?} matchTemplateUrl Custom template url for match element
 */

/**
 * Labels type definition
 * @typedef {Object} Messages
 * @property {String} noResults Translated message when no one results found
 * @property {String} result Translated message when one result found
 * @property {String} results Translated prefix for message when more then one result found
 */
const component = {
  bindings: {
    ngModel: '<',
    disabled: '=',
    searchBoxConfig: '<',
    searchMinLength: '<',
    loadResult: '&',
    labelKey: '@',
    onSelect: '&',
    onClear: '&',
    messages: '<',
    popupTemplateUrl: '@?',
    matchTemplateUrl: '@?',
  },
  controller: CONTROLLER_KEY,
  template: `
    <div class="dropdown open bb-autocomplete-search"
      data-role="typeahead"
      data-ng-model="$ctrl.state.result.model"
      data-uib-typeahead="item as item[$ctrl.labelKey] for item in $ctrl.getResult($viewValue)"
      data-typeahead-min-length="$ctrl.state.search.minLength"
      data-typeahead-is-open="$ctrl.state.isOpen"
      data-typeahead-loading="$ctrl.state.isLoading"
      data-typeahead-no-results="$ctrl.state.isEmpty"
      data-typeahead-on-select="$ctrl.onMatchSelect($item, $model, $label, $event)"
      data-typeahead-popup-template-url="${POPUP_TEMPLATE_URL}"
      data-typeahead-template-url="${MATCH_TEMPLATE_URL}"
      data-typeahead-append-to="$ctrl.listWrapper">
      <ui-bb-search-box-ng class="autocomplete-search-input-box"
        data-ng-model="$ctrl.state.search.value"
        data-disabled="$ctrl.disabled"
        data-config="$ctrl.state.searchBox"
        data-on-change="$ctrl.onSearch(search)"
        data-on-submit="$ctrl.onSubmit(search)"
        data-on-clear="$ctrl.onSearchClear()"
        data-is-loading="$ctrl.state.isLoading"
        data-forced-submit="true">
      </ui-bb-search-box-ng>
      <div class="bb-autocomplete-search-list-wrapper"
        data-role="list-wrapper">
      </div>
    </div>

    <script type="text/ng-template" id="${POPUP_TEMPLATE_URL}">
      <ul class="dropdown-menu bb-autocomplete-search-dropdown bb-autocomplete-search-list"
        data-ng-show="isDisplayed()">
        <ui-bb-list data-on-scroll-to-end="onLoadMore()"
          class="list-group m-0 bb-autocomplete-search-list-inner">
          <li class="list-group-item bb-autocomplete-search-message"
            data-ng-class="{ big: !matches.length }">
            <span data-ng-bind="getResultMessage()"></span>
          </li>
          <li class="list-group-item bb-autocomplete-search-list-item"
            data-ng-repeat="match in matches track by $index"
            data-ng-class="{ active: isActive($index) }"
            data-ng-mouseenter="selectActive($index)"
            data-ng-click="selectMatch($index)">
            <div data-uib-typeahead-match
              data-index="$index"
              data-match="match"
              data-query="query"
              data-template-url="templateUrl">
            </div>
          </li>
          <li data-ng-show="isLoading()"
            class="list-group-item bb-autocomplete-search-message">
            <span class="ui-bb-autocomplete-search-spinner center-block"></span>
          </li>
        </ui-bb-list>
      </ul>
    </script>

    <script type="text/ng-template" id="${MATCH_TEMPLATE_URL}">
      <a href
        tabindex="-1"
        data-ng-bind-html="match.label | uibTypeaheadHighlight:query"
        class="px-3">
      </a>
    </script>
  `,
};

export default component;
