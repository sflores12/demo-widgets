/**
 * @module ext-bb-transaction-categories-ng
 *
 * @description
 * Default extension for widget-bb-transaction-categories-ng
 *
 * @requires vendor-bb-angular-ng-aria
 */
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uiBbLoadingIndicatorKey from 'ui-bb-loading-indicator-ng';
import uiBbModalNgKey from 'ui-bb-modal-ng';
import uiBbFormatAmountKey from 'ui-bb-format-amount';
import i18nKey from 'ui-bb-i18n-ng';

import extHelpers from './helpers';

export const dependencyKeys = [
  ngAriaModuleKey,
  uiBbLoadingIndicatorKey,
  uiBbModalNgKey,
  uiBbFormatAmountKey,
  i18nKey,
];

export const hooks = {};

export const helpers = extHelpers;

export const events = {};
