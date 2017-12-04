/**
 * @module ext-bb-personal-profile-ng
 *
 * @description
 * Default extension for personal profile widget.
 *
 * @requires ui-bb-avatar-ng
 * @requires vendor-bb-angular-ng-aria
 *
 * @example
 * <!-- payment widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-personal-profile-ng</value>
 * </property>
 */
import uiBbAvatarKey from 'ui-bb-avatar-ng';
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';

export const dependencyKeys = [
  uiBbAvatarKey,
  ngAriaModuleKey,
];

/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-personal-profile-ng
 */
export const hooks = {};
