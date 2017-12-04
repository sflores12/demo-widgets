/**
 * @module ext-bbm-initiate-payment-form-ng
 *
 * @description
 * Mobile extension for the payment form in the Mobile initiate payment widget.
 *
 * @example
 * <!-- File model.xml of widget-bbm-initiate-payment-ng -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bbm-initiate-payment-form-ng</value>
 * </property>
 */
import uiBbFormatAmount from 'ui-bb-format-amount';
import uiBbI18nNgKey from 'ui-bb-i18n-ng';
import uiBbIbanKey from 'ui-bb-iban-ng';
import uiBbmAmountFieldNgKey from 'ui-bbm-amount-field-ng';
import uiBbmBeneficiarySelectNgKey from 'ui-bbm-beneficiary-select-ng';
import uiBbmSwitchNg from 'ui-bbm-switch-ng';
import uiBbmTextfieldNgKey from 'ui-bbm-textfield-ng';
import vendorBbAngularNgMessagesKey from 'vendor-bb-angular-ng-messages';

import * as extHooks from './hooks';
import extHelpers from './helpers';
import extEvents from './events';

import '../styles/index.css';

export const helpers = extHelpers;
export const hooks = extHooks;
export const events = extEvents;

export const dependencyKeys = [
  uiBbFormatAmount,
  uiBbI18nNgKey,
  uiBbIbanKey,
  uiBbmAmountFieldNgKey,
  uiBbmBeneficiarySelectNgKey,
  uiBbmSwitchNg,
  uiBbmTextfieldNgKey,
  vendorBbAngularNgMessagesKey,
];
