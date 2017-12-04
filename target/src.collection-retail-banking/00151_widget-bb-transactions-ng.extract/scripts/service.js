/* global window */
/**
 * @name TransactionsService
 * @type {object}
 * @ngkey widget-bb-transactions-ng:service
 * @description
 * The service encapsulates the core functionality of the Transactions
 * Widget. It co-ordinates the communication of data from the `Model`
 * with the communication with the user by updating the {@link ViewState}.
 *
 * Asynchronous methods update the {@link ViewState} in 3 potential
 * stages; "before", "success", and "error", to allow the view to
 * provide feedback to the user.
 */

/**
 * @name padded
 * @type {function}
 * @description Adds leading zero to number values less then 10
 * @inner
 * @param {number} num Number to add padding
 * @return {string} Padded number as a string
 */
const padded = num => (num > 9 ? String(num) : `0${num}`);

/**
 * @name formatDate
 * @type {function}
 * @description Formats date to yyyy-MM-dd format
 * @inner
 * @param {object} date Date to format
 * @return {string} Formatted date string
 */
const formatDate = date =>
  `${date.getFullYear()}-${padded(date.getMonth() + 1)}-${padded(date.getDate())}`;

/**
 * @name createTransactionsService
 * @inner
 * @type {function}
 * @param {module:model-bb-transactions-ng.transactionsModel} model Transactions model
 * @param {ViewModel} viewModel
 * @param {module:lib-bb-widget.Widget} widget
 * @return {TransactionsService}
 */
export default (model, viewModel, $window) => ({
  /**
   * @name TransactionsService#load
   * @type {function}
   * @description
   * Fetch a `page` of `transactions` from the model and
   * update the {@link ViewState} to display them.
   * @param {LoadRequestParams} params Request params
   * @return {Promise.<void>}
   */
  load: params => {
    viewModel.list.beforeLoad();

    return model.load(params)
      .then(raw => {
        viewModel.list.afterLoadSuccess({
          rawData: raw.data,
          totalCount: raw.totalCount,
          requestParams: params,
        });
      })
      .catch(error => {
        viewModel.list.afterLoadError(error);
        throw error;
      });
  },

  /**
   * @name TransactionsService#search
   * @type {function}
   * @description
   * Fetch a `page` of `transactions` search results from the model and
   * update the {@link ViewState} to display them.
   * @param {SearchRequestParams} params Request params
   * @return {Promise.<void>}
   */
  search: params => {
    viewModel.search.beforeSearch({
      query: params.query,
      category: params.category,
    });

    return model.load(params)
      .then(raw => {
        viewModel.search.afterSearchSuccess({
          rawData: raw.data,
          totalCount: raw.totalCount,
          requestParams: params,
        });
      })
      .catch(error => {
        viewModel.search.afterSearchError(error);
        throw error;
      });
  },

  /**
   * @name TransactionsService#export
   * @type {function}
   * @description
   * Download transactions, which satisfy request parameter conditions, in specified format
   * @param {ExportRequestParams} params Request params
   * @return {Promise.<void>}
   */
  export: params => {
    viewModel.export.beforeExport();

    const uri = model.getExportFileResource(params);
    $window.location.assign(uri);
  },

  /**
   * @name TransactionsService#checkTodayTransactions
   * @type {function}
   * @description
   * Fetch one today transaction and update `ViewState` to indicated
   * are there today transactions present.
   * @param {string} productId Product ID of transactions to load
   * @return {Promise.<void>}
   */
  checkTodayTransactions: productId => {
    const today = formatDate(new Date());
    viewModel.list.beforeTodayTransactionsLoad(today);

    const params = {
      productId,
      from: 0,
      size: 1,
      bookingDateLessThan: today,
      bookingDateGreaterThan: today,
    };

    return model.load(params)
      .then(({ data }) => viewModel.list.afterTodayTransactionsLoadSuccess(data))
      .catch(error => {
        viewModel.list.afterTodayTransactionsLoadError(error);
      });
  },

  /**
   * @name TransactionsService#setupSelectedProduct
   * @type {function}
   * @description
   * Fetch selected product and update `ViewState`.
   * @param {boolean} isDefaultProductFirst Indicates wether default product
   * should be returned first
   * @return {Promise.<void>}
   */
  setupSelectedProduct: isDefaultProductFirst =>
    model.getSelectedProduct(isDefaultProductFirst)
      .then(selectedProduct => {
        viewModel.product.afterSelectProductSuccess(selectedProduct);
      })
      .catch(error => {
        viewModel.product.afterSelectProductError(error);
        throw error;
      }),

  /**
   * @name TransactionsService#loadCurrentTransaction
   * @type {function}
   * @description
   * Fetch selected transaction and update `ViewState`.
   * @return {Promise.<void>}
   */
  loadCurrentTransaction: () => model.getCurrentTransaction()
    .then(data => viewModel.transaction.afterLoadSuccess(data)),

  /**
   * @name TransactionsService#updateTransactionCategory
   * @type {function}
   * @description
   * Updates transaction's category and `ViewState`.
   * @return {Promise.<object>} Updated transaction item
   */
  updateTransactionCategory: payload =>
    model.updateTransactionCategory(payload.transactionId, { category: payload.categoryName }),

  /**
   * @name TransactionsService#storeCurrentTransaction
   * @type {function}
   * @description
   * Stores currently selected transaction and updates `ViewState`.
   * @param {object} transaction Currently selected transaction
   * @return {void}
   */
  storeCurrentTransaction: transaction => {
    viewModel.transaction.beforeStore(transaction);
    model.storeTransactionAsCurrent(transaction);
  },

  /**
   * @description
   * Request currencies list
   *
   * @inner
   * @name TransactionsService#getCurrencies
   * @type {function}
   * @returns {Array.<module:data-bb-payment-orders-ng.PaymentOrdersData.Currency>} Currencies array
   */
  getCurrencies: () =>
    model.getCurrencies()
      .then(currencies => {
        viewModel.currencies.afterLoadSuccess(currencies);
      })
      .catch(error => {
        viewModel.currencies.afterLoadError(error);
        throw error;
      }),

});

/**
 * @typedef {object} ExportRequestParams
 * @property {string} exportFormat Export format
 * @property {string} productId Product ID of transactions to load
 * @property {?string} query Query search parameter
 * @property {?string} bookingDateLessThan Maximum booking date search parameter
 * @property {?string} bookingDateGreaterThan Minimum booking date search parameter
 * @property {?string} amountGreaterThan Minimum amount search parameter
 * @property {?string} amountLessThan Maximum amount search parameter
 * @property {?string} creditDebitIndicator Credit or debit search parameter
 */
