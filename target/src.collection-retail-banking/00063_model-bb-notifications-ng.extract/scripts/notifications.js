import { fromHttpError } from 'lib-bb-model-errors';

import { Preference, Event, PollingType } from './constants';

/**
 * Defines the minimum polling interval time as defined in the widget model.xml
 * @inner
 * @type {Number}
 */
const MIN_POLLING_INTERVAL_VALUE = 999;

/**
 * @inner
 * @type {Function}
 * @param {module:data-bb-notifications-http-ng.NotificationsData} notificationsData
 * @param {Object} widget
 * @param {Object} eventBus
 * @param {Function} $timeout
 * @return {Object}
 */
export default function Model(notificationsData, widget, eventBus, $timeout) {
  /**
   * Load notifications.
   * @name NotificationModel#load
   * @type {Function}
   * @param {?object} params Optional configuration object.
   * @returns {Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
   * {@link loadResponse} on success or rejects with data of
   * {@link module:lib-bb-model-errors.ModelError}
   */
  function load(params = {}) {
    return notificationsData.getNotifications(params)
      .then(raw => ({
        data: raw.data,
        totalCount: parseInt(raw.headers('x-total-count'), 10) || 0,
        cursor: parseInt(raw.headers('x-cursor'), 10),
      }))
      .catch(e => {
        throw fromHttpError(e);
      });
  }

  /**
   * Load notifications stream.
   * @name NotificationModel#loadStream
   * @type {Function}
   * @param {?object} params Optional configuration object.
   * @returns {Promise.<loadStreamResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
   * {@link loadStreamResponse} on success or rejects with data of
   * {@link module:lib-bb-model-errors.ModelError}
   */
  function loadStream(params = {}) {
    return notificationsData.getNotificationsStream(params)
      .catch(e => {
        throw fromHttpError(e);
      });
  }

  /**
   * Create notification.
   * See {@link module:data-bb-notifications-http-ng.NotificationsData.CreateNotificationsCommand}
   * to get information about configuration object
   * @name NotificationModel#create
   * @type {Function}
   * @param {Object} params Configuration object to create notification
   * @returns {Promise.<DefaultResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
   * {@link DefaultResponse} on success or rejects with data of
   * {@link module:lib-bb-model-errors.ModelError}
   */
  function create(params = {}) {
    return notificationsData.postNotificationsRecord(params)
      .catch(e => {
        throw fromHttpError(e);
      });
  }

  /**
   * Load unread count of notifications.
   * @name NotificationModel#loadUnreadCount
   * @type {Function}
   * @returns {Promise.<loadUnreadCountResponse, module:lib-bb-model-errors.ModelError>} Resolves
   * data of {@link loadUnreadCountResponse} on success or rejects with data of
   * {@link module:lib-bb-model-errors.ModelError}
   */
  function loadUnreadCount() {
    return notificationsData.getNotificationsUnreadCount()
      .catch(e => {
        throw fromHttpError(e);
      });
  }

  /**
   * Set read/unread status of notification.
   * See {@link module:data-bb-notifications-http-ng.NotificationsData.ChangeAcknowledgementCommand}
   * to get information about configuration object
   * @name NotificationModel#putReadRecord
   * @type {Function}
   * @param {String} notificationID Notification ID
   * @param {Object} data Object with new read status
   * @returns {Promise.<DefaultResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
   * {@link DefaultResponse} on success or rejects with data of
   * {@link module:lib-bb-model-errors.ModelError}
   */
  function putReadRecord(notificationID, data = {}) {
    return notificationsData.putNotificationsReadRecord(notificationID, data)
      .catch(e => {
        throw fromHttpError(e);
      });
  }

  /**
   * Delete notification.
   * @name NotificationModel#DefaultResponse
   * @type {Function}
   * @param {String} notificationID Notification ID
   * @returns {Promise.<DefaultResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
   * {@link DefaultResponse} on success or rejects with data of
   * {@link module:lib-bb-model-errors.ModelError}
   */
  function deleteRecord(notificationID) {
    return notificationsData.deleteNotificationsRecord(notificationID)
      .catch(e => {
        throw fromHttpError(e);
      });
  }

  /**
   * Getting notifications preferences from widget. Usage of "itemsPerPage" is deprecated
   * in favor of "pageSize"
   * @name NotificationModel#getNotificationPreferences
   * @type {Function}
   * @returns {Object} Preferences object
   */
  const getNotificationPreferences = () => ({
    pollingInterval: widget.getLongPreference(Preference.NOTIFICATION_POLLING_INTERVAL),
    badgeCounter: widget.getBooleanPreference(Preference.NOTIFICATION_BADGE_COUNTER),
    pageSize: widget.getLongPreference(Preference.NOTIFICATION_PAGE_SIZE) || 10,
    itemsPerPage: widget.getLongPreference(Preference.NOTIFICATION_ITEMS_PER_PAGE),
    maxNavPages: widget.getLongPreference(Preference.NOTIFICATION_MAX_NAV_PAGES),
    paginationType: widget.getStringPreference(Preference.NOTIFICATION_PAGINATION_TYPE),
    dismissSticky: widget.getBooleanPreference(Preference.NOTIFICATION_DISMISS_STICKY),
    listenFeNotify: widget.getBooleanPreference(Preference.NOTIFICATION_LISTEN_FE_NOTIFY),
    dismissMessageTime: widget.getLongPreference(Preference.NOTIFICATION_DISMISS_MESSAGE_TIME) || 5,
    dismissAlertTime: widget.getLongPreference(Preference.NOTIFICATION_DISMISS_ALERT_TIME) || 0,
    dismissWarningTime: widget.getLongPreference(Preference.NOTIFICATION_DISMISS_WARNING_TIME) || 0,
    dismissInfoTime: widget.getLongPreference(Preference.NOTIFICATION_DISMISS_INFO_TIME) || 0,
    dismissSuccessTime: widget.getLongPreference(Preference.NOTIFICATION_DISMISS_SUCCESS_TIME) || 0,
  });

  /**
   * Start polling.
   * @name NotificationModel#startPolling
   * @inner
   * @type {Function}
   * @param {Number} interval Interval period duration
   * @param {Function} callback Polling function
   */
  const startPolling = (interval, callback) => {
    $timeout((ref) => {
      callback(ref);
      startPolling(interval, callback);
    }, interval);
  };

  /**
   * Stop polling.
   * @name NotificationModel#stopPolling
   * @type {Function}
   * @param {String} ref Polling (interval) reference
   */
  const stopPolling = (ref) => {
    if (ref) {
      $timeout.cancel(ref);
    }
  };

  const publishOnStreamSuccess = (ref, data) => {
    eventBus.publish(Event.NOTIFICATION_STREAM_SUCCESS, { ref, data });
  };

  const publishOnStreamError = (e) => {
    eventBus.publish(Event.NOTIFICATION_STREAM_ERROR, e);
  };

  const publishOnUnreadCountSuccess = (ref, data) => {
    eventBus.publish(Event.NOTIFICATION_STREAM_SUCCESS, { ref, data });
  };

  const publishOnUnreadCountError = (e) => {
    eventBus.publish(Event.NOTIFICATION_STREAM_ERROR, e);
  };

  /**
   * Subscribe to stream notifications loading.
   * @name NotificationModel#initPolling
   * @type {Function}
   * @param {PollingOptions} options Subscribe options
   * @returns {String} Polling (interval) reference
   */
  const initPolling = (options) => {
    const polling = {
      interval: options.pollingInterval || 0,
      method: null,
      onSuccess: null,
      onError: null,
    };

    const requestParams = Object.assign({ interval: polling.interval }, options.params);

    switch (options.type) {
      case PollingType.UNREAD_COUNT:
        polling.method = loadUnreadCount.bind(null, requestParams);
        polling.onSuccess = publishOnUnreadCountSuccess;
        polling.onError = publishOnUnreadCountError;
        break;

      default:
        polling.method = loadStream.bind(null, requestParams);
        polling.onSuccess = publishOnStreamSuccess;
        polling.onError = publishOnStreamError;
    }

    const callback = (ref = null) => {
      polling.method()
        .then((raw) => polling.onSuccess(ref, raw.data))
        .catch(polling.onError);
    };

    if (polling.interval > MIN_POLLING_INTERVAL_VALUE) {
      startPolling(polling.interval, callback);
    }
  };

  /**
   * Model factory for widget-bb-notification-center-ng, widget-bb-notification-badge-ng,
   * widget-bb-notification-popups-ng, widget-bbm-notification-center-ng
   * @name NotificationModel
   * @type {Object}
   */
  return {
    load,
    loadStream,
    create,
    loadUnreadCount,
    putReadRecord,
    deleteRecord,
    getNotificationPreferences,
    initPolling,
    stopPolling,
  };
}

/**
 * @typedef {Object} PollingOptions
 * @property {String} type Polling type
 * @property {Number} pollingInterval Polling interval time
 * @property {?Object} params Optional parameters that apply to polling method
 */

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
 * @typedef {Object} loadStreamResponse
 * @property {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]} data Array
 * of notifications
 */

/**
 * @typedef {Object} loadUnreadCountResponse
 * @property {Number} unread Total count of unread notifications
 */
