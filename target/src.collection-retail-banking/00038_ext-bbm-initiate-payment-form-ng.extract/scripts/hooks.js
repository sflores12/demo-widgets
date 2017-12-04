/* eslint-disable import/prefer-default-export */

/**
 * @description
 * Hooks for widget-bbm-initiate-payment-ng
 *
 * @name Hooks
 * @type {Object}
 */

/**
 * @description
 * Groups the given list of contacts by the first character.
 *
 * @name groupContacts
 * @type {function}
 *
 * @param {Array.<Object>} contacts
 * @returns {Object}
 * @inner
 */
const groupContacts = contacts => (
  contacts.reduce((result, contact) => {
    const char = contact.name.charAt(0).toUpperCase();

    if (!result[char]) {
      // Allow mutation of a local empty object
      // See: https://github.com/airbnb/javascript/issues/719
      // eslint-disable-next-line no-param-reassign
      result[char] = [];
    }

    result[char].push(contact);

    return result;
  }, {})
);

/**
 * @description
 * Processes the given list of contacts by grouping them
 * by the first character of the contact's name.
 *
 * @name processContacts
 * @type {function}
 *
 * @param {Array.<AccountView>} contacts Original list of contacts from the model.
 * @returns {Array.<ContactsGroup>} Groups of contacts.
 * @inner
 */
const processContacts = contacts => {
  const groups = groupContacts(contacts);

  return Object.keys(groups)
    .sort()
    .map(char => ({
      contacts: groups[char],
      char,
    }));
};

/**
 * @description
 * Hook for processing the list of all possible beneficiaries.
 *
 * @name Hooks#processBeneficiaries
 * @type {function}
 *
 * @param {Array.<AccountView>} creditAccounts
 * @param {Array.<AccountView>} contacts
 * @returns {Beneficiaries}
 */
export const processBeneficiaries = (creditAccounts, contacts) => ({
  all: [
    ...creditAccounts,
    ...contacts,
  ],
  creditAccounts,
  contacts: processContacts(contacts),
});

/**
 * @typedef {Object} AccountView
 * @property {string} id The internal account identifier
 * @property {string} name The account's name, suitable for display to users
 * @property {?string} identifier The identifier of the account from the user's perspective
 * @property {?string} amount The most important associated value to be displayed
 * @property {?string} currency Account currency
 * @property {?boolean} external Whether the account is external
 */

/**
 * @typedef {Object} Beneficiaries
 * @property {Array.<AccountView>} all The list of all beneficiaries.
 * @property {Array.<AccountView>} creditAccounts The list of credit accounts.
 * @property {Array.<ContactsGroup>} contacts The list of contacts groups.
 */

/**
 * @typedef {Object} ContactsGroup
 * @property {string} char The first character of a contact name
 * @property {Array.<AccountView>} contacts The list of contacts
 */
