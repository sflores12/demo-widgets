import { AccountType, Event, Intent } from '../constants';

export default function SelectAccountController(
  widget,
  model,
  viewModel,
  sharedApi,
  bbIntent,
  bus
) {
  /**
   * @name SelectAccountController
   * @ngkey SelectAccountController
   *
   * @description
   * Payment widget Select account controller.
   * Provides API to select an account.
   *
   * @type {Object}
   */
  const ctrl = this;

  /**
   * @description
   * A reference to the response function of the select account intent.
   *
   * @name selectAccountHandler
   * @type {function}
   * @inner
   */
  let selectAccountRespond;

  /**
   * @description
   * Payment preferences set in the widget preferences.
   *
   * @name SelectAccountController#preferences
   * @type {Object}
   */
  const preferences = model.getPaymentPreferences();

  /**
   * @description
   * AngularJS Lifecycle hook used to initialize the controller.
   *
   * Prepares the view model.
   *
   * @name SelectAccountController#$onInit
   * @type {function}
   *
   * @fires cxp.item.loaded
   */
  const $onInit = () => (
    viewModel.fetch().then(() => {
      /**
       * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
       * and will be removed with the update to widget collection 3 (WC3)
       */
      bus.publish(Event.CXP_ITEM_LOADED, {
        id: widget.getId(),
      });

      bus.publish(Event.BB_ITEM_LOADED, {
        id: widget.getId(),
      });
    })
  );

  /**
   * @description
   * Fulfils the select account intent with the given account.
   *
   * @name SelectAccountController#selectAccount
   * @type {function}
   * @param {AccountView} account
   */
  const selectAccount = account => {
    viewModel.save().then(() => {
      selectAccountRespond({
        selectedAccount: account,
        type: ctrl.accountType,
      });
    });
  };

  bbIntent.handle(Intent.SELECT_ACCOUNT, ({ type }, respond) => {
    viewModel.fetch().then(() => {
      ctrl.accountType = type;
      selectAccountRespond = respond;
    });
  });

  bbIntent.init(() => {});

  Object.defineProperty(ctrl, 'state', {
    get() {
      return viewModel.state;
    },
  });

  Object.assign(ctrl, {
    /**
     * @description
     * Enumeration of available types of accounts.
     *
     * @name SelectAccountController#AccountType
     * @type {Object}
     */
    AccountType,

    /**
     * @description
     * The type of the account that needs to be selected.
     * Possible values are "debit" or "credit".
     *
     * @name accountType
     * @type {?string}
     */
    accountType: null,

    $onInit,
    preferences,
    selectAccount,
  });
}
