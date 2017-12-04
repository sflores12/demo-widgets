const helpers = () => {
  const cardPrefixMask =
    '\u25CF\u25CF\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF ';

  return {
    /**
	 * @description
	 * Sets a prefix for a number property which contains last
	 * 4 characters for a card number
	 *
	 * @name maskCardNumber
	 * @type {function}
	 * @param {string} number
	 * @returns {string} prefix + number
	 */
    maskCardNumber: (number) => cardPrefixMask + number,
  };
};

export default helpers;

