import { E_UNEXPECTED } from 'lib-bb-model-errors';

import Model from './payment-orders';

const debitAccountsResponse = {
  data: [
    { id: "CurrentAccount1" },
    { id: "CurrentAccount2" },
    { id: "CurrentAccount3" },
  ],
  headers: {},
};

const accountsResponse = {
  data: {
    aggregatedBalance: {
      value: "126692.78",
      currency: "EUR"
    },
    currentAccounts: {
      name: "Current Account",
      products: [
        { id: "CurrentAccount1" },
        { id: "CurrentAccount2" },
      ],
    },
    savingsAccounts: {
      name: "Savings Account",
      products: [{ id: "SavingsAccount1" }],
    }
  },
  headers: {},
};

const paymentOrdersResponse = [
  {
    id: "7d34169c-6714-11e7-907b-a6006ad3dba0",
    status: "ENTERED",
    debtor: {
      name: "Credit Account",
    },
    requestedExecutionDate: "2017-08-16T09:31:10Z",
  },
  {
    id: "7d341a2a-6714-11e7-907b-a6006ad3dba0",
    status: "PROCESSED",
    bankStatus: "FINISHED",
    debtor: {
      name: "Random Account",
    },
    requestedExecutionDate: "2017-08-11T09:30:10Z",
  }
];

const contactsResponse = {
  data: [
    { id: "Contact1", accounts: [{ IBAN: '1' }] },
    { id: "Contact2", accounts: [{ IBAN: '1' }] },
  ],
  headers: {},
};

let paymentOrders;
let productSummary;
let contacts;
let model;

const bbChallenge = {
  create: (method, options) => method,
};

const getModel = () => {
  paymentOrders = jasmine.createSpyObj(['postPaymentOrdersRecord', 'getPaymentOrdersCurrencies', 'getPaymentOrdersRate',
    'getPaymentOrders']);
  productSummary = jasmine.createSpyObj(['getProductsummaryContextArrangements', 'getProductsummaryCreditaccounts']);
  contacts = jasmine.createSpyObj(['getContacts', 'postContactsRecord']);

  return Model(paymentOrders, productSummary, contacts, bbChallenge);
};

