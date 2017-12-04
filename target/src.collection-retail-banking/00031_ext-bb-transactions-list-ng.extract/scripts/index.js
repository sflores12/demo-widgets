/**
 * @module ext-bb-transactions-list-ng
 *
 * @description
 * Extention used to show list of transactions that match certain criteria,
 * for instance - specific category, start and end date, productId, etc.
 * It remains hidden until category search is being executed.
 *
 * @requires vendor-bb-angular-ng-aria
 * @example
 * <!-- payment widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-transactions-list-ng</value>
 * </property>
 */
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uiBbLoadingIndicatorKey from 'ui-bb-loading-indicator-ng';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import uibAccordionKey from 'vendor-bb-uib-accordion';
import uiBbFormatAmountKey from 'ui-bb-format-amount';
import uiBbLoadMoreKey from 'ui-bb-load-more-ng';
import i18nNgKey from 'ui-bb-i18n-ng';
import uiBbEmptyStateKey from 'ui-bb-empty-state-ng';
import uiBbDateLabelFilterModuleKey from 'ui-bb-date-label-filter-ng';

import extHelpers from './helpers';
import * as extHooks from './hooks';

/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-transactions-ng
 */
export const hooks = extHooks;

export const helpers = extHelpers;

export const events = {};

export const dependencyKeys = [
  ngAriaModuleKey,
  uiBbLoadingIndicatorKey,
  uiBbSubstituteErrorNgKey,
  uibAccordionKey,
  uiBbFormatAmountKey,
  uiBbLoadMoreKey,
  i18nNgKey,
  uiBbEmptyStateKey,
  uiBbDateLabelFilterModuleKey,
];
