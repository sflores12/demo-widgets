import { E_AUTH, E_CONNECTIVITY, E_UNEXPECTED, E_USER } from 'lib-bb-model-errors';
import { Event, StatusClass, MessageKey } from './constants';

const ErrorMessage = {
  [E_AUTH]: MessageKey.ERROR_AUTH,
  [E_CONNECTIVITY]: MessageKey.ERROR_CONNECTION,
  [E_UNEXPECTED]: MessageKey.ERROR_UNEXPECTED,
  [E_USER]: MessageKey.ERROR_USER,
};

/**
 * @description
 * Creates an error object for template
 *
 * @name uiError
 *
 * @inner
 * @param {object} ModelError Error object
 * @param {object} messageMap Error message map
 * @type {Function}
 * @returns {object}
 */

const uiError = (messageMap, ModelError) => ({
  message: messageMap[ModelError.code],
  class: StatusClass.ERROR,
});

/**
 * Defines the default page size for the notifications list in popover
 * as defined in the widget model.xml
 * @type {int}
 */
const DEFAULT_PAGE_SIZE = 15;

/**
 * Defines the default maxNavPages for the accounts page
 * as defined in the widget model.xml
 * @type {int}
 */
const DEFAULT_MAX_NAV_PAGES = 3;

/**
 * Defines the default paginationType for the accounts page
 * as defined in the widget model.xml
 * @type {String}
 */
const DEFAULT_PAGINATION_TYPE = 'load-more';

