/**
 * @name Helpers
 * @type {object}
 *
 * @description
 * Helpers for ext-bbm-contact-form-ng
 */
export default {
  /**
   * @description
   * Helper to save a contact and reset the form
   *
   * @name Helpers#saveContact
   * @type {function}
   * @param {object} $ctrl Angular controller instance
   * @param {object} contactForm Angular form instance
   * @returns {promise<void>} Promise which gets resolved once contact is saved and the form
   *   is reset, or rejected in case of errors
   */
  saveContact: ($ctrl, contactForm) => {
    const contact = $ctrl.state.contact.data;
    return $ctrl.saveContact(contact).then(() => {
      contactForm.$setUntouched();
      contactForm.$setPristine();
    });
  },
};
