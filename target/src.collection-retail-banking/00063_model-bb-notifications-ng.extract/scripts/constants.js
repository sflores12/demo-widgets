/**
 * Enum for preferences.
 * Usage of "itemsPerPage" is deprecated in favor of "pageSize"
 * @name Preference
 * @type {Object}
 */
export const Preference = {
  NOTIFICATION_POLLING_INTERVAL: 'pollingInterval',
  NOTIFICATION_BADGE_COUNTER: 'badgeCounter',
  NOTIFICATION_PAGE_SIZE: 'bb.notification.pageSize',
  NOTIFICATION_ITEMS_PER_PAGE: 'itemsPerPage',
  NOTIFICATION_MAX_NAV_PAGES: 'bb.notification.maxNavPages',
  NOTIFICATION_PAGINATION_TYPE: 'bb.notification.paginationType',
  NOTIFICATION_DISMISS_STICKY: 'dismissSticky',
  NOTIFICATION_LISTEN_FE_NOTIFY: 'feNotifications',
  NOTIFICATION_DISMISS_ALERT_TIME: 'alertHidingTimeout',
  NOTIFICATION_DISMISS_WARNING_TIME: 'warningHidingTimeout',
  NOTIFICATION_DISMISS_INFO_TIME: 'infoHidingTimeout',
  NOTIFICATION_DISMISS_SUCCESS_TIME: 'successHidingTimeout',
  NOTIFICATION_DISMISS_MESSAGE_TIME: 'dismissMessageTime',
};

/**
 * Enum for events
 * @name Event
 * @type {Object}
 */
export const Event = {
  NOTIFICATION_STREAM_SUCCESS: 'bb.event.notifications.stream.success',
  NOTIFICATION_STREAM_ERROR: 'bb.event.notifications.stream.error',
  NOTIFICATION_UNREAD_COUNT_SUCCESS: 'bb.event.notifications.unread.count.success',
  NOTIFICATION_UNREAD_COUNT_ERROR: 'bb.event.notifications.unread.count.error',
};

/**
 * Enum for polling types
 * @name PollingType
 * @type {Object}
 */
export const PollingType = {
  STREAM: 'loadStream',
  UNREAD_COUNT: 'loadUnreadCount',
};
