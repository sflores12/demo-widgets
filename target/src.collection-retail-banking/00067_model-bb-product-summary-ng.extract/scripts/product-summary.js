import { fromHttpError } from 'lib-bb-model-errors';

import { Preference, BbStorageKeys, SupportedProductKinds } from './constants';

/**
 * Method to normalize data
 * @private
 * @param rawData {Object} http data response
 * @returns {ProductKind[]}
 */
function convertToArray(rawData) {
  return Object.keys(rawData)
    .filter(kind => rawData[kind].products && rawData[kind].products.length > 0)
    .map(kind => {
      const rawKind = rawData[kind];
      const products = rawKind.products.map(product => Object.assign({ kind }, product));

      return Object.assign({}, rawKind, { id: kind, products });
    });
}

/**
 * Product summary model service
 * @name ProductSummaryModel
 * @param {ProductSummaryData} productSummaryData
 *   A Data module to allow access to product summary data.
 * @param {ArrangementsData} arrangementsData
 *   A Data module to allow access to arrangements data.
 * @param {Object} bbStorage storage instance
 * @param {object} Promise An ES2015 compatible `Promise` object.
 * @return {ProductSummaryModel}
 * @inner
 */
export default function productSummaryModel(
  productSummaryData,
  arrangementsData,
  bbStorage,
  Promise,
  widget
) {
  /**
   * @description
   * Processed Product Summary data
   * @type {ProductKinds}
   */
  let processedSummaryData;

  /**
   * @name ProductSummaryModel#patchArrangement
   * @type {function}
   * @description Perform Patch request for arrangement
   * @param {ArrangementsData.ArrangementPatch} arrangement
   * Arrangement data to be sent as the request message data.
   * @returns {Promise.<Response>}
   */
  const patchArrangement = (arrangement) => arrangementsData
    .patchArrangementsRecord(arrangement)
    .catch((e) => {
      throw fromHttpError(e);
    });

  const loadProductSummary = () => productSummaryData
    .getProductsummary()
    .then(({ data }) => {
      bbStorage.setItem(BbStorageKeys.PRODUCT_SUMMARY, data);
      return data;
    })
    .catch((e) => {
      throw fromHttpError(e);
    });

  /**
   * @name ProductSummaryModel#load
   * @type {function}
   *
   * @description
   * Load Product Summary data.
   *
   * @param {object} forceLoad True if should always load data from server
   * @returns {Promise.<ProductKinds, module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to object with ProductsKinds and TotalBalance.
   */
  const load = (forceLoad = true) => bbStorage.getItem(BbStorageKeys.PRODUCT_SUMMARY)
    .then((data) => (!forceLoad && data) || loadProductSummary())
    .then((data) => {
      const { aggregatedBalance } = data;
      processedSummaryData = {
        productKinds: convertToArray(data),
        total: aggregatedBalance,
      };
      return processedSummaryData;
    });

  /**
   * @name ProductSummaryModel#getProductSelectedId
   * @inner
   * @type {function}
   *
   * @description
   * Tries to read selected product id from storage.
   *
   * @returns {Promise<?string>} a Promise with ID
   */
  const getProductSelectedId = () => bbStorage.getItem(BbStorageKeys.PRODUCT_SELECTED);

  /**
   * @name ProductSummaryModel#findProductById
   * @inner
   * @type {function}
   *
   * @description
   * Get product by ID.
   *
   * @param {object} id Product ID
   * @param {ProductKind[]} data Products list
   * @returns {Promise.<Product|null, module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to object with default Product or null.
   */
  const findProductById = (id, data) => {
    let idx = data.length;

    while (idx--) {
      const kind = data[idx];
      const foundProduct = kind.products.find(product => (
        product.id === id
      ));

      if (foundProduct) {
        return foundProduct;
      }
    }

    return null;
  };

  /**
   * @name ProductSummaryModel#getProductFromList
   * @inner
   * @type {function}
   *
   * @description
   * Get product from list.
   *
   * @param {object} id Product ID
   * @param {boolean} getFirstInstead True if should return first product if does not have selected
   * @returns {Promise.<?Product, module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to object with Product or null.
   */
  const getProductFromList = (id, getFirstInstead) =>
    Promise.resolve(processedSummaryData || load(false))
      .then(({ productKinds }) => {
        const defaultProduct =
          getFirstInstead && productKinds[0] ? productKinds[0].products[0] : null;
        return id ? (findProductById(id, productKinds) || defaultProduct) : defaultProduct;
      });

  /**
   * @name ProductSummaryModel#getProductsFromList
   * @inner
   * @type {function}
   *
   * @description
   * Get products from list
   *
   * @param {string[]} ids Product ID array
   * @param {boolean} getFirstInstead True if should return first product if does not have selected
   * @returns {Promise.<?Product[], module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to an array with Products or null
   */
  const getProductsFromList = (ids, getFirstInstead) =>
    Promise.resolve(processedSummaryData || load(false))
      .then(({ productKinds }) => {
        const defaultProduct = [];
        if (getFirstInstead && productKinds[0]) {
          defaultProduct.push(productKinds[0].products[0]);
        }

        if (!ids || !ids.length) {
          return defaultProduct;
        }

        return ids.map(id => findProductById(id, productKinds) || defaultProduct);
      });

  /**
   * @name ProductSummaryModel#getProductSelected
   * @type {function}
   *
   * @description
   * Temporary. Get current selected product
   *
   * @param {?Boolean} getFirstInstead Get first product if there is no
   * product selected in the storage (default true)
   * @returns {Promise.<Product>} A Promise resolving to Product.
   */
  const getProductSelected = (getFirstInstead = true) => getProductSelectedId()
    .then(id => getProductFromList(id, getFirstInstead));

  /**
   * @name ProductSummaryModel#getProductsSelected
   * @type {function}
   *
   * @description
   * Get currently selected products array
   *
   * @param {?Boolean} getFirstInstead Get first product if there are no
   * products selected in the storage (default true)
   * @returns {Promise.<Product[]>} A Promise resolving to Product array
   */
  const getProductsSelected = (getFirstInstead = true) =>
    bbStorage.getItem(BbStorageKeys.PRODUCTS_SELECTED)
      .then(items => getProductsFromList(items, getFirstInstead));

  /**
   * @name ProductSummaryModel#setProductSelected
   * @type {function}
   *
   * @description
   * Set current selected product
   *
   * @param {Product} product A product to select
   */
  const setProductSelected = (product) => {
    if (product) {
      bbStorage.setItem(BbStorageKeys.PRODUCT_SELECTED, product.id);
    } else {
      bbStorage.removeItem(BbStorageKeys.PRODUCT_SELECTED);
    }
  };

  /**
   * @name ProductSummaryModel#setProductsSelected
   * @type {function}
   *
   * @description
   * Set currently selected products array
   *
   * @param {Product[]} products Array of products to select
   */
  const setProductsSelected = (products) => {
    if (products && products.length) {
      bbStorage.setItem(BbStorageKeys.PRODUCTS_SELECTED,
        products.map(product => product.id).filter(id => id)
      );
    } else {
      bbStorage.removeItem(BbStorageKeys.PRODUCTS_SELECTED);
    }
  };

  /**
   * @name ProductSummaryModel#loadByLegalEntityId
   * @type {function}
   *
   * @description
   * Load some data.
   *
   * @param {?object} params - optional configuration object
   * @returns {Promise.<Products, module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to object with Accounts by legalEntityId.
   */
  const loadByLegalEntityId = (params) => productSummaryData
    .getProductsummaryArrangements(params)
    .then(raw => ({
      data: raw.data,
      totalCount: parseInt(raw.headers('x-total-count'), 10),
    }))
    .catch(e => {
      throw fromHttpError(e);
    });

  /**
   * @name ProductSummaryModel#loadContextArrangements
   * @type {function}
   *
   * @description
   * Load arrangements collection for a given context
   *
   * @param {?object} params - optional configuration object
   * @returns {Promise.<Products, module:lib-bb-model-errors.ModelError>} A Promise resolving to
   *   a collection containing products.
   */
  const loadContextArrangements = (params) => productSummaryData
    .getProductsummaryContextArrangements(params)
    .then(raw => ({
      data: raw.data,
      totalCount: parseInt(raw.headers('x-total-count'), 10),
    }))
    .catch(e => {
      throw fromHttpError(e);
    });

  /**
   * @name ProductSummaryModel#getProductDetails
   * @type {function}
   *
   * @description
   * Get all the details of a product.
   *
   * @param {string} productId Id of the requested product
   * @returns {Promise.<ProductDetails, module:lib-bb-model-errors.ModelError>}
   * A Promise resolving to object with Account details.
   */
  const getProductDetails = (productId) => arrangementsData
    .getArrangementsRecord(productId)
    .then(raw => raw.data)
    .catch(e => {
      throw fromHttpError(e);
    });


  /**
   * @name ProductSummaryModel#getAccountsOverviewPreferences
   * @type {function}
   *
   * @description
   * Getting accounts preferences from widget
   *
   * @returns {Object} Preferences object
   */
  function getAccountsOverviewPreferences() {
    const accountsOverviewPreferences = {};

    accountsOverviewPreferences.pageSize = widget.getLongPreference(Preference.ACCOUNTS_PAGE_SIZE);
    accountsOverviewPreferences.maxNavPages =
      widget.getLongPreference(Preference.ACCOUNTS_MAX_NAV_PAGES);
    accountsOverviewPreferences.paginationType =
      widget.getStringPreference(Preference.ACCOUNTS_PAGINATION_TYPE);
    accountsOverviewPreferences.dissmissMessageTime =
      widget.getLongPreference(Preference.ACCOUNTS_DISSMISS_MESSAGE_TIME) || 5;
    accountsOverviewPreferences.sortableColumn =
      widget.getStringPreference(Preference.ACCOUNTS_SORTABLE_COLUMN);
    accountsOverviewPreferences.productKindName =
      SupportedProductKinds.includes(widget.getStringPreference(Preference.PRODUCT_KIND_NAME)) ?
        widget.getStringPreference(Preference.PRODUCT_KIND_NAME) : '';

    return accountsOverviewPreferences;
  }

  /**
   * @name ProductSummaryModel
   * @type {Object}
   *
   * @description
   * Product Summary model service
   */
  return {
    load,
    getProductSelected,
    setProductSelected,
    getProductsSelected,
    setProductsSelected,

    // TODO: Remove this deprecated method when component version will be bumped to v2.0.0
    getSelectedAccount: () => {
      // eslint-disable-next-line max-len, no-console
      console.warn('DEPRECATED - This method will removed in next major update. Use getProductSelected instead.');
      return getProductSelected();
    },

    // TODO: Remove this deprecated method when component version will be bumped to v2.0.0
    setSelectedAccount: (account) => {
      // eslint-disable-next-line max-len, no-console
      console.warn('DEPRECATED - This method will removed in next major update. Use setProductSelected instead.');
      return setProductSelected(account);
    },
    //
    loadByLegalEntityId,
    getProductDetails,
    getAccountsOverviewPreferences,
    patchArrangement,

    loadContextArrangements,
  };
}

