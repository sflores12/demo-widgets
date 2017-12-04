/**
 * @description
 * Css-classes for date-range selection
 *
 * @name DateRangeClass
 * @enum {string}
 */
const DateRangeClass = {
  START_DATE: 'date-range-start',
  END_DATE: 'date-range-end',
  CAPTURED_DATE: 'date-range-captured',
  ONE_DAY_RANGE: 'one-day-range',
};

export default function uiBbCalendarPopupController($filter, $locale, $scope) {
  /**
   * @description
   * Calendar popup controller
   *
   * @name uiBbCalendarPopupController
   * @ngkey uiBbCalendarPopupController
   * @type {Function}
   */
  const $ctrl = this;
  const today = new Date();
  const dateFormat = 'shortDate';

  /**
   * @description
   * Default datepicker config.
   *
   * @name uiBbCalendarPopupController#defaultConfig
   * @inner
   * @type {Object}
   */
  const defaultConfig = {
    formatDayHeader: 'EEE',
    formatDayTitle: 'MMM yyyy',
    formatMonth: 'MMM',
    maxMode: 'day',
    minDate: today,
    maxDate: new Date(today.getFullYear() + 2, today.getMonth(), today.getDate()),
    showWeeks: false,
  };

  /**
   * @description
   * Datepicker config.
   *
   * @name uiBbCalendarPopupController#options
   * @type {Object}
   */
  const options = Object.assign(defaultConfig, $ctrl.config);

  /**
   * @description
   * Compares given dates
   *
   * @name compareDates
   * @inner
   * @type {Function}
   * @param {String} date1 Date string
   * @param {String} date2 Date string
   * @returns {Number}
   * -1 : if a < b
   *  0 : if a = b
   *  1 : if a > b
   */
  const compareDates = (date1, date2) => (date1 > date2) - (date2 > date1);

  /**
   * @description
   * Gets day difference between two dates
   *
   * @name getDayDiff
   * @inner
   * @type {Function}
   * @param {String} date1 Date string
   * @param {String} date2 Date string
   * @returns {String}
   */
  const getDayDiff = (date1, date2) => Math.round((date1 - date2) / (1000 * 60 * 60 * 24));

  /**
   * @description
   * Gets true if dates of date-range are equal
   *
   * @name isOneDayRange
   * @inner
   * @type {Function}
   * @returns {Boolean}
   */
  const isOneDayRange = () => !!$ctrl.dateRange.endDate
    && compareDates($ctrl.dateRange.startDate, $ctrl.dateRange.endDate) === 0;

  /**
   * @description
   * Gets true if range is set
   *
   * @name isRangeSet
   * @inner
   * @type {Function}
   * @returns {String}
   */
  const isRangeSet = () => !!$ctrl.dateRange.startDate && !!$ctrl.dateRange.startDate;

  /**
   * @description
   * Gets true if date is included in date range
   *
   * @name isDateInRange
   * @inner
   * @type {Function}
   * @param {String} date Date string
   * @returns {Boolean} True if date is included in date range
   */
  const isDateInRange = (date) => compareDates(date, $ctrl.dateRange.startDate) === 1
    && compareDates(date, $ctrl.dateRange.endDate) === -1;

  /**
   * @description
   * Gets true if date is boundary in date range
   *
   * @name isBoundaryDate
   * @inner
   * @type {Function}
   * @param {String} date Date string
   * @returns {Boolean} True if date is boundary in date range
   */
  const isBoundaryDate = (date) => compareDates(date, $ctrl.dateRange.startDate) === 0
    || compareDates(date, $ctrl.dateRange.endDate) === 0;

  /**
   * @description
   * Gets css class for each day in calendar
   *
   * @name getDayClass
   * @inner
   * @type {Function}
   * @param {Object} obj Date object
   * @param {String} obj.date Date string
   * @param {String} obj.mode Calendar mode
   * @returns {Boolean} Css class for each day in calendar
   */
  const getDayClass = ({ date, mode }) => {
    if (mode === 'day') {
      const formattedDate = new Date(date).setHours(0, 0, 0, 0);

      if (compareDates(formattedDate, $ctrl.dateRange.startDate) === 0) {
        return isOneDayRange() ? DateRangeClass.ONE_DAY_RANGE : DateRangeClass.START_DATE;
      } else if (compareDates(formattedDate, $ctrl.dateRange.endDate) === 0) {
        return DateRangeClass.END_DATE;
      } else if (isDateInRange(formattedDate)) {
        return DateRangeClass.CAPTURED_DATE;
      }
    }

    return '';
  };

  /**
   * @description
   * Setup date range values
   *
   * @name setDateRange
   * @inner
   * @type {Function}
   * @param {String} startDate Start date string
   * @param {String} endDate End date string
   */
  const setDateRange = (startDate, endDate) => {
    $ctrl.dateRange.startDate = startDate;
    $ctrl.dateRange.endDate = endDate;

    $ctrl.date = null;
  };

  /**
   * @description
   * Method fires when $ctrl.date was changed
   *
   * @name onDateChange
   * @inner
   * @type {Function}
   * @param {String} newVal New date value
   */
  const onDateChange = (newVal) => {
    if (!newVal) {
      return;
    }

    // situation when date range is not set or dates is included in date-range
    if (!isRangeSet() || isDateInRange(newVal) || isBoundaryDate(newVal)) {
      setDateRange(newVal, newVal);
    } else {
      if (isOneDayRange()) {
        if (getDayDiff($ctrl.dateRange.startDate, newVal) > 0) {
          setDateRange(newVal, $ctrl.dateRange.startDate);
        } else {
          setDateRange($ctrl.dateRange.startDate, newVal);
        }
      } else {
        // when selected date is after of the range
        if (compareDates(newVal, $ctrl.dateRange.endDate) === 1) {
          setDateRange($ctrl.dateRange.startDate, newVal);
        // when selected date is before of the range
        } else if (compareDates(newVal, $ctrl.dateRange.startDate) === -1) {
          setDateRange(newVal, $ctrl.dateRange.endDate);
        }
      }
    }
  };

  /**
   * @description
   * Enables ability to select date-range
   *
   * @name enableDateRangePicker
   * @inner
   * @type {Function}
   */
  const enableDateRangePicker = () => {
    Object.assign($ctrl.options, { customClass: getDayClass });

    $scope.$watch(() => $ctrl.date, onDateChange);
  };

  /**
   * @description
   * Gets formatted date value or translation of "calendar.label.today" key or "today" string when
   * today date is selected
   *
   * @name getSingleDateValue
   * @inner
   * @type {Function}
   * @param {String} date Date string
   * @returns {String}
   */
  const getSingleDateValue = (date) => (compareDates(date, today) !== 0 ?
    $filter('date')(date, dateFormat) : ($filter('i18n')('calendar.label.today') || 'today'));

  /**
   * @description
   * Displays translation of "calendar.label.today" key or "today" string in the input field
   * when today date is selected
   *
   * @name formatViewValue
   * @type {Function}
   * @returns {String}
   */
  const formatViewValue = () => {
    if ($ctrl.dateRange && isRangeSet()) {
      const startDate = new Date($ctrl.dateRange.startDate);
      const endDate = new Date($ctrl.dateRange.endDate);

      if (compareDates(startDate, endDate) === 0) {
        return getSingleDateValue(startDate);
      }

      return `${getSingleDateValue(startDate)} - ${getSingleDateValue(endDate)}`;
    } else if ($ctrl.date) {
      const date = new Date($ctrl.date);

      return getSingleDateValue(date);
    }

    return '';
  };

  /**
   * @description
   * Toggling open/close state of the calendar
   *
   * @name toggle
   * @type {Function}
   */
  const toggle = () => {
    $ctrl.opened = !$ctrl.opened;
  };

  /**
   * @description
   * Adjusts selected date, minDate and maxDate of current control
   * to the value passed through a binding
   *
   * @name $onChanges
   * @type {Function}
   * @param {Object} changesObject Object containing changes in one-way bindings
   */
  const $onChanges = (changesObject) => {
    if (!changesObject.config) {
      return;
    }

    const changes = changesObject.config.currentValue;

    if (changes && changes.minDate) {
      // update minDate setting
      $ctrl.options.minDate = changes.minDate;

      // update selected date if mindate is later than selected date
      if ($ctrl.date && $ctrl.date - changes.minDate < 0) {
        $ctrl.date = changes.minDate;
      }
    }

    if (changes && changes.maxDate) {
      // update maxDate setting
      $ctrl.options.maxDate = changes.maxDate;

      // update selected date if maxdate is before than selected date
      if ($ctrl.date && $ctrl.date - changes.maxDate > 0) {
        $ctrl.date = changes.maxDate;
      }
    }
  };

  /**
   * @description
   * Set default value on icon click
   *
   * @name $onInit
   * @type {Function}
   */
  const $onInit = () => {
    const dateFormatPlaceholder = $locale.DATETIME_FORMATS[dateFormat].toLowerCase();

    $ctrl.onClick = $ctrl.onClick === undefined ? true : $ctrl.onClick;

    if ($ctrl.dateRange) {
      $ctrl.dateFormatPlaceholder = `${dateFormatPlaceholder} - ${dateFormatPlaceholder}`;
      enableDateRangePicker();
    } else {
      $ctrl.dateFormatPlaceholder = dateFormatPlaceholder;
    }
  };

  Object.assign($ctrl, {
    options,
    $onInit,
    $onChanges,
    formatViewValue,
    toggle,
  });
}
