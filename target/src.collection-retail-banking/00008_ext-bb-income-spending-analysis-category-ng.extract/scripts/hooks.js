import getStyle from 'lib-bb-styles';

/**
 * @name processAnalysisCategorySeries
 * @type {function}
 *
 * @description
 * Hook for income/spending chart series object post processing
 *
 * @param {module:model-bb-income-spending-analysis-category-ng.BBSeries} series chart series data
 * @param {module:model-bb-income-spending-analysis-category-ng.AnalysisCategoryData} data
 * @returns {AnalysisCategoryBBSeries} processed series
 */
const processAnalysisCategorySeries = (series, data) => {
  // applies background colors from the theme to chart slices
  const colors = [];
  series.labels.forEach((categoryName, index) => {
    // convert category name to category class
    const categoryClass = categoryName
      .replace(/[^\w]|[\s]/g, '-')
      .replace(/-{2,}/g, '-')
      .toLowerCase();

    colors[index] = getStyle(`.bb-transaction-category-${categoryClass}`, 'color');
  });

  Object.assign(series.datasets[0], {
    backgroundColor: colors,
    borderWidth: 0,
  });

  let totalPortion = 0;
  const analysisItems = data.items.map(item => {
    totalPortion += item.portion;
    return Object.assign(item, { totalPortion });
  });

  return Object.assign(series, { analysisItems });
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
 * @name processLoadError
 * @type {function}
 *
 * @description
 * Overwrite the default hook and don't return passed error
 *
 * @param {error} The error passed
 * @returns {*} null
 */
const processLoadError = () => null;

export default {
  processAnalysisCategorySeries,
  processTurnoverSeries,
  onTurnoversUpdate,
  processLoadError,
};
