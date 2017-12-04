/**
 * Widget events enum
 * @name Event
 * @type {Object}
 */
export const Event = {
  NUMBER_OF_UNREAD_CHANGED: 'bb.event.number.of.unread.changed',
  NOTIFICATION_CHANGE_READ_STATUS: 'bb.event.notification.change.read.status',
  NOTIFICATION_CREATE_LOCAL: 'bb.event.notifications.notify',
  NOTIFICATION_STREAM_SUCCESS: 'bb.event.notifications.stream.success',
  NOTIFICATION_STREAM_ERROR: 'bb.event.notifications.stream.error',
};

/**
 * List of css-classes to be used for detect notification type
 * @name NotificationType
 * @type {Object}
 */
export const NotificationType = {
  ALERT: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
};
