import { transferFrequencies } from './constants';

const crossCurrencyMessages = { 'cross-currency': true };
const minOccurrences = 2;
const maxOccurences = 200;
const maxDigits = 13;
const expanded = {};
const descriptionCharCounterConfig = {
  blockTyping: true,
};

/**
 * @description
 * Returns cross currency messages if they should be shown
 *
 * @name showCrossCurrencyMessage
 * @type {function}
 * @param {object} controller Widget controller
 * @returns {object} Cross currency messages
 */
const showCrossCurrencyMessage = $ctrl => {
  const isRateVisible = $ctrl.paymentPreferences.showExchangeRate && $ctrl.rate &&
    $ctrl.payment.from && parseFloat($ctrl.payment.amount.value);
  const isDifferentCurrencies = $ctrl.payment.amount.currency !==
    ($ctrl.payment.from ? $ctrl.payment.from.currency : $ctrl.payment.amount.currency);

  return isRateVisible && isDifferentCurrencies ? crossCurrencyMessages : null;
};

/**
 * @description
 * Checks if layout should show 'Urgent payment' switcher
 *
 * @name canSelectUrgentPayment
 * @type {function}
 * @param {object} $ctrl Widget controller
 * @returns {boolean} True if urget payment switchet should be shown, false otherwise
 */
const canSelectUrgentPayment = $ctrl => {
  const debitAccount = $ctrl.payment.from || {};
  return !!($ctrl.paymentPreferences.urgent && debitAccount && debitAccount.urgentTransferAllowed);
};

/**
 * @description
 * Resets payment order
 *
 * @name resetPayment
 * @type {function}
 * @param {object} $ctrl Widget controller
 * @param {object} scope Template scope
 *
 * @returns {Promise<any>}
 */
const resetPayment = ($ctrl, scope) =>
  $ctrl.resetPayment().then(() => {
    Object.assign(scope, { step: 'form' });
  });

/**
 * @description
 * Makes new payment request and changes step on success
 *
 * @name makePayment
 * @type {function}
 * @param {object} $ctrl Payment controller
 * @param {object} scope Parent ng scope
 * @returns {object} Payment request Promise
 */
const makePayment = ($ctrl, scope) => $ctrl.makePayment($ctrl.payment)
  .then(() => {
    Object.assign(scope, { step: 'confirmation' });
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0);
  })
  .catch(() => {}); // Intentional empty catch block to prevent uncaught reject error

/**
 * @description
 * Handler for Account From change action
 *
 * @name onAccountChange
 * @type {function}
 * @param {object} $ctrl Payment controller
 * @param {object} selectedAccount
 * @returns {object} A Promise object
 */
const onAccountChange = ($ctrl, selectedAccount) => {
  // eslint-disable-next-line no-param-reassign
  $ctrl.payment.from = Object.assign({}, selectedAccount);
  return $ctrl.onAccountFromChange();
};

/**
 * @description
 * Toggle group in credit suggest component
 *
 * @name toggleCreditSuggestGroup
 * @type {function}
 * @param {object} event Event object
 * @param {object} model
 * @param {object} ctrl Widget's controller
 */
const toggleCreditSuggestGroup = (event, model, ctrl) => {
  // Prevent suggestion list to be closed
  event.stopPropagation();

  expanded[model.more || model.less] = !!model.more;

  ctrl.open();
};

/**
 * @name reviewPayment
 * @type {function}
 *
 * @description
 * Called when submitting payment for review, it actually calls a hook that
 * can be customized with all the validations needed by the specific project.
 *
 * @param {object} ctrl Payment controller
 * @param {object} scope Parent ng scope
 */
const reviewPayment = ($ctrl, scope) => $ctrl.reviewPayment($ctrl.payment)
  .then(() => {
    $ctrl.clearPaymentError();
    Object.assign(scope, { step: 'review' });
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0);
  });

