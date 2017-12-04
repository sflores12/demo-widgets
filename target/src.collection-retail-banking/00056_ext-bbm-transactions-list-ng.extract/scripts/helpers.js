/* global window */
import { negativeSignKey } from './debit-credit-sign';

const Intent = {
  INITIATE_PAYMENT: 'intent.bb.paymentOrder.payment.initiate',
};

const Platform = {
  ANDROID: 'android',
  IOS: 'ios',
};

const ToolbarButtonEvent = {
  SHOW_PRODUCT_DETAILS: 'bb.action.productDetails.view.show',
};

const getPlatform = () => window.BB_PLATFORM;

const warn = msg => console.warn(`[ext-bbm-transactions-list-ng] ${msg}`);

export default ({ bbIntent, stateContainer }) => {
  const initiatePaymentIntent = bbIntent.create(Intent.INITIATE_PAYMENT);

  const getSelectedProduct = stateContainer.createSelector(state => state.product.data);

  /**
   * @description
   * Checks whether the widget is running on Android.
   * Returns true, if the platform is Android, false otherwise.
   *
   * @name Helpers#isAndroid
   * @type {function}
   * @returns {boolean}
   */
  const isAndroid = () => getPlatform() === Platform.ANDROID;

  /**
   * @description
   * Checks whether the widget is running on iOS.
   * Returns true, if the platform is iOS, false otherwise.
   *
   * @name Helpers#isIOS
   * @type {function}
   * @returns {boolean}
   */
  const isIOS = () => getPlatform() === Platform.IOS;

  /**
   * @description
   * Checks whether actions for a given account should be displayed.
   * Returns true, if they should be displayed, or `false` otherwise.
   *
   * @name Helpers#showAccountActions
   * @type {function}
   * @returns {boolean}
   */
  const showAccountActions = () => Boolean(
    getSelectedProduct() && getSelectedProduct().debitAccount
  );

  /**
   * @description
   * Checks whether FAB (Floating Action Buttons) should be displayed. Returns true
   * if it should be displayed, false otherwise.
   *
   * @name Helpers#showFAB
   * @type {function}
   * @returns {boolean}
   */
  const showFAB = ctrl => Boolean(!ctrl.searching && isAndroid() && showAccountActions());

  /**
   * @description
   * Based on credit/debit indicator, put right sign on the transaction amount
   *
   * @name Helpers#getSignedAmount
   * @type {function}
   * @param {object} transaction Transaction object
   * @returns {number} Signed amount
   */
  const getSignedAmount = transaction => (
    transaction.amount * (transaction.creditDebitIndicator === negativeSignKey ? -1 : 1)
  );

  /**
   * @description
   * Helper which adds event listener on show details.
   *
   * @name Helpers#onInit
   * @type {function}
   * @param {module:widget-bb-transactions-ng.TransactionsController} ctrl
   *  TransactionsController instance.
   */
  const onInit = ctrl => {
    window.addEventListener(ToolbarButtonEvent.SHOW_PRODUCT_DETAILS, () => {
      const productId = ctrl.product.id;
      ctrl.showProductDetails(productId);
    });
  };

  /**
   * @description
   * Initiates payment from the given product.
   *
   * @name Helpers#initiatePayment
   * @type {function}
   */
  const initiatePayment = () => {
    const product = getSelectedProduct();

    if (!product) {
      warn('Cannot initiate a payment – no selected product');
      return;
    }

    initiatePaymentIntent({
      debitAccount: product,
    });
  };

  /**
   * @description
   * Checks for initial loading.
   *
   * @name Helpers#isInitialLoading
   * @type {function}
   *
   * @param {module:widget-bb-transactions-ng.TransactionsController} ctrl
   * @returns {boolean}
   */
  const isInitialLoading = ctrl => ctrl.loading && !ctrl.transactions;

  /**
   * @description
   * Checks if the searching has been failed.
   *
   * @name Helpers#isSearchErrorState
   * @type {function}
   *
   * @param {module:widget-bb-transactions-ng.TransactionsController} ctrl
   * @returns {boolean}
   */
  const isSearchErrorState = ctrl => (
    ctrl.searching && ctrl.searchLoadingError && !ctrl.searchLoading
  );

  /**
   * @description
   * Checks if there are no search results.
   *
   * @name Helpers#isSearchEmptyState
   * @type {function}
   *
   * @param {module:widget-bb-transactions-ng.TransactionsController} ctrl
   * @returns {boolean}
   */
  const isSearchEmptyState = ctrl => (
    ctrl.searching &&
    Boolean(ctrl.searchTransactions && !ctrl.searchTransactions.length) &&
    !ctrl.searchLoadingError && !ctrl.searchLoading
  );

  /**
   * @description
   * Checks if there are no transactions.
   *
   * @name Helpers#isEmptyState
   * @type {function}
   *
   * @param {module:widget-bb-transactions-ng.TransactionsController} ctrl
   * @returns {boolean}
   */
  const isEmptyState = ctrl => (
    !ctrl.searching &&
    Boolean(ctrl.transactions && !ctrl.transactions.length) &&
    !ctrl.loading &&
    !ctrl.loadingError
  );

  /**
   * @description
   * Checks if the loading has been failed.
   *
   * @name Helpers#isErrorState
   * @type {function}
   *
   * @param {module:widget-bb-transactions-ng.TransactionsController} ctrl
   * @returns {boolean}
   */
  const isErrorState = ctrl => !ctrl.searching && !ctrl.loading && ctrl.loadingError;

  return {
    getSignedAmount,
    initiatePayment,
    isAndroid,
    isEmptyState,
    isErrorState,
    isInitialLoading,
    isSearchEmptyState,
    isSearchErrorState,
    onInit,
    isIOS,
    showAccountActions,
    showFAB,
  };
};
