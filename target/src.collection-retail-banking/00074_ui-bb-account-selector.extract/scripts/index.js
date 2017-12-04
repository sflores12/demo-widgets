/**
 * @module ui-bb-account-selector
 * @description
 * UI component for selecting user account.
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbAccountSelector from 'ui-bb-account-selector';
 *
 * export const dependencyKeys = [
 *   uiBbAccountSelector,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-account-selector
 *   ng-model="$ctrl.payment.from"
 *   accounts="$ctrl.accountsList"
 *   ng-change="$ctrl.onAccountChange()">
 * </ui-bb-account-selector>
 *
 * // multiple selection
 * <ui-bb-account-selector
 *   ng-model="$ctrl.accounts.selected"
 *   accounts="$ctrl.accounts.list"
 *   multiple="true"
 *   ng-change="$ctrl.onAccountChange($item)"
 *   labels="{
 *     noAccounts: ('account.select.label.no.accounts' | i18n),
 *     account: ('account.select.label.account' | i18n),
 *     accounts: ('account.select.label.accounts' | i18n),
 *     allAccounts: ('account.select.label.all.accounts' | i18n),
 *     selectedAccounts: ('account.select.label.selected.accounts' | i18n),
 *   }">
 * </ui-bb-account-selector>
 */
import angular from 'vendor-bb-angular';

import uiBbDropDownSelect from 'ui-bb-dropdown-select';
import uiBbFormatAmount from 'ui-bb-format-amount';
import uiBbSearchBoxKey from 'ui-bb-search-box-ng';
import uiBbListKey from 'ui-bb-list-ng';

import uiBbAccountSelectorComponent from './selector.component';

import '../styles/index.css';

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */
export default angular.module('ui-bb-account-selector', [
  uiBbDropDownSelect,
  uiBbFormatAmount,
  uiBbSearchBoxKey,
  uiBbListKey,
])
  .component('uiBbAccountSelector', uiBbAccountSelectorComponent)
  .name;
