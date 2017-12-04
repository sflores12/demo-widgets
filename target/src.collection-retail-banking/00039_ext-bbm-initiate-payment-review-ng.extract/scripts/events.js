// Temporary disable capsInNew until it fixed in lib-bbm-plugins
/* eslint new-cap: ["error", { "capIsNew": false }] */
import plugins from 'lib-bbm-plugins';

/**
 * @description
 * Events that the extension subscribes to.
 *
 * @name Event
 * @type {Object}
 * @inner
 */
const Event = {
  PAYMENT_DONE: 'bb.event.payment.done',
  PAYMENT_FAILED: 'bb.event.payment.failed',
  PAYMENT_START: 'bb.event.payment.started',
};

/**
 * @name Preference
 * @type {Object}
 * @inner
 */
const Preference = {
  PAYMENT_REVIEW_STEP: 'bb.payment.review.step',
};

export default ({ $filter, widget }) => {
  const i18n = $filter('i18n');
  const hasReviewStep = widget.getBooleanPreference(Preference.PAYMENT_REVIEW_STEP);
  const events = {};

  if (hasReviewStep) {
    Object.assign(events, {
      [Event.PAYMENT_START]: () => {
        plugins.ActivityIndicator().show(i18n('message.payment.start'));
      },

      [Event.PAYMENT_DONE]: () => {
        plugins.ActivityIndicator().hide();
        plugins.Snackbar().success(i18n('message.payment.done'));
      },

      [Event.PAYMENT_FAILED]: () => {
        plugins.ActivityIndicator().hide();
        plugins.Snackbar().error(i18n('message.payment.failed'));
      },
    });
  }

  return events;
};
