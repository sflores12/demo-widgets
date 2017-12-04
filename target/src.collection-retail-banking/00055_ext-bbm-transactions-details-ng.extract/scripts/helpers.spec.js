import { positiveSignKey, negativeSignKey } from './debit-credit-sign';
import transactionHelpers from './helpers';

describe('helpers', () => {
  const helpers = transactionHelpers();

  describe('getSignedAmount() should return', () => {
    it('positive value if sign is ' + positiveSignKey, () => {
      const transaction = {
        creditDebitIndicator: positiveSignKey,
        amount: 1.23,
      };

      const actual = helpers.getSignedAmount(transaction);
      const expected = 1.23;

      expect(actual).toEqual(expected);
    });

    it('negative value if sign is ' + negativeSignKey, () => {
      const transaction = {
        creditDebitIndicator: negativeSignKey,
        amount: 1.23,
      };

      const actual = helpers.getSignedAmount(transaction);
      const expected = -1.23;

      expect(actual).toEqual(expected);
    });
  });
});
