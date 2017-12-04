export default stateContainer => ({
  /**
   * @name ViewModelTransactionActions
   * @type {object}
   * @inner
   */

  /**
   * @name ViewModelTransactionActions#afterLoadSuccess
   * @description Update the `ViewState` after successful transaction load
   * @type {function}
   * @inner
   * @param {object} data Transaction object
   * @return {void}
   */
  afterLoadSuccess: stateContainer.createAction((state, data) => ({
    ...state,
    transaction: {
      data,
    },
  })),

  /**
   * @name ViewModelTransactionActions#beforeStore
   * @description Update the `ViewState` before new transaction will be stored
   * @type {function}
   * @inner
   * @param {object} data New transaction object
   * @return {void}
   */
  beforeStore: stateContainer.createAction((state, data) => ({
    ...state,
    transaction: {
      data,
    },
  })),
});
