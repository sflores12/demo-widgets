/**
 * @module ext-bbm-personal-profile-phone-form-ng
 *
 * @description
 * Mobile extension for a personal profile phone form in the Mobile Personal Profile widget.
 *
 * @example
 * <!-- Mobile Personal Profile widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bbm-personal-profile-phone-form-ng</value>
 * </property>
 */
import i18nKey from 'ui-bb-i18n-ng';
import uiBbmSwitchNg from 'ui-bbm-switch-ng';
import uiBbmTextfieldNgKey from 'ui-bbm-textfield-ng';

import extEvents from './events';
import extHelpers from './helpers';

export const events = extEvents;
export const helpers = extHelpers;

export const dependencyKeys = [
  i18nKey,
  uiBbmSwitchNg,
  uiBbmTextfieldNgKey,
];
