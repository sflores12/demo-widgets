/**
 * @module ext-bbm-payment-schedule-ng
 *
 * @description
 * Mobile extension for the payment schedule view in the Mobile payment widget.
 *
 * @example
 * <!-- File model.xml of widget-bbm-payment-ng -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bbm-payment-schedule-ng</value>
 * </property>
 */
import uiBbI18nNgKey from 'ui-bb-i18n-ng';
import uiBbmDatepickerNgKey from 'ui-bbm-datepicker-ng';
import uiBbmDropdownNgKey from 'ui-bbm-dropdown-ng';
import uiBbmTextfieldNgKey from 'ui-bbm-textfield-ng';
import extHelpers from './helpers';

export const helpers = extHelpers;

export const dependencyKeys = [
  uiBbI18nNgKey,
  uiBbmDatepickerNgKey,
  uiBbmDropdownNgKey,
  uiBbmTextfieldNgKey,
];
