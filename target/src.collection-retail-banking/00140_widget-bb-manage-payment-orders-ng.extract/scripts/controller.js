/**
 * @name ManagePaymentOrderController
 * @type {object}
 * @description
 * Controller for managing payment order
 *
 * @usage
 * <div ng-controller="ManagePaymentOrderController as $ctrl">
 *   <!-- ... -->
 * </div>
 */
export default function ManagePaymentOrderController(
  widget,
  hooks,
  viewModel,
  service
) {
  const $ctrl = this;

  const getLoadParams = (combiningParams = {}) => {
    const params = Object.assign(viewModel.getState().paymentOrders.requestParams, combiningParams);

    return hooks.processRequestParams(params);
  };

  /**
   * @description
   * Handles loading payment orders
   *
   * @public
   * @name PortfolioSummaryController#load
   * @type {function}
   * @param {number} params
   * @returns {promise.<array>}
   */
  const load = (params = {}) => service.load(getLoadParams(params));

  /**
   * @description
   * Handles loading more payment orders
   *
   * @public
   * @name PortfolioSummaryController#load
   * @type {function}
   * @param {number} doneFn - load more callback
   * Load portfolios
   * @returns {promise.<array>}
   */
  const loadMore = (doneFn = () => {}) => {
    load({ from: viewModel.getState().paymentOrders.requestParams.from + 1 })
      .catch(doneFn())
      .then(doneFn());
  };

  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name ManagePaymentOrderController#$onInit
   * @type {function}
   * @returns
   *  {Promise.<module:model-bb-payment-orders-ng.Payments, module:lib-bb-model-errors.ModelError>}
   *  A promise
   */
  const $onInit = () => load()
    .then(() => viewModel.initList.afterLoadDone())
    .catch(() => viewModel.initList.afterLoadDone());

  Object.assign($ctrl, {
    get state() {
      return viewModel.getState();
    },
    loadMore,

    $onInit,
  });
}
