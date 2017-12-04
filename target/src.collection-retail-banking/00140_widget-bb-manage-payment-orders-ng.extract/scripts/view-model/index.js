// Combine state reducers
import createInitialState from './initial-state';
import createInitReducers from './init';
import createListReducers from './list';

/**
 * Defines the default page size for the transactions page
 * @type {number}
 * @inner
 */
const DEFAULT_PAGE_SIZE = 50;

export default (stateContainer, widget, hooks) => {
  const stateParams = {
    pageSize: widget.getLongPreference('bb.paymentOrders.pageSize') || DEFAULT_PAGE_SIZE,
  };
  const initialState = createInitialState(stateParams);

  /**
   * @name ViewModel
   * @type {object}
   * @ngkey widget-bb-manage-payment-orders-ng:viewModel
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
     * @name ViewModel#initList
     * @description
     * Actions for updating the parts of the `ViewState` related to initial loading
     * @type {ViewModelInitActions}
     * @inner
     */
    initList: createInitReducers(stateContainer),
    /**
     * @name ViewModel#list
     * @description
     * Actions for updating the parts of the `ViewState` related to payment orders list
     * @type {ViewModelListActions}
     * @inner
     */
    list: createListReducers(stateContainer, hooks),
  };
};
