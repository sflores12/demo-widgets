/**
 * @module ext-bbm-select-product-ng
 *
 * @description
 * Mobile extension for a select product step in the Payment widget.
 *
 * @example
 * <!-- Contact widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bbm-select-product-ng</value>
 * </property>
 */
import uiBbAvatarKey from 'ui-bb-avatar-ng';
import i18nNgKey from 'ui-bb-i18n-ng';

import * as extHooks from './hooks';
import extHelpers from './helpers';

export const dependencyKeys = [
  i18nNgKey,
  uiBbAvatarKey,
];

export const helpers = extHelpers;
export const hooks = extHooks;
