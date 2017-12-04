import { Event, Intent } from '../constants';

export default function FormController(
  widget,
  model,
  viewModel,
  bbIntent,
  bus
) {
  /**
   * @name FormController
   * @ngkey FormController
   *
   * @description
   * Product details form controller.
   *
   * @type {Object}
   */
  const ctrl = this;

  /**
   * @description
   * A set of intents that the form controller uses or handles.
   *
   * @name intents
   * @type {Object}
   * @inner
   */
  const intents = {};

  /**
   * @description
   * Sets up the the product alias form state.
   *
   * @name FormController#setupProductAliasFormState
   * @type {function}
   * @inner
   */
  const setupProductAliasFormState = () => {
    const product = viewModel.getSelectedProduct();

    viewModel.setProductAliasFormState(product.alias);
  };

  /**
   * @description
   * Updates an arrangement.
   *
   * @name FormController#updateArrengement
   * @type {function}
   * @param {module:model-bb-product-summary-ng.ArrangementsData.ArrangementPatch} arrangement
   * @returns {Promise}
   * @inner
   */
  const updateArrengement = arrangement => {
    viewModel.setFormLoading(true);

    return model.patchArrangement(arrangement)
      .then(() => {
        viewModel.setFormLoading(false);
        viewModel.setFormError(null);
      })
      .catch(error => {
        viewModel.setFormLoading(false);
        viewModel.setFormError(error);

        throw error;
      });
  };

  /**
   * @description
   * Updates a product alias
   *
   * @name FormController#updateProductAlias
   * @type {function}
   *
   * @returns {Promise}
   */
  const updateProductAlias = () => {
    const { id } = viewModel.getSelectedProduct();
    const alias = viewModel.getProductAliasFormState();
    const productDetails = {
      id,
      alias,
    };

    bus.publish(Event.PRODUCT_ALIAS_EDIT_START);

    return updateArrengement(productDetails)
      .then(() => {
        bus.publish(Event.PRODUCT_ALIAS_EDIT_DONE, productDetails);

        viewModel.setProductAlias(alias);
        viewModel.setProductAliasFormState(null);
        viewModel.store()
          .then(() => {
            intents.showProductDetailsView(id);
          });
      })
      .catch(error => {
        bus.publish(Event.PRODUCT_ALIAS_EDIT_FAILED, { error });

        throw error;
      });
  };

  /**
   * @description
   * AngularJS Lifecycle hook used to initialize the controller.
   *
   * @name FormController#$onInit
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
  };

  /**
   * @description
   * The intent to show the product details.
   *
   * @name intents#showProductDetailsView
   * @type {function}
   * @inner
   */
  intents.showProductDetailsView = bbIntent.create(Intent.SHOW_PRODUCT_DETAILS_VIEW);

  bbIntent.handle(Intent.SHOW_ALIAS_EDIT_FORM, () => {
    viewModel.restore().then(() => {
      setupProductAliasFormState();
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
    updateProductAlias,
  });
}
