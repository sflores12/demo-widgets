/**
 * Widget events enum
 * @name Event
 * @type {Object}
 */
export const Event = {
  NUMBER_OF_UNREAD_CHANGED: 'bb.event.number.of.unread.changed',
  NOTIFICATION_CHANGE_READ_STATUS: 'bb.event.notification.change.read.status',
  NOTIFICATION_DELETED: 'bb.event.notification.deleted',
};

/**
 * List of css-classes to be used for status notification
 * @name StatusClass
 * @type {Object}
 */
export const StatusClass = {
  SUCCESS: 'success',
  ERROR: 'warning',
};

/**
 * Widget static messages for the template
 * @name Message
 * @type {Object}
 */
export const MessageKey = {
  NOTIFICATION_DELETED: 'notification.message.deleted',
  ERROR_AUTH: 'message.error.auth',
  ERROR_CONNECTION: 'message.error.connection',
  ERROR_UNEXPECTED: 'message.error.unexpected',
  ERROR_USER: 'message.error.user',
};
