/**
 * @module ext-bb-contact-list-ng
 *
 * @description
 * Default extension for contact widget.
 *
 * @requires ui-bb-account-card
 *
 * @example
 * <!-- payment widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-contact-list-ng</value>
 * </property>
 *
 * Usage of ui-bb-account-card component in template
 *
 * <ui-bb-account-card
 *   account-name="contact.name"
 *   account-image="contact.image
 *   account-number="contact.IBAN"
 *   show-avatar="true">
 * </ui-bb-account-card>
 */
import uiBbAccountCard from 'ui-bb-account-card';
import uiBbInlineStatusKey from 'ui-bb-inline-status-ng';
import uiBbConfirmKey from 'ui-bb-confirm-ng';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import uiBbNotificationStripeKey from 'ui-bb-notification-stripe-ng';
import uiBbIbanKey from 'ui-bb-iban-ng';
import i18nKey from 'ui-bb-i18n-ng';
import uiBbLoadMoreKey from 'ui-bb-load-more-ng';
import uiBbLoadingIndicatorKey from 'ui-bb-loading-indicator-ng';
import uiBbTrackChangesKey from 'ui-bb-track-form-changes-ng';
import vendorBbAngularNgMessagesKey from 'vendor-bb-angular-ng-messages';
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uiBbSearchBoxKey from 'ui-bb-search-box-ng';
import uiBbLoadingOverlayKey from 'ui-bb-loading-overlay-ng';
import uiBbEmptyStateNg from 'ui-bb-empty-state-ng';

import * as extHooks from './hooks';
import extHelpers from './helpers';

export const hooks = extHooks;
export const helpers = extHelpers;

export const dependencyKeys = [
  uiBbAccountCard,
  uiBbInlineStatusKey,
  uiBbConfirmKey,
  uiBbSubstituteErrorNgKey,
  uiBbNotificationStripeKey,
  uiBbIbanKey,
  i18nKey,
  uiBbLoadMoreKey,
  uiBbLoadingIndicatorKey,
  vendorBbAngularNgMessagesKey,
  ngAriaModuleKey,
  uiBbTrackChangesKey,
  uiBbSearchBoxKey,
  uiBbLoadingOverlayKey,
  uiBbEmptyStateNg,
];
