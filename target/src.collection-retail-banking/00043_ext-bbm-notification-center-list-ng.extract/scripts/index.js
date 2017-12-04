/**
 * @module ext-bbm-notification-center-list-ng
 *
 * @description
 * Mobile extension for a notiication center list.
 *
 * @example
 * <!-- Contact widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bbm-notification-list-ng</value>
 * </property>
 */
import uiBbI18nNgKey from 'ui-bb-i18n-ng';
import uiBbDateLabelFilterKey from 'ui-bb-date-label-filter-ng';
import uiBbmScrollNgKey from 'ui-bbm-scroll-ng';

import extHelpers from './helpers';

export const helpers = extHelpers;

export const dependencyKeys = [
  uiBbI18nNgKey,
  uiBbDateLabelFilterKey,
  uiBbmScrollNgKey,
];
