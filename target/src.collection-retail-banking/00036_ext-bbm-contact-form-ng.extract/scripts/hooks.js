// Temporary disable capsInNew until it fixed in lib-bbm-plugins
/* eslint new-cap: ["error", { "capIsNew": false }] */
import plugins from 'lib-bbm-plugins';

/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-contact-ng
 */

/**
 * Confirm dialog button types
 * TODO: Read them from the plugin
 * @type {Object}
 */
const ButtonType = {
  POSITIVE: 'POSITIVE',
  NEGATIVE: 'NEGATIVE',
};

/**
 * Confirm dialog actions
 * @type {Object}
 */
const ConfirmAction = {
  CANCEL: 'cancel',
  CONFIRM: 'confirm',
};

/**
 * Confirm dialog options
 * @type {Object}
 */
const confirmOptions = {
  title: 'Delete contact?',
  message: 'Contact will be deleted from your address book',
  buttons: [
    {
      type: ButtonType.POSITIVE,
      text: 'Delete',
      callbackFn: ConfirmAction.CONFIRM,
    },
    {
      type: ButtonType.NEGATIVE,
      text: 'Cancel',
      callbackFn: ConfirmAction.CANCEL,
    },
  ],
};

/**
 * Shows delete confirm dialog
 * @private
 */
function confirmDelete() {
  return plugins.AlertDialog().show(confirmOptions)
    .then(response => response.callback === ConfirmAction.CONFIRM);
}

/**
 * @description
 * Hook for a handling a confirmation process of a contact deleting.
 *
 * @name Hooks#deleteContact
 * @type {function}
 * @param {object} contact Contact data
 * @param {function} confirm Confirms delete
 * @param {function} cancel Cancels delete
 * @returns {promise<void>} Promise which gets resolved once contact deleting
 *   is confirmed or cancelled
 */
// eslint-disable-next-line import/prefer-default-export
export function deleteContact(contact, confirm, cancel) {
  confirmDelete()
    .then((isConfirmed) => {
      if (isConfirmed) {
        confirm();
      } else {
        cancel();
      }
    })
    .catch(cancel);
}
