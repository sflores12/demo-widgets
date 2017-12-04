import { TimePeriod } from 'ui-bb-date-label-filter-ng';

/**
 * @description
 * Date label enum
 *
 * @name DateLabelKey
 * @enum {string}
 */
const dateLabelKeys = {
  [TimePeriod.NOW]: 'calendar.label.now',
  [TimePeriod.TODAY]: 'calendar.label.today',
  [TimePeriod.YESTERDAY]: 'calendar.label.yesterday',
};

/**
 * @description
 * Level classes enum
 *
 * @name levelIconClass
 * @enum {string}
 */
const levelIconClass = {
  ALERT: 'fa-exclamation-circle text-danger',
  WARNING: 'fa-exclamation-triangle text-warning',
  INFO: 'fa-info-circle text-info',
  SUCCESS: 'fa-check-circle text-success',
};

/**
 * @description
 * Lines length enum
 *
 * @name LinesLength
 * @enum {number}
 */
const LinesLength = {
  HAS_TITLE: 1,
  HAS_NOT_TITLE: 2,
};

export default ({ $filter }) => ({
  /**
   * @name getLevelIcon
   * @type {function}
   *
   * @description
   * Helper to get severity level icon
   *
   * @param {string} level severity level
   *
   * @returns {string} Severity level icon class
   */
  getLevelIcon: (level) => levelIconClass[level],
  /**
   * @name getDateLabel
   * @type {function}
   *
   * @description
   * Helper to get date label
   *
   * @param {object} item Notification object
   *
   * @returns {string} Date label
   */
  getDateLabel: (item) => {
    const date = item.validFrom || item.createdOn;
    let labelKey;
    if (!item.isOpen) {
      labelKey = dateLabelKeys[$filter('dateLabel')(date)];
    }
    return labelKey ? $filter('i18n')(labelKey) : $filter('date')(date, 'dd.MM.yyyy');
  },
  /**
   * @description
   * Helper to get visible lines length
   *
   * @public
   * @name getVisibleLinesLength
   * @type {function}
   * @param {object} item Notification object
   *
   * @returns {number} Visible lines length
   */
  getVisibleLinesLength: (item) => (item.title ? LinesLength.HAS_TITLE : LinesLength.HAS_NOT_TITLE),
});
