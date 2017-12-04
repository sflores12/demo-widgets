/**
 * @module ext-bbm-product-details-form-ng
 *
 * @description
 * Mobile extension for the product details form in the Mobile Product Details widget.
 *
 * @example
 * <!-- Mobile Product Details Widget widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bbm-product-details-form-ng</value>
 * </property>
 */
import i18nKey from 'ui-bb-i18n-ng';
import uiBbmTextfieldNgKey from 'ui-bbm-textfield-ng';

import extEvents from './events';
import extHelpers from './helpers';

export const events = extEvents;
export const helpers = extHelpers;

export const dependencyKeys = [
  i18nKey,
  uiBbmTextfieldNgKey,
];
