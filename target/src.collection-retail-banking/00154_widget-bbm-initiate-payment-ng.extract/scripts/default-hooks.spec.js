import * as hooks from './default-hooks';

describe('widget-bbm-initiate-payment-ng::default-hooks', () => {
  describe('processDebitAccounts', () => {
    it('should return given debit accounts', () => {
      const debitAccounts = [
        'Account A',
        'Account B',
        'Account C',
      ];

      expect(hooks.processDebitAccounts(debitAccounts)).toEqual([
        'Account A',
        'Account B',
        'Account C',
      ]);
    });
  });

  describe('processBeneficiaries', () => {
    it('should merge given credit accounts and contacts', () => {
      const creditAccounts = [
        'Account A',
        'Account B',
        'Account C',
      ];

      const contacts = [
        'Contact A',
        'Contact B',
        'Contact C',
      ];

      expect(hooks.processBeneficiaries(creditAccounts, contacts)).toEqual([
        'Account A',
        'Account B',
        'Account C',
        'Contact A',
        'Contact B',
        'Contact C',
      ]);
    });
  });

  describe('processPaymentPayload', () => {
    it('should return the given payload', () => {
      const payload = { foo: 'bar' };
      expect(hooks.processPaymentPayload(payload)).toEqual(payload);
    });
  });
});
