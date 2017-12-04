/**
 * @name Hooks
 * @type {Object}
 *
 * @description
 * Default hooks for widget-bbm-personal-profile-ng
 */

/**
 * @name Hooks#processUser
 * @type {function}
 *
 * @description
 * Hook for processing the user
 *
 * @param {User} user - User object from the controller
 * @returns {Object} user
 */

const processUser = user => user;

export default {
  processUser,
};
