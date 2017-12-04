/**
 * @module ext-bbm-product-summary-ng
 *
 * @description
 * Mobile extension for the product summary widget.
 *
 * @requires ui-bbm-product-kind-table-view-ng
 * @requires ui-bb-inline-status-ng
 * @requires ui-bb-i18n-ng
 *
 * @example
 * <!-- product summary widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bbm-product-summary-ng</value>
 * </property>
 */
import uiBbmProductKindTableViewKey from 'ui-bbm-product-kind-table-view-ng';
import uiBbI18nNgKey from 'ui-bb-i18n-ng';

import * as extHooks from './hooks';

import extHelpers from './helpers';

export const helpers = extHelpers;

export const dependencyKeys = [
  uiBbmProductKindTableViewKey,
  uiBbI18nNgKey,
];

export const hooks = extHooks;
