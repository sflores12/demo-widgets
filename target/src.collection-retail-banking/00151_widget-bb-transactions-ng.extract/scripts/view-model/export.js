export default stateContainer => ({
  /**
   * @name ViewModelExportActions
   * @type {object}
   * @inner
   */

  /**
   * @name ViewModelExportActions#beforeExport
   * @description Update the `ViewState` before transactions export
   * @type {function}
   * @inner
   * @return {void}
   */
  beforeExport: stateContainer.createAction(state => ({
    ...state,
    export: {
      exportFailed: false,
    },
  })),

  /**
   * @name ViewModelExportActions#afterExportError
   * @description Update the `ViewState after failed transactions export
   * @type {function}
   * @inner
   * @return {void}
   */
  afterExportError: stateContainer.createAction(state => ({
    ...state,
    export: {
      exportFailed: true,
    },
  })),
});
