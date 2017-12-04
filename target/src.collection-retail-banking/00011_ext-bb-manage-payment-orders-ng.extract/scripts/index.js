/**
 * @module ext-bb-manage-payment-orders-ng
 *
 * @description
 * Payment order overview extension.
 *
 * @example
 * <!-- payment order widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-manage-payment-orders-ng</value>
 * </property>
 *
 */
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uiBbI18nNgKey from 'ui-bb-i18n-ng';
import uiBbLoadingIndicatorNgKey from 'ui-bb-loading-indicator-ng';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import uiBbLoadMoreNgKey from 'ui-bb-load-more-ng';
import uiBbLoadingOverlayKey from 'ui-bb-loading-overlay-ng';
import uiBbEmptyStateKey from 'ui-bb-empty-state-ng';
import uiBbDateLabelFilterModuleKey from 'ui-bb-date-label-filter-ng';

import * as extHooks from './hooks';
import extHelpers from './helpers';

export const dependencyKeys = [
  ngAriaModuleKey,
  uiBbI18nNgKey,
  uiBbLoadingIndicatorNgKey,
  uiBbSubstituteErrorNgKey,
  uiBbLoadMoreNgKey,
  uiBbLoadingOverlayKey,
  uiBbEmptyStateKey,
  uiBbDateLabelFilterModuleKey,
];

export const helpers = extHelpers;

export const hooks = extHooks;

export const events = {};
