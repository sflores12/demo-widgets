/**
 * @name ProductSummaryController
 * @ngkey ProductSummaryController
 * @type {object}
 * @description
 * ProductSummary widget controller
 */
export default function ProductSummaryController(service) {
  /**
   * @description
   * Loads the products.
   *
   * @name ProductSummaryController#loadProducts
   * @type {function}
   *
   * @returns {Promise}
   */
  const loadProducts = () => service.loadProducts();

  /**
   * @description
   * Widget initialization logic - called automatically during the angular cycle.
   *
   * @name ProductSummaryController#$onInit
   * @type {function}
   */
  const $onInit = () => (
    loadProducts()
  );

  return {
    /* Lifecycle hooks */
    $onInit,
  };
}
