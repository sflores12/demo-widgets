import { TimePeriod } from './constants';

const helpers = (context) => {
  const i18nFilter = context.$filter('i18n');

  const statusLabel = {
    SINGLE: i18nFilter('payment.status.single'),
    RECURRING: i18nFilter('payment.status.recurring'),
  };

  return {
    /**
     * @description
     * Returns either label like now, today or yesterday or the actual date
     *
     * @name dateLabel
     * @type {function}
     * @param {string} label date
     *
     * @returns {string}
     */
    dateLabel: (label) => i18nFilter(TimePeriod[label]) || label,
    /**
     * @description
     * Contains translated strings of payment modes
     *
     * @name statusLabel
     * @type {Object}
     *
     * @returns {string}
     */
    statusLabel,
  };
};

export default helpers;
