/**
 * @module widget-bb-turnovers-ng
 * @name TurnoversController
 *
 * @description
 * Turnovers
 */

import { E_AUTH, E_CONNECTIVITY, E_USER } from 'lib-bb-model-errors';
import Message from './message';
import { INTERVAL } from './constants';

const {
  PRODUCT_SELECTED,
  PRODUCTS_SELECTED,
  PERIOD_START_CHANGED,
  PERIOD_END_CHANGED,
  TURNOVERS_LOAD_FAILED,
} = Message;

export default function TurnoversController(bus, hooks, helpers, model) {
  const $ctrl = this;

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
   * Updates turnovers list based on selected product
   *
   * @inner
   * @name updateTurnovers
   * @type {function}
   * @returns {Promise.<void>}
   */
  const updateTurnovers = () => model.validateTurnoversParameters(hooks.onTurnoversUpdate({
    arrangementIds: $ctrl.selectedProducts.map(product => product.id),
    periodStartDate: $ctrl.periodStartDate,
    periodEndDate: $ctrl.periodEndDate,
    intervalDuration: $ctrl.intervalDuration,
    intervalStartDay: $ctrl.intervalStartDay,
  }))
  .then(model.loadTurnovers)
  .then(loaded => {
    $ctrl.error = null;
    $ctrl.data = hooks.processTurnoverResponse(loaded);
    $ctrl.series = hooks.processTurnoverSeries(model.transformToSeries(loaded), loaded);
  })
  .catch(error => {
    $ctrl.error = hooks.processLoadError(errorMessage(error.code));
    bus.publish(TURNOVERS_LOAD_FAILED, { error });
  });

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
      $ctrl.error = null;
      $ctrl.products = hooks.processProductsList(products);
      return $ctrl.products;
    })
    .catch(error => {
      $ctrl.error = errorMessage(error.code);
      bus.publish(TURNOVERS_LOAD_FAILED, { error });
    });

  /**
   * Updates selected product
   *
   * @inner
   * @name updateProductsSelected
   * @type {function}
   * @param {module:model-bb-product-summary-ng.Product[]} selectedProducts Products to select
   */
  const updateProductsSelected = selectedProducts => {
    $ctrl.selectedProducts = hooks.processSelectedProducts(selectedProducts);
    // if this widget doesn't do the change in selection there is no need to update storage
    if (!model.isFirstProductDefault()) {
      return;
    }

    if (model.isMultipleAccount()) {
      model.setSelectedProducts($ctrl.selectedProducts);
    } else {
      model.setSelectedProduct($ctrl.selectedProducts[0]);
    }
  };

  /**
   * @description
   * Handler to be called on period start date change
   *
   * @name onPeriodStartDateChanged
   * @type {function}
   * @returns {void}
   */
  const onPeriodStartDateChanged = () => {
    bus.publish(PERIOD_START_CHANGED, $ctrl.periodStartDate);
  };

  /**
   * @description
   * Handler to be called on period end date change
   *
   * @name onPeriodEndDateChanged
   * @type {function}
   * @returns {void}
   */
  const onPeriodEndDateChanged = () => {
    bus.publish(PERIOD_END_CHANGED, $ctrl.periodEndDate);
  };

  /**
   * @description
   * Handler to be used on product selection, is using first item
   * returned from {@link Hooks.processSelectedProducts} hook
   *
   * @name onProductSelected
   * @type {function}
   * @returns {void}
   */
  const onProductSelected = () => {
    bus.publish(PRODUCT_SELECTED, {
      product: $ctrl.selectedProducts[0],
    });
  };

  /**
   * @description
   * Handler to be used on products selection, is using
   * selected products value from {@link Hooks.processSelectedProducts} hook
   *
   * @name onProductsSelected
   * @type {function}
   * @returns {void}
   */
  const onProductsSelected = () => {
    bus.publish(PRODUCTS_SELECTED, {
      products: $ctrl.selectedProducts,
    });
  };

  /**
   * Reads product selection from storage
   *
   * @inner
   * @name initProductSelection
   * @type {function}
   */
  const initProductSelection = () => {
    if (model.isMultipleAccount()) {
      return model.getSelectedProducts()
        .then(updateProductsSelected)
        .then(() => {
          if (model.isFirstProductDefault()) {
            onProductsSelected();
          }
        });
    }

    return model.getSelectedProduct()
      .then(selected => updateProductsSelected([selected]));
  };

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
    $ctrl.intervalDuration = hooks.defaultInterval(INTERVAL);
    $ctrl.intervalStartDay = hooks.defaultStartDay();
  };

  /**
   * Adds subscriptions to bus events
   * @inner
   * @name bindEvents
   * @type {function}
   */
  function bindEvents() {
    bus.subscribe(PRODUCT_SELECTED, selection => {
      updateProductsSelected([selection.product]);
      updateTurnovers();
    });
    bus.subscribe(PRODUCTS_SELECTED, selection => {
      helpers.debounce(() => {
        updateProductsSelected(selection.products);
        updateTurnovers();
      }, hooks.accountSelectionDebounce());
    });
    bus.subscribe(PERIOD_START_CHANGED, updateTurnovers);
    bus.subscribe(PERIOD_END_CHANGED, updateTurnovers);
  }

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
      .then(initProductSelection)
      .then(initPeriodData)
      .then(updateTurnovers)
      .then(bindEvents)
      .then(() => { $ctrl.isLoading = false; });
  };

  Object.assign($ctrl, {
    $onInit,

    /**
     * @description
     * The value returned from {@link Hooks.processTurnoverResponse} hook.
     * null if the data isn't loaded.
     *
     * @name data
     * @type {module:model-bb-turnovers-ng.Turnover}
     */
    data: null,

    /**
     * @description
     * The value returned from {@link Hooks.processTurnoverSeries} hook.
     * Formatted for use within chart UI component.
     * null if the data isn't loaded
     *
     * @name series
     * @type {module:model-bb-turnovers-ng.BBSeries}
     */
    series: null,

    /**
     * @description
     * The product selection for turnovers evaluation
     *
     * @name selectedProducts
     * @type {module:model-bb-product-summary-ng.Product[]}
     */
    selectedProducts: [],

    /**
     * @description
     * List of products to be used by account selector for turnovers evaluation.
     * Is recieved from {@link Hooks.processProductsList}
     *
     * @name products
     * @type {module:model-bb-product-summary-ng.Product[]}
     */
    products: [],
    onProductSelected,
    onProductsSelected,
    onPeriodStartDateChanged,
    onPeriodEndDateChanged,

    /**
     * @description
     * Date of the turnovers evaluation period start
     *
     * @name periodStartDate
     * @type {string}
     */
    periodStartDate: null,

    /**
     * @description
     * Date of the turnovers evaluation period end
     *
     * @name periodEndDate
     * @type {string}
     */
    periodEndDate: null,

    /**
     * @description
     * Length of each periodic interval
     *
     * @name intervalDuration
     * @type {string}
     */
    intervalDuration: null,

    /**
     * @description
     * Day of a month to start turnover interval
     *
     * @name intervalStartDay
     * @type {number}
     */
    intervalStartDay: null,

    /**
     * @description
     * Loading status
     *
     * @name isLoading
     * @type {boolean}
     */
    isLoading: false,

    /**
     * @description
     * Object containing all available intervals as key:value pairs
     *
     * @name interval
     * @type {Interval}
     */
    interval: INTERVAL,

    /**
     * @description
     * The error encountered when attempting to fetch from the model
     *
     * @name error
     * @type {module:lib-bb-model-errors.ModelError}
     */
    error: null,
  });
}
