import { Message, Intent } from './constants';

const SEARCH_MIN_QUERY = 2;
const SEARCH_INPUT_DEBOUNCE = 1000;

const searchActions = {
  CANCEL: 'cancel',
  INPUT: 'input',
};

const debounce = (func, wait, immediate) => {
  let timeout;
  return function debouncedFn(...args) {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

/**
 * @name DEFAULT_MAX_NAV_PAGES
 * @description Defines the default maxNavPages for the accounts page
 * as defined in the widget model.xml
 * @type {number}
 * @inner
 */
const DEFAULT_MAX_NAV_PAGES = 3;

/**
 * @name TransactionsController
 * @ngkey TransactionsController
 * @type {object}
 * @description
 * Transactions widget controller
 */
export default function TransactionsController(
  model,
  hooks,
  widget,
  eventBus,
  bbIntent,
  $window,
  scope,
  viewModel,
  service,
  stateContainer
) {
  /**
   * @description
   * A set of intents that the controller uses or handles.
   *
   * @name TransactionsController#intents
   * @type {object}
   * @inner
   */
  const intents = {};

  /**
   * @name TransactionsController#maxNavPages
   * @type {number} maxNaxPages
   * @inner
   * @description
   * Maximum number of navigation pages to display
   */
  const maxNavPages =
    widget.getLongPreference('bb.transaction.maxNavPages') || DEFAULT_MAX_NAV_PAGES;

  /**
   * @name TransactionsController#dismissTime
   * @type {number}
   * @inner
   *
   * @description
   * Number of seconds to dismiss the notification
   */
  const dismissTime =
    Math.abs(widget.getLongPreference('bb.transaction.notificationDismissTime')) || 3;

  /**
   * @name TransactionsController#loadAllTransactionsInitially
   * @type {boolean}
   * @inner
   *
   * @description
   * Defines whether data should be shown if no account is selected
   */
  const loadAllTransactionsInitially =
    widget.getBooleanPreference('bb.transaction.loadAllTransactionsOnInit');

  /**
   * State selectors
   * @type {object}
   * @inner
   */
  const selectors = {
    transactions: stateContainer.createSelector(
      ({ transactions }) => (transactions.rawData === null ?
        null : hooks.processTransactions(transactions.rawData))
    ),
    searchTransactions: stateContainer.createSelector(
      state => (state.search.rawData === null ?
        null : hooks.processTransactions(state.search.rawData))
    ),
    transaction: stateContainer.createSelector(state => state.transaction.data),
    searching: stateContainer.createSelector(state => state.searching),
    initialLoading: stateContainer.createSelector(state => state.initialLoading),
    loadingTransactions: stateContainer.createSelector(state => state.transactions.loading),
    searchingTransactions: stateContainer.createSelector(state => state.search.loading),
    loading: stateContainer.createSelector(
      state => (state.searching ? state.search.loading : state.transactions.loading)
    ),
    loadedAll: stateContainer.createSelector(state => state.transactions.loadedAll),
    searchedAll: stateContainer.createSelector(state => state.search.loadedAll),
    category: stateContainer.createSelector(state => state.search.category),
    totalCount: stateContainer.createSelector(
      state => (state.searching ? state.search.total : state.transactions.total)
    ),
    error: stateContainer.createSelector(state => state.error),
    product: stateContainer.createSelector(state => state.product.data),
    productId: stateContainer.createSelector(
      state => (state.product.data === null ? -1 : state.product.data.id)
    ),
    paginationType: stateContainer.createSelector(state => state.paginationType),
    size: stateContainer.createSelector(
      state => (state.searching ? state.search.size : state.transactions.size)
    ),
    from: stateContainer.createSelector(
      state => (state.searching ? state.search.from : state.transactions.from)
    ),
    loadFrom: stateContainer.createSelector(state => state.transactions.from),
    searchFrom: stateContainer.createSelector(state => state.search.from),
    orderBy: stateContainer.createSelector(state => state.sort.orderBy),
    direction: stateContainer.createSelector(state => state.sort.direction),
    hasTodayTransactions:
      stateContainer.createSelector(state => state.transactions.hasTodayTransactions),
    today: stateContainer.createSelector(state => state.transactions.today),
    exportFailed: stateContainer.createSelector(state => state.export.exportFailed),
  };

  /**
   * @name TransactionsController#state
   * @description State on transactions
   * @deprecated since 1.10.0. Use `viewModel.getState()` instead.
   * @type {Object}
   */
  const state = {
    get exportTransactionsFailed() { return selectors.exportFailed(); },
    set exportTransactionsFailed(value) {
      if (Boolean(value)) {
        viewModel.export.afterExportError();
      } else {
        viewModel.export.beforeExport();
      }
    },
    export: {
      get hasTodaysTransactions() { return selectors.hasTodayTransactions(); },
      get today() { return selectors.today(); },
    },
    get transactions() { return selectors.transactions(); },
    sort: {
      get orderBy() { return selectors.orderBy(); },
      get direction() { return selectors.direction(); },
    },
    pageParams: {
      get from() { return selectors.from(); },
      get size() { return selectors.size(); },
      get currentPage() { return selectors.from() + 1; },
      get totalItems() { return selectors.totalCount(); },
      maxNavPages,
      get paginationType() { return selectors.paginationType(); },
    },
    get initialLoading() { return selectors.initialLoading(); },
  };

  let loadMorePromise = null;
  let searchMorePromise = null;

  /**
   * @name TransactionsController#filterNullProperties
   * @description Filters out properties with `null` value
   * @type {function}
   * @inner
   * @param {object} obj Object to filter out null properties
   * @return {object} Filtered object
   */
  const filterNullProperties = obj => Object.keys(obj)
    .reduce((acc, prop) => {
      if (obj[prop] !== null) {
        Object.assign(acc, { [prop]: obj[prop] });
      }
      return acc;
    }, {});

  /**
   * @name TransactionsController#getLoadParams
   * @description Returns request parameters for the list request
   * @type {function}
   * @inner
   * @param {LoadRequestParams} combiningParams Parameters to combine with.
   * @return {LoadRequestParams} Request parameters
   */
  const getLoadParams = (combiningParams = {}) => {
    const { transactions, sort } = viewModel.getState();
    const params = {
      from: transactions.from,
      size: transactions.size,
      productId: selectors.productId(),
    };

    if (sort.orderBy && sort.direction) {
      Object.assign(params, {
        orderBy: sort.orderBy,
        direction: sort.direction,
      });
    }

    Object.assign(params, combiningParams);

    return hooks.processRequestParams(params);
  };

  /**
   * @name TransactionsController#getSearchParams
   * @description Returns request parameters for the search request
   * @type {function}
   * @inner
   * @param {SearchRequestParams} combiningParams Parameters to combine with.
   * @return {SearchRequestParams} Request parameters
   */
  const getSearchParams = (combiningParams = {}) => {
    const { search: searchState, sort } = viewModel.getState();
    let params = {
      from: searchState.from,
      size: searchState.size,
      query: searchState.query,
      bookingDateLessThan: searchState.bookingDateLessThan,
      bookingDateGreaterThan: searchState.bookingDateGreaterThan,
      amountGreaterThan: searchState.amountGreaterThan,
      amountLessThan: searchState.amountLessThan,
      creditDebitIndicator: searchState.creditDebitIndicator,
      category: searchState.category,
      productId: selectors.productId(),
    };

    if (sort.orderBy && sort.direction) {
      Object.assign(params, {
        orderBy: sort.orderBy,
        direction: sort.direction,
      });
    }

    Object.assign(params, combiningParams);
    params = filterNullProperties(params);

    return hooks.processRequestParams(params);
  };

  /**
   * @name TransactionsController#isFilterCriteriaEmpty
   *
   * @description
   * Check if search and filter parameters are empty
   *
   * @inner
   *
   * @type {function}
   * @param {SearchRequestParams} params Search parameters
   * @returns {boolean} True if any parameter is set, false if none
   */
  const isFilterCriteriaEmpty = params =>
    !Boolean(Object.keys(params).filter(key => params[key]).length);

  /**
   * @description
   * Searches by a given query
   *
   * @public
   * @name TransactionsController#search
   * @type {function}
   * @param {string} query Search query
   * @returns {Promise.<void>} Promise
   */
  function search(query) {
    return service.search(getSearchParams({ query, from: 0 }));
  }

  /**
   * @description
   * Resets search
   *
   * @public
   * @name TransactionsController#cancelSearch
   * @type {function}
   * @return {void}
   */
  function cancelSearch() {
    viewModel.search.cancel();
  }

  /**
   * @description
   * Searches by given filter parameters
   *
   * @public
   * @name TransactionsController#applySearchFilter
   * @type {function}
   * @param {object} params Search filter params
   * @returns {Promise.<void>} Promise
   */
  function applySearchFilter(params) {
    if (isFilterCriteriaEmpty(params)) {
      cancelSearch();
      return Promise.resolve();
    }

    return service.search(getSearchParams({
      from: 0,
      query: params.query,
      bookingDateLessThan: params.toDate,
      bookingDateGreaterThan: params.fromDate,
      amountGreaterThan: params.amountFrom,
      amountLessThan: params.amountTo,
      creditDebitIndicator: params.creditDebitIndicator,
    }));
  }

  /**
   * @description
   * Loads more search results and appends them to the search result.
   *
   * @public
   * @name TransactionsController#searchMore
   * @type {function}
   * @returns {null|Promise.<void>} Promise or null if search is finished
   */
  function searchMore() {
    if (selectors.searchingTransactions()) {
      return searchMorePromise;
    }

    const params = getSearchParams({ from: selectors.searchFrom() + 1 });
    searchMorePromise = service.search(params)
      .catch(() => {})
      .then(() => {
        searchMorePromise = null;
      });

    return searchMorePromise;
  }

  /**
   * @description
   * Handles loading or searching transactions
   *
   * @inner
   * @name TransactionsController#loadTransactions
   * @type {function}
   * @param {LoadRequestParams|SearchRequestParams} params Request params
   * @returns {Promise.<void>} Promise
   */
  function loadTransactions(params) {
    if (selectors.searching()) {
      return service.search(getSearchParams(params));
    }
    return service.load(getLoadParams(params));
  }

  /**
   * @description
   * Loads more transactions and append them to the transaction's list
   *
   * @public
   * @name TransactionsController#loadMore
   * @type {function}
   * @param {?function} done Callback function for `ui-bb-load-more-ng` component
   * @returns {null|Promise.<void>} Promise or null if loading is finished
   */
  function loadMore(done) {
    if (selectors.loadingTransactions() || selectors.loadedAll() || selectors.error()) {
      return loadMorePromise;
    }

    const doneFn = done || (() => {});
    let params = getLoadParams({ from: selectors.loadFrom() + 1 });
    params = hooks.extendLoadMoreParams(params);

    loadMorePromise = service.load(params)
      .catch(() => {})
      .then(() => {
        loadMorePromise = null;
        doneFn();
      });

    return loadMorePromise;
  }

  /**
   * @description
   * Change page of displayed accounts.
   *
   * @name TransactionsController#changePage
   * @type {function}
   * @param {object} params
   * @param {number} params.currentPage Transactions page to load
   * @returns {Promise.<void>} A Promise
   */
  const changePage = params =>
    loadTransactions({ from: params.currentPage - 1 });

  /**
   * @description
   * Handles account select
   *
   * @inner
   * @name TransactionsController#onProductSelect
   * @param {object} payload Object with selected product
   * @type {function}
   */
  function onProductSelect(payload) {
    if (payload.product && selectors.productId() === payload.product.id) {
      return;
    }

    viewModel.product.afterSelectProductSuccess(payload.product);

    service.load(getLoadParams({ from: 0 }));
    service.checkTodayTransactions(selectors.productId());
  }

  /**
   * @description
   * Handles transaction select
   *
   * @public
   * @name TransactionsController#onTransactionClick
   * @type {function}
   * @param {object} selectedTransaction Object with selected transaction
   * @fires bb.event.transaction.selected
   */
  function onTransactionClick(selectedTransaction) {
    service.storeCurrentTransaction(selectedTransaction);
    eventBus.publish(Message.TRANSACTION_SELECTED, {
      transaction: selectedTransaction,
    });
  }

  /**
   * @description
   * Handles search field input
   *
   * @see search
   *
   * @inner
   * @name TransactionsController#onTransactionSearchInput
   * @type {function}
   */
  const onTransactionSearchInput = debounce(query => {
    if (query.length >= SEARCH_MIN_QUERY) {
      search(query);
    }
  }, SEARCH_INPUT_DEBOUNCE);

  /**
   * @description
   * Handles transaction select
   *
   * @inner
   * @name TransactionsController#onTransactionSelect
   * @param {object} data Selected transaction object
   * @type {function}
   */
  function onTransactionSelect(data) {
    viewModel.transaction.beforeStore(data.transaction);
  }

  /**
   * @description
   * Handles the intent to show the product details for the given product
   *
   * @public
   * @name TransactionsController#showProductDetails
   * @type {function}
   * @param {string} productId The id of the product
   */
  const showProductDetails = productId => {
    // Check if intent is available.
    if (intents.showProductDetails) {
      intents.showProductDetails(productId);
    }
  };

  /**
   * @description
   * Handles transaction search input
   *
   * @inner
   * @name TransactionsController#onTransactionSearch
   * @param {object} detail Search input object
   * @type {function}
   */
  const onTransactionSearch = detail => {
    if (detail.action === searchActions.INPUT) {
      onTransactionSearchInput(detail.text);
    } else if (detail.action === searchActions.CANCEL) {
      cancelSearch();
    }
    scope.$digest();
  };

  /**
   * @name TransactionsController#handleViewCategoryIntent
   * @description Handles ViewCategory intent
   * @inner
   * @type {function}
   * @param {object} payload ViewCategory intent payload
   */
  const handleViewCategoryIntent = payload => {
    if (payload && !!payload.category) {
      const params = {
        productId: payload.productId || null,
        category: payload.category || null,
        bookingDateGreaterThan: payload.bookingDateGreaterThan || null,
        bookingDateLessThan: payload.bookingDateLessThan || null,
      };

      service.search(getSearchParams(params))
        .then(() => { service.loadCurrentTransaction(); });
    } else {
      cancelSearch();
    }
  };

  /**
   * @name TransactionsController#handleChangeTransactionCategoryIntent
   * @description Handles ChangeTransactionCategory intent
   * @inner
   * @type {function}
   * @param {object} payload ChangeTransactionCategory intent payload
   */
  const handleChangeTransactionCategoryIntent = payload =>
    service.updateTransactionCategory(payload)
      .then(viewModel.list.afterUpdateSuccess)
      .catch(viewModel.list.afterUpdateError);

  /**
   * @name TransactionsController#dismissNotification
   * @description Helper method to remove a notification from state
   * @type {function}
   * @param {number} notificationId Id of the notification that should be dismissed
   */
  const dismissNotification = notificationId =>
    viewModel.notification.removeNotification(notificationId);

  /**
   * @description
   * Trigger change transaction category intent
   *
   * @name TransactionsController#changeTransactionCategory
   * @type {function}
   * @param {object} transactionObj - The transaction object
   */
  const changeTransactionCategory = transactionObj =>
    intents.changeTransactionCategory(transactionObj);

  /**
   * @description
   * Adds subscriptions to bus events
   *
   * @inner
   * @name TransactionsController#bindEvents
   * @type {function}
   */
  function bindEvents() {
    eventBus.subscribe(Message.PRODUCT_SELECTED, onProductSelect);
    eventBus.subscribe(Message.TRANSACTION_SELECTED, onTransactionSelect);
    $window.addEventListener(Message.SEARCH, ({ detail }) => onTransactionSearch(detail));
  }

  /**
   * @description
   * Inits the bbIntent and adds intent handlers.
   * 'view.account.category.transactions' intent can be used to
   * update load query params with new productId, category, bookingDateGreaterThan
   * and bookingDateLessThan params
   *
   * @inner
   * @name TransactionsController#initIntent
   * @type {function}
   */
  function initIntent() {
    // Deprecated
    // TODO: remove in 2.10.1
    bbIntent.handle(Intent.VIEW_CATEGORY_TRANSACTIONS, handleViewCategoryIntent);

    bbIntent.handle(Intent.VIEW_CATEGORY_DBIT_TRANSACTIONS, handleViewCategoryIntent);
    bbIntent.handle(Intent.VIEW_CATEGORY_CRDT_TRANSACTIONS, handleViewCategoryIntent);

    intents.showProductDetails = bbIntent.create(Intent.SHOW_PRODUCT_DETAILS);
    intents.changeTransactionCategory = bbIntent.create(
      Intent.CHANGE_TRANSACTION_CATEGORY, handleChangeTransactionCategoryIntent
    );

    bbIntent.init(() => {});
  }

  /**
   * @description
   * Widget initialization logic - called automatically in the angular cycle.
   *
   * @name TransactionsController#$onInit
   * @type {function}
   */
  function $onInit() {
    if (!viewModel.getState().initialLoading) {
      return Promise.resolve(bindEvents());
    }

    return service.setupSelectedProduct(hooks.isDefaultProductFirst())
      .then(() => {
        if (selectors.productId() === -1 && !loadAllTransactionsInitially) {
          return Promise.reject(bindEvents());
        }
        return bindEvents();
      })
      .then(initIntent)
      .then(() => {
        /**
         * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
         * and will be removed with the update to widget collection 3 (WC3)
         */
        eventBus.publish(Message.CXP_ITEM_LOADED, {
          id: widget.getId(),
        });

        eventBus.publish(Message.BB_ITEM_LOADED, {
          id: widget.getId(),
        });
      })
      .then(() => service.load(getLoadParams()))
      // TODO: Show currencies selector in filter form when search service supports it
      // then(() => service.getCurrencies())
      .then(() => {
        // Don't include these methods in the main init chain
        service.checkTodayTransactions(selectors.productId());
        service.loadCurrentTransaction();
      })
      .then(() => viewModel.initList.afterLoadDone())
      .catch(() => viewModel.initList.afterLoadDone());
  }

  /**
   * @name TransactionsController#onSort
   * @type {function}
   * @description
   * Loads sorted list of payments
   * @param {string} orderBy Column key to sort
   * @param {string} direction Sort direction
   * @param {object} header Config object reference. Deprecated.
   */
  const onSort = (orderBy, direction, header) => {
    // The following line should be part of the extension
    Object.assign(header, {
      sortable: {
        ...header.sortable,
        direction,
      },
    });

    loadTransactions({ orderBy, direction });
  };

  /**
   * @name TransactionsController#exportToFile
   * @type {function}
   *
   * @description
   * Exports filtered list of payments to a file in specified format
   * @param {string} format Specified format (CSV, PDF)
   */
  const exportToFile = format => {
    const params = {
      productId: selectors.productId(),
      exportFormat: format,
    };

    if (selectors.searching()) {
      if (!selectors.searchTransactions().length) {
        viewModel.export.afterExportError();
        return;
      }

      const { search: searchState } = viewModel.getState();
      Object.assign(params, {
        query: searchState.query,
        bookingDateLessThan: searchState.bookingDateLessThan,
        bookingDateGreaterThan: searchState.bookingDateGreaterThan,
        amountGreaterThan: searchState.amountGreaterThan,
        amountLessThan: searchState.amountLessThan,
        creditDebitIndicator: searchState.creditDebitIndicator,
      });
    } else {
      if (!selectors.hasTodayTransactions()) {
        viewModel.export.afterExportError();
        return;
      }

      // Export payments for today if no filter applied
      const today = selectors.today();
      Object.assign(params, {
        bookingDateLessThan: today,
        bookingDateGreaterThan: today,
      });
    }

    service.export(filterNullProperties(params));
  };

  return {
    /**
     * @description
     * The list of transactions
     *
     * @type {module:data-bb-transactions-ng.TransactionsData.TransactionItemGet[]}
     * May be empty if the transactions aren't loaded.
     * @name TransactionsController#transcations
     * @deprecated since 1.10.0. Use `viewModel.getState().transactions.rawData` instead.
     */
    get transactions() { return selectors.transactions(); },
    /**
     * @description
     * Selected product info
     *
     * @type {module:model-bb-transactions-ng.Product}
     * @name TransactionsController#product
     * @deprecated since 1.10.0. Use `viewModel.getState().product.data` instead.
     */
    get product() { return selectors.product(); },
    /**
     * @description
     * Loading flag which is true while the list of transactions is loading
     *
     * @type {boolean}
     * @name TransactionsController#loading
     * @deprecated since 1.10.0. Use `viewModel.getState().transactions.loading`
     * or `viewModel.getState().search.loading` instead.
     */
    get loading() { return selectors.loading(); },
    /**
     * @description
     * Last occured error
     *
     * @type {module:ui-bb-model-errors.ModelError}
     * @name TransactionsController#loadingError
     * @deprecated since 1.10.0. Use `viewModel.getState().error` instead.
     */
    get loadingError() { return selectors.error(); },
    /**
     * @description
     * Flag that indicates whether all the transactions have been loaded
     *
     * @type {boolean}
     * @name TransactionsController#allTransactionsLoaded
     * @deprecated since 1.10.0. Use `viewModel.getState().transactions.loadedAll`
     * or `viewModel.getState().search.loadedAll` instead.
     */
    get allTransactionsLoaded() { return selectors.loadedAll(); },
    /**
     * @description
     * Searching flag which is true while user is searching transactions
     *
     * @type {boolean}
     * @name TransactionsController#searching
     * @deprecated since 1.10.0. Use `viewModel.getState().searching` instead.
     */
    get searching() { return selectors.searching(); },
    /**
     * @description
     * Loading flag which is true while the list of transactions is loading
     *
     * @type {boolean}
     * @name TransactionsController#searchLoading
     * @deprecated since 1.10.0. Use `viewModel.getState().search.loading` instead.
     */
    get searchLoading() { return selectors.searchingTransactions(); },
    /**
     * @description
     * Search error
     *
     * @type {module:ui-bb-model-errors.ModelError}
     * @name TransactionsController#searchLoadingError
     * @deprecated since 1.10.0. Use `viewModel.getState().error` instead.
     */
    get searchLoadingError() { return selectors.error(); },
    /**
     * @description
     * The list of found transactions.
     *
     * @type {array.<module:data-bb-transactions-ng.TransactionsData.TransactionItemGet>}
     * @name TransactionsController#searchTransactions
     * @deprecated since 1.10.0. Use `viewModel.getState().search.rawData` instead.
     */
    get searchTransactions() { return selectors.searchTransactions(); },
    /**
     * @description
     * Check is search filter applied
     *
     * @type {boolean} search status
     * @name TransactionsController#searchTransactions
     * @deprecated since 1.10.0. Use `viewModel.getState().searching` instead.
     */
    get isSearching() { return selectors.searching(); },
    /**
     * @description
     * Flag that indicates whether all the transactions have been loaded during a search
     *
     * @type {boolean}
     * @name TransactionsController#searchAllTransactionsLoaded
     * @deprecated since 1.10.0. Use `viewModel.getState().search.loadedAll` instead.
     */
    get searchAllTransactionsLoaded() { return selectors.searchedAll(); },
    /**
     * @description
     * Selected transaction info
     *
     * @type {object}
     * @name TransactionsController#transcation
     * @deprecated since 1.10.0. Use `viewModel.getState().transaction.data` instead.
     */
    get transaction() { return selectors.transaction(); },
    /**
     * @description
     * Show all available transactions
     *
     * @type {boolean}
     * @name TransactionsController#showAllTransactions
     * @deprecated since 1.10.0. Use `viewModel.getState().search.category` instead.
     */
    get showAllTransactions() { return selectors.category() !== null; },
    /**
     * @description
     * Show all available currencies
     *
     * @type {Array}
     * @name TransactionsController#currencies
     */
    get currencies() { return viewModel.getState().currencies.data; },
    cancelSearch,
    loadMore,
    search,
    applySearchFilter,
    searchMore,
    eventBus,
    onTransactionClick,
    /**
     * @description Contains transaction error
     * @name TransactionsController#errors
     * @type {object}
     * @deprecated since 1.10.0. Use `viewModel.getState().error` instead.
     */
    errors: {
      get transactionsError() { return selectors.error(); },
    },
    state,
    onSort,
    changePage,
    exportToFile,
    dismissTime,
    loadAllTransactionsInitially,
    showProductDetails,
    changeTransactionCategory,
    dismissNotification,
    /* Lifecycle hooks */
    $onInit,
  };
}
