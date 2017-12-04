/**
 * @module widget-bb-income-spending-analysis-category-ng
 * @name IncomeSpendingAnalysisCategoryController
 *
 * @description
 * Income/Spending analysis by category
 */

import { E_AUTH, E_CONNECTIVITY, E_USER } from 'lib-bb-model-errors';
import Message from './message';

import {
  Intent,
  ANALYSIS_INDICATOR_PREF,
  SPENDING_ANALYSIS_INDICATOR,
  TURNOVERS_DATA_KEY,
} from './constants';

const {
  PRODUCT_SELECTED,
  PRODUCTS_SELECTED,
  ANALYSIS_CATEGORY_LOAD_FAILED,
  PERIOD_START_CHANGED,
  PERIOD_END_CHANGED,
} = Message;

export default function IncomeSpendingAnalysisCategoryController(
  bus,
  hooks,
  helpers,
  model,
  turnoversModel,
  bbIntent,
  widget
) {
  const $ctrl = this;

  /**
   * @name analysisIndicator
   * @type {string}
   * @inner
   * @description
   * Credit/Debit indicator that will be used for analysis
   */
  const analysisIndicator =
    widget.getStringPreference(ANALYSIS_INDICATOR_PREF, SPENDING_ANALYSIS_INDICATOR);

  /**
   * @name isSpendingAnalysis
   * @type {function}
   * @description
   * Is current analysis spending analysis
   * @returns {boolean}
   */
  const isSpendingAnalysis = () => analysisIndicator === SPENDING_ANALYSIS_INDICATOR;

  /**
   * @description
   * A set of intents that the controller uses or handles
   *
   * @name intents
   * @type {Object}
   * @inner
   */
  const intents = {};

  /**
   * @description
   * The intent to select an analysis category item
   *
   * @name intents#selectAnalysisCategoryItem
   * @type {function}
   * @inner
   */
  intents.selectAnalysisCategoryItem =
    bbIntent.create(Intent.SELECT_ANALYSIS_ITEM[analysisIndicator]);

  /**
   * @description
   * Deprecated intent to select an analysis category item
   *
   * @name intents#selectAnalysisCategoryItemDeprecated
   * @type {function}
   * @inner
   */
  intents.selectAnalysisCategoryItemDeprecated =
    bbIntent.create(Intent.SELECT_ANALYSIS_ITEM_DEPRECATED);

  bbIntent.init(() => {});

  /**
   * @description
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
   * Setter for the selected analysis category.
   * It creates an intent 'view.account.category.transactions'
   * that can be handled by transaction widget
   *
   * @name setSelectedAnalysisItem
   * @param {any} item selected item
   * @type {function}
   * @returns {void}
   */
  const setSelectedAnalysisItem = (item) => {
    $ctrl.selectedAnalysisItem = hooks.onSelectedItemChanged(item);
    intents.selectAnalysisCategoryItem($ctrl.selectedAnalysisItem);
    intents.selectAnalysisCategoryItemDeprecated($ctrl.selectedAnalysisItem);
  };

  /**
   * Updates analysis items list based on selected product
   *
   * @name updateAnalysisCategories
   * @type {function}
   * @returns {Promise.<void>}
   */
  const updateAnalysisCategories = () =>
    model.validateAnalysisParameters(hooks.onAnalysisDataUpdate({
      creditDebitIndicator: analysisIndicator,
      arrangementIds: $ctrl.selectedProducts.map(product => product.id),
      periodStartDate: $ctrl.periodStartDate,
      periodEndDate: $ctrl.periodEndDate,
    }))
    .then(model.loadAnalysisData)
    .then(loaded => {
      $ctrl.items = hooks.processAnalysisCategoryItems(loaded);
      $ctrl.series = hooks.processAnalysisCategorySeries(model.transformToSeries(loaded), loaded);
      setSelectedAnalysisItem(null);
    })
    .catch(error => {
      $ctrl.error = hooks.processLoadError(errorMessage(error.code));
      bus.publish(ANALYSIS_CATEGORY_LOAD_FAILED, { error });
    });

  /**
   * Updates turnovers list based on selected product
   *
   * @inner
   * @name updateTurnovers
   * @type {function}
   * @returns {Promise.<void>}
   */
  const updateTurnovers = () => turnoversModel.validateTurnoversParameters(hooks.onTurnoversUpdate({
    arrangementIds: $ctrl.selectedProducts.map(product => product.id),
    periodStartDate: $ctrl.periodStartDate,
    periodEndDate: $ctrl.periodEndDate,
    intervalDuration: $ctrl.intervalDuration || 'MONTH',
    intervalStartDay: $ctrl.intervalStartDay || 1,
  }))
  .then(turnoversModel.loadTurnovers)
  .then(loaded => {
    $ctrl.error = null;
    $ctrl.turnoversItems = hooks.processTurnoverResponse(loaded);
    $ctrl.turnoversSeries = hooks.processTurnoverSeries(
      turnoversModel.transformToSeries(loaded, TURNOVERS_DATA_KEY[analysisIndicator]
    ), loaded);
  })
  .catch(error => {
    $ctrl.error = hooks.processLoadError(errorMessage(error.code));
    bus.publish(ANALYSIS_CATEGORY_LOAD_FAILED, { error });
  });

  /**
   * @description
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
   * selected product value from {@link Hooks.processSelectedProducts} hook
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
   * Adds subscriptions to bus events
   * @inner
   * @name bindEvents
   * @type {function}
   */
  function bindEvents() {
    bus.subscribe(PRODUCT_SELECTED, selection => {
      updateProductsSelected([selection.product]);
      updateAnalysisCategories();
    });
    bus.subscribe(PRODUCTS_SELECTED, selection => {
      helpers.debounce(() => {
        updateProductsSelected(selection.products);
        updateAnalysisCategories();
      }, hooks.accountSelectionDebounce());
    });
    bus.subscribe(PERIOD_START_CHANGED, (startDate) => {
      $ctrl.periodStartDate = startDate;
      updateAnalysisCategories();
    });
    bus.subscribe(PERIOD_END_CHANGED, (endDate) => {
      $ctrl.periodEndDate = endDate;
      updateAnalysisCategories();
    });
  }

  /**
   * @description
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
   * @description
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
      bus.publish(ANALYSIS_CATEGORY_LOAD_FAILED, { error });
    });

  /**
   * @description
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
      .then(updateAnalysisCategories)
      .then(updateTurnovers)
      .then(bindEvents)
      .then(() => { $ctrl.isLoading = false; });
  };

  Object.assign($ctrl, {
    $onInit,

    /**
     * @description
     * The product selection for analysis
     *
     * @name selectedProducts
     * @type {module:model-bb-product-summary-ng.Product[]}
     */
    selectedProducts: [],

    /**
     * @description
     * List of products to be used by account selector for the analysis.
     * Is recieved from {@link Hooks.processProductsList}
     *
     * @name products
     * @type {module:model-bb-product-summary-ng.Product[]}
     */
    products: [],

    /**
     * @description
     * The value returned from {@link Hooks.processAnalysisCategoryItems} hook.
     * null if the items aren't loaded.
     *
     * @name items
     * @type {module:model-bb-income-spending-analysis-category-ng.AnalysisCategoryData}
     */
    items: null,

    /**
     * @description
     * The value returned from {@link Hooks.processTurnoverResponse} hook.
     * null if the data isn't loaded.
     *
     * @name turnoversItems
     * @type {module:model-bb-turnovers-ng.Turnover}
     */
    turnoversItems: null,

    /**
     * @description
     * The value returned from {@link Hooks.processAnalysisCategorySeries} hook.
     * Formatted for use within chart UI component.
     * null if the data isn't loaded
     *
     * @name series
     * @type {object}
     */
    series: null,

    /**
     * @description
     * The value returned from {@link Hooks.processTurnoverSeries} hook.
     * Formatted for use within chart UI component.
     * null if the data isn't loaded
     *
     * @name turnoversSeries
     * @type {module:model-bb-turnovers-ng.BBSeries}
     */
    turnoversSeries: null,

    /**
     * @description
     * Date of the analysis period start
     *
     * @name periodStartDate
     * @type {string}
     */
    periodStartDate: null,

    /**
     * @description
     * Date of the analysis period end
     *
     * @name periodEndDate
     * @type {string}
     */
    periodEndDate: null,

    /**
     * @description
     * selected analysis item
     *
     * @name selectedAnalysisItem
     * @type {any}
     */
    selectedAnalysisItem: null,
    setSelectedAnalysisItem,
    isSpendingAnalysis,

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
    onProductsSelected,
    updateAnalysisCategories,
    updateTurnovers,

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
