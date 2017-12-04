/**
 * @module ext-bbm-contact-details-ng
 *
 * @description
 * Mobile extension for a contact details view in the Contacts widget.
 *
 * @example
 * <!-- Contact widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *   <value type="string">ext-bbm-contact-details-ng</value>
 * </property>
 */
import uiBbAvatarKey from 'ui-bb-avatar-ng';
import i18nNgKey from 'ui-bb-i18n-ng';

export const dependencyKeys = [
  uiBbAvatarKey,
  i18nNgKey,
];

export const hooks = {};
