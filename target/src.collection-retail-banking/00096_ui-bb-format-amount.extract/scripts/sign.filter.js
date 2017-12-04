/**
 * @type {function}
 * @name signFilter
 * @description
 * Filter for currency formatting with an option to add + sign for positive values
 *
 * @param {object} $locale Localization service
 * @param {function} $filter Filter service
 * @returns {function} Function that is used to filter
 */
export default function signFilter($locale, $filter) {
  return (value, symbol, decimals, sign) => {
    if (!sign) {
      return $filter('currency')(value, symbol, decimals);
    }

    const patterns = $locale.NUMBER_FORMATS.PATTERNS[1];
    const { posPre, posSuf } = patterns;

    patterns.posPre = patterns.negPre.replace('-', '+');
    patterns.posSuf = patterns.negSuf.replace('-', '+');

    const formatted = $filter('currency')(value, symbol, decimals);
    Object.assign(patterns, { posPre, posSuf });
    return formatted;
  };
}
