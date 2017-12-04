/**
 * Widget preferences enum
 * @name Preference
 * @type {object}
 */
export const Preference = {
  SAVE_CONTACT: 'bb.payment.save.contact',
  SHOW_EXCHANGE_RATE: 'bb.payment.show.exchange',
  URGENT: 'bb.payment.urgent',
  RECURRING: 'bb.payment.recurring',
};

/**
 * @description
 * Single transfer constant
 *
 * @name singleTransfer
 * @type {object}
 */
export const singleTransfer = {
  name: 'form.schedule.frequency.once',
  value: 'ONCE',
};

/**
 * Widget events enum
 * @type {object}
 */
export const Event = {
  CONTACT_CREATE_DONE: 'bb.event.contact.create.done',
  CONTACT_DELETE_DONE: 'bb.event.contact.delete.done',
  CONTACT_UPDATE_DONE: 'bb.event.contact.update.done',
  ACCOUNT_SELECTED: 'bb.event.account.selected',
};

/**
 * @description
 * Available payment order ending types
 *
 * @name EndingType
 * @type {object}
 */
export const EndingType = {
  NEVER: 'never',
  ON: 'on',
  AFTER: 'after',
};

/**
 * @description
 * Limit breach report constants
 *
 * @type {object}
 */
export const BreachReport = {
  key: 'breachReport',
  messageKey: 'payment.model.error.breach',
  shadowMessageKey: 'payment.model.error.breach.shadow',
};
