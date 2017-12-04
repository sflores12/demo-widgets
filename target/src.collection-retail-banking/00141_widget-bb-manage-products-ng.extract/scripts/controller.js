import {
  DEFAULT_DISMISS_TIME,
  UPDATED_PRODUCT_ERROR_KEY,
  UPDATED_PRODUCT_SUCCESS_KEY,
  errorMessages,
  Intent,
} from './constants';

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

/**
 * @name ManageProductsController
 *
 * @description
 * Manage products widget controller
 *
 * @type {function}
 */
export default function ManageProductsController(model, bus, hooks, bbIntent) {
  const $ctrl = this;

  const state = {
    status: null,
    productKinds: null,
    productSelected: { id: null, showInput: null },
    isProductLoading: true,
    productKindsError: null,
  };

  /**
   * @description
   * A set of intents that the controller uses or handles.
   *
   * @name ManageProductsController#intents
   * @type {Object}
   * @inner
   */
  const intents = {};

  /**
   * @name ManageProductsController#getProducts
   *
   * @description
   * Gets all products from the model, track the loading
   * and create error if there is error during the loading
   *
   * @type {function}
   *
   * @returns {Promise.<void>}
   */
  const getProducts = () => {
    $ctrl.state.isProductLoading = true;

    return model.load()
      .then(({ productKinds }) => {
        $ctrl.state.productKinds = hooks.processKinds(productKinds);
        $ctrl.state.isProductLoading = false;
      })
      .catch(error => {
        $ctrl.state.isProductLoading = false;
        $ctrl.state.productKindsError = uiError(errorMessages, error);
      });
  };

  /**
   * @name ManageProductsController#updateProduct
   *
   * @description
   * Updates the product,
   * sets the status for the notification
   * and reloads the products if the update is successful
   *
   * @type {function}
   *
   * @param {object} id product/account id
   * @param {object} alias product/account alias
   * @param {boolean} visible visibility property for the product/account
   *
   * @returns {Promise.<void>}
   */
  const updateProduct = (id, alias, visible) =>
    model.patchArrangement({ id, alias, visible })
      .then(() => {
        $ctrl.state.status = { message: UPDATED_PRODUCT_SUCCESS_KEY, isError: false };
        $ctrl.state.productSelected = { id: null, showInput: null };
        return getProducts();
      })
      .catch(() => {
        $ctrl.state.status = { message: UPDATED_PRODUCT_ERROR_KEY, isError: true };
        $ctrl.state.productSelected = { id: null, showInput: null };
      });

  /**
   * @description
   * Handles the intent to switch the view to product summary
   *
   * @type {function}
   *
   * @name ManageProductsController#viewProductSummary
   */
  const viewProductSummary = () => {
    if (intents.viewProductSummary) {
      intents.viewProductSummary();
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
    intents.viewProductSummary = bbIntent.create(Intent.VIEW_PRODUCT_SUMMARY);

    bbIntent.handle(Intent.VIEW_MANAGE_PRODUCTS, () => {
      getProducts();
    });
  };

  /**
   * @name ManageProductsController#$onInit
   *
   * @description
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @type {function}
   *
   * @returns {void}
   */
  const $onInit = () =>
    getProducts()
      .then(initIntent);

  Object.assign($ctrl, {
    state,
    dismissTime: DEFAULT_DISMISS_TIME,
    updateProduct,
    getProducts,
    $onInit,
    viewProductSummary,
  });
}
