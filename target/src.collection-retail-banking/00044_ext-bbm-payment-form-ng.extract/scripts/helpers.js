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

const TransferFrequencyMessage = {
  [TransferFrequency.ONCE]: 'message.payment.schedule.frequency.once',
  [TransferFrequency.DAILY]: 'message.payment.schedule.frequency.daily',
  [TransferFrequency.WEEKLY]: 'message.payment.schedule.frequency.weekly',
  [TransferFrequency.MONTHLY]: 'message.payment.schedule.frequency.monthly',
  [TransferFrequency.QUARTERLY]: 'message.payment.schedule.frequency.quarterly',
  [TransferFrequency.YEARLY]: 'message.payment.schedule.frequency.yearly',
};

const isToday = dateStr => {
  const date = new Date(dateStr);
  const today = new Date();

  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
};

/**
 * @description
 * Helpers for ext-bbm-payment-form-ng
 *
 * @name Helpers
 * @type {Object}
 */

export default ({ $filter }) => {
  const dateFilter = $filter('date');
  const i18n = $filter('i18n');

  const RecurrenceEndingString = {
    [RecurrenceEnding.NEVER]: () => (
      i18n('message.payment.schedule.frequency.end.never')
    ),
    [RecurrenceEnding.AFTER]: schedule => (
      `${schedule.repeat} ${i18n('message.payment.schedule.frequency.end.after')}`
    ),
    [RecurrenceEnding.ON]: schedule => {
      const endDate = dateFilter(schedule.endDate, 'mediumDate');
      return `${i18n('message.payment.schedule.frequency.end.on')} ${endDate}`;
    },
  };

  const getScheduleFrequencyString = schedule => (
    i18n(TransferFrequencyMessage[schedule.transferFrequency])
  );

  const getScheduleEndingString = schedule => (
    RecurrenceEndingString[schedule.end](schedule)
  );

  const getScheduleStartDateString = schedule => (
    isToday(schedule.startDate)
      ? i18n('message.payment.schedule.today')
      : `on ${dateFilter(schedule.startDate, 'mediumDate')}`
  );

  const showUrgentPaymentInfo = () => {
    const alertDialog = plugins.AlertDialog;
    const infoOptions = {
      title: i18n('message.payment.urgentPayment.info.title'),
      message: i18n('message.payment.urgentPayment.info.message'),
      buttons: [
        {
          type: alertDialog().ButtonType.NEUTRAL,
          text: i18n('message.payment.urgentPayment.info.button.ok'),
          callbackFn: 'OK',
        },
      ],
    };

    return alertDialog().show(infoOptions);
  };

  const isRecurring = schedule => schedule.transferFrequency !== TransferFrequency.ONCE;

  return {
    /**
     * @description
     * Decides whether to show the "Save contact" checkbox in UI or not.
     * Returns true, if the checkbox is visible, and false otherwise.
     *
     * If the checkbox is not visible, sets the `saveContact` flag to false.
     *
     * @name Helpers#checkSaveContactVisibility
     * @type {function}
     *
     * @param {FormController} ctrl Instance of the Form controller
     * @param {Object} form Instance of the form
     * @returns {boolean}
     */
    checkSaveContactVisibility: (ctrl, form) => {
      const isVisible = form.beneficiary.$valid && ctrl.canSaveContact();

      if (!isVisible) {
        ctrl.setSaveContact(false);
      }

      return isVisible;
    },

    /**
     * @description
     * Returns a summary of the given payment schedule as a string.
     *
     * @name Helpers#getScheduleSummary
     * @type {function}
     *
     * @param {Schedule} schedule
     * @returns {string}
     */
    getScheduleSummary: schedule => {
      if (!schedule) return '';

      const startingFrom = i18n('message.payment.schedule.startingFrom');

      const startDate = getScheduleStartDateString(schedule);
      const frequency = getScheduleFrequencyString(schedule);
      const ending = getScheduleEndingString(schedule);

      return isRecurring(schedule)
        ? `${frequency}, ${startingFrom} ${startDate}, ${ending}`
        : `${frequency}, ${startDate}`;
    },

    /**
     * @description
     * Checks for the given payment whether it is allowed to create a new beneficiary
     * instead of selecting an existing one from the list of beneficiaries.
     *
     * Returns true, if a user can create a beneficiary, otherwise false.
     *
     * @name isCreateBeneficiaryAllowed
     * @type {function}
     *
     * @param {Payment} payment Payment object
     * @returns {boolean}
     */
    isCreateBeneficiaryAllowed: payment => Boolean(
      payment && (!payment.debitAccount || payment.debitAccount.externalTransferAllowed)
    ),

    /**
     * @description
     * Checks if urgent payment is available for the current transaction.
     *
     * Returns true, if beneficiary allows urgent payments, payment is scheduled only for once,
     * payment is not scheduled for future, otherwise false.
     *
     * @name isUrgentVisible
     * @type {function}
     *
     * @param {Payment} payment Payment object
     * @returns {boolean}
     */
    isUrgentVisible: (payment, ctrl) => {
      if (!ctrl.preferences.urgent) {
        return false;
      }

      const isAllowed = ctrl.isUrgentPaymentAllowed(payment);
      if (!isAllowed) {
        ctrl.setUrgentPayment(false);
      }

      return isAllowed;
    },

    /**
     * @description
     * Shows information about urgent payment.
     *
     * @name onUrgentPaymentInfoClick
     * @type {function}
     */
    onUrgentPaymentInfoClick: showUrgentPaymentInfo,

    /**
     * @description
     * Checks whether the form is valid. Returns true, if the form is valid, false otherwise.
     *
     * @name isPaymentFormValid
     * @type {function}
     *
     * @param {Payment} payment Payment object
     * @param {Object} form Instance of the form
     * @returns {boolean}
     */
    isPaymentFormValid: (payment, form) => Boolean(
      payment && payment.beneficiary && payment.debitAccount && form.$valid
    ),

    /**
     * @description
     * Handles the payment form submit.
     *
     * @name onPaymentFormSubmit
     * @type {function}
     *
     * @param {FormController} ctrl Form controller instance
     * @param {Object} form Angular form instance
     */
    onPaymentFormSubmit: (ctrl, form) => {
      form.$setUntouched();
      ctrl.submitPayment();
    },
  };
};
