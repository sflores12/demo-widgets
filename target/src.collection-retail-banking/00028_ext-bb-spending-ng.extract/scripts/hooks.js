import getStyle from 'lib-bb-styles';

/**
 * @name processSpendingSeries
 * @type {function}
 *
 * @description
 * Hook for spending chart series object post processing
 *
 * @param {module:model-bb-spending-ng.BBSeries} series chart series data
 * @param {module:model-bb-spending-ng.Spending} data original spending object
 * @returns {SpendingsBBSeries} processed series
 */
const processSpendingSeries = (series, data) => {
  // applies background colors from the theme to chart slices
  const colors = [];
  series.labels.forEach((categoryName, index) => {
    // convert category name to category class
    const categoryClass = categoryName
      .replace(/[^\w\s]/g, '-')
      .replace(/[\s]/g, '')
      .toLowerCase();

    colors[index] = getStyle(`.bb-transaction-category-${categoryClass}`, 'color');
  });

  Object.assign(series.datasets[0], {
    backgroundColor: colors,
    borderWidth: 0,
  });

  let totalPortion = 0;
  const spendings = data.items.map(item => {
    totalPortion += item.portion;
    return Object.assign(item, { totalPortion });
  });

  return Object.assign(series, { spendings });
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
const processLoadError = () => null;

export default {
  processSpendingSeries,
  processLoadError,
};
