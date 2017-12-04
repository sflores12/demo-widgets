/**
 * @type {function}
 * @name wrapFilter
 * @description
 * Filter used to wrap numbers (whole and decimal part) and decimal point in HTML wrappers.
 *
 * @param {object} $locale Localization service
 * @param {object} $sce SCE Service
 * @returns {function} Function that is used to wrap the value
 */
export default function wrapFilter($locale, $sce) {
  const CLASS_SIGN = 'amount-sign';
  const CLASS_WHOLE = 'amount-whole-number';
  const CLASS_POINTS = 'amount-decimal-points';
  const CLASS_DECIMALS = 'amount-decimals';
  const CLASS_CURRENCY = 'amount-currency';
  // . is special sign, we need to prefix it with \\ if it is a decimal point
  const groupPrefix = $locale.NUMBER_FORMATS.GROUP_SEP === '.' ? '\\' : '';
  const pointPrefix = $locale.NUMBER_FORMATS.DECIMAL_SEP === '.' ? '\\' : '';
  const groupRegExp = `${groupPrefix}${$locale.NUMBER_FORMATS.GROUP_SEP}`;
  const decimalRegExp = `${pointPrefix}${$locale.NUMBER_FORMATS.DECIMAL_SEP}`;
  // construct search RegExp
  const exp = `(\\+|-)?([^0-9]+)?([\\d|${groupRegExp}]+)(${decimalRegExp})(\\d+)(.+)?`;
  const search = new RegExp(exp);

  /**
   * @type {function}
   * @inner
   * @name wrapRegExpGroup
   * @description
   * RegExp replace string builder
   *
   * @param {number} groupIndex Replace index
   * @param {boolean} wrapRequested Is wrapping for this group requested
   * @param {string} wrapClass CSS class of the wrapper
   */
  const wrapRegExpGroup = (groupIndex, wrapRequested, wrapClass) => {
    if (wrapRequested) {
      return `<span class="${wrapClass}">$${groupIndex}</span>`;
    }

    return `$${groupIndex}`;
  };

  return (value, whole, decimals, currency) => {
    if (value) {
      // wrap configuration array containing object with flag for wrapping
      // and wrapping class that should be used if wrapping is requested
      const wrapConfig = [
        { requested: whole, cssClass: CLASS_SIGN },
        { requested: currency, cssClass: CLASS_CURRENCY },
        { requested: whole, cssClass: CLASS_WHOLE },
        { requested: decimals, cssClass: CLASS_POINTS },
        { requested: decimals, cssClass: CLASS_DECIMALS },
        { requested: currency, cssClass: CLASS_CURRENCY },
      ];

      let replace = '';
      for (let i = 0; i < wrapConfig.length; i++) {
        replace += wrapRegExpGroup(i + 1, wrapConfig[i].requested, wrapConfig[i].cssClass);
      }
      // wrap it up
      const wrapped = value.replace(search, replace);
      // clear empty span elements
      const cleaned = wrapped.replace(new RegExp('<span[^<>]+><\\/span>', 'g'), '');
      return $sce.trustAsHtml(cleaned);
    }

    return '';
  };
}
