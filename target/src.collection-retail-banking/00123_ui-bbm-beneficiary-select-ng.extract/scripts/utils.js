/**
 * Removes whitespaces from a given string
 * @param {string} str
 * @returns {string}
 * @inner
 */
const removeWhitespaces = (str) => (
  str.replace(/\s/g, '')
);

/**
 * @param {Object} accountA
 * @param {Object} accountB
 * @returns {boolean}
 * @inner
 */
const isSameAccount = (accountA, accountB) => Boolean(
  (accountA.name || '').trim() === (accountB.name || '').trim() &&
  (accountA.identifier || '').trim() === (accountB.identifier || '').trim()
);

/**
 * Creates a search index for the given list of accounts
 * @param {Array<object>} accounts
 * @returns {Array<object>}
 * @inner
 */
export const createSearchIndex = (accounts) => (
  (accounts || []).map(account => {
    const iban = (account.identifier || '').toLowerCase().trim();
    const name = (account.name || '').toLowerCase();
    return [
      name,
      iban,
      removeWhitespaces(iban),
    ];
  })
);

/**
 * @param {Array.<Object>} accounts
 * @param {Object} account
 * @returns {boolean}
 * @inner
 */
export const isNewBeneficiary = (accounts, account) => (
  !accounts.some(item => isSameAccount(item, account))
);

/**
 * Returns true, if the name of the given account matches
 * to the given query string. False otherwise.
 * @param {string} query
 * @param {Array<string>} accountSearchStrings
 * @returns {boolean}
 * @inner
 */
export const matches = (query, accountSearchStrings) => (
  query && accountSearchStrings.some(str => str.includes(query))
);

/*
 * Safe way of calling $scope.$apply function.
 * $scope.$apply will only be called if application is not in $apply or $digest phase.
 *
 * @param {Object} scope Angular Scope object.
 * @param {string|Function} [exp] An angular expression to be executed.
 * @inner
 */
export const safeApply = scope => exp => {
  const phase = scope.$root && scope.$root.$$phase;
  if (phase === '$apply' || phase === '$digest') {
    scope.$eval(exp);
  } else {
    scope.$apply(exp);
  }
};
