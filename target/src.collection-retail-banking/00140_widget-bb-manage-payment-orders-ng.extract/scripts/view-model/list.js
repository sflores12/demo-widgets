import { uiError } from './helpers';

export default (stateContainer, hooks) => ({
  /**
   * @name ViewModelListActions
   * @type {object}
   * @inner
   */

  /**
   * @name ViewModelListActions#beforeLoad
   * @description Update the `ViewState` before loading payments orders
   * @type {function}
   * @inner
   * @return {void}
   */
  beforeLoad: stateContainer.createAction(state => ({
    ...state,
    error: null,
    paymentOrders: {
      ...state.paymentOrders,
      loading: true,
    },
  })),

  /**
   * @name ViewModelListActions#afterLoadSuccess
   * @description Update the `ViewState` after successfully loading payments orders
   * @type {function}
   * @inner
   * @param {PaymentOrdersResponse} response Payment orders load response
   * @return {void}
   */
  afterLoadSuccess: stateContainer.createAction((state, response) => {
    const rawData = [...state.paymentOrders.rawData || [], ...response.rawData];

    return {
      ...state,
      paymentOrders: {
        ...state.paymentOrders,
        rawData,
        data: hooks.processPaymentOrders(rawData),
        loading: false,
        loadedAll: response.rawData.length < state.paymentOrders.requestParams.size,
        totalCount: response.totalCount,
        requestParams: response.requestParams,
      },
    };
  }),

  /**
   * @name ViewModelListActions#afterLoadError
   * @description Update the `ViewState` after unsuccessful payment orders load
   * @type {function}
   * @inner
   * @param {module:lib-bb-model-errors.ModelError} error Response error
   * @return {void}
   */
  afterLoadError: stateContainer.createAction((state, error) => ({
    ...state,
    error: uiError(error),
    paymentOrders: {
      ...state.paymentOrders,
      loading: false,
    },
  })),
});

/**
 * @typedef {object} PaymentOrdersResponse
 * @property {object[]} rawData Loaded transactions array
 * @property {number} totalCount Total number of transactions
 * @property {LoadRequestParams} requestParams Request parameters object
 */

/**
 * @typedef {object} LoadRequestParams
 * @property {number} from Page number to load
 * @property {number} size Page size to load
 */
