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
 * Read status objects enum
 *
 * @name Status
 * @enum {object}
 */
const Status = {
  READ: {
    icon: 'fa-check-circle',
    suffix: 'read',
  },
  UNREAD: {
    icon: 'fa-check-circle-o',
    suffix: 'unread',
  },
};


/**
 * @name headers
 * @type {Array}
 *
 * @description
 * List of table headers
 */
export const headers = [
  {
    label: 'notification.header.description',
    class: '',
  },
  {
    label: 'notification.header.status',
    class: 'col-sm-1',
  },
  {
    label: 'notification.header.date',
    class: 'col-sm-2',
  },
];

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
  const i18nFilter = $filter('i18n');
  const dateFilter = $filter('date');
  const dateLabelFilter = $filter('dateLabel');

  /**
   * @name toggled
   * @inner
   * @type {null|string}
   *
   * @description
   * Stores id of toggled direct debit
   */
  let toggled = null;

  /**
   * @name canBeToggled
   * @inner
   * @type {function}
   *
   * @description
   * Check if current click event allows toggle direct debit
   *
   * @param {object} event click object
   *
   * @returns {boolean} True if event allows toggle direct debit
   */
  const canBeToggled = (event) => {
    const target = event.target.nodeName.toUpperCase();
    const parent = event.target.parentNode && event.target.parentNode.nodeName.toUpperCase();
    const unavailableNodes = ['INPUT', 'BUTTON', 'A'];

    return unavailableNodes.indexOf(target) === -1
      && unavailableNodes.indexOf(parent) === -1
      && !event.view.getSelection().toString();
  };

  /**
   * @name toggleDetails
   * @type {function}
   *
   * @description
   * Show/hide (toggle) direct debit details row
   *
   * @param {string} id row identification
   * @param {object} event click object
   */
  const toggleDetails = (id, event) => {
    if (canBeToggled(event)) {
      toggled = (id === toggled) ? null : id;
    }
  };

  /**
   * @name isToggled
   * @type {function}
   *
   * @description
   * Helper to check if direct debit is toggled or not
   *
   * @param {string} id row identification
   *
   * @returns {boolean} True if direct debit is toggled
   */
  const isToggled = (id) => id === toggled;

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
   * @name getLevelTitle
   * @type {function}
   *
   * @description
   * Helper to get severity level title
   *
   * @param {string} read severity level
   *
   * @returns {string} Severity level title
   */
  const getLevelTitle = (level) => i18nFilter(`notification.level.${Level[level].suffix}`);

  /**
   * @name getReadBtnLabel
   * @type {function}
   *
   * @description
   * Helper to get read status label
   *
   * @param {string} read read status
   *
   * @returns {string} Read status label
   */
  const getReadBtnLabel = (read) =>
    i18nFilter(`notification.label.${Status[read ? 'READ' : 'UNREAD'].suffix}`);

  /**
   * @name getReadBtnIcon
   * @type {function}
   *
   * @description
   * Helper to get read status label
   *
   * @param {string} read read status
   *
   * @returns {string} Read status label
   */
  const getReadBtnIcon = (read) => Status[read ? 'READ' : 'UNREAD'].icon;

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
    let labelKey;
    if (!item.isOpen) {
      labelKey = DateLabelKey[dateLabelFilter(date)];
    }
    return labelKey ? i18nFilter(labelKey) : dateFilter(date, format);
  };

  /**
   * @description
   * Checkes if actual pagination type matches the one, defined in properties
   *
   * @public
   * @name isPaginationTypeMatch
   * @type {function}
   * @param {function} $ctrl      Current controller
   * @param {string} type         Description of pagination type (pagination, load-more)
   *
   * @returns {boolean}
   */
  const isPaginationTypeMatch = ($ctrl, type) => $ctrl.paginationType === type;

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

  /**
   * @name getEmptyMessage
   * @type {function}
   *
   * @description
   * Helper to get empty message
   *
   * @param {boolean} isFilterApplied Filter applied status
   *
   * @returns {string} Empty message string
   */
  const getEmptyMessage = (isFilterApplied) =>
    i18nFilter(`notification.message.${isFilterApplied ? 'not.found' : 'empty'}`);

  return {
    headers,
    toggleDetails,
    isToggled,
    getLevelIcon,
    getLevelTitle,
    getReadBtnLabel,
    getReadBtnIcon,
    getDateLabel,
    isPaginationTypeMatch,
    getVisibleLinesLength,
    getEmptyMessage,
  };
};
