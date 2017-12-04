/**
 * @module ext-bbm-transactions-details-ng
 *
 * @description
 * Mobile extension for transactions details widget.
 *
 * @example
 * <!-- transactions widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bbm-transactions-details-ng</value>
 * </property>
 */
import uiBbFormatAmountKey from 'ui-bb-format-amount';
import uiBbI18nNgKey from 'ui-bb-i18n-ng';

import extHelpers from './helpers';

export const helpers = extHelpers;

export const dependencyKeys = [
  uiBbFormatAmountKey,
  uiBbI18nNgKey,
];

export const hooks = {};
