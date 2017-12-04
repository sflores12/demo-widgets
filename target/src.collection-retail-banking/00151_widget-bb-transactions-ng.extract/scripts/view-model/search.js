import { uiError } from './helpers';

export default stateContainer => ({
  /**
   * @name ViewModelSearchActions
   * @type {object}
   * @inner
   */

  /**
   * @name ViewModelSearchActions#beforeSearch
   * @description Update the `ViewState` before search transactions
   * @type {function}
   * @inner
   * @param {SearchRequestParams} params Search request parameters
   * @return {void}
   */
  beforeSearch: stateContainer.createAction((state, params) => ({
    ...state,
    searching: true,
    error: null,
    search: {
      ...state.search,
      loading: true,
      query: params.query || null,
      category: params.category || null,
    },
  })),

  /**
   * @name ViewModelSearchActions#afterSearchSuccess
   * @description Update the `ViewState` after successful transactions search
   * @type {function}
   * @inner
   * @param {TransactionsSearchResponse} response Search response
   * @return {void}
   */
  afterSearchSuccess: stateContainer.createAction((state, response) => {
    const query = response.requestParams.query || null;

    if (!state.searching || state.search.query !== query) {
      return state;
    }

    return {
      ...state,
      search: {
        ...state.search,
        loading: false,
        loadedAll: response.rawData.length < state.search.size,
        rawData: state.paginationType === 'load-more' && !!response.requestParams.from ?
          [...state.search.rawData || [], ...response.rawData] :
          response.rawData,
        total: response.totalCount,
        from: response.requestParams.from,
        bookingDateLessThan: response.requestParams.bookingDateLessThan || null,
        bookingDateGreaterThan: response.requestParams.bookingDateGreaterThan || null,
        amountGreaterThan: response.requestParams.amountGreaterThan || null,
        amountLessThan: response.requestParams.amountLessThan || null,
        creditDebitIndicator: response.requestParams.creditDebitIndicator || null,
      },
      sort: {
        orderBy: response.requestParams.orderBy || null,
        direction: response.requestParams.direction || null,
      },
    };
  }),

  /**
   * @name ViewModelSearchActions#afterSearchError
   * @description Update the `ViewState` after unsuccessful transactions search
   * @type {function}
   * @inner
   * @param {module:lib-bb-model-errors.ModelError} error Response error
   * @return {void}
   */
  afterSearchError: stateContainer.createAction((state, error) => ({
    ...state,
    error: uiError(error),
    search: {
      ...state.search,
      loading: false,
    },
  })),

  /**
   * @name ViewModelSearchActions#cancel
   * @description Update the `ViewState` when transactions search canceled
   * @type {function}
   * @inner
   * @return {void}
   */
  cancel: stateContainer.createAction(state => ({
    ...state,
    error: null,
    searching: false,
    search: {
      ...state.search,
      rawData: null,
      loading: false,
      loadedAll: false,
      total: 0,
      from: 0,
      query: null,
      bookingDateLessThan: null,
      bookingDateGreaterThan: null,
      amountGreaterThan: null,
      amountLessThan: null,
      creditDebitIndicator: null,
      category: null,
    },
  })),
});

/**
 * @typedef {object} TransactionsSearchResponse
 * @property {object[]} rawData Search transactions array
 * @property {number} totalCount Total number of found transactions
 * @property {SearchRequestParams} requestParams Request parameters object
 */

/**
 * @typedef {object} SearchRequestParams
 * @property {number} from Page number to load
 * @property {number} size Page size to load
 * @property {string} productId Product ID of transactions to load
 * @property {?string} orderBy Order transactions by property
 * @property {?string} direction Transactions order direction
 * @property {?string} query Query search parameter
 * @property {?string} bookingDateLessThan Maximum booking date search parameter
 * @property {?string} bookingDateGreaterThan Minimum booking date search parameter
 * @property {?string} amountGreaterThan Minimum amount search parameter
 * @property {?string} amountLessThan Maximum amount search parameter
 * @property {?string} creditDebitIndicator Credit or debit search parameter
 * @property {?string} category Transaction category search parameter
 */
