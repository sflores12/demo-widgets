/**
 * @module ext-bb-product-select-multiple-ng
 *
 * @description
 * Product select multiple extension for product summary widget.
 *
 * @requires ui-bb-account-selector
 *
 * @example
 * <!-- payment widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-product-select-multiple-ng</value>
 * </property>
 */

import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import i18nNgKey from 'ui-bb-i18n-ng';
import uiBbAccountSelector from 'ui-bb-account-selector';
import extHooks from './hooks';

export const dependencyKeys = [
  ngAriaModuleKey,
  i18nNgKey,
  uiBbAccountSelector,
];

export const hooks = extHooks;
export const helpers = {};
export const events = {};

/**
 * @typedef {Object} ProductKindView
 * @property {string} id The Product Kind identifier
 * @property {string} name The name of the Kind, suitable for display to users
 * @property {Array.<ProductView>} products The products of this Kind
 */

/**
 * @typedef {Object} ProductView
 * @property {string} id The internal Product Identifier
 * @property {string} name The product's name, suitable for display to users
 * @property {?string} identifier The identifier of the Product from the user's perspective
 * @property {?string} amount The most important associated value to be displayed
 * @property {?string} currency ISO currency code
 */
