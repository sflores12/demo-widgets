/**
 * @module ext-bb-budget-ng
 * @extends module:widget-bb-budget-ng.Extension
 */

import i18nModuleKey from 'ui-bb-i18n-ng';
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uiSubstituteErrorKey from 'ui-bb-substitute-error-ng';
import uiBbEmptyStateKey from 'ui-bb-empty-state-ng';
import uiBbLoadingIndicatorKey from 'ui-bb-loading-indicator-ng';
import uiBbBudgetCardNg from 'ui-bb-budget-card-ng';
import uiBbNotificationStripeKey from 'ui-bb-notification-stripe-ng';
import uiBbCurrencyInputNgKey from 'ui-bb-currency-input-ng';
import uiBbModalKey from 'ui-bb-modal-ng';
import uiBbStepperNg from 'ui-bb-stepper-ng';

export const dependencyKeys = [
  i18nModuleKey,
  ngAriaModuleKey,
  uiSubstituteErrorKey,
  uiBbEmptyStateKey,
  uiBbLoadingIndicatorKey,
  uiBbBudgetCardNg,
  uiBbNotificationStripeKey,
  uiBbModalKey,
  uiBbStepperNg,
  uiBbCurrencyInputNgKey,
];

/**
 * @name intents
 * @type {module:lib-bb-extension-intents-ng.ExtensionIntents}
 */
export { default as intents } from './intents';

/**
 * @name helpers
 * @type {module:lib-bb-extension-helpers-ng.ExtensionHelpers}
 */
export { default as helpers } from './helpers';

/**
 * @name events
 * @type {module:lib-bb-extension-events-ng.ExtensionEvents}
 */
export { default as events } from './events';
