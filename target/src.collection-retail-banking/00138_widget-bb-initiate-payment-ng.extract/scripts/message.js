import { E_AUTH, E_CONNECTIVITY, E_USER, E_UNEXPECTED } from 'lib-bb-model-errors';
import { BreachReport } from './constants';

const accountsErrorMessages = {
  [E_AUTH]: 'account.model.error.auth',
  [E_CONNECTIVITY]: 'account.model.error.connectivity',
  [E_USER]: 'account.model.error.user',
  [E_UNEXPECTED]: 'account.model.error.unexpected',
};

const paymentErrorMessages = {
  [E_AUTH]: 'payment.model.error.auth',
  [E_CONNECTIVITY]: 'payment.model.error.connectivity',
  [E_USER]: 'payment.model.error.user',
  [E_UNEXPECTED]: 'payment.model.error.unexpected',
};

/**
 * @name breachIsShadow
 * @description
 * Returns true if the report is "shadow" and false otherwise
 * @inner
 *
 * @param {object[]} report
 * @returns {boolean}
 */
const breachIsShadow = (report = []) =>
  (report.length === 1 && report[0].shadow) ||
  (report.length > 1 && report.filter(item => item.shadow === true).length === report.length);

/**
 * @name createPaymentLimitsBreachMessage
 * @description
 * Create a view object to show
 * complex message in case of limits breach
 *
 * @inner
 * @type {function}
 * @param {module:lib-bb-model-errors.ModelError} modelError Error from the model
 * @returns {object|null} New payment limits breach error object
 */
const createPaymentLimitsBreachMessage = modelError => (
  modelError[BreachReport.key] ? {
    messageKey: breachIsShadow(modelError[BreachReport.key]) ?
      BreachReport.shadowMessageKey : BreachReport.messageKey,
    breach: true,
    shadow: breachIsShadow(modelError[BreachReport.key]),
    report: modelError[BreachReport.key],
    type: 'danger',
  } : null
);

/**
 * @description
 * Create i18n error key from error model based on error message code
 *
 * @inner
 * @type {function}
 * @param {module:lib-bb-model-errors.ModelError} modelError Error from the model
 * @returns {object} Accounts load error
 */
export const createAccountsLoadErrorMessage = modelError => ({
  messageKey: accountsErrorMessages[modelError.code] || accountsErrorMessages[E_UNEXPECTED],
  type: 'warning',
});

/**
 * @description
 * Create i18n error key from error model based on error message code
 *
 * @inner
 * @type {function}
 * @param {module:lib-bb-model-errors.ModelError} modelError Error from the model
 * @returns {object} New payment order error
 */
export const createPaymentErrorMessage = modelError => (
  createPaymentLimitsBreachMessage(modelError) || {
    messageKey: paymentErrorMessages[modelError.code] || paymentErrorMessages[E_UNEXPECTED],
    type: 'warning',
  }
);
