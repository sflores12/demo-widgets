/**
 * Currency symbols
 * @type {object}
 * @inner
 */
const CurrencySymbol = {
  EUR: '€',
  GBP: '£',
  USD: '$',
};

/**
 * @param {number} amount
 * @param {number} decimalLength
 * @return {string}
 * @inner
 */
export const formatAmount = (amount, decimalLength) => (
  amount.toFixed(decimalLength).replace(/./g, (char, idx, amountStr) => (
    idx && char !== '.' && ((amountStr.length - idx) % 3 === 0) ? `,${char}` : char
  ))
);

/**
 * TODO: Use a currency symbol filter once it is implemented
 * @param {object} currency
 * @return {string}
 * @inner
 */
export const getCurrencySymbol = (currency) => {
  if (currency && {}.hasOwnProperty.call(CurrencySymbol, currency)) {
    return CurrencySymbol[currency];
  }
  return '';
};

/**
 * Returns decimal mark
 * @returns {string}
 * @inner
 */
export const getDecimalMark = () => ',';

/**
 * @param {string} str
 * @param {boolean} [allowPeriod]
 * @return {boolean}
 * @inner
 */
export const isInputValid = (str, allowPeriod) => {
  const reg = allowPeriod ? /^\d+(\.\d+)?$/ : /^\d+$/;
  return reg.test(str);
};

/**
 * @param {string} str
 * @param {number} len
 * @param {string} padWith
 * @inner
 */
export const padRight = (str, len, padWith) => {
  if (str.length < len) {
    return str + padWith.repeat(len - str.length);
  }
  return str;
};

/**
 * @param {string} amountStr
 * @return {number}
 * @inner
 */
export const parseAmount = (amountStr) => {
  if (amountStr === '.') {
    return 0;
  }
  return Number(amountStr);
};

/**
 * Sets the given value to the given input
 * without resetting a caret position when possible
 * @param {Element} input
 * @param {string} value
 * @inner
 */
export const setInputValue = (input, value) => {
  if (input.val() !== value) {
    input.val(value);
  }
};

/**
 * Removes leading zeros from a given string.
 * Preserves a single zero when needed.
 * Examples:
 *   "000123" => "123"
 *   "000" => "0"
 *   "0" => "0"
 *   "" => ""
 * @param {string} str
 * @inner
 */
export const stripLeadingZeros = (str) => {
  if (/^0+$/.test(str)) {
    return '0';
  }
  return str.replace(/^0+/, '');
};

/**
 * Splits a given amount to integer and decimal parts.
 * @param {number} amount
 * @param {number} integerLength
 * @param {number} decimalLength
 * @return {object}
 * @inner
 */
export const splitAmount = (amount, integerLength, decimalLength) => {
  let integer = '';
  let decimal = '';

  if (amount > 0) {
    const parts = String(amount).split('.');

    integer = (parts[0] || '').substr(0, integerLength);
    decimal = padRight(parts[1] || '', decimalLength, '0').substr(0, decimalLength);
  }

  return {
    integer,
    decimal,
  };
};
