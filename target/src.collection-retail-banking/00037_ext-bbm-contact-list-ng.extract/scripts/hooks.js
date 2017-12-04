/* eslint import/prefer-default-export: "off" */

/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-contact-ng
 */

/**
 * @param {string} strA
 * @param {string} strB
 * @returns {number}
 * @inner
 */
function compareStr(strA, strB) {
  if (strA > strB) {
    return 1;
  } else if (strA < strB) {
    return -1;
  }
  return 0;
}

/**
 * @param {object} contact
 * @returns {string}
 * @private
 */
function getContactSortStr(contact) {
  return contact.name.toLowerCase();
}

/**
 * Returns first letter of the Contact's name, uppercased
 * @param  {object} contact Contact object
 * @return {string} Contact's first letter
 * @inner
 */
function getContactNameChar(contact) {
  return contact.name ? contact.name.charAt(0).toUpperCase() : null;
}

/**
 * @param {array<object>} contacts
 * @returns {object}
 * @inner
 */
function groupContacts(contacts) {
  return contacts.reduce((result, contact) => {
    const char = getContactNameChar(contact);

    if (!result[char]) {
      // Allow mutation of a local empty object
      // See: https://github.com/airbnb/javascript/issues/719
      /* eslint-disable no-param-reassign */
      result[char] = [];
      /* eslint-enable no-param-reassign */
    }

    result[char].push(contact);

    return result;
  }, {});
}

/**
 * @description
 * Hook for processing the list of contacts
 *
 * @name Hooks#processContacts
 * @type {function}
 * @param {array<object>} contacts Original list of contacts
 * @returns {array<object>} Processed the list of contacts
 */
export function processContacts(contacts = []) {
  const groups = groupContacts(contacts);

  return Object.keys(groups)
    .sort(compareStr)
    .map(char => ({
      contacts: groups[char].sort((contactA, contactB) => (
        compareStr(
          getContactSortStr(contactA),
          getContactSortStr(contactB)
        )
      )),
      char,
    }));
}

/**
 * @name selectPrevContact
 *
 * @description
 * Returns previous (or the first) contact based
 * on the currently selected item id or item index (deprecated).
 *
 * @param {*} contacts Processed contacts
 * @param {number} [index=0] Currently selected contact index (deprecated)
 * @param {object} [contact] Currently selected contact
 * @type {function}
 * @returns {object} Previous or the first contact from the contacts
 */
export function selectPrevContact(contacts, index = 0, contact) {
  const data = contacts || [];
  const firstContact = (data && data[0] && data[0].contacts[0]) || null;

  if (!contact) {
    return firstContact;
  }

  const char = getContactNameChar(contact);
  const groupIndex = data.findIndex(contactGroup => contactGroup.char === char);

  if (groupIndex === -1) {
    return firstContact;
  }

  const contactIndex = data[groupIndex].contacts.findIndex(item => item.id === contact.id);

  if (contactIndex > 0) {
    // If contact is not first in the group => return previous contact
    return data[groupIndex].contacts[contactIndex - 1];
  } else if (contactIndex === 0 && groupIndex > 0) {
    // If contact is first, but his group is not first => return last contact from previous group
    const contactsArray = data[groupIndex - 1].contacts;
    return contactsArray[contactsArray.length - 1];
  }

  return firstContact;
}
