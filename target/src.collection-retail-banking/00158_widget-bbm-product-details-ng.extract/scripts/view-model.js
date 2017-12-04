import { StorageKey } from './constants';

export default (model, bbStorage) => {
  const viewModel = {
    state: {
      product: null,
      loading: false,
      error: null,
      form: {
        data: {
          productAlias: null,
        },
        loading: false,
        error: null,
      },
    },
  };

  /**
   * @description
   * Sets the given loading state to the given target.
   *
   * @name setLoading
   * @type {function}
   *
   * @param {Object} target
   * @param {boolean} loading
   * @inner
   */
  const setLoading = (target, loading) => {
    Object.assign(target, { loading });
  };

  /**
   * @description
   * Sets the given error to the given target.
   *
   * @name setError
   * @type {function}
   *
   * @param {Object} target
   * @param {Error} error
   * @inner
   */
  const setError = (target, error) => {
    Object.assign(target, { error });
  };

  /**
   * @description
   * Sets the loading state of the form.
   *
   * @name setFormLoading
   * @type {function}
   *
   * @param {boolean} loading
   * @inner
   */
  const setFormLoading = loading => {
    setLoading(viewModel.state.form, loading);
  };

  /**
   * @description
   * Sets the loading state of the product.
   *
   * @name setProductLoading
   * @type {function}
   *
   * @param {boolean} loading
   * @inner
   */
  const setProductLoading = loading => {
    setLoading(viewModel.state, loading);
  };

  /**
   * @description
   * Sets the error state to the form with a given error.
   *
   * @name setFormError
   * @type {function}
   *
   * @param {Error} error
   * @inner
   */
  const setFormError = error => {
    setError(viewModel.state.form, error);
  };

  /**
   * @description
   * Sets the error state of the product.
   *
   * @name setProductError
   * @type {function}
   *
   * @param {Error} error
   * @inner
   */
  const setProductError = error => {
    setError(viewModel.state, error);
  };

  /**
   * @description
   * Sets a product to the state.
   *
   * @name setSelectedProduct
   * @type {function}
   *
   * @param {module:model-bb-product-summary-ng.ProductDetails} product
   * @returns {module:model-bb-product-summary-ng.ProductDetails}
   * @inner
   */
  const setSelectedProduct = product => (
    Object.assign(viewModel.state, {
      product,
    })
  );

  /**
   * @description
   * Returns the selected product.
   *
   * @name getSelectedProduct
   * @type {function}
   *
   * @returns {module:model-bb-product-summary-ng.ProductDetails}
   * @inner
   */
  const getSelectedProduct = () => viewModel.state.product;

  /**
   * @description
   * Sets the state for the product alias form.
   *
   * @name setProductAliasFormState
   * @type {function}
   *
   * @param {string} productAlias
   * @inner
   */
  const setProductAliasFormState = productAlias => {
    Object.assign(viewModel.state.form.data, {
      productAlias,
    });
  };

  /**
   * @description
   * Returns the state of the product alias form.
   *
   * @name getProductAliasFormState
   * @type {function}
   *
   * @returns {string}
   * @inner
   */
  const getProductAliasFormState = () => viewModel.state.form.data.productAlias;

  /**
   * @description
   * Sets a product alias to the product state.
   *
   * @name setProductAlias
   * @type {function}
   *
   * @param {string} alias
   * @inner
   */
  const setProductAlias = alias => {
    Object.assign(viewModel.state.product, {
      alias,
    });
  };

  /**
   * @description
   * Restores the state from the storage.
   *
   * @name restore
   * @type {function}
   * @inner
   */
  const restore = () => (
    bbStorage.getItem(StorageKey.PRODUCT_DETAILS_STATE)
      .then(state => {
        if (state) {
          viewModel.state = state;
        }
      })
  );

  /**
   * @description
   * Stores the state to the storage.
   *
   * @name store
   * @type {function}
   * @inner
   */
  const store = () => (
    bbStorage.setItem(StorageKey.PRODUCT_DETAILS_STATE, viewModel.state)
  );

  Object.assign(viewModel, {
    setFormLoading,
    setFormError,
    setProductLoading,
    setProductError,

    setProductAlias,
    setProductAliasFormState,
    getProductAliasFormState,

    setSelectedProduct,
    getSelectedProduct,

    restore,
    store,
  });

  return viewModel;
};
