/**
 * @name default-hooks
 * @type {object}
 *
 * @description
 * Default hooks for widget-bb-user-menu-ng
 */

/**
 * @name default-hooks#processProfileData
 * @type {function}
 *
 * @description
 * Processes user data retrieved from user profile endpoint
 *
 * @param {User} user User data
 * @returns {User} Processed data
 */
const processProfileData = (user) => user;

export default {
  processProfileData,
};
