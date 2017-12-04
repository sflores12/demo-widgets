import {
  Event,
  PaymentMode,
  RecurrenceEnding,
  TransferFrequency,
  Preference,
} from '../constants';

export default (widget, model, viewModel, bus, hooks, Promise) => {
  const isRecurring = schedule => schedule.transferFrequency !== TransferFrequency.ONCE;

  const preferences = {
    urgent: widget.getBooleanPreference(Preference.URGENT),
    recurring: widget.getBooleanPreference(Preference.RECURRING),
    showPin: widget.getBooleanPreference(Preference.SHOW_PIN),
    reviewStep: widget.getBooleanPreference(Preference.REVIEW_STEP),
    descriptionRegex: widget.getStringPreference(Preference.DESCRIPTION_REGEX),
  };

  const isUrgentPaymentAllowed = payment => {
    if (!payment) {
      return false;
    }

    const isAllowedByAccount = Boolean(
      payment.debitAccount &&
      payment.debitAccount.urgentTransferAllowed
    );
    const currentDate = new Date();
    const startDate = new Date(payment.schedule.startDate);
    const isNotFuture = currentDate >= startDate;

    return isAllowedByAccount && !isRecurring(payment.schedule) && isNotFuture;
  };

  /**
   * @description
   * Checks whether the given beneficiary is external.
   * Returns true, if the beneficiary is external, and false otherwise.
   *
   * @name isExternalBeneficiary
   * @type {function}
   *
   * @param {AccountView} beneficiary
   * @returns {boolean}
   * @inner
   */
  const isExternalBeneficiary = beneficiary => (
    beneficiary && (beneficiary.external || beneficiary.isNew)
  );

  /**
   * @description
   * Returns the identification of the given contact.
   *
   * @name getContactIdentification
   * @type {function}
   *
   * @param {AccountView} beneficiary
   * @returns {ContactIdentification}
   * @inner
   */
  const getContactIdentification = beneficiary => ({
    name: beneficiary ? beneficiary.name : null,
    identification: {
      identification: beneficiary ? beneficiary.identifier : null,
      schemeName: 'IBAN',
    },
  });

  /**
   * @description
   * Returns the identification of the given credit account.
   *
   * @name getCreditAccountIdentification
   * @type {function}
   *
   * @param {AccountView} creditAccount
   * @returns {CreditAccountIdentification}
   * @inner
   */
  const getCreditAccountIdentification = creditAccount => ({
    identification: {
      identification: creditAccount ? creditAccount.id : null,
      schemeName: 'ID',
    },
  });

  /**
   * @description
   * Returns the creditor account of the given beneficiary.
   *
   * @name getCreditorAccount
   * @type {function}
   *
   * @param {AccountView} beneficiary
   * @returns {ContactIdentification|CreditAccountIdentification}
   * @inner
   */
  const getCreditorAccount = beneficiary => (
    isExternalBeneficiary(beneficiary)
      ? getContactIdentification(beneficiary)
      : getCreditAccountIdentification(beneficiary)
  );

  /**
   * @description
   * Returns a day of a recurring payment for the given schedule.
   *
   * @name getScheduleRecurringDay
   * @type {function}
   *
   * @param {Schedule} schedule
   * @returns {number}
   * @inner
   */
  const getScheduleRecurringDay = schedule => {
    const { startDate, transferFrequency } = schedule;
    const date = new Date(startDate);

    if (transferFrequency === TransferFrequency.WEEKLY) {
      const dayOfWeek = date.getDay();
      return dayOfWeek === 0 ? 7 : dayOfWeek;
    }

    if (transferFrequency === TransferFrequency.MONTHLY) {
      return date.getDate();
    }

    if (transferFrequency === TransferFrequency.YEARLY) {
      return date.getMonth() + 1;
    }

    return null;
  };

  /**
   * @description
   * Creates a payload for the payment schedule.
   *
   * @name getSchedulePayload
   * @type {function}
   *
   * @param {Schedule} schedule
   * @returns {SchedulePayload}
   * @inner
   */
  const getSchedulePayload = schedule => {
    const { end, endDate, every, repeat, startDate, transferFrequency } = schedule;
    const on = getScheduleRecurringDay(schedule);

    const schedulePayload = {
      every,
      startDate,
      transferFrequency,
    };

    if (on) {
      Object.assign(schedulePayload, { on });
    }

    if (end === RecurrenceEnding.ON) {
      Object.assign(schedulePayload, { endDate });
    }

    if (end === RecurrenceEnding.AFTER) {
      Object.assign(schedulePayload, { repeat });
    }

    return schedulePayload;
  };

  /**
   * @description
   * Creates a payload for making a payment.
   *
   * @name getPaymentPayload
   * @type {function}
   *
   * @param {Payment} payment
   * @returns {PaymentPayload}
   * @inner
   */
  const getPaymentPayload = payment => {
    const { debitAccount = {}, beneficiary, schedule, amount, additions } = payment;
    const creditorAccount = getCreditorAccount(beneficiary);

    const payload = {
      debtorAccount: {
        arrangementId: debitAccount.id,
        identification: {
          schemeName: 'ID',
          identification: debitAccount.id,
        },
        name: debitAccount.name,
      },
      requestedExecutionDate: schedule.startDate,
      paymentMode: isRecurring(schedule) ? PaymentMode.RECURRING : PaymentMode.SINGLE,
      creditTransferTransactionInformation: [{
        instructedAmount: {
          amount: amount.value,
          currencyCode: amount.currency,
        },
        creditor: {
          name: beneficiary.name,
        },
        creditorAccount,
      }],
    };

    if (payment.urgent) {
      Object.assign(payload, { instructionPriority: 'HIGH' });
    }

    if (payment.description) {
      Object.assign(payload.creditTransferTransactionInformation[0], {
        remittanceInformation: payment.description,
      });
    }

    if (isRecurring(schedule)) {
      Object.assign(payload, {
        schedule: getSchedulePayload(schedule),
      });
    }

    if (additions) {
      Object.assign(payload, { additions });
    }

    return hooks.processPaymentPayload(payload, payment);
  };

  /**
   * @description
   * Creates a payload for creating a contact.
   *
   * @name getContactPayload
   * @type {function}
   *
   * @param {AccountView} contact
   * @returns {ContactCreatePayload}
   * @inner
   */
  const getContactPayload = contact => ({
    accounts: [{
      IBAN: contact.identifier,
    }],
    name: contact.name,
  });

  /**
   * @description
   * Shows the pin confirmation screen
   *
   * @name showPin
   * @type {function}
   *
   * @fires bb.payment.show.pin
   * @inner
   */
  const showPin = () => (
    bus.publish(Event.SHOW_PIN)
  );


  /**
   * @description
   * Subscribes to the event that will be fired once the pin is successful
   * and calls the showPin function which will show the pin verification screen
   *
   * @name authorizePayment
   * @type {function}
   * @inner
   */
  const authorizePayment = () => (
    new Promise((resolve) => {
      bus.subscribe(Event.PIN_CONFIRMATION_SUCCESSFUL, resolve);

      showPin();
    })
  );

  /**
   * @description
   * Checks whether the payment should be authorized via pin code and
   * calls the pin code screen if needed or resolves immediately so the payment
   * can continue
   *
   * @name authorizePaymentIfNeeded
   * @type {function}
   *
   * @returns {Promise.<void>}
   * @inner
   */
  const authorizePaymentIfNeeded = () => (
    preferences.showPin
      ? authorizePayment()
      : Promise.resolve()
  );

  /**
   * @description
   * Makes a payment.
   *
   * @name makePayment
   * @type {function}
   *
   * @fires bb.event.payment.done
   * @fires bb.event.payment.failed
   * @fires bb.event.payment.started
   *
   * @returns {Promise.<void>}
   * @inner
   */
  const makePayment = () => {
    const payment = viewModel.getPayment();
    const payload = getPaymentPayload(payment);

    bus.publish(Event.PAYMENT_START);

    viewModel.setPaymentLoading(true);

    return model.createPaymentOrder(payload)
      .then(() => {
        viewModel.setPaymentError(null);
        viewModel.setPaymentLoading(false);

        bus.publish(Event.PAYMENT_DONE);
      })
      .catch(error => {
        viewModel.setPaymentError(error); // TODO: Convert to UI error
        viewModel.setPaymentLoading(false);

        bus.publish(Event.PAYMENT_FAILED, error);

        throw error;
      });
  };

  /**
   * @description
   * Checks whether the payment should be authorized via pin code and
   * calls the pin code screen if needed
   *
   * @name makePaymentWithAuthorization
   * @type {function}
   *
   * @returns {Promise.<void>}
   * @inner
   */
  const makePaymentWithAuthorization = () => (
    authorizePaymentIfNeeded().then(() => makePayment())
  );

  /**
   * @description
   * Saves the given contact to the address book.
   *
   * @name saveContact
   * @type {function}
   *
   * @param {AccountView} contact
   * @inner
   */
  const saveContact = contact => {
    const payload = getContactPayload(contact);

    bus.publish(Event.CONTACT_CREATE_START);

    return model.createContact(payload)
      .then(() => {
        bus.publish(Event.CONTACT_CREATE_DONE);
      })
      .catch(error => {
        // TODO Convert error to UI error
        bus.publish(Event.CONTACT_CREATE_FAILED, { error });
      });
  };

  /**
   * @description
   * Saves the selected beneficiary to the address book if needed.
   *
   * @name saveContactIfNeeded
   * @type {function}
   * @inner
   */
  const saveContactIfNeeded = () => {
    if (viewModel.getSaveContact()) {
      const contact = viewModel.getSelectedBeneficiary();
      saveContact(contact);
    }
  };

  return {
    preferences,
    isUrgentPaymentAllowed,
    makePayment,
    makePaymentWithAuthorization,
    saveContactIfNeeded,
  };
};

