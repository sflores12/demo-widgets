import { Event, Intent } from '../constants';

export default function ListController(
  widget,
  model,
  viewModel,
  sharedApi,
  bbIntent,
  bus,
  hooks
) {
  /**
   * @name ListController
   * @ngkey ListController
   *
   * @description
   * Notification center list controller.
   * Loads notifications on start.
   *
   * @type {Object}
   */
  const ctrl = this;

  /**
   * @description
   * A set of intents that the List controller uses or handles.
   *
   * @name intents
   * @type {Object}
   * @inner
   */
  const intents = {};

  /**
   * Creates a duplicate-free version of an array
   *
   * @param {Array} items
   * @inner
   */
  const uniqueArray = (array) => (
    array.filter((itemOuter, index) =>
      array.findIndex((itemInner) =>
        itemOuter.id === itemInner.id) === index
    )
  );

  /**
   * Merges new notifications with existing notifications
   *
   * @name ListController#append
   * @type {function}
   * @returns {module:model-bb-notifications-ng.Notification[]}
   * merged array of old and new notifications
   * @inner
   */
  const append = (newItems, existingItems) => uniqueArray([...existingItems, ...newItems]);

  /**
   * Replaces existing notifications with new notifications
   *
   * @name ListController#replace
   * @type {function}
   * @returns {module:model-bb-notifications-ng.Notification[]} new notifications
   * @inner
   */
  const replace = (items) => items;

  /**
   * @description
   * Loads notifications.
   *
   * @name ListController#loadNotifications
   * @type {function}
   * @param {function} mergeStrategy - Strategy on how to handle the merging of notifications
   * @returns {Promise}
   * @inner
   */
  const loadNotifications = (requestParams, mergeStrategy = replace) => {
    viewModel.setNotificationsLoading(true);

    return model.load(requestParams)
      .then(raw => {
        const rawNotifications = mergeStrategy(
          raw.data,
          viewModel.state.notifications.pagination.rawData
        );

        const hasMore = rawNotifications.length < raw.totalCount;
        const processedData = hooks.processNotifications(rawNotifications);

        viewModel.setRawNotifications(rawNotifications);
        viewModel.setHasMoreFlag(hasMore);

        viewModel.setNotifications(processedData);
        viewModel.setNotificationsError(null);
        viewModel.setNotificationsLoading(false);
      })
      .catch(error => {
        viewModel.setNotificationsError(error);
        viewModel.setNotificationsLoading(false);

        throw error;
      });
  };

  /**
   * @description
   * Loads more notifications.
   *
   * @name ListController#loadMoreNotifications
   * @type {function}
   * @returns {Promise.<Array>}
   */
  const loadMoreNotifications = () => {
    if (viewModel.state.notifications.loading || !viewModel.hasMoreNotifications()) {
      return Promise.resolve();
    }

    const size = viewModel.getPageSize();
    const from = viewModel.getTotalCount();

    const requestParams = {
      from,
      size,
    };

    return loadNotifications(requestParams, append);
  };

  const getReloadRequestParams = (pageSize, totalCount) => {
    const from = 0;
    const size = Math.max(
      (Math.ceil(totalCount / pageSize) * pageSize),
      pageSize
    );

    return {
      from,
      size,
    };
  };

  /**
   * @description
   * Reloads notifications
   *
   * @name ListController#reloadNotifications
   * @type {function}
   * @returns {Promise}
   * @inner
   */
  const reloadNotifications = () => (
    loadNotifications(
      getReloadRequestParams(
        viewModel.getPageSize(),
        viewModel.getTotalCount()
      ),
      replace
    )
  );

  /**
   * Handles the intent to show the notification details
   *
   * @name ListController#showNotificationsDetails
   * @type {function}
   * @param {string} id - Id of the notification
   */
  const showNotificationDetails = notificationId => {
    viewModel.setSelectedNotification(notificationId);
    viewModel.save()
      .then(() => {
        intents.showNotificationDetails(notificationId);
      });
  };


  /**
   * @description
   * Checks if there are notifications on the view model
   *
   * @name ListController#hasNotifications
   * @type {function}
   * @returns {boolean}
   */
  const hasNotifications = () => viewModel.hasNotifications();

  /**
   * @description
   * Gets initial request params
   *
   * @name ListController#getInitialRequestParams
   * @type {function}
   * @returns {Object}
   * @inner
   */
  const getInitialRequestParams = () => ({
    fromDate: null,
    toDate: null,
    levels: null,
    read: null,
    from: 0,
    size: viewModel.getPageSize(),
  });

  /**
   * @description
   * AngularJS Lifecycle hook used to initialize the controller.
   *
   * Preloads notifications and prepares the view model.
   *
   * @name ListController#$onInit
   * @type {function}
   *
   * @fires cxp.item.loaded
   * @fires bb.item.loaded
   */
  const $onInit = () => {
    /**
     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
     * and will be removed with the update to widget collection 3 (WC3)
     */
    bus.publish(Event.CXP_ITEM_LOADED, {
      id: widget.getId(),
    });

    bus.publish(Event.BB_ITEM_LOADED, {
      id: widget.getId(),
    });

    bus.subscribe(Event.NOTIFICATION_CHANGE_READ, notification => {
      viewModel.setNotificationRead(notification.id, notification.read);
    });

    bus.subscribe(Event.NOTIFICATION_DELETE_DONE, notification => {
      viewModel.deleteNotification(notification.id);
    });

    return loadNotifications(getInitialRequestParams(), replace);
  };

  /**
   * @description
   * The intent to show the notification details.
   *
   * @name intents#showNotifactionDetails
   * @type {function}
   * @inner
   */
  intents.showNotificationDetails = bbIntent.create(Intent.SHOW_NOTIFICATION_DETAILS);

  bbIntent.handle(Intent.SHOW_NOTIFICATION_LIST, () => {
    viewModel.fetch();
  });

  bbIntent.init(() => { });

  Object.defineProperty(ctrl, 'state', {
    get() {
      return viewModel.state;
    },
  });

  Object.assign(ctrl, {
    $onInit,
    hasNotifications,
    loadMoreNotifications,
    showNotificationDetails,
    reloadNotifications,
  });
}