describe('model-bb-payment-orders-ng::model', () => {
  beforeEach(() => {
    model = getModel();
  });

  describe('createPaymentOrder()', () => {
    it('should send new payment order for creation', (done) => {
      paymentOrders.postPaymentOrdersRecord.and.returnValue(Promise.resolve());

      model.createPaymentOrder({ a: 'b' })
        .then(() => {
          expect(paymentOrders.postPaymentOrdersRecord).toHaveBeenCalledWith({ a: 'b' });
        })
        .then(done)
        .catch(done.fail);
    });

    it('should correctly handles errors', (done) => {
      paymentOrders.postPaymentOrdersRecord.and.returnValue(Promise.reject({ status: 404 }));

      model.createPaymentOrder({ a: 'b' })
        .then(done.fail)
        .catch(error => {
          expect(paymentOrders.postPaymentOrdersRecord).toHaveBeenCalledWith({ a: 'b' });
          expect(error).toBeObject();
          expect(error.code).toEqual(E_UNEXPECTED);
        })
        .then(done);
    });

    it('should correctly move forward limits breach report', (done) => {
      paymentOrders.postPaymentOrdersRecord.and.returnValue(Promise.reject({ status: 403, data: { breachReport: {}} }));

      model.createPaymentOrder({ a: 'b' })
        .then(done.fail)
        .catch(error => {
          expect(paymentOrders.postPaymentOrdersRecord).toHaveBeenCalledWith({ a: 'b' });
          expect(error).toBeObject();
          expect(error.code).toEqual(E_UNEXPECTED);
          expect(error.breachReport).toBeObject();
        })
        .then(done);
    });
  });

  describe('getCurrencies()', () => {
    it('should return an array of available currencies', (done) => {
      const data = [
        { code: 1 },
        { code: 2 },
        { code: 3 },
      ];
      paymentOrders.getPaymentOrdersCurrencies.and.returnValue(Promise.resolve({ data }));

      model.getCurrencies()
        .then(result => {
          expect(paymentOrders.getPaymentOrdersCurrencies).toHaveBeenCalled();
          expect(result).toEqual([
            { name: 1 },
            { name: 2 },
            { name: 3 },
          ]);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should correctly handles errors', (done) => {
      paymentOrders.getPaymentOrdersCurrencies.and.returnValue(Promise.reject({ status: 404 }));

      model.getCurrencies()
        .then(done.fail)
        .catch(error => {
          expect(paymentOrders.getPaymentOrdersCurrencies).toHaveBeenCalled();
          expect(error).toBeObject();
          expect(error.code).toEqual(E_UNEXPECTED);
        })
        .then(done);
    });
  });

  describe('getAccountsFrom()', () => {
    it('should return array of debit accounts', (done) => {
      productSummary.getProductsummaryContextArrangements.and.returnValue(Promise.resolve(debitAccountsResponse));

      model.getAccountsFrom()
        .then(accounts => {
          expect(productSummary.getProductsummaryContextArrangements).toHaveBeenCalled();
          expect(accounts).toBeArrayOfObjects();
          expect(accounts.length).toEqual(3);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should correctly handles errors', (done) => {
      productSummary.getProductsummaryContextArrangements.and.returnValue(Promise.reject({ status: 404 }));

      model.getAccountsFrom()
        .then(done.fail)
        .catch(error => {
          expect(productSummary.getProductsummaryContextArrangements).toHaveBeenCalled();
          expect(error).toBeObject();
          expect(error.code).toEqual(E_UNEXPECTED);
        })
        .then(done);
    });
  });

  describe('getAccountsTo()', () => {
    it('should return array of credit accounts', (done) => {
      productSummary.getProductsummaryCreditaccounts.and.returnValue(Promise.resolve(accountsResponse));

      model.getAccountsTo('123')
        .then(accounts => {
          expect(productSummary.getProductsummaryCreditaccounts).toHaveBeenCalledWith({ debitAccountId: '123' });
          expect(accounts).toBeArrayOfObjects();
          expect(accounts.length).toEqual(3);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should filter out debit account from resulting array', (done) => {
      productSummary.getProductsummaryCreditaccounts.and.returnValue(Promise.resolve(accountsResponse));

      model.getAccountsTo('CurrentAccount2')
        .then(accounts => {
          expect(productSummary.getProductsummaryCreditaccounts).toHaveBeenCalledWith({ debitAccountId: 'CurrentAccount2' });
          expect(accounts).toBeArrayOfObjects();
          expect(accounts.length).toEqual(2);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should correctly handles errors', (done) => {
      productSummary.getProductsummaryCreditaccounts.and.returnValue(Promise.reject({ status: 404 }));

      model.getAccountsTo('123')
        .then(done.fail)
        .catch(error => {
          expect(productSummary.getProductsummaryCreditaccounts).toHaveBeenCalledWith({ debitAccountId: '123' });
          expect(error).toBeObject();
          expect(error.code).toEqual(E_UNEXPECTED);
        })
        .then(done);
    });
  });

  describe('getExternals()', () => {
    it('should return an array of available currencies', (done) => {
      contacts.getContacts.and.returnValue(Promise.resolve(contactsResponse));

      model.getExternals()
        .then(result => {
          expect(contacts.getContacts).toHaveBeenCalled();
          expect(result).toBeArrayOfObjects();
          expect(result.length).toEqual(2);
          expect(result[1].accounts[0].IBAN).toEqual('1');
        })
        .then(done)
        .catch(done.fail);
    });

    it('should correctly handles errors', (done) => {
      contacts.getContacts.and.returnValue(Promise.reject({ status: 404 }));

      model.getExternals()
        .then(done.fail)
        .catch(error => {
          expect(contacts.getContacts).toHaveBeenCalled();
          expect(error).toBeObject();
          expect(error.code).toEqual(E_UNEXPECTED);
        })
        .then(done);
    });
  });

  describe('getRate()', () => {
    it('should return an array of available currencies', (done) => {
      paymentOrders.getPaymentOrdersRate.and.returnValue(Promise.resolve({ data: { rate: '112' } }));

      model.getRate()
        .then(result => {
          expect(paymentOrders.getPaymentOrdersRate).toHaveBeenCalled();
          expect(result).toEqual('112');
        })
        .then(done)
        .catch(done.fail);
    });

    it('should correctly handles errors', (done) => {
      paymentOrders.getPaymentOrdersRate.and.returnValue(Promise.reject({ status: 404 }));

      model.getRate()
        .then(done.fail)
        .catch(error => {
          expect(paymentOrders.getPaymentOrdersRate).toHaveBeenCalled();
          expect(error).toBeObject();
          expect(error.code).toEqual(E_UNEXPECTED);
        })
        .then(done);
    });
  });

  describe('createContact()', () => {
    it('should send new contact for creation', (done) => {
      contacts.postContactsRecord.and.returnValue(Promise.resolve());

      model.createContact({ a: 'b' })
        .then(() => {
          expect(contacts.postContactsRecord).toHaveBeenCalledWith({ a: 'b' });
        })
        .then(done)
        .catch(done.fail);
    });

    it('should correctly handles errors', (done) => {
      contacts.postContactsRecord.and.returnValue(Promise.reject({ status: 404 }));

      model.createContact({ a: 'b' })
        .then(done.fail)
        .catch(error => {
          expect(contacts.postContactsRecord).toHaveBeenCalledWith({ a: 'b' });
          expect(error).toBeObject();
          expect(error.code).toEqual(E_UNEXPECTED);
        })
        .then(done);
    });
  });

  describe('getPaymentOrders()', () => {
    it('should return payments using data module', done => {
      paymentOrders.getPaymentOrders.and.returnValue(Promise.resolve({
        headers: attrib => 0,
        data: paymentOrdersResponse
      }));

      model.getPaymentOrders()
        .then(result => {
          expect(paymentOrders.getPaymentOrders).toHaveBeenCalled();
          expect(result.data).toEqual(paymentOrdersResponse);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should correctly handles errors', done => {
      paymentOrders.getPaymentOrders.and.returnValue(Promise.reject({ status: 404 }));

      model.getPaymentOrders()
        .then(done.fail)
        .catch(error => {
          expect(paymentOrders.getPaymentOrders).toHaveBeenCalled();
          expect(error).toBeObject();
          expect(error.code).toEqual(E_UNEXPECTED);
        })
        .then(done);
    });
  })
});
