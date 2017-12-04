import { PollingType } from 'model-bb-notifications-ng';

import { Event, NotificationType } from './constants';

const LOCAL_NOTIFICATION_ID_PREFIX = 'LOCAL_NOTIFICATION:';

export default function NotificationsPopupsController(model, eventBus, $timeout) {
  /**
   * Notification Popups controller.
   * @name NotificationsPopupsController
   * @ngkey NotificationsPopupsController
   * @type {Object}
   */
  const $ctrl = this;

  const preferences = model.getNotificationPreferences();
  const isFeNotificationsEnabled = preferences.listenFeNotify;
  const pollingInterval = preferences.pollingInterval;

  const HIDING_TIMEOUTS = {
    ALERT: preferences.dismissAlertTime,
    WARNING: preferences.dismissWarningTime,
    INFO: preferences.dismissInfoTime,
    SUCCESS: preferences.dismissSuccessTime,
  };

  let hidingIntervalRef = null;
  let pollingRef = null;

  /**
   * Get notifications by ID.
   * @name getNotificationById
   * @inner
   * @type {Function}
   * @param {String} id Notification ID
   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]} list
   * Array of notifications
   * @returns {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem}
   * A notification
   */
  const getNotificationById = (id, list = $ctrl.notifications) => list.find(item => item.id === id);

  /**
   * Remove notification from array.
   * @name removeNotification
   * @inner
   * @type {Function}
   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem} item
   * A notification
   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]} list
   * Array of notifications
   */
  const removeNotification = (item, list = $ctrl.notifications) => {
    const index = list.indexOf(item);
    if (index !== -1) {
      list.splice(index, 1);
    }
  };

  /**
   * Start polling for hiding notifications.
   * @name startHideNotificationPolling
   * @inner
   * @type {Function}
   */
  const startHideNotificationPolling = () => {
    const notificationToHide = $ctrl.notifications.find(item => HIDING_TIMEOUTS[item.level] > 0);
    if (notificationToHide) {
      $timeout.cancel(hidingIntervalRef);
      hidingIntervalRef = $timeout(() => {
        removeNotification(notificationToHide);
        startHideNotificationPolling();
      }, HIDING_TIMEOUTS[notificationToHide.level]);
    }
  };

  /**
   * return notification type for ui.bootstrap.alert directive according to notifications level:
   * ALERT: alert-danger
   * INFO: alert-info
   * WARNING: alert-warning
   * SUCCESS: alert-success
   * @name NotificationsPopupsController#getNotificationType
   * @type {Function}
   * @param {Object} notification A notification object
   * @returns {Promise.<string>} A Promise with result of marking
   */
  const getNotificationType = notification => NotificationType[notification.level];

  /**
   * removes notification from list.
   * @name NotificationsPopupsController#closeNotification
   * @type {Function}
   * @param {String} id Notification ID
   * @param {Boolean} sticky Type of notification for closing
   * @fires bb.event.number.of.unread.changed
   */
  const closeNotification = (id, sticky = false) => {
    const listOfNotifications = sticky ? $ctrl.stickyNotifications : $ctrl.notifications;
    const notification = getNotificationById(id, listOfNotifications);
    if (notification) {
      removeNotification(notification, listOfNotifications);
      if (!notification.local) {
        model.putReadRecord(notification.id, { read: true }).then(() => {
          if (!sticky) {
            notification.read = true;
            eventBus.publish(Event.NOTIFICATION_CHANGE_READ_STATUS, notification);
          }
        });
      }
    }
  };

  /**
   * Add notification from pub-sub
   * @name NotificationsPopupsController#addLocalNotification
   * @inner
   * @type {Function}
   * @param {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem} item
   * A Notification
   */
  const addLocalNotification = (item) => {
    $ctrl.notifications.push(Object.assign({}, item, {
      id: LOCAL_NOTIFICATION_ID_PREFIX + Math.random(),
      local: true,
    }));

    startHideNotificationPolling();
  };

  /**
   * Funtcion that performs when load stream iteration was successful
   * @name onLoadStreamSuccess
   * @inner
   * @type {Function}
   * @param {loadStreamResponse} raw Array of notifications
   * @fires bb.event.number.of.unread.changed
   */
  const onLoadStreamSuccess = (raw) => {
    const newNonStickyNotifications = raw.data.filter((item) => !item.expiresOn);

    eventBus.publish(Event.NUMBER_OF_UNREAD_CHANGED, newNonStickyNotifications.length);

    // always update sticky notification, but concat regular ones
    $ctrl.notifications = $ctrl.notifications.concat(newNonStickyNotifications);
    $ctrl.stickyNotifications = raw.data.filter((item) => item.expiresOn);

    pollingRef = raw.ref;

    startHideNotificationPolling();
  };

  /**
   * Function that performs when error occurs in load stream iteration.
   * @name NotificationsPopupsController#onLoadUnreadCountError
   * @inner
   * @type {Function}
   */
  const stopPolling = () => model.stopPolling(pollingRef);

  /**
   * Init stream polling.
   * @name NotificationsPopupsController#initPolling
   * @inner
   * @type {Function}
   */
  const initPolling = () => {
    const pollingOptions = {
      type: PollingType.STREAM,
      pollingInterval,
    };

    pollingRef = model.initPolling(pollingOptions);

    eventBus.subscribe(Event.NOTIFICATION_STREAM_SUCCESS, onLoadStreamSuccess);
    eventBus.subscribe(Event.NOTIFICATION_STREAM_ERROR, stopPolling);
  };

  /**
   * Widget initialization logic - called automatically in the angular cycle.
   * @name NotificationsPopupsController#$onInit
   * @type {Function}
   */
  const $onInit = () => {
    if (isFeNotificationsEnabled) {
      eventBus.subscribe(Event.NOTIFICATION_CREATE_LOCAL, addLocalNotification);
    }

    initPolling();
  };

  /**
   * Widget destroy logic - called automatically in the angular cycle.
   * @name NotificationsPopupsController#$onDestroy
   * @type {Function}
   */
  const $onDestroy = () => stopPolling();

  Object.assign($ctrl, {
    /**
     * @description
     * The array of notifications. Empty if no notifications were received.
     *
     * @name NotificationsPopupsController#notifications
     * @type {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]}
     */
    notifications: [],
    /**
     * @description
     * The array of sticky notifications. Empty if no sticky notifications were received.
     *
     * @name NotificationsPopupsController#stickyNotifications
     * @type {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]}
     */
    stickyNotifications: [],
    /**
     * @description
     * True if notifications is loading
     *
     * @name NotificationsPopupsController#isNotificationsLoading
     * @type {Boolean}
     */
    isNotificationsLoading: false,
    /**
     * @description
     * Checks the list of notifications is empty or not
     *
     * @name NotificationsPopupsController#hasNotifications
     * @type {Function}
     * @returns {Boolean} false if notifications list is empty
     */
    hasNotifications: () => !!$ctrl.notifications.length,
    /**
     * @description
     * True if sticky notifications can be dismissing
     *
     * @name NotificationsPopupsController#dismissSticky
     * @type {Boolean}
     */
    dismissSticky: preferences.dismissSticky,

    getNotificationType,
    closeNotification,
    /* Lifecycle hooks */
    $onInit,
    $onDestroy,
  });
}

/**
 * @typedef {Object} loadStreamResponse
 * @property {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]} data Array
 * of notifications
 */
