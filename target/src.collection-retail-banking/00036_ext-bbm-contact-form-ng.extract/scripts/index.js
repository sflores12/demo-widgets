/**
 * @module ext-bbm-contact-form-ng
 *
 * @description
 * Mobile extension for a contact form in the Contacts widget.
 *
 * @example
 * <!-- Contact widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bbm-contact-form-ng</value>
 * </property>
 */
import uiBbIbanKey from 'ui-bb-iban-ng';
import i18nKey from 'ui-bb-i18n-ng';
import vendorBbAngularNgMessagesKey from 'vendor-bb-angular-ng-messages';
import uiBbmTextfieldNgKey from 'ui-bbm-textfield-ng';

import * as extHooks from './hooks';
import extEvents from './events';
import extHelpers from './helpers';

export const hooks = extHooks;
export const events = extEvents;
export const helpers = extHelpers;

export const dependencyKeys = [
  uiBbIbanKey,
  i18nKey,
  vendorBbAngularNgMessagesKey,
  uiBbmTextfieldNgKey,
];
