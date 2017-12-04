import { createAccountModel, getExtendedAccountModelFlat } from './account-model';
import { ExternalType } from './constants';

const externalId = ExternalType.IDENTIFIER;
const containing = jasmine.objectContaining;

describe('model-bb-payment-orders-ng::account-model', function () {
  describe('createAccountModel()', function () {
    it('maps default object', function () {
      const input = { id: 1 };
      const expected = containing(input);

      expect(createAccountModel()(input)).toEqual(expected);
    });

    it('maps currentAccounts object', function () {
      const input = { availableBalance: 1, IBAN: 1, id: 2 };
      const expected = containing({ amount: 1, identifier: 1, id: 2 });

      expect(createAccountModel('currentAccounts')(input)).toEqual(expected);
    });

    it('maps savingsAccounts object', function () {
      const input = { bookedBalance: 1, IBAN: 2, BBAN: 1 };
      const expected = containing({ amount: 1, identifier: 2 });

      expect(createAccountModel('savingsAccounts')(input)).toEqual(expected);
    });

    it(`maps ${externalId} object`, function () {
      const input = { name: 'Contact', accounts: [{ IBAN: 1 }], imageAvatar: 'data:image/jpeg,123==' };
      const expected = containing({ name: 'Contact', external: true, identifier: 1, imageAvatar: 'data:image/jpeg,123==' });

      expect(createAccountModel(externalId)(input)).toEqual(expected);
    });
  });

  describe('getExtendedAccountModelFlat()', function () {
    it('chooses IBAN first', function () {
      const input = [{ availableBalance: 1, IBAN: 1, BBAN: 2, id: 2 }];

      expect(getExtendedAccountModelFlat(input)[0].identifier).toEqual(1);
    });

    it('chooses BBAN next', function () {
      const input = [{ availableBalance: 1, BBAN: 2, productNumber: 3, id: 2 }];

      expect(getExtendedAccountModelFlat(input)[0].identifier).toEqual(2);
    });

    it('chooses productNumber next', function () {
      const input = [{ availableBalance: 1, productNumber: 3,
        creditCardAccountNumber: 123412341234, cardNumberSuffix: 1234, id: 2 }];

      expect(getExtendedAccountModelFlat(input)[0].identifier).toEqual(3);
    });

    it('chooses card number lastly', function () {
      const input = [{ availableBalance: 1,
        creditCardAccountNumber: 123412341234, cardNumberSuffix: 1234, id: 2 }];

      expect(getExtendedAccountModelFlat(input)[0].identifier).toEqual("XXXX-XXXX-XXXX-1234");
    });

    it('chooses availableBalance first', function () {
      const input = [{ availableBalance: 1, bookedBalance: 2, IBAN: 1, id: 2 }];

      expect(getExtendedAccountModelFlat(input)[0].amount).toEqual(1);
    });

    it('chooses bookedBalance lastly', function () {
      const input = [{ bookedBalance: 2, IBAN: 1, id: 2 }];

      expect(getExtendedAccountModelFlat(input)[0].amount).toEqual(2);
    });
  });
});
