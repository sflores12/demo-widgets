import { uiError } from './helpers';


export default stateContainer => ({
  /**
   * @name ViewModelCurrenciesActions#beforeLoad
   * @description Update the `ViewState` before loading currencies
   * @type {function}
   * @inner
   * @return {void}
   */
  beforeLoad: stateContainer.createAction(state => ({
    ...state,
    error: null,
    currencies: {
      ...state.currencies,
      loading: true,
    },
  })),

  /**
   * @name ViewModelCurrenciesActions#afterLoadSuccess
   * @description Update the `ViewState` after successful currencies load
   * @type {function}
   * @inner
   * @param {array.<module:data-bb-payment-orders-ng.PaymentOrdersData.Currency>} data
   * Currencies array
   * @return {void}
   */
  afterLoadSuccess: stateContainer.createAction((state, data) => ({
    ...state,
    currencies: {
      loading: false,
      data,
    },
  })),

  /**
   * @name ViewModelCurrenciesActions#afterLoadError
   * @description Update the `ViewState` after unsuccessful currencies load
   * @type {function}
   * @inner
   * @param {module:lib-bb-model-errors.ModelError} error Response error
   * @return {void}
   */
  afterLoadError: stateContainer.createAction((state, error) => ({
    ...state,
    error: uiError(error),
    currencies: {
      data: [],
      loading: false,
    },
  })),
});
