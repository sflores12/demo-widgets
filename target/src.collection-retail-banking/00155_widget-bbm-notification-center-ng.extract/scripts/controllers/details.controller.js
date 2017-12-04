import { Event, Intent } from '../constants';

export default function DetailsController(
  widget,
  model,
  viewModel,
  sharedApi,
  bbIntent,
  bus
) {
  /**
   * @name DetailsController
   * @ngkey DetailsController
   *
   * @description
   * Notification center details controller.
   * Loads notification on start.
   *
   * @type {Object}
   */
  const ctrl = this;

  const { setNotificationRead, changeNotificationRead } = sharedApi;

  /**
   * @description
   * A set of intents that the Details controller uses or handles.
   *
   * @name intents
   * @type {Object}
   * @inner
   */
  const intents = {};

  /**
   * @name DetailsController#deleteNotification
   *
   * @description
   * Deletes the selected notification.
   *
   * @type {function}
   * @returns {Promise}
   */
  const deleteNotification = () => (
    sharedApi.deleteNotification(viewModel.state.selectedNotification.id)
      .then(() => {
        viewModel.deleteNotification(viewModel.state.selectedNotification.id);
        viewModel.save()
          .then(() => {
            intents.showNotificationList();
          });
      })
  );

  /**
   * @description
   * AngularJS Lifecycle hook used to initialize the controller.
   *
   * Preloads the notification details and prepares the view model.
   *
   * @name DetailsController#$onInit
   * @type {function}
   *
   * @fires cxp.item.loaded
   * @fires bb.item.loaded
   */
  const $onInit = () => (
    viewModel.fetch()
      .then(() => {
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
      })
  );

  /**
   * @description
   * The intent to show the notification details.
   *
   * @name intents#showNotifactionDetails
   * @type {function}
   * @inner
   */
  intents.showNotificationList = bbIntent.create(Intent.SHOW_NOTIFICATION_LIST);

  bbIntent.handle(Intent.SHOW_NOTIFICATION_DETAILS, (notificationId) => {
    viewModel.fetch()
      .then(() => {
        viewModel.setSelectedNotification(notificationId);
        setNotificationRead(notificationId, true);
      });
  });

  bbIntent.init(() => { });

  Object.defineProperty(ctrl, 'state', {
    get() {
      return viewModel.state;
    },
  });

  Object.assign(ctrl, {
    $onInit,
    /**
     * @description
     * Set notification read status
     *
     * @name DetailsController#setNotificationRead
     * @type {function}
     *
     * @param {string} notificationId - Id of the notification
     * @param {boolean} readStatus - read status of notification
     */
    setNotificationRead,
    /**
     * @description
     * Change notification read status
     *
     * @name DetailsController#changeNotificationRead
     * @type {function}
     *
     * @param {string} notificationId - Id of the notification
     */
    changeNotificationRead,
    deleteNotification,
  });
}
