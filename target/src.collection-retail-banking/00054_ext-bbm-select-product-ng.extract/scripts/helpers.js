/**
 * @name Helpers
 * @type {object}
 *
 * @description
 * Helpers for ext-bbm-select-product-ng
 */

const Event = {
  PAYMENT_FORM_STEP: 'bb.event.payment.form.step',
  ACCOUNT_SELECTED: 'bb.event.account.selected',
};

export default ({ publish }) => ({
  /**
   * @name Helpers#hasExternalAccounts
   * @type {function}
   *
   * @description
   * Helper to check whether the given list of accounts contains some external accounts
   *
   * @param {array<object>} accounts List of accounts
   * @returns {boolean} True, if there is at least one external account, false otherwise
   */
  hasExternalAccounts: (accounts) => (
    (accounts || []).some(account => account.external)
  ),
  /**
   * @name Helpers#onSelectAccount
   * @type {function}
   *
   * @description
   * Helper to process account select action
   *
   * @fires bb.event.payment.form.step
   * @fires bb.event.account.selected
   *
   * @param {object} $ctrl Instance of widget angular controller
   * @param {object} account Selected account object
   * @returns {void}
   */
  onSelectAccount: ($ctrl, account) => {
    const ctrl = $ctrl;
    const isAccountsFrom = ctrl.processSelectProductType.isAccountsFrom;

    if (isAccountsFrom) {
      ctrl.payment.from = account;
      ctrl.onAccountFromChange();
    } else {
      ctrl.payment.to = account;
    }

    ctrl.storePayment(ctrl.payment);

    publish(Event.ACCOUNT_SELECTED, {
      isAccountsFrom,
      account,
    });

    publish(Event.PAYMENT_FORM_STEP);
  },
});
