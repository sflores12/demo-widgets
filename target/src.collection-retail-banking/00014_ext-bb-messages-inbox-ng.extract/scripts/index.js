/**
 * @module ext-bb-messages-inbox-ng
 *
 * @description
 * Message center inbox extension.
 *
 * @example
 * <!-- messages widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-messages-inbox-ng</value>
 * </property>
 */
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uibAccordionKey from 'vendor-bb-uib-accordion';
import uibPagination from 'vendor-bb-uib-pagination';
import uiBbConversationViewNgKey from 'ui-bb-conversation-view-ng';
import uiBbConversationListNgKey from 'ui-bb-conversation-list-ng';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import uiBbNotificationStripeKey from 'ui-bb-notification-stripe-ng';
import uiBbConfirmNg from 'ui-bb-confirm-ng';
import i18nKey from 'ui-bb-i18n-ng';

import '../styles/index.css';
import extHelpers from './helpers';

export const helpers = extHelpers;

export const dependencyKeys = [
  ngAriaModuleKey,
  uiBbConversationListNgKey,
  uiBbConversationViewNgKey,
  uiBbSubstituteErrorNgKey,
  uiBbNotificationStripeKey,
  uibAccordionKey,
  uiBbConfirmNg,
  uibPagination,
  i18nKey,
];
