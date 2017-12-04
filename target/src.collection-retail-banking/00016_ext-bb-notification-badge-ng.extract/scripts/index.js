/**
 * @module ext-bb-notification-badge-ng
 *
 * @description
 * Default extension for notifications badge.
 *
 * @example
 * <!-- widget's model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-notification-badge-ng</value>
 * </property>
 */
import uibPopoverKey from 'vendor-bb-uib-popover';
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import i18nKey from 'ui-bb-i18n-ng';
import uiBbDateLabelFilterKey from 'ui-bb-date-label-filter-ng';
import uiBbMessageNgKey from 'ui-bb-message-ng';
import uiBbLoadMoreKey from 'ui-bb-load-more-ng';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import uiBbLoadingOverlayKey from 'ui-bb-loading-overlay-ng';
import uiBbConfirmKey from 'ui-bb-confirm-ng';

import extHelpers from './helpers';

export const hooks = {};
export const helpers = extHelpers;

export const dependencyKeys = [
  uibPopoverKey,
  i18nKey,
  uiBbDateLabelFilterKey,
  uiBbMessageNgKey,
  uiBbLoadingOverlayKey,
  uiBbLoadMoreKey,
  uiBbSubstituteErrorNgKey,
  ngAriaModuleKey,
  uiBbConfirmKey,
];
