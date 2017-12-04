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
  SELECT_ACCOUNT_LOAD_START: 'bb.event.payment.selectAccount.load.start',
  SELECT_ACCOUNT_LOAD_DONE: 'bb.event.payment.selectAccount.load.done',
  SELECT_ACCOUNT_FAILED: 'bb.event.payment.selectAccount.failed',
};

/**
 * @name Preference
 * @type {Object}
 * @inner
 */
const Preference = {
  PAYMENT_REVIEW_STEP: 'bb.payment.review.step',
};

/**
 * @description
 * Delay in milliseconds before the spinner that indicates loading of accounts gets displayed.
 *
 * @name LOAD_ACCOUNTS_SPINNER_DELAY
 * @type {number}
 * @inner
 */
const LOAD_ACCOUNTS_SPINNER_DELAY = 100;

export default ({ $filter, widget }) => {
  const i18n = $filter('i18n');
  const hasReviewStep = widget.getBooleanPreference(Preference.PAYMENT_REVIEW_STEP);

  let timeoutId;

  const events = {
    [Event.SELECT_ACCOUNT_LOAD_START]: ({ type }) => {
      timeoutId = setTimeout(() => {
        plugins.ActivityIndicator().show(
          i18n(type === 'debit'
            ? 'message.payment.debitAccounts.load'
            : 'message.payment.beneficiaries.load')
        );
      }, LOAD_ACCOUNTS_SPINNER_DELAY);
    },

    [Event.SELECT_ACCOUNT_LOAD_DONE]: () => {
      plugins.ActivityIndicator().hide();
      clearTimeout(timeoutId);
    },

    [Event.SELECT_ACCOUNT_FAILED]: ({ type }) => {
      plugins.ActivityIndicator().hide();
      clearTimeout(timeoutId);

      plugins.Snackbar().error(
        i18n(type === 'debit'
          ? 'message.payment.debitAccounts.load.failed'
          : 'message.payment.beneficiaries.load.failed')
      );
    },
  };

  if (!hasReviewStep) {
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
