import { fromHttpError } from 'lib-bb-model-errors';
import { Preference, ApprovalStatus } from './constants';

const CONTACT_SELECTED = 'bb.contact.selected';
const ACCEPTED = 202;

const toInt = value => parseInt(value, 10) || 0;

/**
 * @inner
 * @type {function}
 * @param {object} Promise An ES2015 compatible `Promise` object.
 * @param {object} contactData
 * @param {object} widget
 *
 * @return {object}
 */
export default function contactModel(Promise, contactData, widget, bbStorage) {
  const groupName = widget.getStringPreference(Preference.GROUP_NAME);
  const selectedContactStorageKey = groupName ?
    `${CONTACT_SELECTED}.${groupName}` : CONTACT_SELECTED;

  /**
   * @name contactModel#getNewContactObject
   * @type {function}
   *
   * @description
   * Returns empty contact object. Used for contact creation.
   *
   * @returns {object} New contact object
   */
  function getNewContactObject() {
    return {
      name: '',
      accounts: [],
    };
  }

  /**
   * @name contactModel#getContactSchema
   * @type {function}
   *
   * @description
   * Gets the contact schema from the data (RAML)
   *
   * @returns {object}
   */
  function getContactSchema() {
    return contactData.schemas.postContactsRecord.properties;
  }

  const transformReponseWithApproval = response => ({
    data: response.data,
    isApprovalRequired: response.status === ACCEPTED &&
      response.data.status === ApprovalStatus.REQUIRED,
  });

  /**
   * @name contactModel#deleteContact
   * @type {function}
   *
   * @description
   * Deletes a given contact
   *
   * @param {object} contact
   * @returns {Promise}
   */
  const deleteContact = (contact) =>
    contactData
      .deleteContactsRecord(contact.id)
      .then(transformReponseWithApproval)
      .catch(httpErrorResponse => {
        throw fromHttpError(httpErrorResponse);
      });

  /**
   * @name contactModel#getContacts
   * @type {function}
   *
   * @description
   * Gets the list of contacts
   *
   * @param {object} params Parameters to be passed.
   * @returns {Promise.<object>} A Promise with an array of contacts
   * and total number of contacts on the server
   */
  const getContacts = params => contactData
    .getContacts(params)
    .then(raw => ({
      data: raw.data,
      totalCount: toInt(raw.headers('x-total-count')),
    }))
    .catch(httpErrorResponse => {
      throw fromHttpError(httpErrorResponse);
    });

  /**
   * @name contactModel#getCurrentContact
   * @type {function}
   *
   * @description
   * Tries to read the current contact from sync preferences
   *
   * @returns {object} Contact data
   */
  const getCurrentContact = () =>
    bbStorage.getItem(selectedContactStorageKey);

  /**
   * @name contactModel#storeContactAsCurrent
   * @type {function}
   *
   * @description
   * Stores a given contact as current in sync preferences
   *
   * @param {object} contact Contact data
   */
  const storeContactAsCurrent = (contact) => {
    bbStorage.setItem(selectedContactStorageKey, contact);
  };

  /**
   * @name contactModel#updateContact
   * @type {function}
   *
   * @description
   * Updates a given contact
   *
   * @param {object} contact Contact data
   * @returns {Promise.<object>} A Promise with response data
   */
  const updateContact = contact => {
    const payload = Object.assign({}, contact);

    return contactData.putContactsRecord(contact.id, payload)
      .then(transformReponseWithApproval)
      .catch(httpErrorResponse => {
        throw fromHttpError(httpErrorResponse);
      });
  };

  /**
   * @name contactModel#createContact
   * @type {function}
   *
   * @description
   * Creates a new contact
   *
   * @param {object} contact Contact data
   * @returns {Promise} A Promise with response data
   */
  const createContact = contact => contactData.postContactsRecord(contact)
        .then(transformReponseWithApproval)
        .catch(httpErrorResponse => {
          throw fromHttpError(httpErrorResponse);
        });

  /**
   * @name contactModel#getContactPreferences
   * @type {function}
   * @description
   * Read all the available preferences from the widget.
   * @return {object} Widget preferences object
   */
  const getContactPreferences = () => {
    const preferences = {};

    preferences.showAvatar = widget.getBooleanPreference(Preference.SHOW_AVATAR);
    preferences.contactNew = widget.getBooleanPreference(Preference.CONTACT_NEW);
    preferences.pageSize = widget.getLongPreference(Preference.PAGE_SIZE);
    preferences.maxNavPages = widget.getLongPreference(Preference.MAX_NAV_PAGES);
    preferences.paginationType = widget.getStringPreference(Preference.PAGINATION_TYPE);
    preferences.notificationDismissTime = widget
      .getLongPreference(Preference.NOTIFICATION_DISMISS_TIME);
    preferences.groupName = widget.getStringPreference(Preference.GROUP_NAME);

    return preferences;
  };

  /**
   * @name contactModel
   * @type {object}
   *
   * @description
   * Model factory for widget-bb-contact-ng
   */
  return {
    getNewContactObject,
    getContactSchema,
    deleteContact,
    getContacts,
    getCurrentContact,
    storeContactAsCurrent,
    updateContact,
    createContact,
    getContactPreferences,
  };
}
