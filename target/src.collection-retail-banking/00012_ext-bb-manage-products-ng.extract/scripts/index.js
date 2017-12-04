/**
 * @module ext-bb-manage-products-ng
 *
 * @description
 * Default extension for widget-bb-manage-products-ng
 *
 * @requires vendor-bb-angular-ng-aria
 */
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uiBbFormatAmount from 'ui-bb-format-amount';
import uiBbLoadingIndicatorKey from 'ui-bb-loading-indicator-ng';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import uiBbElementDimensions from 'ui-bb-element-dimensions-ng';
import uiBbNotificationStripeKey from 'ui-bb-notification-stripe-ng';
import i18nNgKey from 'ui-bb-i18n-ng';
import uiBbFocus from 'ui-bb-focus-ng';
import uiBbEmptyStateKey from 'ui-bb-empty-state-ng';

import extHelpers from './helpers';
import * as extHooks from './hooks';

export const dependencyKeys = [
  ngAriaModuleKey,
  uiBbFormatAmount,
  uiBbLoadingIndicatorKey,
  uiBbSubstituteErrorNgKey,
  uiBbElementDimensions,
  uiBbNotificationStripeKey,
  i18nNgKey,
  uiBbFocus,
  uiBbEmptyStateKey,
];

export const hooks = extHooks;
export const helpers = extHelpers;

export const events = {};
