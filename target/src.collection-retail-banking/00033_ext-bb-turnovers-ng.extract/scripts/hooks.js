import getStyle from 'lib-bb-styles';
import { periodToDate, getDefaultPeriod } from './helpers';

/**
 * @name defaultPeriodStart
 * @type {function}
 *
 * @description
 * Sets period start property on init
 *
 * @returns {string} Start period string in format yyyy-mm-dd
 */
const defaultPeriodStart = () => periodToDate(getDefaultPeriod());

/**
 * @name defaultInterval
 * @type {function}
 *
 * @description
 * Sets interval property on init
 *
 * @param {module:widget-bb-turnovers-ng.Interval} interval Available intervals
 * @returns {string} One of the available intervals
 */
const defaultInterval = (interval) => interval.MONTH;

/**
 * @name onTurnoversUpdate
 * @type {function}
 *
 * @description
 * Process parameters before they are sent to the model's load method
 *
 * @param {object} params to process
 * @returns {object} processed params
 */
const onTurnoversUpdate = params => {
  // make sure that period start date covers the whole month at the beginning
  // other intervals are not covered because extension doesn't have them as an option
  const startDate = new Date(params.periodStartDate);
  startDate.setDate(params.intervalStartDay);
  Object.assign(params, {
    periodStartDate: startDate.toISOString().slice(0, 10),
  });

  return params;
};

/**
 * @name processTurnoverSeries
 * @type {function}
 *
 * @description
 * Default hook for turnovers chart series object post processing
 *
 * @param {module:model-bb-turnovers-ng.BBSeries} series chart series data
 * @param {module:model-bb-turnovers-ng.Turnover} data original turnover object
 * @returns {TurnoversBBSeries} processed series
 */
const processTurnoverSeries = (series, data) => {
  series.datasets.forEach((dataset, index) => {
    const datasetColor = getStyle(`.chart-bar-dataset-${index}`, 'color');
    Object.assign(dataset, {
      backgroundColor: datasetColor,
      hoverBackgroundColor: datasetColor,
    });
  });

  return Object.assign(series, {
    datasets: series.datasets.reverse(),
    original: data,
    updated: true,
  });
};

/**
 * @name processLoadError
 * @type {function}
 *
 * @description
 * Overwrite the default hook and don't return passed error
 *
 * @param {error} The error passed
 * @returns {string} The actual error
 */
const processLoadError = err => err;

export default {
  defaultPeriodStart,
  defaultInterval,
  onTurnoversUpdate,
  processTurnoverSeries,
  processLoadError,
};
