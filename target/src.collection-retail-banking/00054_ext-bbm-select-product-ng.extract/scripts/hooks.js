/* eslint-disable import/prefer-default-export */

/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-payment-ng
 */

/**
 * @name compareStr
 * @type {function}
 *
 * @description
 * Compare function that defines an alphabetical sort order.
 *
 * @param {string} strA
 * @param {string} strB
 * @returns {number}
 * @inner
 */
const compareStr = (strA, strB) => {
  if (strA > strB) {
    return 1;
  } else if (strA < strB) {
    return -1;
  }
  return 0;
};

/**
 * @param {array<object>} accounts
 * @returns {array<object>}
 * @inner
 */
const filterOwnAccounts = (accounts) => (
  accounts.filter((account) => !account.external)
);

const filterContacts = (accounts) => (
  accounts.filter((account) => account.external)
);

/**
 * @name getContactSortStr
 * @type {function}
 * @param {object} contact
 * @returns {string}
 * @inner
 */
const getContactSortStr = (contact) => contact.name.toLowerCase();

/**
 * @name groupContacts
 * @type {function}
 *
 * @param {object[]} contacts
 * @returns {object}
 * @inner
 */
const groupContacts = (contacts) => (
  contacts.reduce((result, contact) => {
    const char = contact.name.charAt(0).toUpperCase();

    if (!result[char]) {
      // Allow mutation of a local empty object
      // See: https://github.com/airbnb/javascript/issues/719
      /* eslint-disable no-param-reassign */
      result[char] = [];
    }

    result[char].push(contact);

    return result;
  }, {})
);

/**
 * @name processContacts
 * @type {function}
 *
 * @param {array<object>} contacts Raw contacts list to process
 * @returns {array<object>} Processed list of contacts
 * @inner
 */
const processContacts = (contacts = []) => {
  const groups = groupContacts(contacts);
  return Object.keys(groups)
    .sort()
    .map(char => ({
      contacts: groups[char].sort((contactA, contactB) => (
        compareStr(
          getContactSortStr(contactA),
          getContactSortStr(contactB)
        )
      )),
      char,
      external: true,
    }));
};

/**
 * @name Hooks#groupAccountsTo
 * @type {function}
 *
 * @description
 * Hook for grouping accounts. Used only for Mobile.
 *
 * @param {array<object>} accountsTo List of beneficiary accounts
 * @returns {array<object>} List of grouped accounts
 */
export function groupAccountsTo(accountsTo) {
  return [
    ...filterOwnAccounts(accountsTo),
    ...processContacts(filterContacts(accountsTo)),
  ];
}
