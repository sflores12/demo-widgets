export default params => ({
  initialLoading: params.loadOnInit,
  searching: false,
  error: null,
  paginationType: params.paginationType,
  currencies: [],
  transactions: {
    rawData: null,
    loading: false,
    loadedAll: false,
    total: 0,
    from: 0,
    size: params.pageSize,
    today: '',
    hasTodayTransactions: false,
  },
  transaction: {
    data: null,
  },
  product: {
    data: null,
  },
  search: {
    rawData: null,
    loading: false,
    loadedAll: false,
    total: 0,
    from: 0,
    size: params.pageSize,
    query: null,
    bookingDateLessThan: null,
    bookingDateGreaterThan: null,
    amountGreaterThan: null,
    amountLessThan: null,
    creditDebitIndicator: null,
    category: null,
  },
  export: {
    exportFailed: false,
  },
  notifications: [],
  sort: {
    orderBy: params.orderBy,
    direction: params.sortDirection,
  },
});

/**
 * @typedef {object} ViewState
 * @description
 * The current state of the [ViewModel]{@link module:lib-bb-view-model-ng}.
 *
 * @property {boolean} initialLoading Indicates wether widget's initial loading is done
 * @property {boolean} searching Indicates wether transactions search is active at the moment
 * @property {object} error The last encountered error
 * @property {string} error.message Error message
 * @property {string} paginationType Represents current pagination type. 'pagination' or 'load-more'
 * @property {Array.<module:data-bb-payment-orders-ng.PaymentOrdersData.Currency>}
 * currencies List of available currencies
 * @property {object} transactions
 * @property {object[]} transactions.rawData Collection of transactions
 * @property {boolean} transactions.loading Indicates wether transactions are loading at the moment
 * @property {boolean} transactions.loadedAll Indicates wether all transactions are loaded
 * @property {number} transactions.total Total number of transactions
 * @property {number} transactions.from The current page (0 indexed)
 * @property {number} transactions.size The number of transactions in page
 * @property {string} transactions.today Today date in the `yyyy-MM-dd` format
 * @property {boolean} transactions.hasTodayTransactions Indicates wether transactions collection
 * contains today transactions
 *
 * @property {object} transaction
 * @property {boolean} transaction.data Current transaction object
 *
 * @property {object} product
 * @property {boolean} product.data Current product object
 *
 * @property {object} search
 * @property {object[]} search.rawData Collection of search transactions
 * @property {boolean} search.loading Indicates wether search transactions are loading at the moment
 * @property {boolean} search.loadedAll Indicates wether all search transactions are loaded
 * @property {number} search.total Total number of search results
 * @property {number} search.from The current page (0 indexed)
 * @property {number} search.size The number of transactions in page
 * @property {string} search.query Query search parameter
 * @property {string} search.bookingDateLessThan Maximum booking date search parameter
 * @property {string} search.bookingDateGreaterThan Minimum booking date search parameter
 * @property {string} search.amountGreaterThan Minimum amount search parameter
 * @property {string} search.amountLessThan Maximum amount search parameter
 * @property {string} search.creditDebitIndicator Credit or debit search parameter
 * @property {string} search.category Transaction category search parameter
 *
 * @property {object} export
 * @property {boolean} export.exportFailied Indicates wether last transactions export failed
 *
 * @property {object[]} notifications Array of notifications to be displayed
 *
 * @property {object} sort
 * @property {string} sort.orderBy Property by which transactions have to be ordered
 * @property {direction} sort.direction Ordering direction
 */
