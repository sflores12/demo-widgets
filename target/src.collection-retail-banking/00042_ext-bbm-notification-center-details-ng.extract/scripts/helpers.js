// Temporary disable capsInNew until it fixed in lib-bbm-plugins
/* eslint new-cap: ["error", { "capIsNew": false }] */
/* global window */

/**
 * @description
 * Helpers for ext-bbm-notification-center-details-ng
 *
 * @name Helpers
 * @type {Object}
 */

import { TimePeriod } from 'ui-bb-date-label-filter-ng';
import plugins from 'lib-bbm-plugins';

const levelIconClass = {
  ALERT: 'fa-exclamation-circle',
  WARNING: 'fa-exclamation-triangle',
  INFO: 'fa-info-circle',
  SUCCESS: 'fa-check-circle',
};

const dateLabelKeys = {
  [TimePeriod.NOW]: 'calendar.label.now',
  [TimePeriod.TODAY]: 'calendar.label.today',
  [TimePeriod.YESTERDAY]: 'calendar.label.yesterday',
};

const ToolbarButtonEvent = {
  DELETE: 'bb.action.notification.delete',
  CHANGE_READ: 'bb.action.notification.read.change',
};

/**
 * Confirm dialog button types
 * TODO: Read them from the plugin
 * @type {Object}
 */
const ButtonType = {
  POSITIVE: 'POSITIVE',
  NEGATIVE: 'NEGATIVE',
};

/**
 * Confirm dialog actions
 * @type {Object}
 */
const ConfirmAction = {
  CANCEL: 'cancel',
  CONFIRM: 'confirm',
};

export default ({ $filter }) => {
  const i18n = $filter('i18n');
  /**
   * The standard ISO-8601 supports the following formats for time offsets:
   * ±[hh]:[mm], ±[hh][mm], or ±[hh]
   * However iOS does support only ±[hh]:[mm] format.
   * Thus we make sure that the given date string has the following
   * variation of the ISO-8601 standard:
   * "YYYY-MM-DDThh:mm:ss.SSS±hh:mm"
   * @name normalizeDate
   * @inner
   * @param dateStr
   */
  const normalizeDate = dateStr => {
    const filteredDate = $filter('date')(dateStr, 'yyyy-MM-ddTHH:mm:ss.sssZ');
    return filteredDate.replace(/(\d{2}):?(\d{2})$/, '$1:$2');
  };

  return {
    /**
     * @description
     * Returns CSS class for icon according to the given level.
     *
     * @name Helpers#getLevelIcon
     * @type {function}
     *
     * @param {string} level Notification level
     * @returns {string}
     */
    getLevelIcon: level => levelIconClass[level],

    /**
     * @description
     * Returns a date label for the given notification.
     *
     * @name Helpers#getDateLabel
     * @type {function}
     *
     * @param {module:model-bb-notifications-ng.Notification} notification Notification
     * @returns {string}
     */
    getDateLabel: notification => {
      if (!notification) {
        return '';
      }

      const date = normalizeDate(notification.createdOn);

      let labelKey;
      let resultDateLabel;

      if (!notification.isOpen) {
        const dateType = $filter('dateLabel')(date);
        labelKey = dateLabelKeys[dateType];
      }

      resultDateLabel = labelKey ? $filter('i18n')(labelKey) : $filter('date')(date, 'd MMMM yyyy');

      if (labelKey !== dateLabelKeys[TimePeriod.NOW]) {
        resultDateLabel += $filter('i18n')('calendar.label.at') + $filter('date')(date, 'hh:mm');
      }

      return resultDateLabel;
    },

    /**
     * @description
     * Init lifecycle hook. Adds event listeners for native toolbar buttons.
     *
     * @name Helpers#onInit
     * @type {function}
     *
     * @param {module:widget-bbm-notification-center-ng.DetailsController} ctrl
     *   DetailsController instance.
     */
    onInit: ctrl => {
      window.addEventListener(ToolbarButtonEvent.CHANGE_READ, () => {
        const notificationId = ctrl.state.selectedNotification.id;
        ctrl.changeNotificationRead(notificationId);
      });

      window.addEventListener(ToolbarButtonEvent.DELETE, () => {
        const confirmOptions = {
          title: i18n('message.notification.delete.confirm.title'),
          message: i18n('message.notification.delete.confirm.message'),
          buttons: [
            {
              type: ButtonType.POSITIVE,
              text: i18n('message.notification.delete.confirm.button.ok'),
              callbackFn: ConfirmAction.CONFIRM,
            },
            {
              type: ButtonType.NEGATIVE,
              text: i18n('message.notification.delete.confirm.button.cancel'),
              callbackFn: ConfirmAction.CANCEL,
            },
          ],
        };

        plugins.AlertDialog().show(confirmOptions)
          .then((response) => response.callback === ConfirmAction.CONFIRM)
          .then((isConfirmed) => {
            if (isConfirmed) {
              ctrl.deleteNotification();
            }
          });
      });
    },
  };
};
