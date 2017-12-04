import Model from './transactions';
import { BbStorageKeys } from './constants';

describe('model-bb-transactions-ng::model', function() {
  const widget = {};
  const transactionsData = { headers: () => {}, data: [
    {"id":1,"arrangementId":"02c0cae4-168c-48ff-bb17-f2c7e4ba9aeb","externalId":"EXTERNAL1","externalArrangementId":"6c4d8977-af17-41cf-874b-f3cf4ef23357","productId":"1cdb2224-8926-4b4d-a99f-1c9dfbbb4699","reference":"BCA-358164","description":null,"typeGroup":"Loans","type":"SEPA DD","category":"Games","bookingDate":"2018-01-21","valueDate":"2017-10-09","amount":821845.55,"currency":"USD","creditDebitIndicator":"CRDT","instructedAmount":123657.37,"instructedCurrency":"ALL","currencyExchangeRate":1.31,"counterPartyName":"Cheryl Stone","counterPartyAccountNumber":"LB36 4694 114P U1JS VFWU WS3M 6L32"},
    {"id":2,"arrangementId":"4a2dfdfc-e18c-4e28-baa2-cb2807e3c406","externalId":"EXTERNAL2","externalArrangementId":"1681e13d-4524-49d3-8bcf-dd09ccd37d2d","productId":"4cdb2224-8926-4b4d-a99f-1c9dfbbb4699","reference":"BCA-944787","description":"vitae consectetuer eget rutrum at lorem integer tincidunt ante vel","typeGroup":"Payment","type":"SEPA DD","category":"Grocery","bookingDate":"2017-10-10","valueDate":"2017-08-06","amount":65621.03,"currency":"BRL","creditDebitIndicator":"DBIT","instructedAmount":283812.17,"instructedCurrency":"COP","currencyExchangeRate":1.53,"counterPartyName":"Dennis Ray","counterPartyAccountNumber":"GB50 PHUI 6665 2295 7729 90"},
  ] };
  const uri = `/v2/transactions`;
  const productSummaryData = {
    headers: {},
    data: {
      'currentAccounts': {
        'name': 'Current Account',
        'products': [
          {
            'id': '1cdb2224-8926-4b4d-a99f-1c9dfbbb4699',
          },
          {
            'id': '1cdb2224-8926-4b4d-a99f-1c9dfbbb4699',
          }
        ],
        'aggregatedBalance': {
          'value': '13722.22',
          'currency': 'USD'
        }
      },
      'savingsAccounts': {
        'name': 'Savings Account',
        'products': [
          {
            'id': '4cdb2224-8926-4b4d-a99f-1c9dfbbb4699',
          }
        ],
        'aggregatedBalance': {
          'value': '13345.67',
          'currency': 'PLN'
        }
      }
    },
  };
  const transactionsStub = {
    getTransactions: () => Promise.resolve(transactionsData),
    getTransactionsUri: (path, params) => `${uri}/${path}`
  };
  const productSummaryStub = {
    getProductsummary: () => Promise.resolve(productSummaryData)
  };
  const paymentOrdersStub = {
    getCurrencies: () => Promise.resolve([{ name: 'USD' }, { name: 'EUR' }]),
  };

  const bbStorage = {
    getItem: (key) => {
      let result;
      switch (key) {
        case BbStorageKeys.PRODUCT_SELECTED:
          result = '4cdb2224-8926-4b4d-a99f-1c9dfbbb4699';
          break;

        default:
          result = null;
      }

      return Promise.resolve(result);
    },
    setItem: () => Promise.resolve(),
  };

  describe('load()', function() {
    it('loads transactions', function(done) {
      let model = Model(transactionsStub, productSummaryStub, paymentOrdersStub, widget, bbStorage);

      model.load()
        .then(function(data) {
          expect(data.data).toEqual(transactionsData.data);
        })
        .then(done)
        .catch(done.fail);
    });
  });

  describe('getSelectedProduct()', function() {
    it('returns selected product', function(done) {
      let model = Model(transactionsStub, productSummaryStub, paymentOrdersStub, widget, bbStorage);

      model.getSelectedProduct()
        .then(function(data) {
          expect(data).toEqual({ kind: 'savingsAccounts', id: '4cdb2224-8926-4b4d-a99f-1c9dfbbb4699' });
        })
        .then(done)
        .catch(done.fail);
    });

    it('returns first product if does not have selected product', function(done) {
      const newBbStorage = {
        getItem: () => Promise.resolve(),
        setItem: () => Promise.resolve(),
      };
      let model = Model(transactionsStub, productSummaryStub, paymentOrdersStub, widget, newBbStorage);

      model.getSelectedProduct()
        .then(function(data) {
          expect(data).toEqual({
            kind: 'currentAccounts',
            id: '1cdb2224-8926-4b4d-a99f-1c9dfbbb4699',
          });
        })
        .then(done)
        .catch(done.fail);
    });
  });

  describe('getCurrentTransaction()', () => {
    it('should get the current transaction from preference', (done) => {
      const transaction = {
        'transactionId': '0001',
        'amount': 40.3,
        'type': 'debit'
      };

      let model = Model(transactionsStub, productSummaryStub, paymentOrdersStub, widget, bbStorage);

      bbStorage.getItem = jasmine.createSpy('getItem').and.returnValue(Promise.resolve(transaction));

      model.getCurrentTransaction()
        .then((currentTransaction) => {
          expect(currentTransaction).toEqual(transaction);
          done();
        });
    });
  });

  describe('storeContactAsCurrent()', () => {
    it('should store the transation in widget preference', () => {
      const transaction = {
        transactionId: '0001',
        amount: 40.3,
        type: 'debit',
      };

      let model = Model(transactionsStub, productSummaryStub, paymentOrdersStub, widget, bbStorage);

      bbStorage.setItem = jasmine.createSpy('setItem');

      model.storeTransactionAsCurrent(transaction);

      expect(bbStorage.setItem).toHaveBeenCalledWith('bb.transaction.selected', transaction);
    });
  });

  describe('getExportFileResource()', () => {
    it('should return a constructed resource uri', () => {
      const params = {
        bookingDateGreaterThan: '2016-04-03',
        bookingDateLessThan: '2016-05-12',
        productId: 'cdb2224-8926-4b4d-a99f-1c9dfbbb4699',
        exportFormat: 'csv'
      };

      let model = Model(transactionsStub, productSummaryStub, paymentOrdersStub, widget, bbStorage);

      expect(model.getExportFileResource(params)).toEqual('/v2/transactions/export?bookingDateGreaterThan=2016-04-03&bookingDateLessThan=2016-05-12&productId=cdb2224-8926-4b4d-a99f-1c9dfbbb4699&exportFormat=csv');
    });
  });
});
