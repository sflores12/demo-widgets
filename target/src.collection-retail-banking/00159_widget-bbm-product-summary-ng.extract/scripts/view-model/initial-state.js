export default () => ({
  productKinds: {
    data: null,
    loading: false,
    error: null,
  },
});

/**
 * @typedef {object} ViewState
 * @description
 * The current state of the [ViewModel]{@link module:lib-bb-view-model-ng}.
 *
 * @property {object} productKinds
 * @property {boolean} productKinds.loading Indicates wether products are loading at the moment.
 * @property {ProductKind[]} productKinds.data The collection of the productKinds.
 * @property {object} productKinds.error The last encountered error.
 */
