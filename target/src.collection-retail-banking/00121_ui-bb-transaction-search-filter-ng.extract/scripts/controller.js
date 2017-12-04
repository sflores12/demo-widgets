export default function uiBbTransactionSearchFilterController() {
  /**
   * @name uiBbTransactionSearchFilterController
   * @ngkey uiBbTransactionSearchFilterController
   * @type {object}
   * @description TransactionSearch filter controller
   */
  const $ctrl = this;

   /**
   * @description
   * state object.
   *
   * @name uiBbTransactionSearchFilterController#state
   * @type {object}
   */
  const state = {
    isFilterOpen: false,
  };

  /**
   * @description
   * `filterParams` parameters object.
   *
   * @name uiBbTransactionSearchFilterController#filterParams
   * @type {object}
   */
  const filterParams = {
    query: '',
    amountFrom: null,
    amountTo: null,
    currency: null,
    dateRange: {
      startDate: null,
      endDate: null,
    },
    creditDebitIndicator: {
      value: null,
      credit: 'CRDT',
      debit: 'DBIT',
    },
  };

  const calendarPopupConfig = { minDate: null, maxDate: new Date(), maxMode: 'year' };

  /**
   * @description
   * Toggle filter component.
   *
   * @public
   * @name uiBbTransactionSearchFilterController#toggleFilter
   * @type {function}
   * @returns {boolean} A status of filter component
   */
  const toggleFilter = () => (state.isFilterOpen = !state.isFilterOpen);

  /**
   * @description
   * Normalize date to required format.
   *
   * @inner
   * @name uiBbTransactionSearchFilterController#getNormalizedDate
   * @type {function}
   * @returns {Date|null} Date object or null
   */
  const getNormalizedDate = (date) => {
    if (date === null || date === undefined) {
      return null;
    }
    const userOffset = date.getTimezoneOffset() * 60000;
    return `${new Date(date - userOffset).toISOString().slice(0, 10)}`;
  };

  /**
   * @description
   * Normalize search query param.
   *
   * @inner
   * @name uiBbTransactionSearchFilterController#normalizeQueryParam
   * @type {function}
   * @returns {Object|null} Object or null
   */
  const normalizeQueryParam = param => (param === '' ? null : param);

  /**
   * @description
   * Get all filter params.
   *
   * @inner
   * @name uiBbTransactionSearchFilterController#getParams
   * @type {function}
   * @returns {Promise} A Promise that adds values to a given argument
   */
  const getParams = () => Object.assign({}, {
    query: normalizeQueryParam(filterParams.query),
    fromDate: getNormalizedDate(filterParams.dateRange.startDate),
    toDate: getNormalizedDate(filterParams.dateRange.endDate),
    amountFrom: filterParams.amountFrom,
    amountTo: filterParams.amountTo,
    currency: filterParams.currency,
    creditDebitIndicator: filterParams.creditDebitIndicator.value,
  });

  /**
   * @description
   * Reset form state method.
   *
   * @inner
   * @name uiBbTransactionSearchFilterController#resetFormState
   * @type {function}
   */
  const resetFormState = form => {
    if (form) {
      form.$setUntouched();
      form.$setPristine();
    }
  };

  /**
   * @description
   * Call filter method.
   *
   * @name uiBbTransactionSearchFilterController#onApplyFilter
   * @type {function}
   */
  const onApplyFilter = () => {
    $ctrl.onFilter({ params: getParams() });
  };

  /**
   * @description
   * Reset filter parameters.
   *
   * @name uiBbTransactionSearchFilterController#onClearFilter
   * @type {function}
   */
  const onClearFilter = (form) => {
    Object.assign(filterParams, {
      amountFrom: null,
      amountTo: null,
      currency: null,
      creditDebitIndicator: {
        value: null,
        credit: 'CRDT',
        debit: 'DBIT',
      },
      dateRange: {
        startDate: null,
        endDate: null,
      },
    });

    onApplyFilter(form);
    resetFormState(form);
  };

  /**
   * @description
   * Validates the key pressed in the number input field.
   * Prevents the event if the key is an invalid one (not a number)
   * Allows arrow keys
   *
   * @public
   * @name uiBbTransactionSearchFilterController#validateAmountKeypress
   * @type {function}
   * @param {KeyboardEvent} event - the browser event
   */
  const validateAmountKeypress = (event) => {
    const validKey = event.metaKey // ctrl/alt/cmd
      || event.which <= 0 // arrow keys
      || event.which === 8 // delete key
      || /[0-9]/.test(String.fromCharCode(event.which)); // numbers

    if (!validKey) {
      event.preventDefault();
    }
  };

  /**
   * @description
   * Validates the pasted value in the input field.
   * Prevents the event if the value is an invalid one (not a number)
   *
   * @public
   * @name uiBbTransactionSearchFilterController#validateAmountPaste
   * @type {function}
   * @param {KeyboardEvent} event - the browser event
   */
  const validateAmountPaste = (event) => {
    const pasteData = event.clipboardData.getData('text/plain');
    if (pasteData.match(/[^0-9]/)) {
      event.preventDefault();
    }
  };

  /**
   * @description
   * Check if form state is pristine or invalid.
   *
   * @public
   * @name uiBbTransactionSearchFilterController#isFormValid
   * @type {function}
   */
  const isFormValid = (form) => (!form || form.$pristine || form.$invalid);

  Object.assign($ctrl, {
    state,
    calendarPopupConfig,
    filterParams,
    onApplyFilter,
    onClearFilter,
    toggleFilter,
    isFormValid,
    validateAmountKeypress,
    validateAmountPaste,
  });
}
