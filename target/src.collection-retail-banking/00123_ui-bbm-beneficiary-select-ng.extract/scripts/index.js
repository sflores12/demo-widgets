/**
 * @module ui-bbm-beneficiary-select-ng
 * @description
 * Credit suggest input mobile UI component
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbmBeneficiarySelectKey from 'ui-bbm-beneficiary-select-ng';
 *
 * export const dependencyKeys = [
 *   uiBbmBeneficiarySelectKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bbm-beneficiary-select-ng
 *   name="beneficiary"
 *   ng-model="$ctrl.payment.to"
 *   accounts="$ctrl.accountsTo"
 *   debit-account="$ctrl.payment.to.debitAccount"
 *   allowCreate="!$ctrl.payment.from || $ctrl.payment.from.externalTransferAllowed"
 *   on-button-click="ext.helpers.onPaymentToAccountsClick($ctrl)"
 *   messages="{
 *     identifierPlaceholder: ('label.beneficiaryIdentifier' | i18n),
 *     namePlaceholder: ('label.beneficiaryName' | i18n),
 *   }">
 * </ui-bbm-beneficiary-select-ng>
 */

import angular from 'vendor-bb-angular';
import i18nNgKey from 'ui-bb-i18n-ng';
import uiBbIbanNgKey from 'ui-bb-iban-ng';
import uiBbmTextfieldNgKey from 'ui-bbm-textfield-ng';

import component from './component';
import controller from './controller';

export default angular
  .module('ui-bbm-beneficiary-select-ng', [
    i18nNgKey,
    uiBbIbanNgKey,
    uiBbmTextfieldNgKey,
  ])
  .component('uiBbmBeneficiarySelectNg', component)
  .controller('controller', ['$element', '$scope', '$timeout', '$document', controller])
  .name;
