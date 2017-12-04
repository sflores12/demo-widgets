/* eslint no-param-reassign: ["error", { "props": false }] */

import { isValidIBAN } from 'lib-bb-iban';

export default function uiBbIban() {
  /**
   * @name uiBbIban
   * @type {object}
   * @description
   * Custom form validation for IBAN account number
   *
   * @example
   * <form name="form">
   *   <label for="ibanInputId">IBAN</label>
   *   <input type="text" id="ibanInputId" name="ibanInput" data-ng-model="iban" ui-bb-iban />
   *   <span data-ng-if="form.ibanInput.$error.uiBbIban">
   *     Please input a valid IBAN
   *   </span>
   * </form>
   */
  return {
    require: 'ngModel',
    link: (scope, elm, attrs, ctrl) => {
      ctrl.$validators.uiBbIban = (modelValue) => {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }
        return isValidIBAN(modelValue);
      };
    },
  };
}
