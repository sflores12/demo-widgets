export default function uiBbNotificationsFilterController($scope) {
  /**
   * @name uiBbNotificationsFilterController
   * @ngkey uiBbNotificationsFilterController
   * @type {object}
   * @description Notifications filter controller
   */
  const $ctrl = this;

  const defaultFilterParams = {
    levels: [],
    status: null,
    fromDate: null,
    toDate: null,
  };

  /**
   * @description
   * `filterParams` parameters object.
   *
   * @name uiBbNotificationsFilterController#filterParams
   * @type {object}
   */
  const filterParams = Object.assign({}, defaultFilterParams);

  /**
   * @description
   * Array of `Severity levels` parameters objects.
   *
   * @name uiBbNotificationsFilterController#levels
   * @type {array}
   */
  const levels = [
    { key: 'all', value: '', checked: false, isSelectAll: true },
    { key: 'info', value: 'INFO', checked: false },
    { key: 'warning', value: 'WARNING', checked: false },
    { key: 'alert', value: 'ALERT', checked: false },
    { key: 'success', value: 'SUCCESS', checked: false },
  ];

  /**
   * @description
   * Array of `Statuses` parameters objects.
   *
   * @name uiBbNotificationsFilterController#statuses
   * @type {array}
   */
  const statuses = [
    { key: 'all', value: null, checked: false },
    { key: 'read', value: true, checked: false },
    { key: 'unread', value: false, checked: false },
  ];

  /**
   * @description
   * `From date` parameters object.
   *
   * @name uiBbNotificationsFilterController#fromDate
   * @type {object}
   */
  const fromDate = {
    config: { minDate: null, maxDate: new Date(), maxMode: 'year' },
  };

  /**
   * @description
   * `To date` parameters object.
   *
   * @name uiBbNotificationsFilterController#toDate
   * @type {object}
   */
  const toDate = {
    config: { minDate: null, maxDate: new Date(), maxMode: 'year' },
  };

  /**
   * @description
   * Watcher object evaluating current toDate param config.
   *
   * @type {object}
   */
  $scope.$watch(() => filterParams.fromDate, (newVal) => {
    toDate.config = Object.assign({}, toDate.config, {
      minDate: newVal ? new Date(newVal) : null,
    });
  });

  /**
   * @description
   * Watcher object evaluation current fromDate param config.
   *
   * @type {object}
   */
  $scope.$watch(() => filterParams.toDate, (newVal) => {
    fromDate.config = Object.assign({}, fromDate.config, {
      maxDate: newVal ? new Date(newVal) : new Date(),
    });
  });

  /**
   * @description
   * Normalize date to required format.
   *
   * @inner
   * @name uiBbNotificationsFilterController#getNormalizedDate
   * @type {function}
   * @param {object} date Date string
   * @param {object} correction Number of miliseconds added to given date
   * @returns {Date|null} Date object or null
   */
  const getNormalizedDate = (date, correction = 0) => {
    const timeStamp = Date.parse(date) + correction;

    // add timezone to returned date
    return date ? `${new Date(timeStamp).toISOString().slice(0, -5)}Z` : null;
  };

  /**
   * @description
   * Return Array of checked option values.
   *
   * @inner
   * @name uiBbNotificationsFilterController#getCheckedOptions
   * @type {function}
   * @param {array} options Array of checkbox option objects
   * @returns {array} rray of checked option values
   */
  const getCheckedOptions = (options) => options.reduce((result, option) => {
    if (option.checked && !option.isSelectAll) {
      result.push(option.value);
    }

    return result;
  }, []);

  /**
   * @description
   * Update levels value for request according to options.
   *
   * @name uiBbNotificationsFilterController#onToggleCheckbox
   * @type {function}
   * @param {object} currentOption Checkbox option object
   * @param {array} options Array of checkbox option objects
   */
  const onToggleCheckbox = (currentOption, options) => {
    if (!currentOption.isSelectAll || (!currentOption.checked && currentOption.isSelectAll)) {
      filterParams.levels = getCheckedOptions(options);
    } else {
      filterParams.levels = [];
    }
  };

  /**
   * @description
   * Get all filter params.
   *
   * @name uiBbNotificationsFilterController#getParams
   * @type {function}
   * @returns {object} Filter params
   */
  const getParams = () => ({
    levels: filterParams.levels.toString() || null,
    read: filterParams.status,
    fromDate: getNormalizedDate(filterParams.fromDate),
    toDate: getNormalizedDate(filterParams.toDate || filterParams.fromDate, 1000 * 60 * 60 * 24),
  });

  /**
   * @description
   * Uncheck checkbox input.
   *
   * @name uiBbNotificationsFilterController#clearCheckedMapper
   * @type {function}
   * @param {object} item Checkbox input object
   * @returns {object} Processed checkbox input object
   */
  const clearCheckedMapper = (item) => Object.assign(item, {
    checked: false,
  });

  /**
   * @description
   * Reset form state method.
   *
   * @inner
   * @name uiBbTransactionSearchFilterController#resetFormState
   * @param {object} form Angular form object
   * @type {function}
   */
  const resetFormState = (form) => {
    if (form) {
      form.$setUntouched();
      form.$setPristine();
    }
  };

  /**
   * @description
   * Call filter method.
   *
   * @name uiBbNotificationsFilterController#onApplyFilter
   * @type {function}
   * @returns {Promise|null} A Promise that returns from filter method or null if method isn't set
   */
  const onApplyFilter = () => ($ctrl.onFilter ? $ctrl.onFilter({ params: getParams() }) : null);

  /**
   * @description
   * Reset filter parameters.
   *
   * @name uiBbNotificationsFilterController#onClearFilter
   * @param {object} form Angular form object
   * @type {function}
   */
  const onClearFilter = (form) => {
    Object.assign(filterParams, defaultFilterParams);

    $ctrl.levels = $ctrl.levels.map(clearCheckedMapper);
    $ctrl.statuses = $ctrl.statuses.map(clearCheckedMapper);

    resetFormState(form);
  };

  /**
   * @description
   * Toggle filter component.
   *
   * @name uiBbNotificationsFilterController#toggleFilter
   * @type {function}
   * @returns {boolean} A status of filter component
   */
  const toggleFilter = () => ($ctrl.isOpen = !$ctrl.isOpen);

  /**
   * @description
   * Check if filter is pristine or not.
   *
   * @name uiBbNotificationsFilterController#isFilterPristine
   * @type {function}
   * @param {object} form Angular form object
   * @returns {boolean} True if filter is pristine
   */
  const isFilterPristine = (form) => form.$pristine;

  Object.assign($ctrl, {
    isOpen: false,
    filterParams,
    levels,
    statuses,
    fromDate,
    toDate,
    onToggleCheckbox,
    onApplyFilter,
    onClearFilter,
    toggleFilter,
    isFilterPristine,
  });
}
