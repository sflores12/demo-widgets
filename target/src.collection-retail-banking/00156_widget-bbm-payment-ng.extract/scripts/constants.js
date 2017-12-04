/**
 * Types of accounts
 * @type {Object}
 */
export const AccountType = {
  DEBIT: 'debit',
  CREDIT: 'credit',
};

/**
 * Pubsub events
 * @type {Object}
 */
export const Event = {
  CXP_ITEM_LOADED: 'cxp.item.loaded',
  BB_ITEM_LOADED: 'bb.item.loaded',

  CONTACT_CREATE_START: 'bb.event.contact.create.start',
  CONTACT_CREATE_DONE: 'bb.event.contact.create.done',
  CONTACT_CREATE_FAILED: 'bb.event.contact.create.failed',
  CONTACT_DELETE_DONE: 'bb.event.contact.delete.done',
  CONTACT_UPDATE_DONE: 'bb.event.contact.update.done',

  BENEFICIARIES_LOAD_FAILED: 'bb.event.payment.beneficiaries.load.failed',
  DEBIT_ACCOUNTS_LOAD_FAILED: 'bb.event.payment.debitAccounts.load.failed',

  PAYMENT_DONE: 'bb.event.payment.done',
  PAYMENT_FAILED: 'bb.event.payment.failed',
  PAYMENT_START: 'bb.event.payment.started',

  SELECT_ACCOUNT_LOAD_START: 'bb.event.payment.selectAccount.load.start',
  SELECT_ACCOUNT_LOAD_DONE: 'bb.event.payment.selectAccount.load.done',
  SELECT_ACCOUNT_FAILED: 'bb.event.payment.selectAccount.failed',

  SHOW_PIN: 'bb.action.pin.show',
  PIN_CONFIRMATION_SUCCESSFUL: 'bb.event.pin.confirmation.success',
};

/**
 * Intents
 * @type {Object}
 */
export const Intent = {
  SELECT_ACCOUNT: 'view.payment.account.select',
  SELECT_SCHEDULE: 'view.payment.schedule.select',
  SHOW_FORM: 'view.payment.form.show',
  SHOW_REVIEW: 'view.payment.review.show',
};

/**
 * Payment mode. Denotes whether payment will be single or will be recurring.
 * @type {Object}
 */
export const PaymentMode = {
  SINGLE: 'SINGLE',
  RECURRING: 'RECURRING',
};

/**
 * Options when to end a recurring payment.
 * @type {Object}
 */
export const RecurrenceEnding = {
  NEVER: 'NEVER',
  ON: 'ON',
  AFTER: 'AFTER',
};

/**
 * Storage keys
 * @type {Object}
 */
export const StorageKey = {
  PAYMENT: 'bb.payment.payment',
};

/**
 * Transfer frequency. Denotes how frequently the transfer should be made.
 * @type {Object}
 */
export const TransferFrequency = {
  ONCE: 'ONCE',
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  YEARLY: 'YEARLY',
};
