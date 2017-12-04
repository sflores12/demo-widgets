import { Event, Intent } from '../constants';

export default function ViewController(
  widget,
  model,
  viewModel,
  bbIntent,
  bus,
  hooks
) {
  /**
   * @name ViewController
   * @ngkey ViewController
   *
   * @description
   * Product details view controller.
   *
   * @type {Object}
   */
  const ctrl = this;

  /**
   * @description
   * A set of intents that the view controller uses or handles.
   *
   * @name intents
   * @type {Object}
   * @inner
   */
  const intents = {};

  /**
   * @description
   * Handles the intent to show the form to edit a product alias.
   *
   * @name ViewController#showProductAliasEditForm
   * @type {function}
   */
  const showProductAliasEditForm = () => (
    viewModel.store()
      .then(() => {
        intents.showProductAliasEditForm();
      })
  );

  /**
   * @description
   * Loads product details.
   *
   * @name ViewController#loadProductDetails
   * @type {function}
   * @returns {Promise.<module:model-bb-product-summary-ng.ProductDetails>}
   */
  const loadProductDetails = productId => {
    viewModel.setProductLoading(true);

    return model.getProductDetails(productId)
      .then(product => {
        const productDetails = hooks.processProductDetails(product);

        viewModel.setProductError(null);
        viewModel.setProductLoading(false);
        viewModel.setSelectedProduct(productDetails);

        return productDetails;
      })
      .catch(error => {
        viewModel.setProductLoading(false);
        viewModel.setProductError(error);

        throw error;
      });
  };

  /**
   * @description
   * Loads product details if needed.
   *
   * @name ViewController#loadProductDetailsIfNeeded
   * @type {function}
   * @returns {Promise.<module:model-bb-product-summary-ng.ProductDetails>}
   * @inner
   */
  const loadProductDetailsIfNeeded = productId => {
    const selectedProduct = viewModel.getSelectedProduct();

    if (!selectedProduct || selectedProduct.id !== productId) {
      viewModel.setSelectedProduct(null);

      return loadProductDetails(productId);
    }

    return Promise.resolve();
  };

  /**
   * @description
   * AngularJS Lifecycle hook used to initialize the controller.
   *
   * @name ViewController#$onInit
   * @type {function}
   *
   * @fires cxp.item.loaded
   * @fires bb.item.loaded
   */
  const $onInit = () => {
    /**
     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
     * and will be removed with the update to widget collection 3 (WC3)
     */
    bus.publish(Event.CXP_ITEM_LOADED, {
      id: widget.getId(),
    });

    bus.publish(Event.BB_ITEM_LOADED, {
      id: widget.getId(),
    });

    bus.subscribe(Event.PRODUCT_ALIAS_EDIT_DONE, productDetails => {
      viewModel.setProductAlias(productDetails.alias);
    });
  };

  /**
   * @description
   * The intent to show the form to edit a product alias.
   *
   * @name intents#showProductAliasEditForm
   * @type {function}
   * @inner
   */
  intents.showProductAliasEditForm = bbIntent.create(Intent.SHOW_ALIAS_EDIT_FORM);

  bbIntent.handle(Intent.SHOW_PRODUCT_DETAILS_VIEW, productId => {
    viewModel.restore()
      .then(() => {
        loadProductDetailsIfNeeded(productId);
      });
  });

  bbIntent.init(() => { });

  Object.defineProperty(ctrl, 'state', {
    get() {
      return viewModel.state;
    },
  });

  Object.assign(ctrl, {
    $onInit,
    showProductAliasEditForm,
  });
}
