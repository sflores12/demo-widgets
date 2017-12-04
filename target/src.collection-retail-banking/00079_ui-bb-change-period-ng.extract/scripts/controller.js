/**
 * @module ui-bb-change-period-ng
 * @name uiBbChangePeriodController
 *
 * @description
 * Main functionality for the component used to change the date period.
 */
export default function uiBbChangePeriodController($locale, $filter) {
  const $ctrl = this;

  const MONTHS_LOCALE = $locale.DATETIME_FORMATS.MONTH;
  const START_DATE = new Date($ctrl.periodStart);
  const END_DATE = new Date($ctrl.periodEnd);

  const INITIAL_MONTH = START_DATE.getMonth();
  const INITIAL_YEAR = START_DATE.getFullYear();

  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @type {function}
   * @name Controller#$onInit
   * @returns {void}
   */
  const $onInit = () => {
    $ctrl.monthNumber = INITIAL_MONTH;
    $ctrl.firstDayOfMonth = START_DATE.getDate();
    $ctrl.lastDayOfMonth = END_DATE.getDate();
    $ctrl.monthName = MONTHS_LOCALE[INITIAL_MONTH];
    $ctrl.selectedYear = INITIAL_YEAR;
  };

  /**
   * Period label formatter method. It uses provided custom formatter
   * or formats date in format d MMM yyyy
   *
   * @name formatPeriodLabel
   * @type {function}
   * @param {number} day Period's day
   * @param {function} formattingFn Formatting function
   * @returns {string}
   */
  const formatPeriodLabel = (day, formattingFn) => {
    const date = new Date(`${$ctrl.selectedYear}/${$ctrl.monthNumber + 1}/${day}`);
    // Backwards compatibility. Property periodFormatter is deprecated.
    const fn = formattingFn() || $ctrl.periodFormatter();

    return fn ? fn(date) : $filter('date')(date, 'd MMM yyyy');
  };

  /**
   * Checks if a button is disabled
   *
   * @name isButtonDisabled
   * @type {function}
   * @param {any} month - Number of the month
   * @returns {boolean}
   */
  const isButtonDisabled = (month, year) =>
    (month === INITIAL_MONTH) && (year === INITIAL_YEAR);

  /**
   * Changes the to previous or next one based on a month number passed to it
   *
   * @name changePeriod
   * @type {function}
   * @param {any} period - Change period step
   * @returns {void}
   */
  const changePeriod = (period) => {
    $ctrl.monthNumber = $ctrl.monthNumber + period;

    const now = new Date();
    const newStartDateObj = new Date($ctrl.selectedYear, $ctrl.monthNumber, 1);
    let newEndDateObj = new Date(
      newStartDateObj.getFullYear(), newStartDateObj.getMonth() + 1, 0
    );

    // don't allow future date
    if (newEndDateObj > now) {
      newEndDateObj = now;
    }

    $ctrl.lastDayOfMonth = newEndDateObj.getDate();
    $ctrl.monthName = MONTHS_LOCALE[newStartDateObj.getMonth()];
    $ctrl.selectedYear = newStartDateObj.getFullYear();

    if ($ctrl.monthNumber < 0) {
      $ctrl.monthNumber = 11;
    } else if ($ctrl.monthNumber > 11) {
      $ctrl.monthNumber = 0;
    }

    if ($ctrl.onPeriodStartChange()) {
      $ctrl.onPeriodStartChange()(newStartDateObj);
    }

    if ($ctrl.onPeriodEndChange()) {
      $ctrl.onPeriodEndChange()(newEndDateObj);
    }
  };

  Object.assign($ctrl, {
    $onInit,

    /**
     * Changes the to previous or next one based on a month number passed to it
     *
     * @name uiBbChangePeriodController#changePeriod
     * @type {function}
     */
    changePeriod,

    /**
     * Checks if a button is disabled
     *
     * @name uiBbChangePeriodController#isButtonDisabled
     * @type {function}
     */
    isButtonDisabled,

    /**
     * Period label formatter method. It uses provided custom formatter
     * or formats date in format d MMM yyyy
     *
     * @name uiBbChangePeriodController#formatPeriodLabel
     * @type {function}
     */
    formatPeriodLabel,

    /**
     * @description
     * Holds the value of the selected month
     *
     * @name uiBbChangePeriodController#monthNumber
     * @type {number}
     */
    monthNumber: null,

    /**
     * @description
     * Holds the value of the selected month name
     *
     * @name uiBbChangePeriodController#monthName
     * @type {string}
     */
    monthName: '',

    /**
     * @description
     * Holds the value of the selected year
     *
     * @name uiBbChangePeriodController#selectedYear
     * @type {number}
     */
    selectedYear: null,

    /**
     * @description
     * Holds the value of the first day in the selected month
     *
     * @name uiBbChangePeriodController#firstDayOfMonth
     * @type {number}
     */
    firstDayOfMonth: null,

    /**
     * @description
     * Holds the value of the last day in the selected month
     *
     * @name uiBbChangePeriodController#lastDayOfMonth
     * @type {number}
     */
    lastDayOfMonth: null,

  });
}
