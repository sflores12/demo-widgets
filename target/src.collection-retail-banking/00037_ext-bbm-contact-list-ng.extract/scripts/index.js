/**
 * @module ext-bbm-contact-list-ng
 *
 * @description
 * Mobile extension for a contact list in the Contacts widget.
 *
 * @example
 * <!-- Contact widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bbm-contact-list-ng</value>
 * </property>
 */
import uiBbAvatarKey from 'ui-bb-avatar-ng';
import uiBbmScrollNgKey from 'ui-bbm-scroll-ng';
import i18nNgKey from 'ui-bb-i18n-ng';

import '../styles/index.css';
import * as extHooks from './hooks';

import extHelpers from './helpers';

export const helpers = extHelpers;

export const hooks = extHooks;

export const dependencyKeys = [
  uiBbAvatarKey,
  i18nNgKey,
  uiBbmScrollNgKey,
];
