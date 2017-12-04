import { positiveSignKey, negativeSignKey } from './debit-credit-sign';
import CATEGORY_CLASS_PREFIX from './constants';
import transactionHelpers from './helpers';

const filter = {
  $filter: () => (key) => key
};

const helpers = transactionHelpers(filter);

describe('helpers', () => {

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

  describe('getCategoryIconClass() should return', () => {
    it('lowercase version of category name', () => {
      const transactionCategory = 'Home';
      const actual = helpers.getCategoryIconClass(transactionCategory);
      const expected = `${CATEGORY_CLASS_PREFIX}home`;

      expect(actual).toEqual(expected);
    });

    it('dashes instead of all non-word and non-digit characters', () => {
      const transactionCategory = 'Video games';
      const actual = helpers.getCategoryIconClass(transactionCategory);
      const expected = `${CATEGORY_CLASS_PREFIX}video-games`;

      expect(actual).toEqual(expected);
    });

    it('names with trimmed dashes after initial conversion', () => {
      const transactionCategory = 'Food & Drinks 2';
      const actual = helpers.getCategoryIconClass(transactionCategory);
      const expected = `${CATEGORY_CLASS_PREFIX}food-drinks-2`;

      expect(actual).toEqual(expected);
    });

    it('converts empty values to "uncategorized" class', () => {
      const transactionCategory = '';
      const actual = helpers.getCategoryIconClass(transactionCategory);
      const expected = `${CATEGORY_CLASS_PREFIX}uncategorized`;

      expect(actual).toEqual(expected);
    });
  });
});
