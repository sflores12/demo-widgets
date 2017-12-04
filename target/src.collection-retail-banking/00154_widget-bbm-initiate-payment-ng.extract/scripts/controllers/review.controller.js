import { Event, Intent } from '../constants';

export default function ReviewController(widget, model, viewModel, sharedApi, bbIntent, bus) {
  /**
   * @name ReviewController
   * @ngkey ReviewController
   *
   * @description
   * Initiate payment widget review controller.
   * Provides API to make a payment.
   *
   * @type {object}
   */
  const ctrl = this;

  /**
   * @description
   * A set of intents that the Review controller uses or handles.
   *
   * @name intents
   * @type {Object}
   * @inner
   */
  const intents = {};

  /**
   * @description
   * AngularJS Lifecycle hook used to initialize the controller.
   *
   * Prepares the view model.
   *
   * @name ReviewController#$onInit
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
   * Submits the payment.
   *
   * @name ReviewController#submitPayment
   * @type {function}
   * @returns {Promise}
   */
  const submitPayment = () => {
    sharedApi.saveContactIfNeeded();

    return sharedApi.makePaymentWithAuthorization()
      .then(() => viewModel.save())
      .then(() => {
        intents.showForm();
      });
  };

  /**
   * @description
   * The intent to show the Form page
   *
   * @name intents#showForm
   * @type {function}
   * @inner
   */
  intents.showForm = bbIntent.create(Intent.SHOW_FORM);

  bbIntent.handle(Intent.SHOW_REVIEW, () => {
    viewModel.fetch();
  });

  bbIntent.init(() => {});

  Object.defineProperty(ctrl, 'state', {
    get() {
      return viewModel.state;
    },
  });

  Object.assign(ctrl, {
    $onInit,
    preferences: sharedApi.preferences,
    submitPayment,
  });
}
