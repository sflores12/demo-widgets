import { E_AUTH, E_CONNECTIVITY, E_USER, E_UNEXPECTED } from 'lib-bb-model-errors';
import { PollingType } from 'model-bb-notifications-ng';

import { Event, MessageKey } from './constants';

const errorMessages = {
  [E_AUTH]: MessageKey.ERROR_AUTH,
  [E_CONNECTIVITY]: MessageKey.ERROR_CONNECTION,
  [E_UNEXPECTED]: MessageKey.ERROR_UNEXPECTED,
  [E_USER]: MessageKey.ERROR_USER,
};

const uiError = (messageMap, modelError) => ({
  message: messageMap[modelError.code],
});

/**
 * Defines the default page size for the notifications list in popover
 * as defined in the widget model.xml
 * @inner
 * @type {number}
 */
const DEFAULT_PAGE_SIZE = 15;

/**
 * Defines widget page enumeration
 * @name Page
 * @inner
 * @enum {String}
 * @type {Object}
 */
const Page = {
  DETAILS: 'details',
  LIST: 'list',
};

export default function NotificationsBadgeController(model, eventBus) {
  /**
   * Notifications badge controller.
   * @name NotificationsBadgeController
   * @ngkey NotificationsBadgeController
   * @type {Object}
   */
  const $ctrl = this;

  const preferences = model.getNotificationPreferences();

  /**
   * Number of records to return per request. The 'itemsPerPage' property is deprecated in
   * favor of 'pageSize'
   * @name pageSize
   * @inner
   * @type {Number} pageSize
   */
  const pageSize = preferences.itemsPerPage || preferences.pageSize || DEFAULT_PAGE_SIZE;
  const pollingInterval = preferences.pollingInterval;

  const notifications = {
    params: {
      cursor: null,
      size: pageSize,
    },
  };

  let pollingRef = null;

  /**
   * Holds current controller state
   * @name NotificationsBadgeController#state
   * @type {Object}
   */
  const state = {
    page: Page.LIST,
    badge: {
      numberOfUnread: 0,
      showUnreadCount: preferences.badgeCounter,
      loading: false,
    },
    popover: {
      isOpen: false,
      loading: false,
      error: null,
    },
    notifications: {
      active: null,
      data: [],
      loading: false,
      get hasMore() { return !!notifications.params.cursor; },
      error: null,
    },
  };

  /**
   * Funtcion that performs before load stream request
   * @name NotificationsBadgeController#beforeLoadStream
   * @inner
   * @type {Function}
   */
  const beforeLoadUnreadCount = () => {
    state.badge.loading = true;
  };

  /**
   * Funtcion that performs before load stream request
   * @name NotificationsBadgeController#beforeLoadStream
   * @inner
   * @type {Function}
   */
  const afterLoadUnreadCount = () => {
    state.badge.loading = false;
  };

  /**
   * Function that performs when unread count iteration was successful
   * @name NotificationsBadgeController#onLoadUnreadCountSuccess
   * @inner
   * @type {Function}
   * @param {loadUnreadCountResponse} raw Unread count response object
   */
  const onLoadUnreadCountSuccess = (raw) => {
    state.badge.numberOfUnread = raw.data.unread || 0;

    pollingRef = raw.ref;
  };

  /**
   * Load count of unread notifications.
   * @name NotificationsBadgeController#loadUnreadCount
   * @inner
   * @type {Function}
   * @returns {Promise.<loadUnreadCountResponse, module:lib-bb-model-errors.ModelError>} Resolves
   * data of {@link loadUnreadCountResponse} on success or rejects with data of
   * {@link module:lib-bb-model-errors.ModelError}
   */
  const loadUnreadCount = () => {
    beforeLoadUnreadCount();

    return model.loadUnreadCount()
      .then(onLoadUnreadCountSuccess)
      .then(afterLoadUnreadCount);
  };

  /**
   * Merges new notifications with existing notifications
   * @name NotificationsBadgeController#append
   * @inner
   * @type {Function}
   * @returns {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]}
   * merged array of old and new notifications
   */
  const append = (newItems, existingItems) => [...existingItems, ...newItems];

  /**
   * Replaces existing notifications with new notifications
   * @name NotificationsBadgeController#replace
   * @inner
   * @type {Function}
   * @returns {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]}
   * New notifications
   */
  const replace = (items) => items;

  /**
   * Loads notifications.
   * @name NotificationsBadgeController#loadNotifications
   * @inner
   * @type {Function}
   * @param {Object} [params={}] Custom params for request
   * @param {Function} [merge=append] Determines whether to use the old array on notifications
   * @param {Boolean} [applyParams=true] True if need save request params
   * @returns {Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
   * {@link loadResponse} on success or rejects with data of
   * {@link module:lib-bb-model-errors.ModelError}
   */
  const loadNotifications = (params = {}, merge = append, applyParams = true) => {
    const currentParams = Object.assign({}, notifications.params, params);
    state.notifications.loading = true;

    return model.load(currentParams)
      .then(raw => {
        state.notifications.loading = false;
        state.notifications.data = merge(raw.data, state.notifications.data);
        if (applyParams) {
          notifications.params = currentParams;
        }
        notifications.params.cursor = raw.cursor || null;
      })
      .catch(error => {
        state.notifications.loading = false;
        state.notifications.error = uiError(errorMessages, error);

        throw error;
      });
  };

  /**
   * Loads next notification.
   * @name NotificationsBadgeController#loadNextNotification
   * @inner
   * @type {Function}
   * @returns {null|Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Returns void if
   * there is no next notification or whether a Promise that resolves data of {@link loadResponse}
   * on success or rejects with data of {@link module:lib-bb-model-errors.ModelError}
   */
  const loadNextNotification = () =>
    (notifications.params.cursor ? loadNotifications({ size: 1 }, append, false) : null);

  /**
   * Loads more notifications.
   * @name NotificationsBadgeController#loadMore
   * @type {Function}
   * @param {Function} done Callback function for `ui-bb-load-more-ng` component
   * @returns {null|Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Returns void if
   * loading is in process or whether a Promise that resolves data of {@link loadResponse} on
   * success or rejects with data of {@link module:lib-bb-model-errors.ModelError}
   */
  const loadMore = (done) => {
    if (state.notifications.loading) {
      return null;
    }

    return loadNotifications()
      .then(done)
      .catch(done);
  };

  /**
   * Reloads the current collection
   * @name NotificationsBadgeController#reload
   * @inner
   * @type {Function}
   * @returns {Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
   * {@link loadResponse} on success or rejects with data of
   * {@link module:lib-bb-model-errors.ModelError}
   */
  const reload = () => {
    notifications.params.cursor = null;
    state.notifications.data = [];
    state.notifications.error = null;
    state.popover.error = null;

    return loadNotifications(replace);
  };

  /**
   * Changes current page in widget.
   * @name NotificationsBadgeController#navigateTo
   * @type {Function}
   * @inner
   * @param {String} page Page to navigate to
   * @param {?Notification} item Notification item
   */
  function navigateTo(page, item = null) {
    state.page = page;
    $ctrl.state.notifications.active = item;
  }

  /**
   * Rests active notification and navigates the user to the Notifications list view.
   * @name NotificationsBadgeController#viewNotificationDetails
   * @type {Function}
   */
  const viewNotificationList = () => {
    if (state.page !== Page.LIST) {
      navigateTo(Page.LIST);
    }
  };

  /**
   * Loads notifications and toggles the popover.
   * @name NotificationsBadgeController#togglePopover
   * @type {Function}
   */
  const togglePopover = () => {
    state.popover.isOpen = !state.popover.isOpen;

    if (state.popover.isOpen) {
      state.popover.loading = true;

      viewNotificationList();
      reload()
        .then(() => {
          state.popover.loading = false;
        })
        .catch((error) => {
          state.popover.loading = false;
          state.popover.error = uiError(errorMessages, error);
        });
    }
  };

  /**
   * Gets notifications by ID.
   * @name NotificationsBadgeController#getNotificationById
   * @inner
   * @type {Function}
   * @param {String} id Notification ID
   * @returns {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem}
   * A notification
   */
  const getNotificationById = id => $ctrl.state.notifications.data.find(item => item.id === id);

  /**
   * Mark notification as read/unread.
   * @name NotificationsBadgeController#markNotification
   * @type {Function}
   * @param {String} id Notification ID.
   * @param {Boolean} read True if notification was read.
   * @returns {null|Promise.<DefaultResponse, module:lib-bb-model-errors.ModelError>} Returns void
   * if notification is in process or whether a Promise that resolves data of
   * {@link DefaultResponse} on success or rejects with data of
   * {@link module:lib-bb-model-errors.ModelError}
   * @fires bb.event.number.of.unread.changed
   */
  const markNotification = (id, read = true) => {
    const notification = getNotificationById(id);
    if (notification.isUpdating) {
      return null;
    }
    notification.isUpdating = true;

    return model.putReadRecord(notification.id, { read })
      .then(() => {
        notification.isUpdating = false;
        notification.read = read;
        eventBus.publish(Event.NOTIFICATION_CHANGE_READ_STATUS, notification);
      })
      .catch((error) => {
        notification.read = !read;
        state.notifications.error = uiError(errorMessages, error);
        notification.isUpdating = false;
      });
  };

  /**
   * Set active notification and navigates the user to the Notifications Detail view.
   * @name NotificationsBadgeController#viewNotificationDetails
   * @type {Function}
   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem} item
   * Active notification
   */
  const viewNotificationDetails = (item) => {
    if (!item.read) {
      markNotification(item.id);
    }
    if (state.page !== Page.DETAILS) {
      navigateTo(Page.DETAILS, item);
    }
  };

  /**
   * Remove notification from array.
   * @name NotificationsBadgeController#removeNotification
   * @inner
   * @type {Function}
   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem} item
   * A notification
   * @fires bb.event.notification.deleted
   */
  const removeNotification = (item) => {
    const index = $ctrl.state.notifications.data.indexOf(item);
    if (index !== -1) {
      $ctrl.state.notifications.data.splice(index, 1);
      eventBus.publish(Event.NOTIFICATION_DELETED, item);
    }
  };

  /**
   * Delete notification.
   * @name NotificationsBadgeController#deleteNotification
   * @type {Function}
   * @param {String} id Notification ID.
   * @returns {null|Promise.<DefaultResponse, module:lib-bb-model-errors.ModelError>} Returns void
   * if notification is in process or whether a Promise that resolves data of
   * {@link DefaultResponse} on success or rejects with data of
   * {@link module:lib-bb-model-errors.ModelError}
   * @fires bb.event.number.of.unread.changed
   */
  const deleteNotification = (id) => {
    const notification = getNotificationById(id);
    if (notification.isUpdating) {
      return null;
    }
    notification.isUpdating = true;

    return model.deleteRecord(id)
      .then(() => {
        if (!notification.read) {
          eventBus.publish(Event.NUMBER_OF_UNREAD_CHANGED, -1);
        }

        removeNotification(notification);
      })
      .then(() => navigateTo(Page.LIST))
      .then(() => loadNextNotification())
      .catch((error) => {
        state.notifications.error = uiError(errorMessages, error);
        notification.isUpdating = false;
      });
  };

  /**
   * Check notification has read status.
   * @name NotificationsBadgeController#isNotificationUnRead
   * @type {Function}
   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem} item
   * A notification
   * @returns {Boolean} True if notification is read or false if notification is unread
   */
  const isNotificationUnRead = (item) => Boolean(!item.read);

  /**
   * Function that performs when error occurs in load unread count iteration.
   * @name NotificationsBadgeController#onLoadUnreadCountError
   * @inner
   * @type {Function}
   */
  const stopPolling = () => model.stopPolling(pollingRef);

  /**
   * Init unread count polling.
   * @name NotificationsBadgeController#initPolling
   * @inner
   * @type {Function}
   */
  const initPolling = () => {
    const pollingOptions = {
      type: PollingType.UNREAD_COUNT,
      pollingInterval,
    };

    pollingRef = model.initPolling(pollingOptions);

    eventBus.subscribe(Event.NOTIFICATION_UNREAD_COUNT_SUCCESS, onLoadUnreadCountSuccess);
    eventBus.subscribe(Event.NOTIFICATION_UNREAD_COUNT_ERROR, stopPolling);
  };

  /**
   * Widget initialization logic - called automatically in the angular cycle.
   * @name NotificationsBadgeController#$onInit
   * @type {Function}
   */
  const $onInit = () => {
    eventBus.subscribe(Event.NUMBER_OF_UNREAD_CHANGED, (count) => {
      state.badge.numberOfUnread += count;
    });

    eventBus.subscribe(Event.NOTIFICATION_CHANGE_READ_STATUS, (response) => {
      const notification = getNotificationById(response.id);

      state.badge.numberOfUnread += response.read ? -1 : 1;

      if (notification) {
        notification.read = response.read;
      }
    });

    eventBus.subscribe(Event.NOTIFICATION_DELETED, (response) => {
      const notification = getNotificationById(response.id);

      if (notification) {
        removeNotification(notification);
        navigateTo(Page.LIST);
        loadNextNotification();
      }
    });

    loadUnreadCount();

    initPolling();
  };

  /**
   * Widget destroy logic - called automatically in the angular cycle.
   * @name NotificationsBadgeController#$onDestroy
   * @type {Function}
   */
  const $onDestroy = () => stopPolling();

  Object.assign($ctrl, {
    state,
    markNotification,
    viewNotificationList,
    viewNotificationDetails,
    deleteNotification,
    isNotificationUnRead,
    loadMore,
    togglePopover,
    /* Lifecycle hooks */
    $onInit,
    $onDestroy,
  });
}

/**
 * @typedef {Object} DefaultResponse
 * @type {module:data-bb-notifications-http-ng.Response}
 */

/**
 * @typedef {Object} loadResponse
 * @property {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]} data Array
 * of notifications
 * @property {Number} totalCount Total count of notifications if needed
 * @property {?Number} cursor Cursor is used in request parameters as an alternative
 * for specifying 'from' this allows to point to the record to start the selection from
 */

/**
 * @typedef {Object} loadUnreadCountResponse
 * @property {Number} unread Total count of unread notifications
 */