/**
 * @typedef {Object} ContactIdentification
 * @property {string} counterpartyName Counterparty name. Only required when 'scheme'
 *   is set to IBAN/BBAN.
 * @property {string} identification Identification of the product. Different schemes
 *   are supported: IBAN, BBAN, ID
 * @property {string} scheme  The name of the scheme. For contacts is always "IBAN".
 */

/**
 * @typedef {Object} CreditAccountIdentification
 * @property {string} identification Credit account ID
 * @property {string} scheme The name of the scheme. For credit accounts is always "ID".
 */

/**
 * @typedef {Object} DebitAccountIdentification
 * @property {string} identification Debit account ID
 * @property {string} scheme The name of the scheme. For debit accounts is always "ID".
 */

/**
 * @typedef {Object} PaymentPayload
 * @property {DebitAccountIdentification} debitAccountIdentification Identification of the payment
 *   debit account
 * @property {CreditAccountIdentification} creditAccountIdentification Identification of the payment
 *   credit account
 * @property {number} amount The amount of the payment
 * @property {string} currency The alpha-3 code (complying with ISO 4217) of
 *   the currency that qualifies the amount
 * @property {string} description The description for the payment.
 * @property {string} paymentMode Denotes whether payment will be single or will be recurring.
 *   Possible values are "SINGLE" and "RECURRING"
 */

/**
 * @typedef {Object} SchedulePayload
 * @property {string} transferFrequency Denotes how frequently the transfer should be made
 * @property {number} on Denotes day on which transfer should be executed. For weekly
 *   it will be 1..7 indicating weekday. For monthly it will be 1..31 indicating day of month.
 *   For yearly it will be 1..12 indicating month of the year
 * @property {string} startDate When to start executing the schedule. First transfer
 *   will be executed on first calculated date by schedule after this date
 * @property {number} repeat Number of transfer to be executed. Only one of endDate
 *   and repeat is possible. If neither repeat nor endDate is provided transfer
 *   will be executed until canceled
 * @property {number} every Indicates skip interval of transfer.
 *   1 would mean execute every time, 2 - every other time
 * @property {?string} endDate When to stop transfers. Transfers will not be executed
 *   after this date. Only one of endDate and repeat is possible. If neither repeat
 *   nor endDate is provided transfer will be executed until canceled
 */

/**
 * @typedef {Object} ContactAccount
 * @property {string} IBAN Contact's IBAN
 */

/**
 * @typedef {Object} ContactCreatePayload
 * @property {string} name Contact's name
 * @property {Array.<ContactAccount>} accounts List of contact's accounts
 */
