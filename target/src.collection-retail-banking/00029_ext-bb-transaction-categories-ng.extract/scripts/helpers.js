import { negativeSignKey } from './debit-credit-sign';

import CATEGORY_CLASS_PREFIX, {
  UNCATEGORIZED_ICON_CLASS as DEFAULT_ICON_CLASS,
} from './constants';

/**
 * @description
 * Contains default modal config (if any) used to init the modal window
 *
 * @name modal
 * @type {object}
 */
const modal = {};

let $ctrl;

/**
 * @name getCategoryIconClass
 * @description
 * Converts transaction category name into category CSS icon class
 *
 * @type {function}
 * @param {string} transactionCategory Transaction category
 * @returns {string}
 */
const getCategoryIconClass = (transactionCategory) =>
  `${CATEGORY_CLASS_PREFIX}${transactionCategory.toLowerCase()
    .replace(/\W/g, '-').replace(/-{2,}/g, '-') || DEFAULT_ICON_CLASS}`;


/**
 * @name getSignedAmount
 *
 * @description
 * Based on credit/debit indicator, put right sign on the transaction amount
 *
 * @type {function}
 * @param {object} transaction Transaction object
 * @returns {number} Signed amount
 */
const getSignedAmount = (transaction) => {
  let amount;
  if (transaction) {
    amount = transaction.amount * (transaction.creditDebitIndicator === negativeSignKey ? -1 : 1);
  }

  return amount;
};

/**
 * @name getModalData
 *
 * @description
 * Get modal widget data
 *
 * @type {function}
 * @returns {object}
 */
const getModalData = () => modal;

/**
 * @name initModal
 *
 * @description
 * Get modal widget data
 *
 * @param {object} ctrl
 * @type {function}
 * @returns {void}
 */
const initModal = (ctrl) => {
  $ctrl = ctrl;
  $ctrl.isModalOpen = true;
  Object.assign(modal, {
    items: $ctrl.items,
    transaction: $ctrl.selectedTransaction,
    newCategory: $ctrl.selectedTransaction.category,
  });
};

/**
 * @name cancel
 *
 * @description
 * Cancel / close the modal window
 *
 * @type {function}
 * @returns {void}
 */
const cancel = () => {
  $ctrl.isModalOpen = false;
};

/**
 * @name submit
 *
 * @description
 * Submit a category object to update transactions' category
 *
 * @type {function}
 * @returns {void}
 */
const submit = () => {
  const data = {
    transactionId: modal.transaction.id,
    categoryName: modal.newCategory,
  };

  $ctrl.intentResolve(data);
  cancel();
};

/**
 * @name onClose
 *
 * @description
 * Handler to call cancel()
 *
 * @type {function}
 * @returns {void}
 */
const onClose = () => cancel();

export default () => ({
  getCategoryIconClass,
  initModal,
  onClose,
  submit,
  cancel,
  getModalData,
  getSignedAmount,
});
