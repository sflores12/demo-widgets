/**
 * @name ProductSummaryService
 * @type {object}
 * @ngkey widget-bbm-product-summary-ng:service
 * @description
 * The service encapsulates the core functionality of the Mobile Product summary
 * Widget. It co-ordinates the communication of data from the `Model`
 * with the communication with the user by updating the {@link ViewState}.
 *
 * Asynchronous methods update the {@link ViewState} in 3 potential
 * stages; "before", "success", and "error", to allow the view to
 * provide feedback to the user.
 */

/**
 * @name createProductSummaryService
 * @type {function}
 * @param {module:model-bb-product-summary-ng.productSummaryModel} model ProductSummary model
 * @param {ViewModel} viewModel
 * @param {module:lib-bb-widget.Widget} widget
 * @return {ProductSummaryService}
 * @inner
 */
export default (model, viewModel) => ({
  /**
   * @name ProductSummaryService#loadProducts
   * @type {function}
   * @description
   * Fetch products
   * update the {@link ViewState} to display them.
   * @param {boolean} forceLoad
   * @return {Promise}
   */
  loadProducts: (forceLoad = false) => {
    viewModel.list.beforeLoad();

    return model.load(forceLoad)
      .then(({ productKinds, total }) => {
        viewModel.list.afterLoadSuccess({
          productKinds,
          total,
        });
      })
      .catch(error => {
        viewModel.list.afterLoadError(error);

        throw error;
      });
  },
});
