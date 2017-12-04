import { CreditTransactionFilter } from './credit-transaction';

describe('CreditTransactionFilter', () => {
  describe('on creation', () => {

    it('takes amount from input trigger', () => {
      const trigger = {
        filter: { gte: [{ pathValue: ['transaction.amount']}, 543]},
        selectors: []
      };

      const filter = new CreditTransactionFilter(trigger);

      expect(filter.amount.value).toBe('543');
    });

    it('takes condition from input trigger', () => {
      const trigger = {
        filter: { eq: [{ pathValue: ['transaction.amount']}, 543]},
        selectors: []
      };

      const filter = new CreditTransactionFilter(trigger);

      expect(filter.condition).toBe('eq');
    });

    it('maps correct account', () => {
      const trigger = {
        filter: { gte: [{ pathValue: ['transaction.amount']}, 543]},
        selectors: [{
          path: 'transaction.arrangementId',
          value: 'account-id-123'
        }]
      };

      const accounts = [{
        id: 'account-id-9000',
        name: 'Account 9000',
      }, {
        id: 'account-id-123',
        name: 'Account 123',
      }];

      const filter = new CreditTransactionFilter(trigger, accounts);

      expect(filter.account.name).toBe('Account 123');
    });

    it('defaults to greater than or equals condition', () => {
      expect(new CreditTransactionFilter().condition).toBe('gte');
    });

    it('defaults to 0 amount', () => {
      expect(new CreditTransactionFilter().amount.value).toBe('0');
    });

    it('has a template ID', () => {
      expect(new CreditTransactionFilter().templateId).toBe('credit-transaction');
    });
  });

  it('is not valid if account is not selected', () => {
    const filter = new CreditTransactionFilter();
    filter.account = null;
    expect(filter.validate()).toBe(false);
  });

  it('is not valid if amount is negative', () => {
    const filter = new CreditTransactionFilter();
    filter.amount = { value: '-5' };
    expect(filter.validate()).toBe(false);
  });

  it('is not valid if amount is zero', () => {
    const filter = new CreditTransactionFilter();
    filter.amount = { value: '-5' };
    expect(filter.validate()).toBe(false);
  });

  it('is valid if account is selected and amount is greater than 0', () => {
    const filter = new CreditTransactionFilter();
    filter.account = { id: 'mock-account-123'};
    filter.amount = { value: '123' };
    expect(filter.validate()).toBe(true);
  });

  describe('converts to API model and', () => {
    it('puts account id into as a selector', () => {
      const filter = new CreditTransactionFilter();
      filter.account = { id: 'mock-account-123'};
      const apiModel = filter.toApiModel();
      expect(apiModel.selectors[0].path).toBe('transaction.arrangementId');
      expect(apiModel.selectors[0].value).toBe('mock-account-123');
    });

    it('adds credit transaction type filter', () => {
      const filter = new CreditTransactionFilter();
      filter.account = {};
      const apiModel = filter.toApiModel();
      expect(apiModel.filter.and[0].eq)
        .toEqual([{ pathValue: ['transaction.creditDebitIndicator'] }, 'CRDT']);
    });

    it('adds transaction amount filter with inputted amount and condition', () => {
      const filter = new CreditTransactionFilter();
      filter.account = {};
      filter.amount = { value: '123.45'};
      const apiModel = filter.toApiModel();
      expect(apiModel.filter.and[1])
        .toEqual({gte: [{ pathValue: ['transaction.amount'] }, 123.45]});
    })
  });

  describe('account change', () => {
    it('retains the previous amount value', () => {
      const amount = 13.37;

      const filter = new CreditTransactionFilter();
      filter.amount = { value:  amount, currency: 'USD' };

      filter.changeAccount({ id: '1', currency: 'USD'});

      expect(filter.amount.value).toBe(amount);
    });

    it('assigns currency of the new account', () => {
      const currency = 'EUR';

      const filter = new CreditTransactionFilter();
      filter.amount = { value:  13.37, currency: 'USD' };
      filter.changeAccount({ id: '1', currency});

      expect(filter.amount.currency).toBe(currency);
    });

    it('keeps reference to the new account', () => {
      const account = { id: '1', currency: 'USD'};

      const filter = new CreditTransactionFilter();
      filter.amount = { value: 13.37, currency: 'EUR'};
      filter.account = {};

      filter.changeAccount(account);

      expect(filter.account).toEqual(account);
    });
  });
});