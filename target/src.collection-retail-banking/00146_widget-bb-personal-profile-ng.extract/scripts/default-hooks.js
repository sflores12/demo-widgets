/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Default hooks for widget-bb-personal-profile-ng
 */

/**
 * @name Hooks#processUser
 * @type {function}
 *
 * @description
 * Hook for processing the user
 *
 * @param {User} user - User object from the controller
 * @returns {object} user
 */
export default function processUser(user) {
  return user;
}
