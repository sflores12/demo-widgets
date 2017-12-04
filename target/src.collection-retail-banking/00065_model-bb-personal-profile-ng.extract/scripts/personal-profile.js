/* eslint max-len: ["error", 100, { "ignoreComments": true }]*/
import { fromHttpError } from 'lib-bb-model-errors';

/**
 * @description
 * Model for widget-bb-personal-profile-ng
 *
 * @param {object} Promise An ES2015 compatible `Promise` object.
 * @param {UserData} userData -
 * A Data module to allow access to user data.
 *
 * type {function}
 * @return {UserModel}
 */
export default function personalProfileModel(Promise, userData) {
  /**
   * @name PersonalProfileModel#load
   * @type {function}
   *
   * @description
   * Loads the data for the current logged in user
   *
   * @returns {Promise<User, module:lib-bb-model-errors.ModelError>} A Promise with the user's data.
   */
  function load() {
    // @TODO: change hardcoded id to the real user id from the session
    return userData.getUsersRecord('userId1')
      .then(response => response.data)
      .catch(httpErrorResponse => {
        throw fromHttpError(httpErrorResponse);
      });
  }

  /**
   * @name PersonalProfileModel#loadUsersProfile
   * @type {function}
   *
   * @description
   * Loads the data for the current logged in user
   *
   * @returns {Promise<UserProfile, module:lib-bb-model-errors.ModelError>} A Promise with the user's data.
   */
  const loadUsersProfile = () => (
    // @TODO: change hardcoded id to the real user id from the session
    userData.getUsersProfilesRecord('userId3')
      .then(response => response.data)
      .catch(httpErrorResponse => {
        throw fromHttpError(httpErrorResponse);
      })
  );


  /**
   * @name PersonalProfileModel#updateUsersProfile
   * @type {function}
   *
   * @description
   * Updates a user
   *
   * @param {UserProfile} user User data
   * @returns {Promise<UserProfile, module:lib-bb-model-errors.ModelError>} A Promise with the user's data.
   */
  const updateUsersProfile = user => (
    userData.putUsersProfilesRecord(user.id, user)
      .then(response => response.data)
      .catch(httpErrorResponse => {
        throw fromHttpError(httpErrorResponse);
      })
  );

  /**
   * @name PersonalProfileModel
   * @type {Object}
   *
   * @description
   * Personal Profile model service
   */
  return {
    load,
    loadUsersProfile,
    updateUsersProfile,
  };
}

/**
 * @typedef {Object} User
 * @property {string} bbid - Internal Backbase identifier
 * @property {string} exid - External bank identifier
 * @property {string} entityId - External entity identifier
 * @property {string} id - Internally used unique identification of the user
 * @property {string} imageAvatar - Base64 encoded picture of the user
 * @property {string} firstName - The given name of a user
 * @property {string} lastName - The given family name of a user
 * @property {string} dateOfBirth - The date the user was born in format "DD-MM-YYYY"
 * @property {string} street - Street name (part of the address)
 * @property {string} houseNumber - House number (part of the address)
 * @property {string} postalCode - Postal code (part of the address)
 * @property {string} area - Area (part of the address)
 * @property {string} city - City (part of the address)
 * @property {string} citizenship - Country where the user is citizen of
 * @property {string} email - The primary email address of the user
 * @property {array} phone - The phone numbers where the user can be reached
 */

/**
 * @typedef {Object} Email
 * @property {string} value - The email address of the user
 * @property {boolean} primary - The flag to identidy if an email is primary
 */

 /**
 * @typedef {Object} Phone
 * @property {string} value - The phone number of the user
 * @property {boolean} primary - The flag to identidy if a phone is primary
 */

 /**
 * @typedef {Object} UserProfile
 * @property {string} bbid - Internal Backbase identifier
 * @property {string} exid - External bank identifier
 * @property {string} entityId - External entity identifier
 * @property {string} id - Internally used unique identification of the user
 * @property {string} imageAvatar - Base64 encoded picture of the user
 * @property {string} firstName - The given name of a user
 * @property {string} lastName - The given family name of a user
 * @property {string} dateOfBirth - The date the user was born in format "DD-MM-YYYY"
 * @property {string} street - Street name (part of the address)
 * @property {string} houseNumber - House number (part of the address)
 * @property {string} postalCode - Postal code (part of the address)
 * @property {string} area - Area (part of the address)
 * @property {string} city - City (part of the address)
 * @property {string} citizenship - Country where the user is citizen of
 * @property {array<Email>} emails - Email adresses of the user
 * @property {array<Phone>} phones - Phone numbers where the user can be reached
 */
