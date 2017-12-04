/* eslint-disable import/prefer-default-export */

/**
 * @description
 * Hooks for widget-bbm-notification-center-ng.
 *
 * @name Hooks
 * @type {object}
 */

/**
 * @description
 * Processes the list of notifications.
 *
 * @name Hooks#processNotifications
 * @type {function}
 * @param {Array.<module:model-bb-notifications-ng.Notification>} notifications Original list
 *   of notifications from the model.
 * @returns {Array.<module:model-bb-notifications-ng.Notification>} Processed list of notifications.
 */
export const processNotifications = notifications => notifications;
