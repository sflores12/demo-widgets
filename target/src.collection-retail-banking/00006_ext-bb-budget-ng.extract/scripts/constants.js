/**
 * @name Properties
 *
 * @type {object}
 * @description
 * Set of extension specific properties constants which contains
 * pairs of key and default values where key is the property
 * name and the defaultValue is it's value by default
 */
export const Preferences = {
  /**
   * @name BUDGET_CARD_FILL_DIRECTION
   *
   * @type {object}
   * @description Property which defines a direction of filling the budgets
   * ui component (is it clockwise or anti-clockwise)
   */
  BUDGET_CARD_FILL_DIRECTION: {
    key: 'budgetCard.fillDirection',
    defaultValue: false,
  },
  /**
   * @name BUDGET_CARD_VALUES_DISPLAY_TYPE
   *
   * @type {object}
   * @description Property which defines if for spent value persentage
   * or actual monetary amount is used
   */
  BUDGET_CARD_VALUES_DISPLAY_TYPE: {
    key: 'budgetCard.percentage',
    defaultValue: false,
  },
  /**
   * @name BUDGET_CARD_SAFE_ZONE_LIMIT
   *
   * @type {object}
   * @description Property defines a percentage (0-100) from which the bar of a
   * budget card changes color (goes out of safe zone and e.g. color
   * is changed from green to yellow)
   */
  BUDGET_CARD_SAFE_ZONE_LIMIT: {
    key: 'budgetCard.safeZoneLimit',
    defaultValue: 80,
  },

  /**
   * @name BUDGETS_DEFAULT_CURRENCY_CODE
   *
   * @type {object}
   * @deprecated
   * @description Temporary created property to store default currency for budgets create.
   * Will be replaced by more suitable way of getting it.
   */
  BUDGETS_DEFAULT_CURRENCY_CODE: {
    key: 'budgets.currency.default',
    defaultValue: 'EUR',
  },
  /**
   * @name BUDGETS_DEFAULT_CURRENCIES_LIST
   *
   * @type {object}
   * @deprecated
   * @description Temporary created property to store avaliable currencies list.
   * Will be replaced by more suitable way of getting them.
   */
  BUDGETS_DEFAULT_CURRENCIES_LIST: {
    key: 'budgets.currency.avaliable',
    defaultValue: ['EUR', 'USD'],
  },

  /**
   * @name NOTIFICATION_DISMISS_TIME
   *
   * @type {object}
   * @description notifications timeout in seconds
   */
  NOTIFICATION_DISMISS_TIME: {
    key: 'budgets.notifications.dismissAfter',
    defaultValue: 3,
  },
};

/**
 * @name TemplateIds
 * @description
 * A set of constants to define used template id`s
 *
 * @type {object}
 */
export const TemplateIds = {
  LIST_TEMPLATE_ID: '#widget-bb-budget-ng/list.html',
  FORM_CREATE_TEMPLATE_ID: '#widget-bb-budget-ng/form-create.html',
  FORM_UPDATE_TEMPLATE_ID: '#widget-bb-budget-ng/form-update.html',
};

/**
 * @name ClassNames
 * @description
 * A set of constants which defines class names used
 * within the extension
 *
 * @type {object}
 */
export const ClassNames = {
  CATEGORY_CLASSNAME_PREFIX: 'bb-transaction-category bb-transaction-category-',
  UNCATEGORIZED: 'uncategorized',
};

/**
 * @name CURRENT_DATE_OBJECT
 *
 * @type {Date}
 * @description Current date object
 * @inner
 */
const CURRENT_DATE_OBJECT = new Date();

/**
 * @name CURRENT_YEAR
 *
 * @type {number}
 * @description Current year
 * @inner
 */
const CURRENT_YEAR = CURRENT_DATE_OBJECT.getFullYear();

/**
 * @name CURRENT_MONTH
 *
 * @type {number}
 * @description Current month
 * @inner
 */
const CURRENT_MONTH = CURRENT_DATE_OBJECT.getMonth();

/**
 * @name DefaultPeriod
 *
 * @type {object}
 * @description A set of constants for default budgeting period
 */
export const DefaultPeriod = {

  /**
   * @name DEFAULT_PERIOD_START
   *
   * @type {number}
   * @description First day in the current month
   */
  startDate: new Date(CURRENT_YEAR, CURRENT_MONTH, 1),

  /**
   * @name DEFAULT_PERIOD_END
   *
   * @type {number}
   * @description Last day in the current month
   */
  endDate: new Date(CURRENT_YEAR, CURRENT_MONTH + 1, 0),

};

/**
 * @name BudgetStatus
 *
 * @type {object}
 * @description A set of constants which defines the color level
 * of the chart
 */
export const BudgetStatus = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
};

/**
 * @name ErrorCodes
 *
 * @type {object}
 * @description A set of constants which defines ui error codes
 * of the extension
 */
export const ErrorCodes = {
  EMPTY_CATEGORY: 'budget.errors.category.empty',
  INSUFFICIENT_LIMIT: 'budget.errors.limit.insufficient',
  CREATE_ERROR: 'budget.errors.create.error',
  EDIT_ERROR: 'budget.errors.edit.error',
};
