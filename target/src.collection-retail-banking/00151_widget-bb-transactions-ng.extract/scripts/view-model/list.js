import { uiError, hasTodayTransactions } from './helpers';

export default stateContainer => ({
  /**
   * @name ViewModelListActions
   * @type {object}
   * @inner
   */

  /**
   * @name ViewModelListActions#beforeLoad
   * @description Update the `ViewState` before loading transactions
   * @type {function}
   * @inner
   * @return {void}
   */
  beforeLoad: stateContainer.createAction(state => ({
    ...state,
    error: null,
    transactions: {
      ...state.transactions,
      loading: true,
    },
  })),

  /**
   * @name ViewModelListActions#afterLoadSuccess
   * @description Update the `ViewState` after successfully loading transactions
   * @type {function}
   * @inner
   * @param {TransactionsResponse} response Transactions load response
   * @return {void}
   */
  afterLoadSuccess: stateContainer.createAction((state, response) => ({
    ...state,
    transactions: {
      ...state.transactions,
      loading: false,
      loadedAll: response.rawData.length < state.transactions.size,
      rawData: state.paginationType === 'load-more' ?
        [...state.transactions.rawData || [], ...response.rawData] :
        response.rawData,
      total: response.totalCount,
      from: response.requestParams.from,
    },
    sort: {
      orderBy: response.requestParams.orderBy || null,
      direction: response.requestParams.direction || null,
    },
  })),

  /**
   * @name ViewModelListActions#afterLoadError
   * @description Update the `ViewState` after unsuccessful transactions load
   * @type {function}
   * @inner
   * @param {module:lib-bb-model-errors.ModelError} error Response error
   * @return {void}
   */
  afterLoadError: stateContainer.createAction((state, error) => ({
    ...state,
    error: uiError(error),
    transactions: {
      ...state.transactions,
      loading: false,
    },
  })),

  /**
   * @name ViewModelListActions#beforeTodayTransactionsLoad
   * @description Update the `ViewState` before loading today transactions
   * @type {function}
   * @inner
   * @param {string} today Today date in the `yyyy-MM-dd` format
   * @return {void}
   */
  beforeTodayTransactionsLoad: stateContainer.createAction((state, today) => ({
    ...state,
    transactions: {
      ...state.transactions,
      today,
      hasTodayTransactions: false,
    },
  })),

  /**
   * @name ViewModelListActions#afterTodayTransactionsLoadSuccess
   * @description Update the `ViewState` after successfully loading today transactions
   * @type {function}
   * @inner
   * @param {object[]} data Today transactions
   * @return {void}
   */
  afterTodayTransactionsLoadSuccess: stateContainer.createAction((state, data) => ({
    ...state,
    transactions: {
      ...state.transactions,
      hasTodayTransactions: hasTodayTransactions(data, state.transactions.today),
    },
  })),

  /**
   * @name ViewModelListActions#afterTodayTransactionsLoadError
   * @description Update the `ViewState` after unsuccessful today transactions load
   * @type {function}
   * @inner
   * @param {module:lib-bb-model-errors.ModelError} error Response error
   * @return {void}
   */
  afterTodayTransactionsLoadError: stateContainer.createAction((state, error) => ({
    ...state,
    error: uiError(error),
  })),

  /**
   * @name ViewModelListActions#afterUpdateSuccess
   * @description Update the `ViewState` after successful transaction item update
   * @type {function}
   * @inner
   * @param {object} item Updated transaction item
   * @return {void}
   */
  afterUpdateSuccess: stateContainer.createAction((state, item) => ({
    ...state,
    transactions: {
      ...state.transactions,
      rawData: state.transactions.rawData.map(data => (data.id === item.id ? item : data)),
    },
    notifications: [
      ...state.notifications, {
        id: Date.now(),
        message: 'notification.transaction.category.change.success',
        level: 'success',
      },
    ],
  })),

  /**
   * @name ViewModelListActions#afterUpdateError
   * @description Update the `ViewState` after unsuccessful transaction item update
   * @type {function}
   * @inner
   * @return {void}
   */
  afterUpdateError: stateContainer.createAction(state => ({
    ...state,
    notifications: [
      ...state.notifications, {
        id: Date.now(),
        message: 'notification.transaction.category.change.fail',
        level: 'danger',
      },
    ],
  })),
});

/**
 * @typedef {object} TransactionsResponse
 * @property {object[]} rawData Loaded transactions array
 * @property {number} totalCount Total number of transactions
 * @property {LoadRequestParams} requestParams Request parameters object
 */

/**
 * @typedef {object} LoadRequestParams
 * @property {number} from Page number to load
 * @property {number} size Page size to load
 * @property {string} productId Product ID of transactions to load
 * @property {?string} orderBy Order transactions by property
 * @property {?string} direction Transactions order direction
 */
