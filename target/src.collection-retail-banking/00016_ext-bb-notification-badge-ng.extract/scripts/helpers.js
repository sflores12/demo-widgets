import { TimePeriod } from 'ui-bb-date-label-filter-ng';

/**
 * @description
 * Date label enum
 *
 * @name DateLabelKey
 * @enum {string}
 */
const DateLabelKey = {
  [TimePeriod.NOW]: 'calendar.label.now',
  [TimePeriod.TODAY]: 'calendar.label.today',
  [TimePeriod.YESTERDAY]: 'calendar.label.yesterday',
};

/**
 * @description
 * Level objects enum
 *
 * @name Level
 * @enum {object}
 */
const Level = {
  ALERT: {
    icon: 'fa-exclamation-circle text-danger',
    suffix: 'alert',
  },
  WARNING: {
    icon: 'fa-exclamation-triangle text-warning',
    suffix: 'warning',
  },
  INFO: {
    icon: 'fa-info-circle text-info',
    suffix: 'info',
  },
  SUCCESS: {
    icon: 'fa-check-circle text-success',
    suffix: 'success',
  },
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

export default ({ $filter }) => {
  const dateFilter = $filter('date');
  const dateLabelFilter = $filter('dateLabel');
  const i18nFilter = $filter('i18n');

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
  const getLevelIcon = (level) => Level[level].icon;

  /**
   * @name getDateLabel
   * @type {function}
   *
   * @description
   * Helper to get date label
   *
   * @param {object} item Notification object
   * @param {?object} format Date format
   *
   * @returns {string} Date label
   */
  const getDateLabel = (item, format = 'shortDate') => {
    const date = item.validFrom || item.createdOn;
    const labelKey = DateLabelKey[dateLabelFilter(date)];

    return labelKey ? i18nFilter(labelKey) : dateFilter(date, format);
  };

  /**
   * @name getFormattedDate
   * @type {function}
   *
   * @description
   * Helper to get date string
   *
   * @param {object} item Notification object
   * @param {?object} format Date format
   *
   * @returns {string} Date string
   */
  const getFormattedDate = (item) => {
    const date = item.validFrom || item.createdOn;

    return dateFilter(date, 'shortDate');
  };

  /**
   * @name getLevelTitle
   * @type {function}
   *
   * @description
   * Helper to get severity level title
   *
   * @param {string} level severity level
   *
   * @returns {string} Severity level title
   */
  const getLevelTitle = (level) => i18nFilter(`notification.level.${Level[level].suffix}.title`);

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
  const getVisibleLinesLength =
    (item) => (item.title ? LinesLength.HAS_TITLE : LinesLength.HAS_NOT_TITLE);

  return {
    getLevelIcon,
    getDateLabel,
    getFormattedDate,
    getLevelTitle,
    getVisibleLinesLength,
  };
};
