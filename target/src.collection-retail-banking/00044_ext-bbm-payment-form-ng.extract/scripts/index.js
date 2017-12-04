/**
 * @module ext-bbm-payment-form-ng
 *
 * @description
 * Mobile extension for the payment form in the Mobile payment widget.
 *
 * @example
 * <!-- File model.xml of widget-bbm-payment-ng -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bbm-payment-form-ng</value>
 * </property>
 */
import uiBbFormatAmount from 'ui-bb-format-amount';
import uiBbI18nNgKey from 'ui-bb-i18n-ng';
import uiBbIbanKey from 'ui-bb-iban-ng';
import uiBbTextNg from 'ui-bb-text-ng';
import uiBbmBeneficiarySelectNgKey from 'ui-bbm-beneficiary-select-ng';
import uiBbmCurrencyInputNgKey from 'ui-bbm-currency-input-ng';
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
  uiBbTextNg,
  uiBbmBeneficiarySelectNgKey,
  uiBbmCurrencyInputNgKey,
  uiBbmSwitchNg,
  uiBbmTextfieldNgKey,
  vendorBbAngularNgMessagesKey,
];
