/**
 * @module ext-bb-notification-center-ng
 *
 * @description
 * Default extension for notifications center.
 *
 * @example
 * <!-- widget's model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-notification-center-ng</value>
 * </property>
 */
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import vendorBbUibTooltipKey from 'vendor-bb-uib-tooltip';
import ngSanitizeKey from 'vendor-bb-angular-sanitize';
import uiBbMessageNgKey from 'ui-bb-message-ng';
import uiBbLoadMoreKey from 'ui-bb-load-more-ng';
import uiBbConfirmKey from 'ui-bb-confirm-ng';
import i18nKey from 'ui-bb-i18n-ng';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import uiBbNotificationStripeKey from 'ui-bb-notification-stripe-ng';
import uiBbLoadingOverlayKey from 'ui-bb-loading-overlay-ng';
import uiBbDateLabelFilterKey from 'ui-bb-date-label-filter-ng';
import uiBbPaginatorKey from 'ui-bb-paginator-ng';
import uiBbNotificationsFilterKey from 'ui-bb-notifications-filter-ng';
import uiBbEllipsisTooltipKey from 'ui-bb-ellipsis-tooltip-ng';
import uiBbEmptyStateNg from 'ui-bb-empty-state-ng';

import extHelpers from './helpers';

export const helpers = extHelpers;

export const dependencyKeys = [
  uiBbMessageNgKey,
  uiBbLoadMoreKey,
  uiBbConfirmKey,
  i18nKey,
  uiBbSubstituteErrorNgKey,
  uiBbNotificationStripeKey,
  uiBbLoadingOverlayKey,
  uiBbDateLabelFilterKey,
  uiBbEmptyStateNg,
  ngAriaModuleKey,
  uiBbPaginatorKey,
  uiBbNotificationsFilterKey,
  uiBbEllipsisTooltipKey,
  vendorBbUibTooltipKey,
  ngSanitizeKey,
];
