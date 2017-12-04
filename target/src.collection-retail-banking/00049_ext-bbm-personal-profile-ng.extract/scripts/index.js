/**
 * @module ext-bbm-personal-profile-ng
 *
 * @description
 * Mobile extension for personal profile widget.
 *
 * @example
 * <!-- personal profile widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bbm-personal-profile-ng</value>
 * </property>
 */
import uiBbAvatarKey from 'ui-bb-avatar-ng';
import uiBbI18nNgKey from 'ui-bb-i18n-ng';

import extHelpers from './helpers';

export const helpers = extHelpers;

export const dependencyKeys = [
  uiBbAvatarKey,
  uiBbI18nNgKey,
];
