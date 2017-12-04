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

  const isRecurring = schedule => schedule.transferFrequency !== TransferFrequency.ONCE;

  return {
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
  };
};
