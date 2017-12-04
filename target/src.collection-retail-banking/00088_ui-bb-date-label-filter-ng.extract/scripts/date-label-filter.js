import { TimePeriod } from './constants';

const getLabels = () => {
  const NOW_OFFSET = -1000 * 60 * 15; // 15 minutes
  const yesterday = new Date();

  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);

  return [{
    label: TimePeriod.NOW,
    date: new Date().setMilliseconds(NOW_OFFSET),
  }, {
    label: TimePeriod.TODAY,
    date: new Date().setHours(0, 0, 0, 0),
  }, {
    label: TimePeriod.YESTERDAY,
    date: yesterday.getTime(),
  }];
};

/**
 * Convert valid date to date label
 *
 * @name ui-bb-date-label-filter-ng.dateLabelFilter
 * @type {function}
 * @param date {string|number|Date} Date string or timestamp
 * @returns {string} Date label or date that was passed initially
 */
const dateLabelFilter = date => {
  const parsed = Number.isInteger(date) ? date : Date.parse(date);
  if (isNaN(parsed) || parsed > Date.now()) {
    return date;
  }

  const labels = getLabels();
  const dateLabel = labels.find(label => parsed >= label.date);
  return dateLabel ? dateLabel.label : date;
};

export default dateLabelFilter;
