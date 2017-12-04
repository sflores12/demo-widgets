import { Event, Intent } from '../constants';

export default function ScheduleController(
  widget,
  model,
  viewModel,
  sharedApi,
  bbIntent,
  bus
) {
  /**
   * @name ScheduleController
   * @ngkey ScheduleController
   *
   * @description
   * Initiate payment widget Schedule controller.
   * Provides API to set a schedule of a payment.
   *
   * @type {Object}
   */
  const ctrl = this;

  /**
   * @description
   * A reference to the response function of the select schedule intent.
   *
   * @name selectScheduleHandler
   * @type {function}
   * @inner
   */
  let selectScheduleRespond;

  /**
   * @description
   * AngularJS Lifecycle hook used to initialize the controller.
   *
   * Prepares the view model.
   *
   * @name ScheduleController#$onInit
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
   * Fulfils the select schedule intent with the given data.
   *
   * @name ScheduleController#submitSchedule
   * @type {function}
   */
  const submitSchedule = () => {
    viewModel.save().then(() => {
      selectScheduleRespond({});
    });
  };

  bbIntent.handle(Intent.SELECT_SCHEDULE, (payload, respond) => {
    viewModel.fetch().then(() => {
      selectScheduleRespond = respond;
    });
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
    submitSchedule,
  });
}
