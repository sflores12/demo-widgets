 /**
 * @module ext-bb-product-details-ng
 * @description
 * Extension used for displaying product details
 * in a certain format per product kind
 *
 * @example
 * <!-- Product summary widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-product-details-ng</value>
 * </property>
 */
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uibPopoverKey from 'vendor-bb-uib-popover';
import i18nNgKey from 'ui-bb-i18n-ng';
import uiBbFormatAmount from 'ui-bb-format-amount';
import uiBbEmptyStateKey from 'ui-bb-empty-state-ng';

import * as extHooks from './hooks';
import extHelpers from './helpers';

export const dependencyKeys = [
  ngAriaModuleKey,
  uibPopoverKey,
  i18nNgKey,
  uiBbFormatAmount,
  uiBbEmptyStateKey,
];

export const hooks = extHooks;

export const helpers = extHelpers;

export const events = {};
