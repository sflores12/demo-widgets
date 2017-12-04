import FORMAT_AMOUNT_TEMPLATE_URL from './constants';

/**
 * @name uiBbAccountSelector
 * @type {function}
 *
 * @description
 * Account selector controller
 *
 * @param {object} templateCache
 * @param {object} element
 * @param {object} attrs
 * @param {object} scope
 */
export default function controller(templateCache, element, attrs, scope) {
  const ctrl = this;

  const dropdown = element.find('ui-bb-dropdown-select').children();

  const optionTemplateName = 'ui-bb-account-selector/option-template.html';
  const selectAllTemplateName = 'ui-bb-account-selector/select-all-template.html';

  const state = {
    isOpen: false,
    accounts: {
      data: [],
      get totalItems() { return ctrl.totalItems || state.accounts.data.length; },
      get hasMore() { return state.accounts.data.length < state.accounts.totalItems; },
      hasMultipleCurrencies: false,
      isLoading: false,
      isLoadingMore: false,
      selected: ctrl.multiple ? [] : null,
    },
    search: {
      value: '',
      minLength: 3,
      config: {
        showIcon: true,
        hideButton: true,
      },
    },
    allAccountsOption: false,
  };

  const getQuantityMessage = (quantity) =>
    `${quantity} ${ctrl.labels[quantity > 1 ? 'accounts' : 'account']}`;

  const getAllAccountsOption = () => ({
    isSelectAll: true,
    label: ctrl.labels.allAccounts,
    get quantity() { return getQuantityMessage(state.accounts.totalItems); },
  });

  const normalizeSearchValue = (value) => (value && value.trim()) || '';

  const updateModelValue = (newValue) => {
    if (ctrl.multiple && newValue && newValue.$item
      && newValue.$item.some(item => item.isSelectAll === true)) {
      Object.assign(ctrl.model, {
        $item: newValue.$item.length > state.accounts.data.length
          ? []
          : state.accounts.data,
      });
    } else {
      ctrl.model = newValue;
    }

    return ctrl.model;
  };

  const updateAccounts = (newValue) => {
    Object.assign(state.accounts, {
      data: newValue,
      hasMultipleCurrencies: newValue ? newValue.map(product => product.currency)
        .filter((val, i, arr) => arr.indexOf(val) === i).length > 1 : false,
      isLoading: false,
      isLoadingMore: false,
      isSearching: false,
      isLoaded: true,
    });
  };

  const throwModelValue = (value) => {
    let selection = value;
    if (ctrl.multiple && !Array.isArray(selection)) {
      selection = selection ? [selection] : [];
    }
    state.accounts.selected = selection || (ctrl.selectAll ? state.allAccountsOption : null);
  };

  const loadAccounts = (options = {}) => {
    state.accounts.isLoaded = false;
    state.accounts.isLoading = true;
    Object.assign(options, {
      searchQuery: normalizeSearchValue(state.search.value),
    });
    ctrl.onAccountsLoad({ options });
  };

  const setupFocusOnSearch = () => {
    scope.$watch(() => dropdown.hasClass('open'), (newValue) => {
      if (newValue) {
        dropdown.find('ui-bb-search-box-ng').find('input')[0].focus();

        if (!state.accounts.isLoaded) {
          loadAccounts();
        }
      }
    });
  };

  /**
   * @name uiBbAccountSelector#onChange
   *
   * @description
   * Calls when account was selected
   *
   * @type {Function}
   * @param {Object} item Selected account
   */
  const onChange = (item) => {
    state.search.value = '';
    state.accounts.isLoaded = false;
    ctrl.ngChange(updateModelValue(item));
  };

  /**
   * @name uiBbAccountSelector#onSearch
   *
   * @description
   * Search callback
   *
   * @type {Function}
   */
  const onSearch = () => {
    if (state.search.value && state.search.value.length >= state.search.minLength) {
      state.accounts.isSearching = true;
      loadAccounts();
    }

    // Avoid infinite spinner issue
    if (state.search.value && state.search.value.length <= state.search.minLength) {
      state.accounts.isSearching = false;
    }

    // Search is cleared
    if (state.search.value === '' || state.search.value === null) {
      ctrl.onClear();
    }
  };

  /**
   * @name uiBbAccountSelector#onLoadMore
   *
   * @description
   * LoadMore callback
   *
   * @type {Function}
   */
  const onLoadMore = () => {
    if (!state.accounts.isLoading && !state.accounts.isLoadingMore && state.accounts.hasMore) {
      state.accounts.isLoadingMore = true;
      loadAccounts({ isLoadMore: true });
    }
  };

  /**
   * @name uiBbAccountSelector#onSearchBoxClick
   *
   * @description
   * Calls on search box click
   *
   * @type {Function}
   * @param {Object} event fired event
   */
  const onSearchBoxClick = (event) => {
    event.stopPropagation();
  };

  /**
   * @name uiBbAutocompleteSearchController#$onChanges
   *
   * @description
   * Angular $onChanges lifecycle hook
   *
   * @type {Function}
   */
  const $onChanges = ({ model, accounts }) => {
    if (accounts) {
      updateAccounts(accounts.currentValue);
    }
    if (model) {
      throwModelValue(model.currentValue);
    }

    if (ctrl.multiple && (model || accounts)) {
      Object.assign(ctrl, {
        selectAll: ctrl.multicurrency !== false || !state.accounts.hasMultipleCurrencies,
      });

      const selectedCurrency = ((state.accounts.selected || [])[0] || {}).currency;
      state.accounts.data = (state.accounts.data || []).map(item => Object.assign(item, {
        disabled: !ctrl.selectAll && (!item.currency
          || (selectedCurrency && item.currency !== selectedCurrency)),
      }));
    }
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
    Object.assign(ctrl, {
      selectAll: ctrl.selectAll || ctrl.multiple,
    });

    if (ctrl.customTemplateId) {
      const optionTemplate = templateCache.get(ctrl.customTemplateId);
      templateCache.put(optionTemplateName, optionTemplate);
    }

    if (ctrl.formatAmountTemplateUrl) {
      const formatAmountTemplate = templateCache.get(ctrl.formatAmountTemplateUrl);
      templateCache.put(FORMAT_AMOUNT_TEMPLATE_URL, formatAmountTemplate);
    }

    if (ctrl.selectAll) {
      state.allAccountsOption = getAllAccountsOption();

      if (ctrl.selectAllTemplateId) {
        const selectAllTemplate = templateCache.get(ctrl.selectAllTemplateId);
        templateCache.put(selectAllTemplateName, selectAllTemplate);
      }
    }

    if (ctrl.searchBox) {
      setupFocusOnSearch();

      if (ctrl.searchBox.minLength) {
        state.search.minLength = ctrl.searchBox.minLength;
      }

      if (ctrl.searchBox.config) {
        Object.assign(state.search.config, ctrl.searchBox.config);
      }
    }

    throwModelValue(ctrl.model);
  };

  Object.assign(ctrl, {
    state,
    onChange,
    onSearch,
    onLoadMore,
    onSearchBoxClick,
    /* lifecycle hooks */
    $onChanges,
    $onInit,
  });
}
