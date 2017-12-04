// Temporary disable capsInNew until it fixed in lib-bbm-plugins
/* eslint new-cap: ["error", { "capIsNew": false }] */
import plugins from 'lib-bbm-plugins';

const RecurrenceEnding = {
  NEVER: 'NEVER',
  ON: 'ON',
  AFTER: 'AFTER',
};

const TransferFrequency = {
  ONCE: 'ONCE',
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  YEARLY: 'YEARLY',
};

/**
 * @description
 * Helpers for ext-bbm-payment-schedule-ng
 *
 * @name Helpers
 * @type {Object}
 */

export default ({ $filter }) => {
  const date = $filter('date');
  const i18n = $filter('i18n');

  const frequencyOptions = [
    { id: TransferFrequency.ONCE, text: i18n('message.payment.schedule.frequency.once') },
    { id: TransferFrequency.DAILY, text: i18n('message.payment.schedule.frequency.daily') },
    { id: TransferFrequency.WEEKLY, text: i18n('message.payment.schedule.frequency.weekly') },
    { id: TransferFrequency.MONTHLY, text: i18n('message.payment.schedule.frequency.monthly') },
    { id: TransferFrequency.QUARTERLY, text: i18n('message.payment.schedule.frequency.quarterly') },
    { id: TransferFrequency.YEARLY, text: i18n('message.payment.schedule.frequency.yearly') },
  ];

  const recurrenceEndingOptions = [
    { id: RecurrenceEnding.NEVER, text: i18n('recurrence.ending.never') },
    { id: RecurrenceEnding.ON, text: i18n('recurrence.ending.on') },
    { id: RecurrenceEnding.AFTER, text: i18n('recurrence.ending.after') },
  ];

  const getPaymentSchedule = ctrl => ctrl.state.payment.data.schedule;

  const getToday = () => date(Date.now(), 'yyyy-MM-ddTHH:mm:ssZ');

  const getDayStart = dateStr => (new Date(dateStr)).setHours(0, 0, 0, 0);

  const isPaymentRecurring = ctrl => (
    getPaymentSchedule(ctrl).transferFrequency !== TransferFrequency.ONCE
  );

  const isEndDateValid = ({ endDate, startDate }) => (
    getDayStart(startDate) <= getDayStart(endDate)
  );

  const isRepeatValid = ({ repeat }) => repeat > 0 && repeat <= 99;

  const checkValidity = ctrl => {
    if (isPaymentRecurring(ctrl)) {
      const schedule = getPaymentSchedule(ctrl);

      // End date is not entered
      if (schedule.end === RecurrenceEnding.ON && !schedule.endDate) {
        plugins.Snackbar().error(i18n('errors.payment.schedule.endDate.required'));
        return false;
      }

      // End date is not valid
      if (schedule.end === RecurrenceEnding.ON && !isEndDateValid(schedule)) {
        plugins.Snackbar().error(i18n('errors.payment.schedule.endDate.invalid'));
        return false;
      }

      // Repeat is not valid
      if (schedule.end === RecurrenceEnding.AFTER && !isRepeatValid(schedule)) {
        plugins.Snackbar().error(i18n('errors.payment.schedule.repeat.invalid'));
        return false;
      }
    }
    return true;
  };

  return {
    /**
     * @description
     * Returns a list of frequency options.
     *
     * @name Helpers#getFrequencyOptions
     * @type {function}
     *
     * @returns {Array.<PaymentFrequency>}
     */
    getFrequencyOptions: () => frequencyOptions,

    /**
     * @description
     * Returns a minimum allowed date to start a recurring payment.
     *
     * @name Helpers#getMinimumRecurrenceEndDate
     * @type {function}
     *
     * @returns {string}
     */
    getMinimumRecurrenceEndDate: ctrl => getPaymentSchedule(ctrl).startDate,

    /**
     * @description
     * Returns a minimum allowed date to make a payment.
     *
     * @name Helpers#getMinimumExecutionDate
     * @type {function}
     *
     * @returns {string}
     */
    getMinimumExecutionDate: () => getToday(),

    /**
     * @description
     * Returns a minimum allowed date to start a recurring payment.
     *
     * @name Helpers#getMinimumStartDate
     * @type {function}
     *
     * @returns {string}
     */
    getMinimumRecurrenceStartDate: () => getToday(),

    /**
     * @description
     * Returns a list of possible recurring payment endings.
     *
     * @name Helpers#getRecurrenceEndingOptions
     * @type {function}
     *
     * @returns {Array.<RecurrenceEnding>}
     */
    getRecurrenceEndingOptions: () => recurrenceEndingOptions,

    /**
     * @description
     * Returns the label of the start date field.
     *
     * @name Helpers#getStartDateLabel
     * @type {function}
     *
     * @param {ScheduleController} ctrl Instance of the controller
     * @returns {string}
     */
    getStartDateLabel: ctrl => (
      isPaymentRecurring(ctrl)
        ? i18n('form.label.startDate')
        : i18n('form.label.executionDate')
    ),

    /**
     * @description
     * Returns the title of the start date datepicker.
     *
     * @name Helpers#getStartDateTitle
     * @type {function}
     *
     * @param {ScheduleController} ctrl Instance of the controller
     * @returns {string}
     */
    getStartDateTitle: ctrl => (
      isPaymentRecurring(ctrl)
        ? i18n('form.title.selectStartDate')
        : i18n('form.title.selectExecutionDate')
    ),

    /**
     * @description
     * Checks whether the payment is recurring.
     * Returns true, if the payment is recurring, false otherwise.
     *
     * @name Helpers#isPaymentRecurring
     * @type {function}
     *
     * @param {ScheduleController} ctrl
     * @returns {boolean}
     */
    isPaymentRecurring,

    /**
     * @description
     * Defines whether the recurrence repeat field should be visible.
     *
     * @name Helpers#isRecurrenceRepeatVisible
     * @type {function}
     *
     * @param {ScheduleController} ctrl
     * @returns {boolean}
     */
    isRecurrenceRepeatVisible: ctrl => (
      isPaymentRecurring(ctrl) && getPaymentSchedule(ctrl).end === RecurrenceEnding.AFTER
    ),

    /**
     * @description
     * Defines whether the recurrence end date field should be visible.
     *
     * @name Helpers#isRecurrenceEndDateVisible
     * @type {function}
     *
     * @param {ScheduleController} ctrl
     * @returns {boolean}
     */
    isRecurrenceEndDateVisible: ctrl => (
      isPaymentRecurring(ctrl) && getPaymentSchedule(ctrl).end === RecurrenceEnding.ON
    ),

    /**
     * @description
     * Handles submit of the schedule payment form.
     *
     * @name Helpers#onScheduleFormSubmit
     * @type {function}
     *
     * @param {ScheduleController} ctrl Instance of the controller
     * @returns {string}
     */
    onScheduleFormSubmit: ctrl => {
      if (checkValidity(ctrl)) {
        ctrl.submitSchedule();
      }
    },
  };
};

/**
 * @typedef {Object} PaymentFrequency
 * @property {string} id Frequency identifier
 * @property {string} text Frequency as a text to be displayed
 */
