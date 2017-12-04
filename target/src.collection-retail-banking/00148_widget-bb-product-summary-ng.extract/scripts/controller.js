import {
  errorMessages,
  Intent,
} from './constants';

import Message from './message';

const { PRODUCT_SELECTED, PRODUCTS_SELECTED, REFLOW_TRIGGERED } = Message;

/**
 * @name uiError
 *
 * @description
 * Creates UI error message.
 *
 * @type {function}
 *
 * @param {object} messageMap object with error message keys
 * @param {object} modelError the error object
 *
 * @returns {{message: string}}
 */
const uiError = (messageMap, modelError) => ({
  message: messageMap[modelError.code],
});


export default function ProductSummaryController(model, hooks, eventBus, widget, bbIntent) {
  /**
   * @name ProductSummaryController
   * @ngkey ProductSummaryController
   * @type {object}
   * @description
   * Product summary controller.
   *
   */
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
   * Sets the alternate workflow when a user selects a Product from the overview.
   *
   * @name ProductSummaryController#selectProduct
   * @type {function}
   * @param {Product} product Product to select.
   * @fires bb.event.product.selected
   * @fires bb.event.product.selected.[product-kind]
   */
  const selectProduct = (product) => {
    model.setProductSelected(product);
    eventBus.publish(PRODUCT_SELECTED, { product });
    // for all accounts selection, do not send per kind event
    if (product && product.kind) {
      eventBus.publish(`${PRODUCT_SELECTED}.${product.kind}`, { product });
    }
  };

  /**
   * @description
   * Sets the alternate workflow when a user selects multiple Products from the overview or selector
   *
   * @name ProductSummaryController#selectProducts
   * @type {function}
   * @param {Product[]} products Array of Products to select
   * @fires bb.event.products.selected
   */
  const selectProducts = (products) => {
    model.setProductsSelected(products);
    eventBus.publish(PRODUCTS_SELECTED, { products });
  };

  /**
   * @description
   * Check if value is defined, not null and not empty
   * @inner
   * @name hasValue
   * @type {function}
   * @param  {*} value  The value to check
   * @return {boolean}
   */
  const hasValue = (value) => typeof value !== 'undefined' && value !== null && value !== '';

  /**
   * @description
   * Loading extended parameters for a given product
   *
   * @inner
   * @name ProductSummaryController#loadProductDetails
   * @type {function}
   *
   * @returns {Promise.<void>}
   */
  const loadProductDetails = (product) => {
    model.getProductDetails(product.id)
      .then(extendedProduct => {
        if (!hasValue(extendedProduct.productKindName)) {
          Object.assign(extendedProduct, {
            productKindName: product.productKindName,
          });
        }
        Object.assign(extendedProduct, {
          productTypeName: product.productKindName,
        });
        $ctrl.extendedProduct = hooks.processExtendedProduct(extendedProduct);
      })
      .catch(error => {
        $ctrl.productKindsError = uiError(errorMessages, error);
      });
  };

  /**
   * @description
   * Handles product select
   *
   * @name ProductSummaryController#updateProductSelected
   * @type {function}
   *
   * @returns {Promise.<void>}
   */
  function updateProductSelected() {
    model.getProductSelected()
      .then(productSelected => {
        $ctrl.productSelected = hooks.processProductSelected(productSelected);
        if (productSelected !== null) {
          loadProductDetails(productSelected);
        }
      })
      .catch(error => {
        $ctrl.productKindsError = uiError(errorMessages, error);
      });
  }

  /**
   * @description
   * Handles multiple product selection
   *
   * @name ProductSummaryController#updateProductsSelected
   * @type {function}
   *
   * @returns {Promise.<void>}
   */
  function updateProductsSelected() {
    model.getProductsSelected(false)
      .then(productsSelected => {
        $ctrl.productsSelected = hooks.processProductsSelected(productsSelected);
      });
  }

  /**
   * @description
   * Products loading logic
   *
   * @name ProductSummaryController#loadProducts
   * @type {function}
   *
   * @returns {Promise.<void>}
   */
  const loadProducts = (forceLoad = true) => {
    $ctrl.isProductLoading = true;

    return model.load(forceLoad)
      .then(({ productKinds, total }) => {
        $ctrl.isProductLoading = false;

        $ctrl.total = total;
        $ctrl.productKinds = hooks.processKinds(productKinds);
      })
      .then(updateProductSelected)
      .then(updateProductsSelected)
      .catch(error => {
        $ctrl.isProductLoading = false;
        $ctrl.productKindsError = uiError(errorMessages, error);
      });
  };

  /**
   * @description
   * Adds subscriptions to bus events
   *
   * @name ProductSummaryController#bindEvents
   * @type {function}
   */
  function bindEvents() {
    eventBus.subscribe(PRODUCT_SELECTED, updateProductSelected);
    eventBus.subscribe(PRODUCTS_SELECTED, updateProductsSelected);
    eventBus.subscribe(REFLOW_TRIGGERED, loadProducts);
  }

  /**
   * @description
   * Handles the intent to switch the view to product summary
   *
   * @type {function}
   * @name ProductSummary#viewManageProducts
   */
  const viewManageProducts = () => {
    if (intents.viewManageProducts) {
      intents.viewManageProducts();
    }
  };

  /**
   * @description
   * Inits the bbIntent and adds intent handlers.
   *
   * @inner
   * @name ManageProductsController#initIntent
   * @type {function}
   */
  const initIntent = () => {
    intents.viewManageProducts = bbIntent.create(Intent.VIEW_MANAGE_PRODUCTS);

    bbIntent.handle(Intent.VIEW_PRODUCT_SUMMARY, () => {
      loadProducts();
    });
  };


  /*
   * Widget initialization logic.
   */
  const $onInit = () => {
    /**
     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
     * and will be removed with the update to widget collection 3 (WC3)
     */
    eventBus.publish('cxp.item.loaded', {
      id: widget.getId(),
    });

    eventBus.publish('bb.item.loaded', {
      id: widget.getId(),
    });

    return loadProducts()
      .then(bindEvents)
      .then(initIntent);
  };

  Object.assign($ctrl, {
    /**
     * @description
     * The selected product.
     * The value returned from {@link Hooks.processProductSelected} hook
     *
     * @name ProductSummaryController#productSelected
     * @type {any}
     */
    productSelected: null,
    /**
     * @description
     * Array of selected products.
     * The value returned from {@link Hooks.processProductsSelected} hook
     *
     * @name ProductSummaryController#productsSelected
     * @type {array}
     */
    productsSelected: [],
    /**
     * @description
     * The selected product extended with arrangement details.
     *
     * @name ProductSummaryController#extendedProduct
     * @type {any}
     */
    extendedProduct: null,
    /**
     * @description
     * The value returned from {@link Hooks.processKinds} hook.
     * null if the products aren't loaded.
     *
     * @name ProductSummaryController#productKinds
     * @type {any}
     */
    productKinds: null,
    /**
     * @description
     * Loading status of the products
     *
     * @name ProductSummaryController#isProductLoading
     * @type {boolean}
     */
    isProductLoading: false,
    /**
     * @description
     * The error encountered when attempting to fetch the products from the model
     *
     * @name ProductSummaryController#productKindsError
     * @type {ModelError}
     */
    productKindsError: null,
    /**
     * @description
     * Checks the list is empty or not
     *
     * @name ProductSummaryController#hasProducts
     * @type {function}
     * @returns {boolean} false if product list is empty
     */
    hasProducts: () => !!$ctrl.productKinds.length,
    /**
     * @description
     * The total balance for the products
     *
     * @name ProductSummaryController#total
     * @type {TotalBalance}
     */
    total: null,
    selectProduct,
    selectProducts,
    $onInit,
    viewManageProducts,
  });
}

/**
 * @typedef {Object} TotalBalance
 * @property {string} aggregatedBalance - aggregated balance
 * @property {string} currency - currency code
 */
