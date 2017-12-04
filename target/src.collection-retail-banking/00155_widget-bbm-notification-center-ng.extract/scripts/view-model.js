import { StorageKey } from './constants';

export default (model, bbStorage) => {
  const viewModel = {};

  /**
   * @description
   * A set of preferences.
   *
   * @name preferences
   * @type {Object}
   * @inner
   */
  const preferences = model.getNotificationPreferences();

  /**
   * @description
   * Notifications array size
   *
   * @name getTotalCount
   * @type {function}
   * @returns {Number}
   * @inner
   */
  const getTotalCount = () => (viewModel.state.notifications.data || []).length;

  /**
   * @description
   * Page size property
   *
   * @name getPageSize
   * @type {function}
   * @returns {Number}
   * @inner
   */
  const getPageSize = () => preferences.pageSize;

  /**
   * @description
   * Returns the initial state of the view model.
   *
   * @name getInitialState
   * @type {function}
   *
   * @returns {PaymentView}
   * @inner
   */
  const getInitialState = () => ({
    notifications: {
      error: null,
      loading: false,
      data: null,
      pagination: {
        hasMore: true,
        rawData: null,
      },
    },
  });

  /**
   * @description
   * Checks if there are notifications
   *
   * @name hasNotifications
   * @type {function}
   * @returns {Boolean}
   * @inner
   */
  const hasNotifications = () => Boolean(
    viewModel.state.notifications.data &&
    viewModel.state.notifications.data.length > 0
  );

  /**
   * @description
   * Checks if there are more notifications to load
   *
   * @name hasMoreNotifications
   * @type {function}
   * @returns {Boolean} hasMore
   * @inner
   */
  const hasMoreNotifications = () => viewModel.state.notifications.pagination.hasMore;

  /**
   * @description
   * Sets the given loading state to the given target.
   *
   * @name setLoading
   * @type {function}
   *
   * @param {Object} target
   * @param {boolean} loading
   * @inner
   */
  const setLoading = (target, loading) => Object.assign(target, {
    loading: Boolean(loading),
  });

  /**
   * @description
   * Sets the given error to the given target.
   *
   * @name setError
   * @type {function}
   *
   * @param {Object} target
   * @param {Error} error
   * @inner
   */
  const setError = (target, error) => Object.assign(target, { error });

  /**
   * @description
   * Returns the list of notifications.
   *
   * @name getNotifications
   * @type {function}
   *
   * @returns {*}
   * @inner
   */
  const getNotifications = () => viewModel.state.notifications.data;

  /**
   * @description
   * Sets the given parameter as the list of notifications.
   *
   * @name setNotifications
   * @type {function}
   *
   * @param {*} notifications
   * @inner
   */
  const setNotifications = notifications => (
    Object.assign(viewModel.state.notifications, {
      data: notifications,
    })
  );

  /**
   * @description
   * Sets the given parameter as the list of raw notifications.
   *
   * @name setRawNotifications
   * @type {function}
   *
   * @param {*} notifications
   * @inner
   */
  const setRawNotifications = notifications => (
    Object.assign(viewModel.state.notifications.pagination, {
      rawData: notifications,
    })
  );

  /**
   * @description
   * Sets the given parameter as the hasMore flag of the pagination object.
   *
   * @name setHasMoreFlag
   * @type {function}
   *
   * @param {boolean} hasMore
   * @inner
   */
  const setHasMoreFlag = hasMore => (
    Object.assign(viewModel.state.notifications.pagination, {
      hasMore,
    })
  );

  /**
   * @description
   * Sets an error state to the notifications with the given error.
   *
   * @name setNotificationsError
   * @type {function}
   *
   * @param {Error} error
   * @inner
   */
  const setNotificationsError = error => {
    setError(viewModel.state.notifications, error);
  };

  /**
   * @description
   * Sets the loading state of the notifications.
   *
   * @name setNotificationsLoading
   * @type {function}
   *
   * @param {boolean} loading
   * @inner
   */
  const setNotificationsLoading = loading => {
    setLoading(viewModel.state.notifications, loading);
  };

  /**
   * @description
   * Finds the selected notification in the notifications array based on the
   * given notification id
   *
   * @name findNotificationById
   * @type {function}
   *
   * @param {string} notificationId
   * @inner
   */
  const findNotificationById = notificationId => (
    (viewModel.state.notifications.data || [])
      .find(notification =>
        notification.id === notificationId
      )
  );

  /**
   * @description
   * Finds the selected notification in the notifications array based on the
   * given notification id
   *
   * @name findNotificationById
   * @type {function}
   *
   * @param {string} notificationId
   * @inner
   */
  const findNotificationIndexById = notificationId => (
    (viewModel.state.notifications.data || [])
      .findIndex(notification =>
        notification.id === notificationId
      )
  );

  /**
   * @description
   * Sets the selected notification on the state
   *
   * @name setSelectedNotification
   * @type {function}
   *
   * @param {string} notificationId
   * @inner
   */
  const setSelectedNotification = notificationId => (
    Object.assign(viewModel.state, {
      selectedNotification: viewModel.findNotificationById(notificationId),
    })
  );

  /**
   * @description
   * Updates the selected notification on the state with the notification that has just been changed
   *
   * @name updateSelectedNotification
   * @type {function}
   *
   * @inner
   */
  const updateSelectedNotification = () => {
    const selectedNotification = viewModel.state.selectedNotification;

    if (selectedNotification) {
      setSelectedNotification(selectedNotification.id);
    }
  };

  /**
   * @description
   * Sets "read" status of notification.
   *
   * @name setNotificationRead
   * @type {function}
   * @param {string} notificationId
   * @param {boolean} read
   * @inner
   */
  const setNotificationRead = (notificationId, read) => {
    const notification = viewModel.findNotificationById(notificationId);

    Object.assign(notification, { read });

    if (
      viewModel.state.selectedNotification &&
      viewModel.state.selectedNotification.id === notificationId
    ) {
      updateSelectedNotification();
    }
  };

  /**
   * @description
   * deletes the notification from the notifications list.
   *
   * @name deleteNotification
   * @type {function}
   * @param {string} notificationId
   * @inner
   */
  const deleteNotification = (notificationId) => {
    const notificationIndex = viewModel.findNotificationIndexById(notificationId);

    viewModel.state.notifications.data.splice(notificationIndex, 1);
  };

  /**
   * @description
   * Fetches the state from the storage.
   *
   * @name fetch
   * @type {function}
   * @inner
   */
  const fetch = () => (
    bbStorage.getItem(StorageKey.NOTIFICATION_STATE)
      .then(state => {
        if (state) {
          viewModel.state = state;
        }
      })
  );

  /**
   * @description
   * Saves the state to the storage.
   *
   * @name save
   * @type {function}
   * @inner
   */
  const save = () => (
    bbStorage.setItem(StorageKey.NOTIFICATION_STATE, viewModel.state)
  );

  Object.assign(viewModel, {
    state: getInitialState(),

    hasNotifications,
    hasMoreNotifications,

    getNotifications,

    setRawNotifications,
    setHasMoreFlag,

    setNotifications,
    setNotificationsError,
    setNotificationsLoading,

    findNotificationById,
    findNotificationIndexById,
    setSelectedNotification,

    setNotificationRead,

    deleteNotification,

    fetch,
    save,

    getPageSize,
    getTotalCount,
  });

  return viewModel;
};
