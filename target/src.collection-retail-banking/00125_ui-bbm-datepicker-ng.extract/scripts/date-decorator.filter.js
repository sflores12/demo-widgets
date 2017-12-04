/**
 * @type {function}
 * @name dateDecoratorFilter
 * @description
 * Filter for decorating date based on the date labels.
 *
 * @param {function} $filter Filter service
 * @returns {function} Function that is used to filter
 */
export default function dateDecoratorFilter($filter) {
  return (date, dateLabels) => {
    if (!dateLabels) {
      return date;
    }
    const labelKey = $filter('dateLabel')(date);

    return dateLabels[labelKey] || date;
  };
}
