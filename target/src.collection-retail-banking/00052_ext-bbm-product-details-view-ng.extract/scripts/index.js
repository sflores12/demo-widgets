/* eslint-disable import/prefer-default-export */

/**
 * @module ext-bbm-product-details-view-ng
 *
 * @description
 * Mobile extension for the product details widget - View.
 *
 * @requires ui-bb-i18n-ng
 *
 * @example
 * <!-- product details widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bbm-product-details-view-ng</value>
 * </property>
 */
import uiBbI18nNgKey from 'ui-bb-i18n-ng';
import uiBbFormatAmount from 'ui-bb-format-amount';

import * as extHooks from './hooks';

import extHelpers from './helpers';

export const helpers = extHelpers;
export const hooks = extHooks;

export const dependencyKeys = [
  uiBbI18nNgKey,
  uiBbFormatAmount,
];
