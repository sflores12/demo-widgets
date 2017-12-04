/**
 * @module ext-bb-product-select-ng
 *
 * @description
 * Product select extension for product summary widget.
 *
 * @requires ui-bb-account-selector
 *
 * @example
 * <!-- payment widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-product-select-ng</value>
 * </property>
 */

import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uiBbAccountSelector from 'ui-bb-account-selector';

// uncomment below to include CSS in your extension
// import '../styles/index.css';

import processKinds, { productKindView } from './product-kind-view';

export const dependencyKeys = [
  ngAriaModuleKey,
  uiBbAccountSelector,
];

export const hooks = {
  /**
   * @name processKinds
   * @description
   * Hook for process products
   *
   * Make flat list
   *
   * Map to view model
   *
   * @type {function}
   * @param {array} product The source Product from the widget controller
   * @returns {array<ProductView>}
   */
  processKinds,
  /**
   * @name processProductSelected
   * @type {function}
   *
   * @description
   * Hook for processing selected product after selection update
   * Prepares the fields of the selected product into a form ready for display to the User
   *
   * @param {object} product Product to process
   * @returns {object}
   */
  processProductSelected: (product) => productKindView(product),
};

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
