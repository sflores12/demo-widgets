/**
 * @name uiBbmMaxlength
 * @type {function}
 * @description
 * Directive to prevent typing symbols based on the maxlength value.
 *
 * @example
 * <form name="form">
 *   <input type="text" name="fullName" ui-bbm-maxlength="10">
 * </form>
 */
export default function uiBbmMaxlength() {
  return {
    require: 'ngModel',
    link: (scope, $elem, attrs) => {
      const maxlength = Number(attrs.uiBbmMaxlength);
      const ngModel = $elem.controller('ngModel');

      if (!Number.isNaN(maxlength) && maxlength >= 0) {
        $elem.on('input', event => {
          const value = event.target.value;

          if (value.length > maxlength) {
            ngModel.$setViewValue(value.substr(0, maxlength));
            ngModel.$render();
          }
        });
      }
    },
  };
}
