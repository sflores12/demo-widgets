import {
  Preferences,
  TemplateIds,
  ClassNames,
  BudgetStatus,
  DefaultPeriod,
  ErrorCodes,
} from './constants';

const templates = {
  list: TemplateIds.LIST_TEMPLATE_ID,
  formCreate: TemplateIds.FORM_CREATE_TEMPLATE_ID,
  formUpdate: TemplateIds.FORM_UPDATE_TEMPLATE_ID,
};

/**
 * @description
 * Converts category name into category CSS icon classes
 *
 * @name nameToIconClass
 * @type {function}
 * @inner
 * @param {string} name Category name
 * @returns {string}
 */
const nameToIconClass = (name) =>
  `${ClassNames.CATEGORY_CLASSNAME_PREFIX}${name.toLowerCase()
    .replace(/\W/g, '-').replace(/-{2,}/g, '-')}`;

/**
 * @name getIconClass
 *
 * @type {function}
 * @description A helper to transform icon's name
 * to an actual class name, which is going to be used to show a transactions
 *
 * @param {string} iconName name of the icon
 * @returns {stirng} className to be used within a template
 */
const getIconClass = (iconName) => nameToIconClass(iconName || ClassNames.UNCATEGORIZED);

/**
 * @name budgetFromModel
 *
 * @type {function}
 * @inner
 * @description Function to process budget model item in order
 * to have it suitable for the usage within the actual template
 *
 * @param {object} modelItem item from the state container to be transformed
 * @returns {object} transformedModelItem item to be used in an extension
 */
const budgetFromModel = (modelItem = {}) => Object.assign({
  iconClass: getIconClass(modelItem.budgetIcon || modelItem.categoryName),
}, modelItem);

/**
 * @name isDefined
 *
 * @type {function}
 * @inner
 * @description A helper to check if item is NOT undefined and is NOT a null
 *
 * @param {any} value - an item to be assessed
 * @returns {boolean} true in case an item is not undefined and is not null
 */
const isDefined = value => value !== undefined && value !== null;

/**
 * @name isRequired
 *
 * @type {function}
 * @description A helper to check if item is required by the model
 * @inner
 * @param {object} valueObj - an item to be assessed
 * @returns {boolean} true in case an item is not undefined and is not null
 */
const isRequired = (valueObj = {}) => valueObj.required === true;

/**
 * @name hasCurrencyCode
 *
 * @type {function}
 * @description A helper to check if item has currency code property
 * @inner
 * @param {object} value - an item to be assessed
 * @returns {boolean} true in case an item has currency code property
 */
const hasCurrencyCode = (item = {}) => isDefined(item.currencyCode);

/**
 * @name shouldHaveCurrencyCode
 *
 * @type {function}
 * @description A helper to check if according to schema property should
 * have a currency code defined
 * @inner
 * @param {object} schema - a schema item to be used
 * @param {any} preferenceName - a preference name to be verified
 * @returns {boolean} true in case an item should have currency code property
 */
const shouldHaveCurrencyCode = (schema = {}, preferenceName = '') =>
  isDefined(schema[preferenceName])
  && isDefined(schema[preferenceName].properties)
  && isDefined(schema[preferenceName].properties.currencyCode);

