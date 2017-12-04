/**
 * Pubsub events
 * @type {Object}
 */
export const Event = {
  CXP_ITEM_LOADED: 'cxp.item.loaded',
  BB_ITEM_LOADED: 'bb.item.loaded',

  NOTIFICATION_DELETE_START: 'bb.event.notification.delete.start',
  NOTIFICATION_DELETE_DONE: 'bb.event.notification.delete.done',
  NOTIFICATION_DELETE_FAILED: 'bb.event.notification.delete.failed',
  NOTIFICATION_CHANGE_READ: 'bb.event.notification.read.change',
};

/**
 * Intents
 * @type {Object}
 */
export const Intent = {
  SHOW_NOTIFICATION_DETAILS: 'intent.bb.notification.details.show',
  SHOW_NOTIFICATION_LIST: 'intent.bb.notification.list.show',
};

/**
 * Storage keys
 * @type {Object}
 */
export const StorageKey = {
  NOTIFICATION_STATE: 'widget-bbm-notification-center-ng:state',
};
