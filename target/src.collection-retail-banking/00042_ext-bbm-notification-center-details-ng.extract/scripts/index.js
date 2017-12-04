/**
 * @module ext-bbm-notification-center-details-ng
 *
 * @description
 * Mobile extension for a notiication center details.
 *
 * @example
 * <!-- Contact widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bbm-notification-details-ng</value>
 * </property>
 */
import uiBbI18nNgKey from 'ui-bb-i18n-ng';
import uiBbDateLabelFilterKey from 'ui-bb-date-label-filter-ng';
import uiBbListKey from 'ui-bb-list-ng';

import extEvents from './events';
import extHelpers from './helpers';

export const events = extEvents;
export const helpers = extHelpers;

export const dependencyKeys = [
  uiBbI18nNgKey,
  uiBbDateLabelFilterKey,
  uiBbListKey,
];