export default ({ widget, stateContainer, router, getRule }) => {
  let isBudgetFormActive = router.getRoute() === 'form';
  let isFormDirty = false;
  let isCancelConfirmationActive = false;
  let isDeleteConfirmationActive = false;
  let deleteMethod = null;
  let selectedBudget = {};

  /**
   * @name currentBudgets
   *
   * @type {function}
   * @description State selector for current budgets
   * @returns {Array} budgets transformed for the view
   */
  const currentBudgets = stateContainer.createSelector(
    state => state.budgets.map(budgetFromModel)
  );

  /**
   * @name budgetSchema
   *
   * @type {function}
   * @description State selector for budget schema
   */
  const budgetSchema = stateContainer.createSelector(
    state => state.schema
  );

  /**
   * @name categoryNamesOutOfSchema
   *
   * @type {function}
   * @description State selector for budget categories enum
   */
  const categoryNamesOutOfSchema = stateContainer.createSelector(
    state => state.schema.categoryName.enum
  );

  /**
   * @name getNotifications
   *
   * @type {function}
   * @description Selector for notifications from the widget state
   */
  const getNotifications = stateContainer.createSelector(
    state => state.notifications || []
  );

  /**
   * @name updateNotifications
   *
   * @type {function}
   * @description Function to set notifications in the state
   * @param {object} notifications notifications object
   */
  const updateNotifications = stateContainer.createAction((current, notifications) => ({
    ...current,
    notifications,
  }));

  /**
   * @name preferences
   *
   * @inner
   * @type {object}
   * @description Set of preferences relevant for extensions (including default values)
   */
  const preferences = (() => {
    let fillDirection = widget.getBooleanPreference(
      Preferences.BUDGET_CARD_FILL_DIRECTION.key
    );
    fillDirection = !isDefined(fillDirection)
      ? Preferences.BUDGET_CARD_FILL_DIRECTION.defaultValue
      : fillDirection;

    let percentage = widget.getBooleanPreference(
      Preferences.BUDGET_CARD_VALUES_DISPLAY_TYPE.key
    );
    percentage = !isDefined(percentage)
      ? Preferences.BUDGET_CARD_VALUES_DISPLAY_TYPE.defaultValue
      : percentage;

    let safeZoneLimit = widget.getLongPreference(
      Preferences.BUDGET_CARD_SAFE_ZONE_LIMIT.key
    );
    safeZoneLimit = !isDefined(safeZoneLimit)
      ? Preferences.BUDGET_CARD_SAFE_ZONE_LIMIT.defaultValue
      : safeZoneLimit;

    let defaultCurrency = widget.getStringPreference(
      Preferences.BUDGETS_DEFAULT_CURRENCY_CODE
    );
    defaultCurrency = !isDefined(defaultCurrency)
      ? Preferences.BUDGETS_DEFAULT_CURRENCY_CODE.defaultValue
      : defaultCurrency;

    let notificationDismissTime = widget.getLongPreference(
      Preferences.NOTIFICATION_DISMISS_TIME.key
    );
    notificationDismissTime = !isDefined(notificationDismissTime)
      ? Preferences.NOTIFICATION_DISMISS_TIME.defaultValue
      : notificationDismissTime;

    return {
      fillDirection,
      percentage,
      safeZoneLimit,
      defaultCurrency,
      notificationDismissTime,
    };
  })();

 /**
  * @name pushNotification
  * @type {function}
  * @description Helper to push new notification into the list
  * @inner
  * @param {object} notification notification to be displayed
  */
  const pushNotification = (notification) => {
    if (!isDefined(notification)) {
      return;
    }
    const notifications = getNotifications();
    notifications.push(notification);
    updateNotifications(notifications);
  };

  /**
   * @name handleExtensionError
   *
   * @type {function}
   * @description Internal for extension UI errors handler
   * @param {Error} err error code to be transformed to the message
   */
  const handleExtensionError = (err) => {
    pushNotification({ message: err.message, level: 'danger' });
    throw err;
  };

  /**
   * @name createModelHandlers
   *
   * @type {function}
   * @description Method to create a set of handlers for saving function
   * This method can be used to add extra fields
   * @param {object} schema budgetSchema to be used for validation if necessary
   * @returns {object} set of handlers for form fields
   * to be transformed and passed to the model
   */
  const createModelHandlers = (schema = {}) => ({
    /**
     * @name id
     *
     * @type {function}
     * @description Handler for id property of the model
     * @param {object} formObj form state object
     * @return {string} id if it's defined
     */
    id: formObj => formObj.id,

    /**
     * @name budgetName
     *
     * @type {function}
     * @description Handler for budgetName property of the model
     * @param {object} formObj form state object
     * @return {string} budget name if it's defined, category name if not
     */
    budgetName: formObj => (
      isRequired(schema.budgetName) && !isDefined(formObj.budgetName)
        ? formObj.categoryName
        : formObj.budgetName
    ),

    /**
     * @name budgetName
     *
     * @type {function}
     * @description Handler for categoryName property of the model
     * @throws {Error} if category is not defined
     * @param {object} formObj form state object
     * @returns {string} category name from the form state
     */
    categoryName: formObj => {
      if (!isDefined(formObj.categoryName)) {
        throw new Error(ErrorCodes.EMPTY_CATEGORY);
      }
      return formObj.categoryName;
    },

    /**
     * @name period
     *
     * @type {function}
     * @description Handler for period property of the model
     * @param {object} formObj form state object
     * @returns {object} period from the form state or
     * defaultPeriod constant defined in the extension
     */
    period: formObj => (isDefined(formObj.period) ? formObj.period : DefaultPeriod),

    /**
     * @name spendingLimit
     *
     * @type {function}
     * @description Handler for spenidng limit
     * @throws {Error} if limit is not an integer greater then 0
     * @param {object} formObj form state object
     * @returns {object} limit object with an amount and currency
     * if currecy is not defined default one is used.
     */
    spendingLimit: formObj => {
      const limit = formObj.spendingLimit || {};
      // map form properties into properties expected by currency input
      Object.assign(limit, {
        value: limit.amount,
        currency: limit.currencyCode,
      });

      if (shouldHaveCurrencyCode(schema, 'spendingLimit') && !hasCurrencyCode(limit)) {
        Object.assign(limit, { currencyCode: preferences.defaultCurrency });
      }

      // get amount from currency input component object
      const amount = parseInt(limit.whole, 10);
      if (!amount || amount <= 0) {
        throw new Error(ErrorCodes.INSUFFICIENT_LIMIT);
      }

      Object.assign(limit, { amount });
      return { currencyCode: limit.currencyCode, amount };
    },
  });

  /**
   * @name isStateValid
   *
   * @type {function}
   * @inner
   * @description Checks validity of the state object
   * @param {object} formObj form state object
   * @returns {boolean}
   */
  const isStateValid = formObj => {
    try {
      createModelHandlers(budgetSchema()).spendingLimit(formObj);
      return true;
    } catch (_) {
      return false;
    }
  };

  return {
    /**
     * @name initEditingForm
     *
     * @type {function}
     * @description Sets initial step on form init
     * @param {object} formObj form state object
     */
    initEditingForm: (formObj) => {
      isFormDirty = false;
      Object.assign(formObj, { currentStepIndex: 0 });
    },

    /**
     * @name cancelConfirmation
     *
     * @type {function}
     * @description Cancels confirmation dialog
     */
    cancelConfirmation: () => {
      isCancelConfirmationActive = false;
      isDeleteConfirmationActive = false;
    },

    /**
     * @name cancelEdit
     *
     * @type {function}
     * @description Cancels editing form
     * @param {?Boolean} force If set to true, check if there were some changes will be skipped.
     * Default false, which means that, in case there were some changes, another dialog with
     * cancel confirmation will appear
     */
    cancelEdit: (force = false) => {
      // check if additional confirmation is needed
      if (!force && isFormDirty) {
        isCancelConfirmationActive = true;
        return;
      }

      isCancelConfirmationActive = false;
      isBudgetFormActive = false;
    },

    /**
     * @name onStepChange
     *
     * @type {function}
     * @description Updates for state object on step change in the view
     * @param {object} formObj form state object
     */
    onStepChange: (formObj) => (ctrl) => {
      Object.assign(formObj, { currentStepIndex: ctrl.getCurrentIndex() });
    },

    /**
     * @name allowUpdate
     *
     * @type {function}
     * @description Checks if the form is ready (valid) for update
     * @param {object} formObj form state object
     * @returns {boolean}
     */
    allowUpdate: formObj => {
      // preserve original state
      const originalLimit = parseInt(formObj.spendingLimit.whole, 10);
      if (!formObj.originalLimit) {
        Object.assign(formObj, { originalLimit });
      }

      isFormDirty = originalLimit !== formObj.originalLimit;
      return isFormDirty && isStateValid(formObj);
    },

    /**
     * @name allowNext
     *
     * @type {function}
     * @description Checks validity of current step
     * @param {object} formObj form state object
     * @returns {boolean}
     */
    allowNext: (formObj) => {
      if ((formObj.currentStepIndex || 0) < 1) {
        return formObj.categoryName !== undefined;
      }

      return isStateValid(formObj);
    },

    /**
     * @name budgets
     *
     * @type {function}
     * @description Returns budgets array
     * @returns {array} budget items array
     */
    get budgets() {
      return currentBudgets();
    },

    /**
     * @name isEmpty
     *
     * @type {function}
     * @description A getter to define if budgets array is empty
     * @returns {boolean} true if budgets array is empty
     */
    get isEmpty() {
      return this.budgets && !this.budgets.length;
    },

    /**
     * @name defaultCurrency
     *
     * @type {function}
     * @description Returns extension specific preference which
     * defines default currency
     * @returns {string} Default currency code
     */
    get defaultCurrency() {
      return preferences.defaultCurrency;
    },

    /**
     * @name safeZoneLimit
     *
     * @type {function}
     * @description Returns extension specific preference which
     * defines at which point budgetCard bar should change a color
     * @returns {number} 0-100 number defining breakpoint for budget items
     */
    get safeZoneLimit() {
      return preferences.safeZoneLimit;
    },

    /**
     * @name isClockwisefillDirection
     *
     * @type {function}
     * @description Returns extension specific preference which
     * defines if a budget ui component should be filled in or emptied out
     * @returns {boolean} true in case it's a clockwise direction
     */
    get isClockwisefillDirection() {
      return preferences.fillDirection;
    },

    /**
     * @name defaultPeriod
     *
     * @type {function}
     * @description Returns default budget period
     * @returns {{startDate: Date, endDate:Date}}
     */
    get defaultPeriod() {
      return DefaultPeriod;
    },

    /**
     * @name listTemplate
     *
     * @type {function}
     * @description Returns listTemplate id
     * @returns {string} returns list template id
     */
    get listTemplate() {
      return templates.list;
    },

    /**
     * @name formCreateTemplate
     *
     * @type {function}
     * @description Returns formCreate id
     * @returns {string} Create form template id
     */
    get formCreateTemplate() {
      return templates.formCreate;
    },

    /**
     * @name formLimitTemplate
     *
     * @type {function}
     * @description Returns formUpdate template id
     * @returns {string} Update form template id
     */
    get formUpdateTemplate() {
      return templates.formUpdate;
    },

    /**
     * @name isFormActive
     *
     * @type {function}
     * @description A getter of the modal window state
     * @returns {boolean} true if form is active
     */
    get isFormActive() {
      return isBudgetFormActive;
    },

    /**
     * @name isFormActive
     *
     * @type {function}
     * @description A setter for isFormActive, which is using router
     * to close the form
     * @param {boolean} value - new value of the state,
     * being used to define if we shall navigate to list
     */
    set isFormActive(value) {
      isBudgetFormActive = !!value;
    },

    /**
     * @name isFormDirty
     *
     * @type {function}
     * @description A getter of the state of the form
     * @returns {boolean} true if form is changed
     */
    get isFormDirty() {
      return isFormDirty;
    },

    /**
     * @name isFormActive
     *
     * @type {function}
     * @description A setter for form state
     * @param {boolean} value new value of the state,
     * being used to define if the form data has been changed
     */
    set isFormDirty(value) {
      isFormDirty = !!value;
    },

    /**
     * @name isConfirmationActive
     *
     * @type {function}
     * @description A getter of the confirmation modal window state
     * @returns {boolean} true if confirmation modal is active
     */
    get isConfirmationActive() {
      return isCancelConfirmationActive;
    },

    /**
     * @name isConfirmationActive
     *
     * @type {function}
     * @description A setter for the confirmation modal window state
     * @param {boolean} value new value of the state,
     * which will change confirmation modal apperance
     */
    set isConfirmationActive(value) {
      isCancelConfirmationActive = !!value;
    },

    /**
     * @name selectedBudget
     *
     * @type {function}
     * @description A getter of the budget item selected to be deleted
     * @returns {object}
     */
    get selectedBudget() {
      return selectedBudget;
    },

    /**
     * @name isDeleteConfirmationActive
     *
     * @type {function}
     * @description A getter of the delete confirmation modal window state
     * @returns {boolean} true if delete confirmation modal is active
     */
    get isDeleteConfirmationActive() {
      return isDeleteConfirmationActive;
    },

    /**
     * @name isDeleteConfirmationActive
     *
     * @type {function}
     * @description A setter for the delete confirmation modal window state
     * @param {boolean} value new value of the state,
     * which will change delete confirmation modal apperance
     */
    set isDeleteConfirmationActive(value) {
      isDeleteConfirmationActive = !!value;
    },

    /**
     * @name handleChanging
     *
     * @type {function}
     * @description Function to initiate create/edit action
     * @param {function} changeMethod function to be called
     * @param {any} item to be passed to the saving function
     * @returns {any} changing method result
     */
    handleChanging: function handleChanging(changeMethod, item) {
      isBudgetFormActive = true;
      return changeMethod(item);
    },

    /**
     * @name handleSaving
     *
     * @type {function}
     * @description Handler for saving an item
     * @param {function} saveMethod save method to be called
     * @param {object} formObj - an item to be transformed and saved
     * @returns {any} saving method result
     */
    handleSaving: function handleSaving(saveMethod, formObj) {
      isBudgetFormActive = false;
      return saveMethod(this.formToModelFields(formObj));
    },

    /**
     * @name startDelete
     *
     * @type {function}
     * @description Function that prepares everything for budget deletion
     * and triggers confirmation dialog
     * @param {function} method function to be called if delete is confirmed
     * @param {any} item to be passed to the delete function
     */
    startDelete: function startDelete(method, item) {
      isDeleteConfirmationActive = true;
      selectedBudget = item;
      deleteMethod = method;
    },

    /**
     * @name handleDelete
     *
     * @type {function}
     * @description Function to initiate delete action
     * @returns {any} delete method result
     */
    handleDelete: function handleDelete() {
      isDeleteConfirmationActive = false;
      return deleteMethod(selectedBudget);
    },

    /**
     * @name transactionsCategoryNames
     *
     * @type {function}
     * @description Returns categories names being provided by data module schema
     * @returns {Array<string>} categories array
     */
    get transactionsCategoryNames() {
      return categoryNamesOutOfSchema();
    },

    /**
     * @name isPersentageUsed
     *
     * @type {function}
     * @description Returns extension specific preference which
     * defines if a percentage is used to show spent amount
     * @returns {boolean} true if percentage value is shown
     */
    get isPersentageUsed() {
      return preferences.percentage;
    },

    /**
     * @name currentDate
     *
     * @type {function}
     * @description Returns the current date
     * @returns {object} new Date object
     */
    get currentDate() {
      return new Date();
    },

    /**
     * @name notificationDismissTime
     *
     * @type {function}
     * @description Returns notifications dismissing time preference value
     * @returns {number} time to dismiss notification
     */
    get notificationDismissTime() {
      return preferences.notificationDismissTime;
    },

    /**
     * @name setChartColor
     *
     * @type {function}
     * @description A helper method used to map the chart percentage to the
     * chart color level
     * @param {number} percentage - percentage of the chart
     * @returns {string} chart color level
     */
    setChartColor: percentage => {
      if (percentage < 80 && percentage >= 0) {
        return BudgetStatus.SUCCESS;
      }
      if (percentage >= 80 && percentage < 100) {
        return BudgetStatus.WARNING;
      }
      return BudgetStatus.DANGER;
    },

    /**
     * @name categorySelectHandler
     *
     * @type {function}
     * @description A helper method used to handle category selection
     * by clicking on surrounding wrapper
     * @param {string} category New category
     * @param {object} formObj form state object
     */
    categorySelectHandler: (category, formObj) => {
      isFormDirty = true;
      Object.assign(formObj, { categoryName: category });
    },

    /**
     * @name formToModelFields
     *
     * @type {function}
     * @description A function to process form object before it gets passed to the model.
     * @param {object} form - item to be transformed
     * @returns {object} modelItem
     */
    formToModelFields: (form = {}) => {
      const modelHandlers = createModelHandlers(budgetSchema());
      try {
        return Object.keys(modelHandlers)
          .reduce((acc, prop) => {
            const transformedValue = modelHandlers[prop](form);
            return isDefined(transformedValue)
              ? Object.assign(acc, { [prop]: transformedValue })
              : acc;
          }, {});
      } catch (err) {
        handleExtensionError(err);
        return null;
      }
    },

    /**
     * @name shiftNotification
     *
     * @type {function}
     * @description Helper to remove notification from the list
     * @param {object} notification
     * @param {array} notificationsList
     */
    shiftNotification: () => {
      const notifications = getNotifications();
      notifications.shift();
      updateNotifications(notifications);
    },

    /**
     * @name getSymbol
     *
     * @type {function}
     * @description Converts currency code into currency symbol
     * @param {string} code
     * @returns {string}
     */
    getSymbol: (code) => (getRule(code) || {}).symbol || code,
    getIconClass,
  };
};