export default function NotificationCenterController(model, eventBus) {
  /**
   * @name NotificationCenterController
   * @ngkey NotificationCenterController
   * @type {Object}
   * @description
   * Notification center controller.
   */
  const $ctrl = this;

  const preferences = model.getNotificationPreferences();

  /**
   * Number of records to return per request. The 'itemsPerPage' property is deprecated in favor
   * of 'pageSize'
   * @name NotificationCenterController#pageSize
   * @inner
   * @type {Number} pageSize
   */
  const pageSize = preferences.itemsPerPage || preferences.pageSize || DEFAULT_PAGE_SIZE;

  // The variable which is established from the response of the model and has an identifier
  // that allows to point to the record to start the selection from its
  let cursor = null;

  // Request params for initialization and reset to default.
  const defaultParams = {
    fromDate: null,
    toDate: null,
    levels: null,
    read: null,
    from: 0,
    cursor: null,
    size: pageSize,
  };

  // For save the previous successful request.
  let lastParams = defaultParams;

  /**
   * @description
   * Get params for request.
   *
   * @name NotificationCenterController#getRequestParams
   *
   * @inner
   * @param {Object} params Custom params
   * @type {Function}
   * @returns {Object} A request params
   */
  const getRequestParams = (params) => Object.assign({}, lastParams, {
    // In BE services pagination starts from 0 page, but in paginator component it's 1
    from: params.currentPage ? (params.currentPage - 1) : 0,
  }, params);

  /**
   * Set last successful request params in controller object.
   * @name NotificationCenterController#updateExternalParams
   * @inner
   * @param {Object} params Last successful params
   * @type {Function}
   * @returns {Object} A controller object
   */
  const updateExternalParams = (params) => Object.assign($ctrl, {
    // In BE services pagination starts from 0 page, but in paginator component it's 1
    currentPage: params.from ? (params.from + 1) : 1,
  });

  /**
   * Merges new notifications with existing notifications
   * @name NotificationCenterController#append
   * @inner
   * @type {Function}
   * @returns {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]}
   * Merged array of old and new notifications
   */
  const append = (newItems, existingItems) => [...existingItems, ...newItems];

  /**
   * Replaces existing notifications with new notifications
   * @name NotificationCenterController#replace
   * @inner
   * @type {Function}
   * @returns {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]}
   * New notifications
   */
  const replace = (items) => items;

  /**
   * Loads notifications.
   * @name NotificationCenterController#loadNotifications
   * @inner
   * @type {Function}
   * @param {Object} [params={}] Custom params for request
   * @param {Function} [merge=append] Determines whether to use the old array on notifications
   * @param {Boolean} [applyParams=true] True if need save request params
   * @returns {Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
   * {@link loadResponse} on success or rejects with data of
   * {@link module:lib-bb-model-errors.ModelError}
   */
  const loadNotifications = (params = {}, merge = replace, applyParams = true) => {
    const filterParamKeys = ['fromDate', 'toDate', 'read', 'levels'];
    const currentParams = getRequestParams(params);

    $ctrl.isNotificationsLoading = true;
    $ctrl.isFilterApplied =
      !!Object.keys(params).find(key => params[key] && filterParamKeys.indexOf(key) !== -1);

    return model.load(currentParams)
      .then(raw => {
        $ctrl.isNotificationsLoading = false;
        $ctrl.notifications = merge(raw.data, $ctrl.notifications);
        cursor = raw.cursor || null;

        if (applyParams) {
          updateExternalParams(currentParams);
          $ctrl.totalItems = raw.totalCount || 0;
          lastParams = currentParams;
        }
      })
      .catch(error => {
        updateExternalParams(lastParams);
        $ctrl.isNotificationsLoading = false;
        $ctrl.status = uiError(ErrorMessage, error);

        throw error;
      });
  };

  /**
   * Loads next notification.
   * @name NotificationCenterController#loadNextNotification
   * @inner
   * @type {Function}
   * @returns {null|Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Returns void if
   * there is no next notification or whether a Promise that resolves data of {@link loadResponse}
   * on success or rejects with data of {@link module:lib-bb-model-errors.ModelError}
   */
  const loadNextNotification = () =>
    (cursor ? loadNotifications({ cursor, size: 1 }, append, false) : null);

  /**
   * Gets notifications by ID.
   * @name NotificationCenterController#getNotificationById
   * @inner
   * @type {Function}
   * @param {String} id Notification ID
   * @returns {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem}
   * A notification
   */
  const getNotificationById = (id) => $ctrl.notifications.find(item => item.id === id);

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
    if ($ctrl.isNotificationsLoading) {
      return null;
    }

    return loadNotifications({ cursor }, append)
      .then(done)
      .catch(done);
  };

  /**
   * Changes page of displayed notifications.
   * @name NotificationCenterController#changePage
   * @type {Function}
   * @param {Object} params Pagination params.
   * @returns {Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
   * {@link loadResponse} on success or rejects with data of
   * {@link module:lib-bb-model-errors.ModelError}
   */
  const changePage = (params = {}) => loadNotifications(params);

  /**
   * Filters notifications.
   * @name NotificationCenterController#filter
   * @type {Function}
   * @param {Object} params Filter params.
   * @returns {Promise.<loadResponse, module:lib-bb-model-errors.ModelError>} Resolves data of
   * {@link loadResponse} on success or rejects with data of
   * {@link module:lib-bb-model-errors.ModelError}
   */
  const filter = (params = {}) => {
    const requestParams = Object.assign(params, { from: 0, cursor: null });

    return loadNotifications(requestParams);
  };

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
   * @fires bb.event.notification.change.read.status
   */
  const markNotification = (id, read) => {
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
        $ctrl.status = uiError(ErrorMessage, error);
        notification.isUpdating = false;
      });
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
    const index = $ctrl.notifications.indexOf(item);
    if (index !== -1) {
      $ctrl.notifications.splice(index, 1);
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
        $ctrl.status = { message: MessageKey.NOTIFICATION_DELETED, class: StatusClass.SUCCESS };

        if (!notification.read) {
          eventBus.publish(Event.NUMBER_OF_UNREAD_CHANGED, -1);
        }

        removeNotification(notification);
        $ctrl.totalItems -= 1;

        // change page if notification the last or current page not the first
        if ($ctrl.notifications.length === 0 && $ctrl.currentPage !== 1) {
          $ctrl.currentPage -= 1;
        }
      })
      .then(() => loadNextNotification())
      .catch((error) => {
        $ctrl.status = uiError(ErrorMessage, error);
        notification.isUpdating = false;
      });
  };

  /**
   * Widget initialization logic - called automatically in the angular cycle.
   * @name NotificationsBadgeController#$onInit
   * @type {Function}
   */
  const $onInit = () => loadNotifications()
    .then(() => {
      $ctrl.isInitialLoading = false;

      eventBus.subscribe(Event.NOTIFICATION_CHANGE_READ_STATUS, (response) => {
        const notification = getNotificationById(response.id);

        if (notification) {
          notification.read = response.read;
        }
      });

      eventBus.subscribe(Event.NOTIFICATION_DELETED, (response) => {
        const notification = getNotificationById(response.id);

        if (notification) {
          $ctrl.totalItems -= 1;
          removeNotification(notification);
          loadNextNotification();
        }
      });
    })
    .catch(error => {
      $ctrl.isInitialLoading = false;
      $ctrl.initialError = uiError(ErrorMessage, error).message;
    });

  Object.assign($ctrl, {
    /**
     * Current page for pagination directive.
     * @name NotificationCenterController#currentPage
     * @type {Number}
     */
    currentPage: 1,
    /**
     * The number of total available notifications.
     * @name NotificationCenterController#totalItems
     * @type {Number}
     */
    totalItems: 0,
    /**
     * The array of notifications. Empty if no notifications were received.
     * @name NotificationCenterController#notifications
     * @type {module:data-bb-notifications-http-ng.NotificationsData.NotificationItem[]}
     */
    notifications: [],
    /**
     * True if notifications is loading.
     * @name NotificationCenterController#isNotificationsLoading
     * @type {Boolean}
     */
    isNotificationsLoading: false,
    /**
     * True if widget is loading.
     * @name NotificationCenterController#isInitialLoading
     * @type {Boolean}
     */
    isInitialLoading: true,
    /**
     * Object with error text after initial.
     * @name NotificationCenterController#initialError
     * @type {String}
     */
    initialError: '',
    /**
     * Status message object of Notification Center.
     * @name NotificationCenterController#status
     * @type {Object}
     */
    status: null,
    /**
     * True is filter is applied
     * @name NotificationCenterController#isFilterApplied
     * @type {Boolean}
     */
    isFilterApplied: false,
    /**
     * Checks the list of notifications is empty or not.
     * @name NotificationCenterController#hasNotifications
     * @type {Function}
     * @returns {Boolean} False if notifications list is empty
     */
    hasNotifications: () => !!$ctrl.notifications.length,

    /**
     * Checks if server has more notification to load
     * @name NotificationCenterController#hasMore
     * @type {Function}
     * @returns {Boolean} true if has more notifications to load
     */
    hasMore: () => !!cursor,

    /**
     * Time for dismiss status messages from server
     * @name NotificationCenterController#dismissTime
     * @type {Number}
     */
    dismissTime: preferences.dismissMessageTime,

    /**
     * Notifications per page
     * @name NotificationCenterController#pageSize
     * @type {Number}
     */
    pageSize,

    /**
     * Notifications per page
     * @deprecated Deprecated in favor of pageSize property
     * @name NotificationCenterController#itemsPerPage
     * @type {Number}
     */
    itemsPerPage: pageSize,

    /**
     * Maximum number of displayed pages in pagination component
     * @name NotificationCenterController#maxNavPages
     * @type {Number}
     */
    maxNavPages: preferences.maxNavPages || DEFAULT_MAX_NAV_PAGES,

    /**
     * Type of displayed pagination component
     * @name NotificationCenterController#paginationType
     * @type {Number}
     */
    paginationType: preferences.paginationType || DEFAULT_PAGINATION_TYPE,
    markNotification,
    deleteNotification,
    loadMore,
    changePage,
    filter,
    /* Lifecycle hooks */
    $onInit,
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
