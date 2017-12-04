export default (model, viewModel, hooks) => ({
  /**
   * @name TransactionsService#load
   * @type {function}
   * @description
   * Fetch a `page` of `transactions` from the model and
   * update the {@link ViewState} to display them.
   * @param {LoadRequestParams} params Request params
   * @return {Promise.<void>}
   */
  load: (params) => {
    viewModel.list.beforeLoad();

    return model.getPaymentOrders(params)
      .then(raw => {
        viewModel.list.afterLoadSuccess({
          rawData: raw.data,
          data: hooks.processPaymentOrders(raw.data),
          totalCount: raw.totalCount,
          requestParams: params,
        });
      })
      .catch(error => {
        viewModel.list.afterLoadError(error);

        throw error;
      });
  },
});
