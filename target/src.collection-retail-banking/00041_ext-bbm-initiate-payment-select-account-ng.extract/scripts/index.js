/**
 * @module ext-bbm-initiate-payment-select-account-ng
 *
 * @description
 * Mobile extension for the payment select account page in the Mobile initiate payment widget.
 * Renders either a list of debit accounts, or a list of credit accounts and contacts.
 *
 * @example
 * <!-- File model.xml of widget-bbm-initiate-payment-ng -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bbm-initiate-payment-select-account-ng</value>
 * </property>
 */
import uiBbAvatarKey from 'ui-bb-avatar-ng';
import uiBbFormatAmount from 'ui-bb-format-amount';

export const hooks = {};

export const helpers = {};

export const events = {};

export const dependencyKeys = [
  uiBbAvatarKey,
  uiBbFormatAmount,
];
