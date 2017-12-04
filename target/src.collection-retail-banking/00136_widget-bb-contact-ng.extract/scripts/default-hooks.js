/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-contact-ng
 */

/**
 * @name deleteContact
 *
 * @description
 * deleteContact default hook
 *
 * @param {object} contact Contact object
 * @param {function} confirm Function to confirm delete
 * @type {function}
 */
export function deleteContact(contact, confirm) {
  confirm();
}

/**
 * @name getSelectedContact
 *
 * @description
 * getSelectedContact default hook
 *
 * @param {object} contacts Contacts list
 * @param {object} selectedContact Selected contact
 * @type {function}
 * @returns {object} selectedContact
 */
export function getSelectedContact(contacts, selectedContact) {
  return selectedContact;
}

/**
 * @name selectPrevContact
 *
 * @description
 * Returns previous (or the first) contact based
 * on the currently selected item id or item index (deprecated).
 *
 * @param {array.<object>} contacts Processed contacts
 * @param {number} [index=0] Currently selected contact index (deprecated)
 * @param {object} [contact] Currently selected contact
 * @type {function}
 * @returns {object} Previous or the first contact from the contacts
 */
export function selectPrevContact(contacts, index = 0, contact) {
  const contactIndex = (contacts || []).findIndex((item) => item.id === contact.id);
  const firstContact = contacts ? contacts[0] : null;
  return contactIndex > 0 ? contacts[contactIndex - 1] : firstContact;
}

/**
 * @name returnContactIfExists
 *
 * @description
 * Returns contact if it exists in contacts group, otherwise returns false result
 *
 * @param contacts Array of contacts
 * @param contact Contact object
 * @type {function}
 * @return {*} Specifies if contact exists in the array
 */
export function returnContactIfExists(contacts, contact) {
  if (!Array.isArray(contacts)) {
    return false;
  }

  const index = contacts.findIndex(item => item.id === contact.id);
  if (index >= 0) {
    return contacts[index];
  }

  return false;
}

/**
 * @name processContacts
 *
 * @description
 * processContacts default hook
 *
 * @param {array.<object>} contacts
 * @type {function}
 * @returns {array.<object>} contacts
 */
export function processContacts(contacts) {
  return contacts;
}

/**
 * @description
 * processSearchContacts default hook
 *
 * @name processSearchContacts
 * @type {function}
 * @param {array.<object>} contacts Original list of searched contacts
 * @returns {array.<object>} Processed the list of searched contacts
 */
export function processSearchContacts(contacts = []) {
  return contacts;
}

/**
 * @name processRequestParams
 *
 * @description
 * processRequestParams default hook
 *
 * @param {object} defaultParams
 * @param {object} params
 * @type {function}
 * @returns {object} processed request parameters
 */
export function processRequestParams(defaultParams, params) {
  return Object.assign({}, defaultParams, params);
}

/**
 * @name processSearchRequestParams
 *
 * @description
 * processSearchRequestParams default hook
 *
 * @param {object} defaultParams
 * @param {object} params
 * @type {function}
 * @returns {object} processed request parameters
 */
export function processSearchRequestParams(defaultParams, params) {
  return Object.assign({}, defaultParams, params);
}

/**
 * @name getNewContactObject
 *
 * @description
 * getNewContactObject default hook
 *
 * @param {object} contact New Contact object
 * @type {function}
 * @returns {object} Processed new Contact object
 */
export function getNewContactObject(contact) {
  return contact;
}

/**
 * @name processContactBeforeSave
 *
 * @description
 * processContactBeforeSave default hook
 *
 * @param {object} contact Contact object to be created/updated
 * @type {function}
 * @returns {object} Processed Contact object
 */
export function processContactBeforeSave(contact) {
  return contact;
}
