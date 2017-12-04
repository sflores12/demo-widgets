export default stateContainer => ({
  /**
   * @name ViewModelInitActions
   * @type {object}
   * @inner
   */

  /**
   * @name ViewModelInitActions#afterLoadDone
   * @description Update the `ViewState` after initial loading is done,
   * successfully or unsuccessfully
   * @type {function}
   * @inner
   * @return {void}
   */
  afterLoadDone: stateContainer.createAction(state => ({
    ...state,
    initialLoading: false,
  })),
});
