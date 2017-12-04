/**
 * @module ext-bb-action-recipes-ng
 *
 * @description
 * Action Recipes default extension.
 *
 * @example
 * <!-- messages widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bb-action-recipes-ng</value>
 * </property>
 */

import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import i18nKey from 'ui-bb-i18n-ng';
import uiBbAccountSelector from 'ui-bb-account-selector';
import uiBbDropdownSelectKey from 'ui-bb-dropdown-select';
import uiBbCurrencyInputNgKey from 'ui-bb-currency-input-ng';
import uiBbFormatAmountNgKey from 'ui-bb-format-amount';
import uiBbLoadingIndicatorKey from 'ui-bb-loading-indicator-ng';
import uiBbConfirmNg from 'ui-bb-confirm-ng';
import uiBbSwitcherNg from 'ui-bb-switcher-ng';

import extHelpers from './helpers';
import extHooks from './hooks';
import extEvents from './events';
import '../styles/index.css';

export const dependencyKeys = [
  ngAriaModuleKey,
  uiBbSubstituteErrorNgKey,
  i18nKey,
  uiBbAccountSelector,
  uiBbDropdownSelectKey,
  uiBbCurrencyInputNgKey,
  uiBbFormatAmountNgKey,
  uiBbLoadingIndicatorKey,
  uiBbConfirmNg,
  uiBbSwitcherNg,
];

export const hooks = extHooks;

export const helpers = extHelpers;

export const events = extEvents;
