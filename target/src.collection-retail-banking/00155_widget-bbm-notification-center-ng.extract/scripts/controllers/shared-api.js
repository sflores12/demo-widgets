import {
  Event,
} from '../constants';

export default (model, bus, viewModel) => {
  /**
   * @description
   * Delete notification
   *
   * @name deleteNotification
   * @type {function}
   *
   * @returns {Promise}
   * @inner
   */
  const deleteNotification = notificationId => {
    if (!notificationId) {
      throw new Error('[notificationId] Notification Id is not defined');
    }

    bus.publish(Event.NOTIFICATION_DELETE_START);

    return model.deleteRecord(notificationId)
      .then(() => {
        bus.publish(Event.NOTIFICATION_DELETE_DONE, { id: notificationId });
      })
      .catch(error => {
        bus.publish(Event.NOTIFICATION_DELETE_FAILED, { error });

        throw error;
      });
  };

  const setNotificationRead = (notificationId, readStatus) => {
    const id = String(notificationId);
    const read = Boolean(readStatus);
    model.putReadRecord(id, { read })
      .then(() => {
        viewModel.setNotificationRead(notificationId, read);
        bus.publish(Event.NOTIFICATION_CHANGE_READ, { id, read });
      })
      .catch(error => {
        viewModel.setNotificationsError(error);
      });
  };

  const changeNotificationRead = notificationId => {
    const selectedNotification = viewModel.findNotificationById(notificationId);
    if (selectedNotification) {
      const currentRead = selectedNotification.read;
      setNotificationRead(notificationId, !currentRead);
    }
  };

  return {
    deleteNotification,
    setNotificationRead,
    changeNotificationRead,
  };
};
