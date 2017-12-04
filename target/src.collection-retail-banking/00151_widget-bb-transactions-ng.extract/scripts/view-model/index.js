// Combine state reducers
import createInitialState from './initial-state';
import createInitReducers from './init';
import createListReducers from './list';
import createProductReducers from './product';
import createTransactionReducers from './transaction';
import createSearchReducers from './search';
import createExportReducers from './export';
import createCurrenciesReducers from './currencies';
import createNotificationReducers from './notification';

/**
 * Defines the default page size for the transactions page
 * @type {number}
 * @inner
 */
const DEFAULT_PAGE_SIZE = 10;

/**
 * Defines the default paginationType for the transactions page
 * as defined in the widget model.xml
 * @type {string}
 * @inner
 */
const DEFAULT_PAGINATION_TYPE = 'load-more';

export default (stateContainer, widget, hooks) => {
  const stateParams = {
    pageSize: widget.getLongPreference('transactionListSize') ||
      widget.getLongPreference('bb.transaction.pageSize') ||
      DEFAULT_PAGE_SIZE,
    orderBy: hooks.defaultSortableColumn(),
    sortDirection: hooks.defaultSortableDirection(),
    paginationType: hooks.defaultPaginationType() ||
      widget.getStringPreference('bb.transaction.paginationType') ||
      DEFAULT_PAGINATION_TYPE,
    loadOnInit: widget.getBooleanPreference('bb.transaction.initLoad'),
  };
  const initialState = createInitialState(stateParams);

  /**
   * @name ViewModel
   * @type {object}
   * @ngkey widget-bb-transactions-ng:viewModel
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
     * Actions for updating the parts of the `ViewState` related to transactions list
     * @type {ViewModelListActions}
     * @inner
     */
    list: createListReducers(stateContainer),
    /**
     * @name ViewModel#product
     * @description
     * Actions for updating the parts of the `ViewState` related to product state
     * @type {ViewModelProductActions}
     * @inner
     */
    product: createProductReducers(stateContainer, hooks),
    /**
     * @name ViewModel#transaction
     * @description
     * Actions for updating the parts of the `ViewState` related to transaction state
     * @type {ViewModelTransactionActions}
     * @inner
     */
    transaction: createTransactionReducers(stateContainer),
    /**
     * @name ViewModel#search
     * @description
     * Actions for updating the parts of the `ViewState` related to transactions search
     * @type {ViewModelSearchActions}
     * @inner
     */
    search: createSearchReducers(stateContainer),
    /**
     * @name ViewModel#export
     * @description
     * Actions for updating the parts of the `ViewState` related to export transactions
     * @type {ViewModelExportActions}
     * @inner
     */
    export: createExportReducers(stateContainer),
    /**
     * @name ViewModel#currencies
     * @description
     * Actions for updating the parts of the `ViewState` related to export currencies
     * @type {ViewModelCurrenciesActions}
     * @inner
     */
    currencies: createCurrenciesReducers(stateContainer),
    /**
     * @name ViewModel#notification
     * @description
     * Actions for updating the parts of the `ViewState` related to notifications
     * @type {ViewModelNotificationActions}
     * @inner
     */
    notification: createNotificationReducers(stateContainer),
  };
};
