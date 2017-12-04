/**
 * @module ext-bb-messages-ng
 *
 * @description
 * Message center default extension.
 *
 * @example
 * <!-- messages widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-messages-ng</value>
 * </property>
 */
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uibAccordionKey from 'vendor-bb-uib-accordion';
import uibTabsKey from 'vendor-bb-uib-tabs';
import uiBbConversationViewNgKey from 'ui-bb-conversation-view-ng';
import uiBbConversationListNgKey from 'ui-bb-conversation-list-ng';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import uiBbNotificationStripeKey from 'ui-bb-notification-stripe-ng';
import uiBbDraftEditNg from 'ui-bb-draft-edit-ng';
import uiBbConfirmNg from 'ui-bb-confirm-ng';
import uiBbLoadMoreNg from 'ui-bb-load-more-ng';
import i18nKey from 'ui-bb-i18n-ng';

import '../styles/index.css';
import extHelpers from './helpers';
import extHooks from './hooks';

export const helpers = extHelpers;
export const hooks = extHooks;

export const dependencyKeys = [
  ngAriaModuleKey,
  uiBbConversationListNgKey,
  uiBbConversationViewNgKey,
  uiBbSubstituteErrorNgKey,
  uiBbNotificationStripeKey,
  uibAccordionKey,
  uibTabsKey,
  uiBbDraftEditNg,
  uiBbConfirmNg,
  uiBbLoadMoreNg,
  i18nKey,
];
