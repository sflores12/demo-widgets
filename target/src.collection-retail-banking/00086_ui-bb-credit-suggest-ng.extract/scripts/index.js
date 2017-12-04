/**
 * @module ui-bb-credit-suggest-ng
 * @description
 * Credit suggest input UI component
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbCreditSuggestKey from 'ui-bb-credit-suggest-ng';
 *
 * export const dependencyKeys = [
 *   uiBbCreditSuggestKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-credit-suggest-ng
 *   name="credit"
 *   data-ng-model="$ctrl.payment.to"
 *   data-accounts="$ctrl.accountsTo"
 *   data-iban-validation-classes
 *   required
 * ></ui-bb-credit-suggest-ng>
 */

import angular from 'vendor-bb-angular';
import uiBbIbanNgKey from 'ui-bb-iban-ng';
import uiBbAutocompleteSearch from 'ui-bb-autocomplete-search-ng';
import vendorBbUibDebounceKey from 'vendor-bb-uib-debounce';
import vendorBbUibPositionKey from 'vendor-bb-uib-position';
import vendorBbUibTypeaheadKey from 'vendor-bb-uib-typeahead';
import uiBbAvatarKey from 'ui-bb-avatar-ng';
import i18nNgKey from 'ui-bb-i18n-ng';

import component from './component';
import controller from './controller';

export default angular
  .module('ui-bb-credit-suggest-ng', [
    vendorBbUibDebounceKey,
    vendorBbUibPositionKey,
    vendorBbUibTypeaheadKey,
    i18nNgKey,
    uiBbIbanNgKey,
    uiBbAutocompleteSearch,
    uiBbAvatarKey,
  ])
  .component('uiBbCreditSuggestNg', component)
  .controller('uiBBCreditSuggestNgController',
    ['$element', '$attrs', '$filter', '$templateCache', '$timeout', controller])
  .name;
