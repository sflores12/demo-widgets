/**
 * @type {function}
 * @description
 * A factory to get a function that returns currency's symbol based on ISO code
 *
 * @param {function} getRule Library's method to get currency related format rules
 * @returns {function}
 */
export default (getRule) => ({ getRule });