const helpers = (context) => {
  const i18nFilter = context.$filter('i18n');
  const dateFilter = context.$filter('date');

  /**
   * @description
   * Transforms provided accounts to custom structure. External contacts account list will be
   * flattened to be molded to same structure as internal accounts
   * (identifier=IBAN/BBAN, name=contactperson).
   *
   * @name getAccounts
   * @type {function}
   * @param {array<object>} accounts
   * @returns {array<object>} View accounts
   */
  const normalizeAccounts = (accounts) => {
    if (!accounts) {
      return [].concat(accounts || []);
    }

    const internalAccountView = accounts.filter(account => !account.external);

    let externalAccountView = [];

    // add group names per contact for externals
    accounts.filter(account => account.external).forEach((contact) => {
      const contactAccounts = [];
      if (contact.accounts) {
        for (const account of contact.accounts) {
          Object.assign(account, contact, {
            identifier: account.IBAN || account.accountNumber,
            accountName: account.bankName || account.name,
            name: contact.name,
            contactPerson: contact.contactPerson || contact.name,
          });
          contactAccounts.push(account);
        }
      }
      externalAccountView = externalAccountView.concat(contactAccounts);
    });

    return [...internalAccountView, ...externalAccountView];
  };

  /**
   * @description
   * Compiles the scheduling description out of payment object params.
   *
   * In this process, following translation keys are being used:
   *
   * form.schedule.starting, for word "Starting"
   *
   * form.schedule.today, for word "Today"
   *
   * form.schedule.on, for word "On" (used before date to form "on 01.01.2017")
   *
   * form.schedule.until, for word "until" (used before date to form "until 01.01.2017")
   *
   * form.schedule.repeat.count, for word "times" (used after repeat count to form "5 times")
   *
   * and name of the transfer frequency set in constants file
   *
   * @name getScheduleText
   * @type {function}
   * @param {object} $ctrl Widget controller
   * @returns {string} Compiled text that can be used as scheduling value in views
   */
  const getScheduleText = $ctrl => {
    const { payment, EndingType, singleTransfer } = $ctrl;
    const words = [];
    const today = (new Date()).setHours(0, 0, 0, 0);
    const startDate = new Date(payment.schedule.startDate);
    const isToday = startDate.setHours(0, 0, 0, 0) === today;
    const multipleOccurrences = payment.schedule.transferFrequency.value !== singleTransfer.value;
    const hasEnd = payment.endingType !== EndingType.NEVER;

    // add frequency
    words.push(i18nFilter(payment.schedule.transferFrequency.name));
    words.push('-');

    // if there are multiple occurrences, add word starting
    if (multipleOccurrences) {
      words.push(i18nFilter('form.schedule.starting'));
    }

    // if start date is today use word instead of date
    if (isToday) {
      let todayString = i18nFilter('form.schedule.today');
      // for multiple occurrences, there is a prefix word, so this on should be lowercase
      if (multipleOccurrences) {
        todayString = todayString.toLowerCase();
      }

      words.push(todayString);
    }

    // for single transfer in the future, we need prefix word on
    if (!multipleOccurrences && !isToday) {
      words.push(i18nFilter('form.schedule.on').toLowerCase());
    }

    if (!isToday) {
      words.push(dateFilter(payment.schedule.startDate));
    }

    const hasLimitedOccurences = hasEnd && multipleOccurrences;
    const isMinOccurences = !payment.schedule.repeat || payment.schedule.repeat < minOccurrences;

    // if there are limited number of occurrences,
    // add comma for the last word, so that there is no space between them
    if (hasLimitedOccurences && !(payment.endingType === EndingType.AFTER && isMinOccurences)) {
      words[words.length - 1] += ',';
    }

    if (hasEnd && multipleOccurrences) {
      // there is an end for this schedule
      // based on the type of ending construct words differently
      if (payment.endingType === EndingType.ON) {
        words.push(i18nFilter('form.schedule.until'));
        words.push(dateFilter(payment.schedule.endDate));
      } else if (payment.schedule.repeat >= minOccurrences) {
        words.push(payment.schedule.repeat);
        words.push(payment.schedule.repeat ? i18nFilter('form.schedule.repeat.count') : '');
      }
    }

    // output everything together
    return words.join(' ');
  };

  /**
   * @description
   * Returns frequencies for payment depending on occurences number
   *
   * @name getFrequencies
   * @type {function}
   * @param {object} $ctrl Widget controller
   * @returns {array<object>} Array of transfer frequencies
   */
  const getFrequencies = $ctrl => [$ctrl.singleTransfer].concat(
    $ctrl.paymentPreferences.recurring ? transferFrequencies : []);

  /**
   * @name getMinDate
   * @type {function}
   * @description
   * Get the minimum available date for specific frequency
   *
   * @param {date} startDate
   * @param {object} transferFrequency
   * @return {date}
   */
  const getMinDate = (startDate, transferFrequency = {}) => {
    let minDate;

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
    const addDays = (toDate, days) => new Date(toDate.getTime() + (days * 24 * 60 * 60 * 1000));
    const addWeeks = (toDate, weeks) => addDays(toDate, weeks * 7);
    const addYears = (toDate, years) => new Date(toDate.getFullYear() + years,
      toDate.getMonth(), (toDate.getDate() > daysInMonth(toDate.getMonth(),
        toDate.getFullYear()) ? daysInMonth(toDate.getMonth(),
        toDate.getFullYear()) : toDate.getDate()));
    const addMonths = (toDate, months) => {
      const newMonth = toDate.getMonth() + months + 1 > 12 ?
        ((toDate.getMonth() + months + 1) % 12) - 1 : toDate.getMonth() + months;
      const newYear = toDate.getMonth() + months + 1 > 12 ?
        addYears(toDate, 1).getFullYear() : toDate.getFullYear();
      const newDay = toDate.getDate() > daysInMonth(newMonth, newYear) ?
        daysInMonth(newMonth, newYear) : toDate.getDate();
      return new Date(newYear, newMonth, newDay);
    };

    switch (transferFrequency.value) {
      case 'DAILY':
        minDate = addDays(startDate, transferFrequency.every);
        break;
      case 'WEEKLY':
        minDate = addWeeks(startDate, transferFrequency.every);
        break;
      case 'MONTHLY':
        minDate = addMonths(startDate, transferFrequency.every);
        break;
      case 'QUARTERLY':
        minDate = addMonths(startDate, (transferFrequency.every * 3));
        break;
      case 'YEARLY':
        minDate = addYears(startDate, transferFrequency.every);
        break;
      default:
        minDate = startDate;
    }

    return minDate;
  };


  return {
    minOccurrences,
    maxOccurences,
    maxDigits,
    descriptionCharCounterConfig,
    showCrossCurrencyMessage,
    normalizeAccounts,
    canSelectUrgentPayment,
    getScheduleText,
    getFrequencies,
    resetPayment,
    makePayment,
    reviewPayment,
    toggleCreditSuggestGroup,
    onAccountChange,
    getMinDate,
  };
};

export default helpers;
