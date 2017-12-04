/**
 * @module ext-bbm-initiate-payment-review-ng
 *
 * @description
 * Mobile extension for a payment review step in the Mobile initiate payment widget.
 *
 * @example
 * <!-- Contact widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bbm-initiate-payment-review-ng</value>
 * </property>
 */
import uiBbFormatAmount from 'ui-bb-format-amount';
import uiBbI18nNgKey from 'ui-bb-i18n-ng';

import extEvents from './events';
import extHelpers from './helpers';

export const events = extEvents;
export const helpers = extHelpers;
export const hooks = {};

export const dependencyKeys = [
  uiBbI18nNgKey,
  uiBbFormatAmount,
];
