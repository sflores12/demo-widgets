/**
 * @module ext-bb-notification-popups-ng
 *
 * @description
 * Default extension for notification popups.
 *
 * @example
 * <!-- widget's model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-notification-popups-ng</value>
 * </property>
 */
import uibAlertKey from 'vendor-bb-uib-alert';
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uiBbMessageNgKey from 'ui-bb-message-ng';
import uiBbDateLabelFilterKey from 'ui-bb-date-label-filter-ng';
import i18nKey from 'ui-bb-i18n-ng';

import extHelpers from './helpers';

export const hooks = {};

export const helpers = extHelpers;

export const dependencyKeys = [
  ngAriaModuleKey,
  i18nKey,
  uibAlertKey,
  uiBbMessageNgKey,
  uiBbDateLabelFilterKey,
];
