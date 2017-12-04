import angular from 'vendor-bb-angular';

import { POPUP_TEMPLATE_URL, MATCH_TEMPLATE_URL } from './constants';
/**
 * @name uiBbAutocompleteSearchController
 * @type {function}
 *
 * @description
 * Modal instance controller
 *
 * @param {object} element Angular element object
 * @param {object} templateCache Angular template cache service
 * @param {object} timeout Angular timeout service
 * @param {object} Promise Angular Promise service
 */
export default function uiBbAutocompleteSearchController(
  element,
  templateCache,
  timeout,
  Promise,
  document
) {
  const ctrl = this;

  const ngModelCtrl = element.controller('ngModel');
  const typeahead = angular.element(element[0].querySelector('[data-role="typeahead"]'));
  const listWrapper = angular.element(element[0].querySelector('[data-role="list-wrapper"]'));

  const searchMinLength = ctrl.searchMinLength !== undefined ? ctrl.searchMinLength : 3;

  const defaultSearchBoxConfig = {
    iconClasses: 'fa fa-chevron-down',
    hideButton: false,
  };

  const defaultResultState = {
    data: [],
    totalItems: 0,
    hasMore: false,
    isLoaded: false,
    isLoading: false,
    isLoadingMore: false,
    ngModel: null,
  };

  /**
   * @name uiBbAutocompleteSearchController#state
   *
   * @description
   * Component state object
   *
   * @type {Object}
   */
  const state = {
    isOpen: false,
    isFocusLost: false,
    search: {
      value: ctrl.ngModel || null,
      minLength: searchMinLength,
      isSearchPrevented: true,
      isSubmitPrevented: false,
    },
    result: Object.assign({}, defaultResultState),
    searchBox: Object.assign({}, defaultSearchBoxConfig, ctrl.searchBoxConfig),
  };

  /**
   * @name uiBbAutocompleteSearchController#normalizeValue
   *
   * @description
   * Normalizes search value
   *
   * @inner
   * @type {Function}
   * @param {String} value Dirty search value
   * @return {String} Normalized search value
   */
  const normalizeValue = (value) => (value && value.trim()) || '';

  /**
   * @name uiBbAutocompleteSearchController#enableSearchMinLength
   *
   * @description
   * Disables minimun search value length
   *
   * @inner
   * @type {Function}
   */
  const disableSearchMinLength = () => {
    state.search.minLength = 0;
  };

  /**
   * @name uiBbAutocompleteSearchController#enableSearchMinLength
   *
   * @description
   * Enables minimun search value length
   *
   * @inner
   * @type {Function}
   */
  const enableSearchMinLength = () => {
    state.search.minLength = searchMinLength;
  };

  /**
   * @name uiBbAutocompleteSearchController#updateSearchValue
   *
   * @description
   * Sets component search value
   *
   * @inner
   * @type {Function}
   * @param {String} searchValue Search value
   */
  const updateSearchValue = (searchValue) => {
    state.search.value = normalizeValue(searchValue);
  };

  /**
   * @name uiBbAutocompleteSearchController#setResultModelValue
   *
   * @description
   * Sets typeahead directive model value
   *
   * @inner
   * @type {Function}
   * @param {String} searchValue Search value
   */
  const updateResultModelValue = (searchValue) => {
    typeahead.controller('ngModel').$setViewValue(searchValue);
  };

  /**
   * @name uiBbAutocompleteSearchController#updateModelValue
   *
   * @description
   * Updates component model value
   *
   * @inner
   * @type {Function}
   * @param {String} searchValue Search value
   */
  const updateModelValue = (searchValue) => {
    ngModelCtrl.$setViewValue(searchValue);
  };

  /**
   * @name uiBbAutocompleteSearchController#triggerResultModel
   *
   * @description
   * Triggers result model
   *
   * @inner
   * @type {Function}
   */
  const triggerResultModel = () => {
    const resultNgModelCtrl = typeahead.controller('ngModel');

    // Those two action will open result popup
    resultNgModelCtrl.$$lastCommittedViewValue = `${state.search.value} `;
    resultNgModelCtrl.$setViewValue(state.search.value);
  };

  /**
   * @name uiBbAutocompleteSearchController#getPreloadedResult
   *
   * @description
   * Gets existing result data.
   *
   * @inner
   * @type {Function}
   * @returns {Object} A Promise with current search result
   */
  const getPreloadedResult = () => Promise.resolve(state.result.data);

  /**
   * @name uiBbAutocompleteSearchController#requestResult
   *
   * @description
   * Retrieve search result
   *
   * @inner
   * @type {Function}
   * @param {Object} options Request configuration object
   * @returns {Promise} A Promise with retrieved data
   */
  const requestResult = (options) => {
    if (state.result.isLoaded && !options.isLoadMore) {
      return getPreloadedResult();
    }

    return ctrl.loadResult({ options })
      .then((result) => {
        Object.assign(state.result, result, { isLoaded: true });

        return state.result.data;
      });
  };

  /**
   * @name uiBbAutocompleteSearchController#getResult
   *
   * @description
   * Gets search result data
   *
   * @inner
   * @type {Function}
   * @param {String} searchValue Search string
   * @returns {Promise} A Promise with processed data
   */
  const getResult = (searchValue) => requestResult({ searchQuery: normalizeValue(searchValue) });

  /**
   * @name uiBbAutocompleteSearchController#triggerResult
   *
   * @description
   * Trigger result dropdown
   *
   * @inner
   * @type {Function}
   */
  const triggerResult = () => {
    disableSearchMinLength();

    timeout(() => {
      triggerResultModel();
      enableSearchMinLength();
    });
  };

  /**
   * @name uiBbAutocompleteSearchController#resetResult
   *
   * @description
   * Resets result state
   *
   * @inner
   * @type {Function}
   */
  const resetResult = () => {
    state.result.isLoaded = false;
    updateResultModelValue('');
  };

  /**
   * @name uiBbAutocompleteSearchController#onLoadMore
   *
   * @description
   * Loads next page of result.
   *
   * @inner
   * @type {Function}
   */
  const onLoadMore = () => {
    if (!state.result.isLoading && !state.result.isLoadingMore && state.result.hasMore) {
      state.result.isLoadingMore = true;
      requestResult({ searchQuery: normalizeValue(state.search.value), isLoadMore: true })
        .then(() => {
          state.result.isLoadingMore = false;
          state.isFocusLost = true;

          triggerResult();
        });
    }
  };

  /**
   * @name uiBbAutocompleteSearchController#onSearch
   *
   * @description
   * Calls when search value was changed
   *
   * @type {Function}
   * @param {String} search Search string
   */
  const onSearch = (searchValue) => {
    resetResult();

    if (!state.search.isSearchPrevented) {
      updateResultModelValue(searchValue);
      updateModelValue(searchValue);
    }
  };

  /**
   * @name uiBbAutocompleteSearchController#onSubmit
   *
   * @description
   * Calls when search value was submitted
   *
   * @type {Function}
   */
  const onSubmit = () => {
    if (!state.isOpen && !state.search.isSubmitPrevented) {
      triggerResult();
    }
  };

  /**
   * @name uiBbAutocompleteSearchController#onClear
   *
   * @description
   * Calls when search value was set to empty
   *
   * @type {Function}
   */
  const onSearchClear = () => {
    state.search.isSearchPrevented = true;
    state.search.isSubmitPrevented = true;
    ctrl.onClear();
  };

  /**
   * @name uiBbAutocompleteSearchController#onMatchSelect
   *
   * @description
   * Calls when one of the matches was selected
   *
   * @type {Function}
   * @param {Object} $item Match item object
   * @param {Object} $model Match item model object
   * @param {String} $label Match item label
   * @param {String} $event Event object
   */
  const onMatchSelect = ($item, $model, $label) => {
    state.search.isSearchPrevented = true;
    state.search.isSubmitPrevented = true;
    updateSearchValue($label);
    updateModelValue($label);
    ctrl.onSelect({ $model, $label });
  };

  /**
   * @name uiBbAutocompleteSearchController#getResultMessage
   *
   * @description
   * Gets message string according to result state.
   *
   * @inner
   * @type {Function}
   * @returns {String} Translated message string
   */
  const getResultMessage = () => {
    if (state.result.data.length === 1) return ctrl.messages.result;
    if (state.result.data.length > 1) return `${state.result.totalItems} ${ctrl.messages.results}`;

    return ctrl.messages.noResults;
  };

  /**
   * @name uiBbAutocompleteSearchController#getResultMessage
   *
   * @description
   * Show no results message.
   *
   * @inner
   * @type {Function}
   * @returns {String} Translated message string
   */
  const showEmptyMessage = () => state.result.isLoaded && state.isEmpty && ctrl.messages.noResults;

  /**
   * @name uiBbAutocompleteSearchController#expandResultScope
   *
   * @description
   * Adds missing functionality to uib-typeahead like load more result when scrolling and loading
   * indicalor.
   *
   * @inner
   * @type {Function}
   */
  const expandResultScope = () => {
    const resultScope = listWrapper.children().isolateScope();
    const list = listWrapper.find('ui-bb-list');

    resultScope.$watch(() => resultScope.active, (newValue, oldValue) => {
      if (state.isFocusLost) {
        resultScope.active = oldValue;
        state.isFocusLost = false;
      }

      if (newValue === 0 && oldValue === -1) {
        timeout(() => {
          list[0].scrollTop = 0;
        });
      }
    });

    Object.assign(resultScope, {
      isDisplayed() { return resultScope.isOpen() || showEmptyMessage(); },
      isLoading() { return state.result.isLoading || state.result.isLoadingMore; },
      getResultMessage,
      onLoadMore,
    });
  };

  /**
   * @name uiBbAutocompleteSearchController#$onInit
   *
   * @description
   * Angular $onInit lifecycle hook
   *
   * @type {Function}
   */
  const $onInit = () => {
    if (ctrl.popupTemplateUrl) {
      const popupTemplate = templateCache.get(ctrl.popupTemplateUrl);
      templateCache.put(POPUP_TEMPLATE_URL, popupTemplate);
    }

    if (ctrl.matchTemplateUrl) {
      const matchTemplate = templateCache.get(ctrl.matchTemplateUrl);
      templateCache.put(MATCH_TEMPLATE_URL, matchTemplate);
    }

    document.on('click keyup', (event) => {
      if (element[0] !== event.target && !element[0].contains(event.target)) {
        state.search.isSearchPrevented = true;

        if (state.result.isLoaded) {
          resetResult();
        }
      } else {
        state.search.isSearchPrevented = false;
      }

      state.search.isSubmitPrevented = false;
    });
  };

  /**
   * @name uiBbAutocompleteSearchController#$onChanges
   *
   * @description
   * Angular $onChanges lifecycle hook. Checks if new introduced value is different from current
   * hold value and updates component internal state value.
   *
   * @type {Function}
   */
  const $onChanges = ({ ngModel }) => {
    if (ngModel && ngModel.currentValue !== ngModel.previousValue) {
      updateSearchValue(ngModel.currentValue);
    }
  };

  /**
   * @name uiBbAutocompleteSearchController#$postLink
   *
   * @description
   * Angular $postLink lifecycle hook
   *
   * @type {Function}
   */
  const $postLink = () => {
    timeout(() => {
      expandResultScope();
    });
  };

  Object.assign(ctrl, {
    state,
    listWrapper,
    getResult,
    onSearch,
    onSubmit,
    onSearchClear,
    onMatchSelect,
    /* lifecycle hooks */
    $onInit,
    $postLink,
    $onChanges,
  });
}
