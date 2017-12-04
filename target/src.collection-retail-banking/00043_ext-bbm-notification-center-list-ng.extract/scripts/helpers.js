import { TimePeriod } from 'ui-bb-date-label-filter-ng';

const LevelIconClass = {
  ALERT: 'fa-exclamation-circle',
  WARNING: 'fa-exclamation-triangle',
  INFO: 'fa-info-circle',
  SUCCESS: 'fa-check-circle',
};

const DateLabelKey = {
  [TimePeriod.NOW]: 'calendar.label.now',
  [TimePeriod.TODAY]: 'calendar.label.today',
  [TimePeriod.YESTERDAY]: 'calendar.label.yesterday',
};

/**
 * @description
 * Helpers for ext-bbm-notification-center-list-ng
 *
 * @name Helpers
 * @type {Object}
 */
export default ({ $filter }) => {
  /**
   * The standard ISO-8601 supports the following formats for time offsets:
   * ±[hh]:[mm], ±[hh][mm], or ±[hh]
   * However iOS does support only ±[hh]:[mm] format.
   * Thus we make sure that the given date string has the following
   * variation of the ISO-8601 standard:
   * "YYYY-MM-DDThh:mm:ss.SSS±hh:mm"
   * @name normalizeDate
   * @type {function}
   *
   * @param dateStr
   * @inner
   */
  const normalizeDate = dateStr => {
    const filteredDate = $filter('date')(dateStr, 'yyyy-MM-ddTHH:mm:ss.sssZ');
    return filteredDate.replace(/(\d{2}):?(\d{2})$/, '$1:$2');
  };

  /**
   * @description
   * Returns CSS class for icon according to the given level.
   *
   * @name Helpers#getLevelIcon
   * @type {function}
   *
   * @param {string} level Notification level
   * @return {string}
   */
  const getLevelIcon = level => LevelIconClass[level];

  /**
   * @description
   * Returns a date label for the given notification.
   *
   * @name Helpers#getDateLabel
   * @type {function}
   *
   * @param {module:model-bb-notifications-ng.Notification} notification
   * @return {string}
   */
  const getDateLabel = notification => {
    const date = normalizeDate(notification.createdOn);
    let labelKey;
    let resultDateLabel;

    if (!notification.isOpen) {
      labelKey = DateLabelKey[$filter('dateLabel')(date)];
      if (labelKey) {
        if (labelKey === DateLabelKey[TimePeriod.NOW]) {
          resultDateLabel = $filter('i18n')(labelKey);
        } else {
          resultDateLabel = $filter('i18n')(labelKey) +
            $filter('i18n')('calendar.label.at') +
            $filter('date')(date, 'hh:mm');
        }
      }
    }

    return labelKey ? resultDateLabel : $filter('date')(date, 'd MMMM yyyy');
  };

  /**
   * @description
   * Checks if there are notifications.
   *
   * @name Helpers#hasNotifications
   * @type {function}
   *
   * @param {module:widget-bbm-notification-center-ng.ListController} ctrl
   * @return {boolean}
   */
  const hasNotifications = ctrl => Boolean(
    ctrl.state.notifications.data &&
    ctrl.state.notifications.data.length
  );

  /**
   * @description
   * Checks for the loading state.
   *
   * @name Helpers#showLoadingState
   * @type {function}
   *
   * @param {module:widget-bbm-notification-center-ng.ListController} ctrl
   * @return {boolean}
   */
  const showLoadingState = ctrl => (
    ctrl.state.notifications.loading && !hasNotifications(ctrl)
  );

  /**
   * @description
   * Checks for the load more's loading state.
   *
   * @name Helpers#showLoadMoreLoading
   * @type {function}
   *
   * @param {module:widget-bbm-notification-center-ng.ListController} ctrl
   * @return {boolean}
   */
  const showLoadMoreLoading = ctrl => (
    ctrl.state.notifications.loading && hasNotifications(ctrl)
  );

  /**
   * @description
   * Checks for the load more states.
   *
   * @name Helpers#showLoadMore
   * @type {function}
   *
   * @param {module:widget-bbm-notification-center-ng.ListController} ctrl
   * @return {boolean}
   */
  const showLoadMore = ctrl => (
    showLoadMoreLoading(ctrl)
  );

  /**
   * @description
   * Checks for the error state.
   *
   * @name Helpers#showErrorState
   * @type {function}
   *
   * @param {module:widget-bbm-notification-center-ng.ListController} ctrl
   * @return {boolean}
   */
  const showErrorState = ctrl => (
    ctrl.state.notifications.error &&
    !ctrl.state.loading &&
    !hasNotifications(ctrl)
  );

  /**
   * @description
   * Checks for the empty state.
   *
   * @name Helpers#showEmptyState
   * @type {function}
   *
   * @param {module:widget-bbm-notification-center-ng.ListController} ctrl
   * @return {boolean}
   */
  const showEmptyState = ctrl => (
    Boolean(ctrl.state.notifications.data && !ctrl.state.notifications.data.length) &&
    !ctrl.state.notifications.error &&
    !ctrl.state.loading
  );

  return {
    getLevelIcon,
    getDateLabel,
    hasNotifications,
    showLoadingState,
    showErrorState,
    showEmptyState,
    showLoadMore,
    showLoadMoreLoading,
  };
};
