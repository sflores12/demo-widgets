/**
 * @module ext-bb-transactions-extended-ng
 *
 * @description
 * Extended extension for transactions widget.
 *
 * @requires vendor-bb-uib-accordion
 * @requires ui-bb-format-amount
 *
 * @example
 * <!-- payment widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-transactions-extended-ng</value>
 * </property>
 */
import uibAccordionKey from 'vendor-bb-uib-accordion';
import uiBbFormatAmountKey from 'ui-bb-format-amount';
import uiBbLoadingIndicatorKey from 'ui-bb-loading-indicator-ng';
import i18nNgKey from 'ui-bb-i18n-ng';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uiBbTransactionSearchFilterKey from 'ui-bb-transaction-search-filter-ng';
import uiBbLoadMoreKey from 'ui-bb-load-more-ng';
import uiBbSortableColumnKey from 'ui-bb-sortable-column-ng';
import uiBbPaginatorKey from 'ui-bb-paginator-ng';
import uiBbDateLabelFilterModuleKey from 'ui-bb-date-label-filter-ng';

import extHelpers from './helpers';
import * as extHooks from './hooks';

export const helpers = extHelpers;
/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-transactions-ng
 */
export const hooks = extHooks;

export const dependencyKeys = [
  uibAccordionKey,
  uiBbFormatAmountKey,
  uiBbLoadingIndicatorKey,
  i18nNgKey,
  uiBbSubstituteErrorNgKey,
  ngAriaModuleKey,
  uiBbTransactionSearchFilterKey,
  uiBbLoadMoreKey,
  uiBbSortableColumnKey,
  uiBbPaginatorKey,
  uiBbDateLabelFilterModuleKey,
];

