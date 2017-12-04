import createInitialState from './initial-state';
import createListReducer from './list';

export default stateContainer => {
  const initialState = createInitialState();

  /**
   * @name ViewModel
   * @type {object}
   * @ngKey widget-bbm-products-summary-ng:viewModel
   * @inner
   */
  return {
    /**
     * @name ViewModel#init
     * @description Initialises view model with initial state
     * @type {function}
     * @inner
     * @return {ViewState}
     */
    init: stateContainer.createAction((state = initialState) => state),

    /**
     * @name ViewModel#getState
     * @description Returns view state
     * @type {function}
     * @inner
     * @return {ViewState}
     */
    getState: stateContainer.getState,

    /**
     * @name ViewModel#list
     * @description
     * Actions for updating the parts of the `ViewState` related to the products list
     * @type {ViewModelListActions}
     * @inner
     */
    list: createListReducer(stateContainer),
  };
};