/**
 * ProductKind type definition
 * @typedef {Object} ProductKinds
 * @property {TotalBalance}   total               - total balance of products
 * @property {ProductKind[]}  productKinds        - array of Products Kinds
 */

/**
 * ProductKind type definition
 * @typedef {Object} ProductKind
 * @property {!string}    id                      - id of the ProductKind
 * (currentAccounts, savingsAccounts, termDeposits, creditCards, debitCards, loans,
 *  investmentAccounts)
 * @property {!string}    name                    - name of the ProductKind
 * @property {string}     aggregatedBalance       - aggregated balance
 * @property {string}     currency                - currency code
 * @property {Product[]}  products                - array of Products
 */

/**
 * ProductKind type definition
 * @typedef {Object} Products
 * @property {number}     totalCount              - total number of products
 * @property {Product[]}  products                - array of Products
 */

/**
 * Product type definition
 * @typedef {Object} Product
 * @property {!string}    id                      - id of the Product
 * @property {!string}    name                    - name of the Product
 * @property {!string}    kind                    - id of the ProductKind
 * @property {string}     alias                   - alias of the Product
 * @property {string}     IBAN                    - International Bank Account Number
 * @property {string}     BBAN                    - Basic Bank Account Number
 * @property {string}     currency                - currency code
 * @property {string}     PANSuffix               - Primary Account Number Suffix
 * @property {string}     bookedBalance           - booked balance
 * @property {string}     availableBalance        - available balance
 * @property {string}     creditLimit             - credit limit
 * @property {string}     currentInvestmentValue  - current investment value
 * @property {string}     principalAmount         - principal amount
 * @property {string}     accruedInterest         - accrued interest
 */

