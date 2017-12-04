/**
 * @module widget-bb-spending-ng
 * @name SpendingController
 *
 * @description
 * Spending
 */

import { E_AUTH, E_CONNECTIVITY, E_USER } from 'lib-bb-model-errors';
import Message from './message';
import { Intent } from './constants';

const {
  PRODUCT_SELECTED,
  SPENDING_LOAD_FAILED,
  PERIOD_START_CHANGED,
  PERIOD_END_CHANGED,
} = Message;

export default function SpendingController(bus, hooks, model, bbIntent) {
  const $ctrl = this;

  /**
   * @description
   * A set of intents that the controller uses or handles.
   *
   * @name intents
   * @type {Object}
   * @inner
   */
  const intents = {};

   /**
   * @description
   * The intent to select a spending item
   *
   * @name intents#selectSpendingItem
   * @type {function}
   * @inner
   */
  intents.selectSpendingItem = bbIntent.create(Intent.SELECT_SPENDING_ITEM, () => {});

  bbIntent.init(() => {});

  /**
   * Converts error code to error message translation key
   *
   * @inner
   * @name errorMessage
   * @type {function}
   * @param {string} code Error code
   * @returns {string} Error message translation key
   */
  const errorMessage = (code) => ({
    [E_AUTH]: 'error.load.auth',
    [E_CONNECTIVITY]: 'error.load.connectivity',
    [E_USER]: 'error.load.user',
    [model.E_PARAMS]: model.E_PARAMS,
  }[code] || 'error.load.unexpected');

  /**
   * @description
   * Setter for the selected spending item.
   * It creates an intent to select a spending item 'view.account.category.transactions'
   * that can be handled by transaction widget
   *
   * @name setSelectedSpendingItem
   * @param {any} item selected item
   * @type {function}
   * @returns {void}
   */
  const setSelectedSpendingItem = (item) => {
    $ctrl.selectedSpendingItem = hooks.onSelectedItemChanged(item);
    intents.selectSpendingItem($ctrl.selectedSpendingItem);
  };

  /**
   * Updates spending list based on selected product
   *
   * @inner
   * @name updateSpending
   * @type {function}
   * @returns {Promise.<void>}
   */
  const updateSpending = () => model.validateSpendingParameters(hooks.onSpendingUpdate({
    arrangementId: $ctrl.selectedProduct ? $ctrl.selectedProduct.id : null,
    periodStartDate: $ctrl.periodStartDate,
    periodEndDate: $ctrl.periodEndDate,
  }))
  .then(model.loadSpending)
  .then(loaded => {
    $ctrl.items = hooks.processSpendingItems(loaded);
    $ctrl.series = hooks.processSpendingSeries(model.transformToSeries(loaded), loaded);
    setSelectedSpendingItem(null);
  })
  .catch(error => {
    $ctrl.error = hooks.processLoadError(errorMessage(error.code));
    bus.publish(SPENDING_LOAD_FAILED, { error });
  });

  /**
   * Updates selected product
   *
   * @inner
   * @name updateProductSelected
   * @type {function}
   * @param {any} selectedProduct selected product to be used
   */
  const updateProductSelected = selectedProduct => {
    $ctrl.selectedProduct = hooks.processSelectedProduct(selectedProduct);
    model.setSelectedProduct($ctrl.selectedProduct);
  };

  /**
   * Adds subscriptions to bus events
   * @inner
   * @name bindEvents
   * @type {function}
   */
  function bindEvents() {
    bus.subscribe(PRODUCT_SELECTED, selectedProduct => {
      updateProductSelected(selectedProduct.product);
      updateSpending();
    });
    bus.subscribe(PERIOD_START_CHANGED, (startDate) => {
      $ctrl.periodStartDate = startDate;
      updateSpending();
    });
    bus.subscribe(PERIOD_END_CHANGED, (endDate) => {
      $ctrl.periodEndDate = endDate;
      updateSpending();
    });
  }

  /**
   * Initializes period data via hooks
   *
   * @inner
   * @name initPeriodData
   * @type {function}
   */
  const initPeriodData = () => {
    $ctrl.periodStartDate = hooks.defaultPeriodStart();
    $ctrl.periodEndDate = hooks.defaultPeriodEnd();
  };

  /**
   * Updates the products list for the ui-bb-account-selector.
   *
   * @inner
   * @name updateProductsList
   * @type {function}
   * @returns {Promise.<void>}
   */
  const updateProductsList = (getFromStorage) => model.getProductsArray(getFromStorage)
    .then((products) => {
      $ctrl.products = hooks.processProductsList(products);
      return $ctrl.products;
    })
    .catch(error => {
      $ctrl.error = errorMessage(error.code);
      bus.publish(SPENDING_LOAD_FAILED, { error });
    });

  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name $onInit
   * @type {function}
   * @returns {Promise.<void>}
   */
  const $onInit = () => {
    $ctrl.isLoading = true;
    return updateProductsList()
    .then(() => model.getSelectedProduct())
    .then(updateProductSelected)
    .then(initPeriodData)
    .then(updateSpending)
    .then(bindEvents)
    .then(() => { $ctrl.isLoading = false; });
  };

  /**
   * @description
   * Handler to be called on period start date change
   *
   * @name onPeriodStartDateChanged
   * @type {function}
   * @param {string} startDate Date as string in format yyyy-mm-dd
   * @returns {void}
   */
  const onPeriodStartDateChanged = (startDate) => {
    $ctrl.periodStartDate = startDate;
    bus.publish(PERIOD_START_CHANGED, $ctrl.periodStartDate);
  };

  /**
   * @description
   * Handler to be called on period end date change
   *
   * @name onPeriodEndDateChanged
   * @type {function}
   * @param {string} endDate Date as string in format yyyy-mm-dd
   * @returns {void}
   */
  const onPeriodEndDateChanged = (endDate) => {
    $ctrl.periodEndDate = endDate;
    bus.publish(PERIOD_END_CHANGED, $ctrl.periodEndDate);
  };

  /**
   * @description
   * Handler to be used on product selection, is using
   * selected product value from {@link Hooks.processSelectedProduct} hook
   *
   * @name onProductSelected
   * @type {function}
   * @returns {void}
   */
  const onProductSelected = () => {
    bus.publish(PRODUCT_SELECTED, $ctrl.selectedProduct);
  };

  Object.assign($ctrl, {
    $onInit,

    /**
     * @description
     * The selected product for spending evaluation.
     *
     * @name selectedProduct
     * @type {module:model-bb-product-summary-ng.Product}
     */
    selectedProduct: null,

    /**
     * @description
     * List of products to be used by account selector for spending evaluation.
     * Is recieved from {@link Hooks.processProductsList}
     *
     * @name products
     * @type {module:model-bb-product-summary-ng.ProductKinds}
     */
    products: [],

    /**
     * @description
     * The value returned from {@link Hooks.processItems} hook.
     * null if the items aren't loaded.
     *
     * @name items
     * @type {module:model-bb-spending-ng.Spending}
     */
    items: null,

    /**
     * @description
     * The value returned from {@link Hooks.processSpendingSeries} hook.
     * Formatted for use within chart UI component.
     * null if the data isn't loaded
     *
     * @name series
     * @type {object}
     */
    series: null,

    /**
     * @description
     * Date of the spending evaluation period start
     *
     * @name periodStartDate
     * @type {string}
     */
    periodStartDate: null,

    /**
     * @description
     * Date of the spending evaluation period end
     *
     * @name periodEndDate
     * @type {string}
     */
    periodEndDate: null,

    /**
     * @description
     * selected spending item
     *
     * @name selectedSpendingItem
     * @type {any}
     */
    selectedSpendingItem: null,

    /**
     * @description
     * Setter for the selected spending item
     *
     * @name setSelectedSpendingItem
     * @param {any} item selected item
     * @type {function}
     * @returns {void}
     */
    setSelectedSpendingItem,

    /**
     * @description
     * Loading status
     *
     * @name isLoading
     * @type {boolean}
     */
    isLoading: false,
    onPeriodStartDateChanged,
    onPeriodEndDateChanged,
    onProductSelected,

    /**
     * @description
     * The error encountered when attempting to fetch from the model
     *
     * @name SpendingController#error
     * @type {module:lib-bb-model-errors.ModelError}
     */
    error: null,
  });
}
