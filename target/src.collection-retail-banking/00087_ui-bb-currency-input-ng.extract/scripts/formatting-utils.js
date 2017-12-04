const utils = {
  // (haystack: String, needles: Array<String>) => Number
  // eg. ('foo', ['o']) => 2
  occurrences: (haystack, needles) =>
    needles
      // get counts
      .map((needle) => {
        const matches = needle
          .replace(/\[/g, '\\[')
          .replace(/]/g, '\\]');
        return (
          haystack.match(new RegExp(`[${matches}]`, 'g')) || []
        ).length;
      })
      // sum counts
      .reduce((prev, cur) => prev + cur, 0),

  // (currencyString: String) => Number
  // eg. "$123.00" => 123.00, "EUR123.00" => 123.00
  toFloat: (currencyString) => parseFloat(currencyString.replace(/[^0-9.]/g, ''), 10),

  // (array: Array) => Array
  // eg. [1,2,2] => [1,2]
  uniq: (array) =>
    array.reduce((prev, cur) => (prev.indexOf(cur) > -1 ? prev : prev.concat(cur)), []),

  // (a: String, b: String) => Array<String>
  // eg. "1,323.00", "$123.00" => ["$", ","]
  uniqueChars: (a, b) => utils.uniq(
    b.split('').filter(char => !~a.indexOf(char)).concat(
    a.split('').filter(char => !~b.indexOf(char)))
  ),

  // (a: String, b: String) => Array<String>
  // eg. "1,234,000.00", "1,234000.00" => [","]
  diffChars: (a, b) => {
    const aChars = a.match(/\D/g) || [];
    const bChars = b.match(/\D/g) || [];

    const calc = (list) => {
      const res = {};
      list.forEach(item => {
        if (res[item]) {
          res[item]++;
        } else {
          res[item] = 1;
        }
      });
      return res;
    };

    const diff = (l1, l2, res = []) => {
      Object.keys(l1).forEach((i) => {
        if ((i in l2 && l1[i] > l2[i]) || !l2[i]) {
          res.push(i);
        }
      });
      return res;
    };

    const aMatch = calc(aChars);
    const bMatch = calc(bChars);

    return diff(aMatch, bMatch, diff(bMatch, aMatch));
  },

  // (number: Number, limit: Number) => Number
  // eg. (1234, 6) => 1234, (1234, 3) => 123
  truncateNumber: (number, limit) => {
    let truncatedNumber = number;
    while (Math.log10(truncatedNumber) >= limit) {
      truncatedNumber = Math.floor(truncatedNumber / 10);
    }
    return truncatedNumber;
  },

  // (number: Number, formatted: String) => Number
  // eg. (1234, "1,234") => 1, (123, "123") => 0
  specialCharsCount: (number, formatted) => {
    if (!number || !formatted) {
      return 0;
    }
    const specialCharacters = utils.uniqueChars(number, formatted);
    return utils.occurrences(formatted, specialCharacters);
  },
};

export default utils;
