// Temporary disable capsInNew until it fixed in lib-bbm-plugins
/* eslint new-cap: ["error", { "capIsNew": false }] */
/* global window */
import plugins from 'lib-bbm-plugins';
import { ToolbarButtonEvent, ConfirmAction, ButtonType } from './constants';

/**
 * @name Helpers
 * @type {Object}
 *
 * @description
 * Helpers for ext-bbm-personal-profile-phone-form-ng
 */

export default ({ $filter }) => {
  const i18n = $filter('i18n');

  return {
    /**
     * @description
     * Helper which adds event listener on delete.
     *
     * @name Helpers#onInit
     * @type {function}
     * @param {module:widget-bbm-personal-profile-ng.FormController} ctrl
     *  FormController instance.
     */
    onInit: ctrl => {
      window.addEventListener(ToolbarButtonEvent.DELETE, () => {
        const confirmOptions = {
          title: i18n('message.personalProfile.phone.delete.confirm.title'),
          message: i18n('message.personalProfile.phone.delete.confirm.message'),
          buttons: [
            {
              type: ButtonType.POSITIVE,
              text: i18n('message.personalProfile.phone.delete.confirm.button.ok'),
              callbackFn: ConfirmAction.CONFIRM,
            },
            {
              type: ButtonType.NEGATIVE,
              text: i18n('message.personalProfile.phone.delete.confirm.button.cancel'),
              callbackFn: ConfirmAction.CANCEL,
            },
          ],
        };

        plugins.AlertDialog().show(confirmOptions)
          .then(response => response.callback === ConfirmAction.CONFIRM)
          .then(isConfirmed => {
            if (isConfirmed) {
              ctrl.deleteUserPhone();
            }
          });
      });
    },
    /**
     * @description
     * Helper to get the form validation status.
     *
     * @name Helpers#isFormValid
     * @type {function}
     * @param {Object} form
     *
     * @return {boolean} validation status.
     */
    isFormValid: form => Boolean(form.$valid && form.$dirty),
  };
};
