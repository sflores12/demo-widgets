import { uiError } from './helpers';

export default stateContainer => ({
  /**
   * @name ViewModelListActions
   * @type {object}
   * @inner
   */

  /**
   * @name ViewModelListActions#beforeLoad
   * @description Update the `ViewState` before loading the productKinds
   * @type {function}
   * @inner
   * @return {void}
   */
  beforeLoad: stateContainer.createAction(state => ({
    ...state,
    productKinds: {
      ...state.productKinds,
      loading: true,
    },
  })),

  /**
   * @name ViewModelListActions#afterLoadSuccess
   * @description Update the `ViewState` after successfully loading the productKinds
   * @type {function}
   * @inner
   * @param {ProductsResponse} response Products load response
   * @return {void}
   */
  afterLoadSuccess: stateContainer.createAction((state, response) => ({
    ...state,
    productKinds: {
      ...state.productKinds,
      loading: false,
      error: null,
      data: response.productKinds,
    },
  })),

  /**
   * @name ViewModelListActions#afterLoadError
   * @description Update the `ViewState` after unsuccessful products load
   * @type {function}
   * @inner
   * @param {ModelError} error Response error
   * @return {void}
   */
  afterLoadError: stateContainer.createAction((state, error) => ({
    ...state,
    productKinds: {
      ...state.productKinds,
      loading: false,
      error: uiError(error),
    },
  })),
});

/**
 * @typedef {object} ProductsResponse
 * @property {object[]} productKinds Loaded products array
 * @property {number} total Total number of products
 */
