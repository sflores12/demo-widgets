/**
 * @module ext-bb-initiate-payment-ng
 *
 * @description
 * Default extension for widget-bb-initiate-payment-ng
 */
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import bbAngularNgMessagesKey from 'vendor-bb-angular-ng-messages';
import uibPopoverKey from 'vendor-bb-uib-popover';
import ngSanitizeKey from 'vendor-bb-angular-sanitize';
import vendorBbUibAlertKey from 'vendor-bb-uib-alert';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import i18nNgKey from 'ui-bb-i18n-ng';
import uiBbAccountSelector from 'ui-bb-account-selector';
import uiBbCurrencyInputNgKey from 'ui-bb-currency-input-ng';
import uiBbParentResponsivenessNg from 'ui-bb-parent-responsiveness-ng';
import uiBbCreditSuggestNgKey from 'ui-bb-credit-suggest-ng';
import uiBbSwitcherNgKey from 'ui-bb-switcher-ng';
import uiBbExpandableNg from 'ui-bb-expandable-ng';
import uiBbCalendarPopupNgKey from 'ui-bb-calendar-popup-ng';
import uiBbNumberInputNgKey from 'ui-bb-number-input-ng';
import uiBbAccountCard from 'ui-bb-account-card';
import uiBbConfirmNgKey from 'ui-bb-confirm-ng';
import uiBbLoadingOverlayKey from 'ui-bb-loading-overlay-ng';
import uiBbCharCounterNgKey from 'ui-bb-char-counter-ng';

import * as extHooks from './hooks';
import extHelpers from './helpers';

import '../styles/index.css';

export const dependencyKeys = [
  ngAriaModuleKey,
  bbAngularNgMessagesKey,
  uibPopoverKey,
  ngSanitizeKey,
  vendorBbUibAlertKey,
  uiBbSubstituteErrorNgKey,
  i18nNgKey,
  uiBbAccountSelector,
  uiBbCurrencyInputNgKey,
  uiBbParentResponsivenessNg,
  uiBbCreditSuggestNgKey,
  uiBbSwitcherNgKey,
  uiBbExpandableNg,
  uiBbCalendarPopupNgKey,
  uiBbNumberInputNgKey,
  uiBbAccountCard,
  uiBbConfirmNgKey,
  uiBbLoadingOverlayKey,
  uiBbCharCounterNgKey,
];

export const hooks = extHooks;

export const helpers = extHelpers;

export const events = {};