/**
 * @typedef {Object} TotalBalance
 * @property {string} aggregatedBalance - aggregated balance
 * @property {string} currency - currency code
 */

/**
 * Product details definition
 * @typedef {Object} ProductDetails
 * @property {!string}     externalArrangementId      - id of the external arrangement
 * @property {!string}     externalLegalEntityId      - id of the external legal entity
 * @property {!string}     externalProductId          - id of the external product
 * @property {string}      name                       - name of the account
 * @property {string}      alias                      - alias of the account
 * @property {number}      bookedBalance              - booked balance
 * @property {number}      availableBalance           - available balance
 * @property {number}      creditLimit                - credit limit
 * @property {string}      IBAN                       - International Bank Account Number
 * @property {string}      BBAN                       - Basic Bank Account Number
 * @property {string}      currency                   - 3 characteres currency code
 * @property {boolean}     externalTransferAllowed    - is external transfer allowed
 * @property {boolean}     urgentTransferAllowed      - is urgent transfer allowed
 * @property {string}      accruedInterest            - accrued interest
 * @property {string}      number                     - number
 * @property {number}      principalAmount            - principal amount
 * @property {number}      currentInvestmentValue     - current investment value
 * @property {!string}     legalEntityId              - id of the legal entity
 * @property {!string}     productId                  - id of the product
 * @property {string}      productNumber              - number of the product
 * @property {string}      accountOpeningDate         - date when account was opened
 * @property {number}      accountInterestRate        - account interest rate
 * @property {number}      valueDateBalance           - value date balance
 * @property {number}      overdraftAmount            - overdraft amount
 * @property {number}      overdraftInterestRate      - overdraft interest rate
 * @property {number}      overdraftExpiryDate        - overdraft expiry date
 * @property {number}      overdraftLimit             - overdraft limit
 * @property {string}      bankBranchCode             - bank branch code
 * @property {date}        startDate                  - start date
 * @property {string}      term                       - term
 * @property {date}        maturityDate               - maturity date
 * @property {number}      maturityAmount             - maturity amount
 * @property {boolean}     autoRenevalIndicator       - is auto renewal enabled
 * @property {string}      interestPaymentFrequency   - interest payment frequency
 * @property {string}      interestSettlementAccount  - interest settlement account
 * @property {number}      outstandingPrincipal       - outstanding principal
 * @property {number}      monthlyInstalmentAmount    - monthly instalment amount
 * @property {number}      minimumRequiredBalance     - minimum required balance
 * @property {string}      creditCardAccountNumber    - credit card account number
 * @property {date}        validThru                  - credit card validity through date
 * @property {number}      applicableInterestRate     - applicable interest rate
 * @property {number}      remainingCredit            - remaining credit
 * @property {number}      outstandingPayment         - outstanding payment
 * @property {number}      minimunPayment             - minimum payment
 * @property {date}        minimunPaymentDueDate      - minimum payment due date
 * @property {number}      totalInvestmentValue       - total investment value
 * @property {DebitCard[]} debitCard                  - debit card collection
 */

/**
 * @typedef {Object} DebitCard
 * @property {string} number      - debit card number
 * @property {date}   expiryDate  - debit card expiry date
 */

/**
 * @typedef ArrangementsData.ArrangementPatch
 * @type {Object}
 * @property {string} id Internally used unique identification of arrangement
 * @property {?string} alias User specific naming for an arrangement
 * @property {?boolean} visible User specific visibility for an arrangement
 * @property {?Object} additions Container object for custom API extensions
 */

/**
 * @typedef Response
 * @type {Object}
 * @property {Object} data See method descriptions for possible return types
 * @property {function} headers Getter headers function
 * @property {number} status HTTP status code of the response.
 * @property {string} statusText HTTP status text of the response.
 */
