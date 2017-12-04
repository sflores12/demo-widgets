import { uiError } from './helpers';

export default (stateContainer, hooks) => ({
  /**
   * @name ViewModelProductActions
   * @type {object}
   * @inner
   */

  /**
   * @name ViewModelProductActions#afterSelectProductSuccess
   * @description Update the `ViewState` after new product selected
   * @type {function}
   * @inner
   * @param {object|null} product New Product object
   * @return {void}
   */
  afterSelectProductSuccess: stateContainer.createAction((state, product) => ({
    ...state,
    error: null,
    searching: false,
    product: {
      data: product ? hooks.processProductSelected(product) : null,
    },
    currencies: [],
    transactions: {
      ...state.transactions,
      rawData: null,
      loading: false,
      loadedAll: false,
      total: 0,
      from: 0,
      today: '',
      hasTodayTransactions: false,
    },
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
    },
  })),

  /**
   * @name ViewModelProductActions#afterSelectProductError
   * @description Update the `ViewState` after unsuccessful product selection
   * @type {function}
   * @inner
   * @param {module:lib-bb-model-errors.ModelError} error Response error
   * @return {void}
   */
  afterSelectProductError: stateContainer.createAction((state, error) => ({
    ...state,
    error: uiError(error),
  })),
});
